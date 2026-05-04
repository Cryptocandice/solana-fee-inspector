$ErrorActionPreference = "Stop"
[System.Net.ServicePointManager]::SecurityProtocol = [System.Net.SecurityProtocolType]::Tls12 -bor 12288

$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = if ($env:PORT) { [int]$env:PORT } else { 5173 }
$logPath = Join-Path $root "local-server.log"
"$(Get-Date -Format o) starting server in $root" | Add-Content -Encoding utf8 $logPath
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Parse("127.0.0.1"), $port)
$listener.Start()
"$(Get-Date -Format o) listening on http://127.0.0.1:$port/" | Add-Content -Encoding utf8 $logPath

$types = @{
  ".html" = "text/html; charset=utf-8"
  ".css" = "text/css; charset=utf-8"
  ".js" = "text/javascript; charset=utf-8"
}

function Send-Response($stream, $status, $contentType, [byte[]] $body) {
  $reason = if ($status -eq 200) { "OK" } elseif ($status -eq 400) { "Bad Request" } elseif ($status -eq 403) { "Forbidden" } elseif ($status -eq 404) { "Not Found" } elseif ($status -eq 405) { "Method Not Allowed" } elseif ($status -eq 502) { "Bad Gateway" } else { "Internal Server Error" }
  $header = "HTTP/1.1 $status $reason`r`nContent-Type: $contentType`r`nContent-Length: $($body.Length)`r`nCache-Control: no-store`r`nConnection: close`r`n`r`n"
  $headerBytes = [System.Text.Encoding]::ASCII.GetBytes($header)
  $stream.Write($headerBytes, 0, $headerBytes.Length)
  $stream.Write($body, 0, $body.Length)
}

function Read-Request($stream) {
  $buffer = New-Object byte[] 8192
  $count = $stream.Read($buffer, 0, $buffer.Length)
  if ($count -le 0) {
    return @{ Text = ""; Body = "" }
  }

  $memory = [System.IO.MemoryStream]::new()
  $memory.Write($buffer, 0, $count)
  $requestBytes = $memory.ToArray()
  $requestText = [System.Text.Encoding]::ASCII.GetString($requestBytes)
  $headerEnd = $requestText.IndexOf("`r`n`r`n")

  if ($headerEnd -lt 0) {
    return @{ Text = $requestText; Body = "" }
  }

  $headerText = $requestText.Substring(0, $headerEnd)
  $bodyOffset = $headerEnd + 4
  $contentLength = 0

  foreach ($line in ($headerText -split "`r?`n")) {
    if ($line -match "^Content-Length:\s*(\d+)") {
      $contentLength = [int]$Matches[1]
    }
  }

  while (($requestBytes.Length - $bodyOffset) -lt $contentLength) {
    $more = New-Object byte[] 8192
    $read = $stream.Read($more, 0, $more.Length)
    if ($read -le 0) {
      break
    }
    $memory.Write($more, 0, $read)
    $requestBytes = $memory.ToArray()
  }

  $bodyBytes = if ($contentLength -gt 0) {
    $requestBytes[$bodyOffset..($bodyOffset + $contentLength - 1)]
  } else {
    New-Object byte[] 0
  }

  return @{
    Text = [System.Text.Encoding]::ASCII.GetString($requestBytes, 0, [Math]::Min($bodyOffset, $requestBytes.Length))
    Body = [System.Text.Encoding]::UTF8.GetString($bodyBytes)
  }
}

function Send-Rpc-Proxy($stream, $method, $target, $body) {
  if ($method -ne "POST") {
    Send-Response $stream 405 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Method not allowed"))
    return
  }

  $query = ""
  if ($target.Contains("?")) {
    $query = $target.Substring($target.IndexOf("?") + 1)
  }

  $endpoint = ""
  foreach ($pair in ($query -split "&")) {
    $kv = $pair -split "=", 2
    if ($kv.Length -eq 2 -and $kv[0] -eq "endpoint") {
      $endpoint = [System.Uri]::UnescapeDataString($kv[1])
    }
  }

  if ($endpoint -notmatch "^https?://") {
    Send-Response $stream 400 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Invalid RPC endpoint"))
    return
  }

  try {
    $response = Invoke-WebRequest -UseBasicParsing -Method Post -Uri $endpoint -Body $body -ContentType "application/json" -Headers @{ "User-Agent" = "solana-fee-inspector-local" }
    Send-Response $stream ([int]$response.StatusCode) "application/json; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes($response.Content))
  } catch {
    $message = $_.Exception.Message
    if ($_.Exception.Response) {
      try {
        $status = [int]$_.Exception.Response.StatusCode
        $reader = [System.IO.StreamReader]::new($_.Exception.Response.GetResponseStream())
        $message = $reader.ReadToEnd()
        Send-Response $stream $status "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes($message))
        return
      } catch {}
    }
    Send-Response $stream 502 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes($message))
  }
}

function Send-Price($stream) {
  $sources = @(
    @{
      Name = "Binance SOLUSDT"
      Url = "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT"
      Type = "binance"
    },
    @{
      Name = "Binance.US SOLUSDT"
      Url = "https://api.binance.us/api/v3/ticker/price?symbol=SOLUSDT"
      Type = "binance"
    },
    @{
      Name = "CoinGecko SOL/USD"
      Url = "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd"
      Type = "coingecko"
    }
  )

  foreach ($source in $sources) {
    try {
      $response = Invoke-WebRequest -UseBasicParsing -Method Get -Uri $source.Url -Headers @{ "User-Agent" = "solana-fee-inspector-local" }
      $payload = $response.Content | ConvertFrom-Json
      $price = if ($source.Type -eq "coingecko") {
        [double]$payload.solana.usd
      } else {
        [double]$payload.price
      }

      if ($price -gt 0) {
        $json = @{
          price = $price
          source = $source.Name
          updatedAt = (Get-Date).ToUniversalTime().ToString("o")
        } | ConvertTo-Json -Compress
        Send-Response $stream 200 "application/json; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes($json))
        return
      }
    } catch {}
  }

  Send-Response $stream 502 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Price source unavailable"))
}

while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $parsedRequest = Read-Request $stream
    $request = $parsedRequest.Text
    $firstLine = ($request -split "`r?`n")[0]
    $parts = $firstLine -split " "
    $method = if ($parts.Length -gt 0) { $parts[0] } else { "GET" }
    $target = if ($parts.Length -gt 1) { $parts[1] } else { "/" }
    $pathname = $target.Split("?")[0]
    $pathname = [System.Uri]::UnescapeDataString($pathname)

    if ($pathname -eq "/") {
      $pathname = "/index.html"
    }

    if ($pathname -eq "/rpc") {
      Send-Rpc-Proxy $stream $method $target $parsedRequest.Body
    } elseif ($pathname -eq "/price") {
      Send-Price $stream
    } else {
      $relative = $pathname.TrimStart("/").Replace("/", [System.IO.Path]::DirectorySeparatorChar)
      $file = [System.IO.Path]::GetFullPath([System.IO.Path]::Combine($root, $relative))

      if (-not $file.StartsWith($root)) {
      Send-Response $stream 403 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Forbidden"))
      } elseif (-not [System.IO.File]::Exists($file)) {
      Send-Response $stream 404 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Not found"))
      } else {
      $extension = [System.IO.Path]::GetExtension($file)
      $contentType = if ($types.ContainsKey($extension)) { $types[$extension] } else { "application/octet-stream" }
      Send-Response $stream 200 $contentType ([System.IO.File]::ReadAllBytes($file))
      }
    }
  } catch {
    if ($stream) {
      Send-Response $stream 500 "text/plain; charset=utf-8" ([System.Text.Encoding]::UTF8.GetBytes("Server error"))
    }
  } finally {
    $client.Close()
  }
}
