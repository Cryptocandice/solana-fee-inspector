import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || (process.env.RENDER ? "0.0.0.0" : "127.0.0.1");
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
};

const server = http.createServer((request, response) => {
  const url = new URL(request.url || "/", `http://${host}:${port}`);

  if (url.pathname === "/rpc") {
    proxyRpc(request, response, url);
    return;
  }

  if (url.pathname === "/price") {
    fetchSolUsdtPrice(response);
    return;
  }

  const pathname = url.pathname === "/" ? "/index.html" : url.pathname;
  const filePath = path.normalize(path.join(root, pathname));

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, content) => {
    if (error) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": types[path.extname(filePath)] || "application/octet-stream",
      "Cache-Control": "no-store",
    });
    response.end(content);
  });
});

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

async function proxyRpc(request, response, url) {
  if (request.method !== "POST") {
    response.writeHead(405, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Method not allowed");
    return;
  }

  const endpoint = url.searchParams.get("endpoint") || "";
  if (!/^https?:\/\//i.test(endpoint)) {
    response.writeHead(400, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Invalid RPC endpoint");
    return;
  }

  try {
    const body = await readBody(request);
    const upstream = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "solana-fee-inspector-local",
      },
      body,
    });
    const text = await upstream.text();
    response.writeHead(upstream.status, {
      "Content-Type": upstream.headers.get("content-type") || "application/json; charset=utf-8",
    });
    response.end(text);
  } catch (error) {
    response.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error.message || "RPC proxy failed");
  }
}

async function fetchSolUsdtPrice(response) {
  const sources = [
    {
      name: "Binance SOLUSDT",
      url: "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT",
      parse: (payload) => Number(payload.price),
    },
    {
      name: "Binance.US SOLUSDT",
      url: "https://api.binance.us/api/v3/ticker/price?symbol=SOLUSDT",
      parse: (payload) => Number(payload.price),
    },
    {
      name: "CoinGecko SOL/USD",
      url: "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
      parse: (payload) => Number(payload.solana?.usd),
    },
  ];

  for (const source of sources) {
    try {
      const upstream = await fetch(source.url, {
        headers: { "User-Agent": "solana-fee-inspector-local" },
      });
      if (!upstream.ok) continue;
      const payload = await upstream.json();
      const price = source.parse(payload);
      if (!Number.isFinite(price) || price <= 0) continue;
      response.writeHead(200, {
        "Content-Type": "application/json; charset=utf-8",
        "Cache-Control": "no-store",
      });
      response.end(JSON.stringify({ price, source: source.name, updatedAt: new Date().toISOString() }));
      return;
    } catch {}
  }

  response.writeHead(502, { "Content-Type": "text/plain; charset=utf-8" });
  response.end("Price source unavailable");
}

server.listen(port, host);
