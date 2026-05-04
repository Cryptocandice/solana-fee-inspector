const LAMPORTS_PER_SOL = 1_000_000_000;
const LAMPORTS_PER_SIGNATURE = 5_000;
const MICRO_LAMPORTS_PER_LAMPORT = 1_000_000n;
const MAX_COMPUTE_UNITS = 1_400_000;
const DEFAULT_NON_BUILTIN_CU = 200_000;
const DEFAULT_BUILTIN_CU = 3_000;
const COMPUTE_BUDGET_PROGRAM = "ComputeBudget111111111111111111111111111111";
const ED25519_PROGRAM = "Ed25519SigVerify111111111111111111111111111";
const SECP256K1_PROGRAM = "KeccakSecp256k11111111111111111111111111111";
const SECP256R1_PROGRAM = "Secp256r1SigVerify1111111111111111111111111";
const JUPITER_SWAP_PROGRAM = "JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4";
const JUPITER_REFERRAL_PROGRAM = "REFER4ZgmyYx9c6He5XfaTMiGfdLwRnkV4RPp9t9iF3";
const FLASHX_PROGRAM = "FLASHX8DrLbgeR8FcfNV1F5krxYcYMUdBkrP1EPBtxB9";
const AXIOM_FRONT_SIGNAL = "axiom-front-signal";
const PUMP_FUN_PROGRAM = "6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P";
const PUMP_AMM_PROGRAM = "pAMMBay6oceH9fJKBRHGP5D4bD4sWpmSwMn52FMfXEA";
const PUMP_FEES_PROGRAM = "pfeeUxB6jkeY1Hxd7CsFCAjcbHA9rWtchMGdZ6VojVZ";
const RAYDIUM_CPMM_PROGRAM = "CPMMoo8L3F4NbTegBCKVNunggL7H1ZpdTHKxQB5qKP1C";
const RAYDIUM_AMM_V4_PROGRAM = "675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8";
const RAYDIUM_CLMM_PROGRAM = "CAMMCzo5YL8w4VFF8KVHrK22GGUsp5VTaW7grrKgrWqK";
const RAYDIUM_STABLE_PROGRAM = "5quBtoiQqxF9Jv6KYKctB59NT3gtJD2Y65kdnB1Uev3h";
const RAYDIUM_ROUTE_PROGRAM = "routeUGWgWzqBWFcrCfv8tritsqukccJPu3q5GPP3xS";
const ORCA_WHIRLPOOL_PROGRAM = "whirLbMiicVdio4qvUfM5KAg6Ct1T6rJuis7zrn1Th";
const METEORA_DLMM_PROGRAM = "LBUZKhRxPF3XUpBCjp4YzTKgLccjZhTSDM9YuVaPwxo";
const METEORA_DAMM_V2_PROGRAM = "cpamdpZCGKUy5JxQXB4dcpGPiikHawvSWAd6mEn1sGG";
const METEORA_DAMM_V1_PROGRAM = "Eo7WjKq67rjJQSZxS6z3YkapzY3eMj6Xy8X5EQVn5UaB";
const METEORA_DBC_PROGRAM = "dbcij3LWUppWqq96dh6gJWwBifmcGfLSB5D4DuSMaqN";
const PHOENIX_PROGRAM = "PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY";
const OPENBOOK_V2_PROGRAM = "opnb2LAfJYbRMAHHvqjCwQxanZn7ReEHp1k81EohpZb";
const OPENBOOK_V1_PROGRAM = "srmqPvymJeFKQ4z9gQYNsCbNXXrJ2Z1Tb6fwdxKNtP";
const SERUM_V3_PROGRAM = "9xQeWvG816bUx9EPjHmaT23yvVM2ZWuuRMuR7dzM9MX";
const WSOL_MINT = "So11111111111111111111111111111111111111112";
const USDC_MINT = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const USDT_MINT = "Es9vMFrzaCERmJfrF4H2FYD4KCoNkYQ1VEUdsGcD9jk";
const BASE58_ALPHABET = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";

const BUILTIN_PROGRAMS = new Set([
  "11111111111111111111111111111111",
  "Config1111111111111111111111111111111111111",
  "Stake11111111111111111111111111111111111111",
  "Vote111111111111111111111111111111111111111",
  "AddressLookupTab1e1111111111111111111111111",
  "BPFLoader1111111111111111111111111111111111",
  "BPFLoader2111111111111111111111111111111111",
  "BPFLoaderUpgradeab1e11111111111111111111111",
  ED25519_PROGRAM,
  SECP256K1_PROGRAM,
  SECP256R1_PROGRAM,
]);

const PRECOMPILE_PROGRAMS = new Set([ED25519_PROGRAM, SECP256K1_PROGRAM, SECP256R1_PROGRAM]);

const PROGRAM_LABELS = {
  "11111111111111111111111111111111": "System Program",
  [COMPUTE_BUDGET_PROGRAM]: "Compute Budget",
  [ED25519_PROGRAM]: "Ed25519 Verify",
  [SECP256K1_PROGRAM]: "Secp256k1 Verify",
  [SECP256R1_PROGRAM]: "Secp256r1 Verify",
  TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA: "Token Program",
  TokenzQdBNbLqP5VEhdkAS6EPF5EEYc5q9uBMb8B: "Token 2022",
  ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL: "Associated Token Program",
  "AddressLookupTab1e1111111111111111111111111": "Address Lookup Table",
  [JUPITER_SWAP_PROGRAM]: "Jupiter Swap",
  [JUPITER_REFERRAL_PROGRAM]: "Jupiter Referral",
  [FLASHX_PROGRAM]: "Axiom Trade / FLASHX",
  [AXIOM_FRONT_SIGNAL]: "Axiom / Jito front signal",
  [PUMP_FUN_PROGRAM]: "Pump.fun Bonding Curve",
  [PUMP_AMM_PROGRAM]: "PumpSwap AMM",
  [PUMP_FEES_PROGRAM]: "Pump.fun Fees",
  [RAYDIUM_CPMM_PROGRAM]: "Raydium CPMM",
  [RAYDIUM_AMM_V4_PROGRAM]: "Raydium AMM v4",
  [RAYDIUM_CLMM_PROGRAM]: "Raydium CLMM",
  [RAYDIUM_STABLE_PROGRAM]: "Raydium Stable",
  [RAYDIUM_ROUTE_PROGRAM]: "Raydium Router",
  [ORCA_WHIRLPOOL_PROGRAM]: "Orca Whirlpool",
  [METEORA_DLMM_PROGRAM]: "Meteora DLMM",
  [METEORA_DAMM_V2_PROGRAM]: "Meteora DAMM v2",
  [METEORA_DAMM_V1_PROGRAM]: "Meteora DAMM v1",
  [METEORA_DBC_PROGRAM]: "Meteora DBC",
  [PHOENIX_PROGRAM]: "Phoenix CLOB",
  [OPENBOOK_V2_PROGRAM]: "OpenBook v2",
  [OPENBOOK_V1_PROGRAM]: "OpenBook v1",
  [SERUM_V3_PROGRAM]: "Serum v3",
};

const KNOWN_FEE_PROGRAMS = new Map([
  [JUPITER_SWAP_PROGRAM, "Jupiter Swap"],
  [JUPITER_REFERRAL_PROGRAM, "Jupiter Referral / integrator fee"],
  [FLASHX_PROGRAM, "Axiom Trade / FLASHX"],
  [AXIOM_FRONT_SIGNAL, "Axiom / Jito front signal"],
  [PUMP_FUN_PROGRAM, "Pump.fun Bonding Curve"],
  [PUMP_AMM_PROGRAM, "PumpSwap AMM"],
  [PUMP_FEES_PROGRAM, "Pump.fun Fees"],
]);

const FEE_RULES = [
  {
    id: "pumpfun",
    name: "Pump.fun Bonding Curve",
    category: "protocol",
    programIds: [PUMP_FUN_PROGRAM],
    feeNote: "官方 bonding curve 总费用 1.25%：Creator 0.300% + Protocol 0.95% + LP 0%",
    estimateRate: 0.0125,
  },
  {
    id: "pumpswap",
    name: "PumpSwap AMM",
    category: "protocol",
    programIds: [PUMP_AMM_PROGRAM],
    feeNote: "PumpSwap canonical pool 费率按 SOL 市值档位变化，池子费通常内嵌在成交价格中",
  },
  {
    id: "pumpfees",
    name: "Pump.fun Fees Program",
    category: "protocol",
    programIds: [PUMP_FEES_PROGRAM],
    feeNote: "Pump.fun 独立费用程序命中，优先查看显式 SOL/SPL 转账候选",
  },
  {
    id: "jupiter",
    name: "Jupiter Router",
    category: "router",
    programIds: [JUPITER_SWAP_PROGRAM, JUPITER_REFERRAL_PROGRAM],
    feeNote: "Jupiter/Referral/Integrator 费用通常体现为 referral 账户或小额 SPL 转账",
  },
  {
    id: "gmgn",
    name: "GMGN / 交易工具",
    category: "router",
    logPatterns: [/gmgn/i],
    feeNote: "GMGN 作为交易工具/路由入口处理，费用归入 Router / 交易工具相关费用",
  },
  {
    id: "axiom",
    name: "Axiom / FLASHX",
    category: "router",
    programIds: [FLASHX_PROGRAM, AXIOM_FRONT_SIGNAL],
    logPatterns: [/axiom/i, /flashx/i, /jitodontfront/i],
    feeNote: "Axiom/FLASHX/Jito front 命中时，用户额外 SOL system transfer 归入 Router / 交易工具费用候选",
  },
  {
    id: "raydium",
    name: "Raydium",
    category: "protocol",
    programIds: [RAYDIUM_CPMM_PROGRAM, RAYDIUM_AMM_V4_PROGRAM, RAYDIUM_CLMM_PROGRAM, RAYDIUM_STABLE_PROGRAM],
    feeNote: "Raydium 池子费通常内嵌在 swap 成交价格和池子余额变化中，需池费率配置才能精算",
  },
  {
    id: "raydium-route",
    name: "Raydium Router",
    category: "router",
    programIds: [RAYDIUM_ROUTE_PROGRAM],
    feeNote: "Raydium Router 命中，实际池子费仍看底层 Raydium/其他协议程序",
  },
  {
    id: "orca",
    name: "Orca Whirlpool",
    category: "protocol",
    programIds: [ORCA_WHIRLPOOL_PROGRAM],
    feeNote: "Orca Whirlpool 费用按池子 fee tier 计算，通常内嵌在成交价格中",
  },
  {
    id: "meteora",
    name: "Meteora",
    category: "protocol",
    programIds: [METEORA_DLMM_PROGRAM, METEORA_DAMM_V1_PROGRAM, METEORA_DAMM_V2_PROGRAM, METEORA_DBC_PROGRAM],
    feeNote: "Meteora DLMM/DAMM/DBC 费用可能动态变化，通常内嵌在池子成交中",
  },
  {
    id: "orderbook",
    name: "Phoenix / OpenBook / Serum",
    category: "protocol",
    programIds: [PHOENIX_PROGRAM, OPENBOOK_V2_PROGRAM, OPENBOOK_V1_PROGRAM, SERUM_V3_PROGRAM],
    feeNote: "订单簿 taker/maker 费用通常体现在成交结算账户变化中",
  },
];

const MINT_LABELS = {
  [WSOL_MINT]: "WSOL",
  [USDC_MINT]: "USDC",
  [USDT_MINT]: "USDT",
};

const USDT_VALUED_MINTS = new Set([USDC_MINT, USDT_MINT]);

const form = document.querySelector("#txForm");
const signatureInput = document.querySelector("#signatureInput");
const clusterSelect = document.querySelector("#clusterSelect");
const customRpcWrap = document.querySelector("#customRpcWrap");
const customRpcInput = document.querySelector("#customRpcInput");
const analyzeButton = document.querySelector("#analyzeButton");
const notice = document.querySelector("#notice");
const result = document.querySelector("#result");
let solUsdtPrice = null;
let solUsdtSource = "";
let solUsdtUpdatedAt = null;

clusterSelect.addEventListener("change", () => {
  customRpcWrap.classList.toggle("hidden", clusterSelect.value !== "custom");
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  await analyzeTransaction();
});

async function analyzeTransaction() {
  const signature = signatureInput.value.trim();
  const rpcUrl = getRpcUrl();

  if (!/^[1-9A-HJ-NP-Za-km-z]{64,88}$/.test(signature)) {
    showError("交易签名格式看起来不对，请填入 base58 格式的 Solana tx signature。");
    return;
  }

  if (!rpcUrl) {
    showError("请填写可访问的 RPC URL。");
    return;
  }

  setLoading(true);
  hideError();

  try {
    const [tx, parsedTx, priceInfo] = await Promise.all([
      fetchTransaction(rpcUrl, signature),
      fetchParsedTransaction(rpcUrl, signature).catch(() => null),
      fetchSolUsdtPrice().catch(() => null),
    ]);

    if (priceInfo?.price) {
      solUsdtPrice = priceInfo.price;
      solUsdtSource = priceInfo.source || "实时价格源";
      solUsdtUpdatedAt = priceInfo.updatedAt || new Date().toISOString();
    }

    if (!tx) {
      showError("这个 RPC 没有找到该交易。可以换 Mainnet/Devnet 或使用更完整的归档 RPC。");
      result.classList.add("hidden");
      return;
    }

    renderAnalysis(analyze(tx, parsedTx));
    result.classList.remove("hidden");
  } catch (error) {
    showError(error.message || "分析失败，请稍后重试。");
    result.classList.add("hidden");
  } finally {
    setLoading(false);
  }
}

function getRpcUrl() {
  if (clusterSelect.value === "custom") {
    return customRpcInput.value.trim();
  }
  return clusterSelect.value;
}

async function fetchTransaction(rpcUrl, signature) {
  return fetchTransactionWithEncoding(rpcUrl, signature, "json");
}

async function fetchParsedTransaction(rpcUrl, signature) {
  return fetchTransactionWithEncoding(rpcUrl, signature, "jsonParsed");
}

async function fetchTransactionWithEncoding(rpcUrl, signature, encoding) {
  const endpoint = `${window.location.origin}/rpc?endpoint=${encodeURIComponent(rpcUrl)}`;
  const response = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jsonrpc: "2.0",
      id: "fee-inspector",
      method: "getTransaction",
      params: [
        signature,
        {
          commitment: "confirmed",
          encoding,
          maxSupportedTransactionVersion: 0,
        },
      ],
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`RPC 请求失败：HTTP ${response.status}${text ? `，${text.slice(0, 180)}` : ""}`);
  }

  const payload = await response.json();
  if (payload.error) {
    throw new Error(payload.error.message || "RPC 返回错误。");
  }
  return payload.result;
}

async function fetchSolUsdtPrice() {
  try {
    const response = await fetch(`${window.location.origin}/price`, {
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      throw new Error(`价格请求失败：HTTP ${response.status}`);
    }

    const payload = await response.json();
    return normalizePricePayload(payload);
  } catch {
    return fetchDirectSolUsdtPrice();
  }
}

async function fetchDirectSolUsdtPrice() {
  const sources = [
    {
      source: "Binance SOLUSDT",
      url: "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT",
      parse: (payload) => Number(payload.price),
    },
    {
      source: "Binance.US SOLUSDT",
      url: "https://api.binance.us/api/v3/ticker/price?symbol=SOLUSDT",
      parse: (payload) => Number(payload.price),
    },
    {
      source: "CoinGecko SOL/USD",
      url: "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
      parse: (payload) => Number(payload.solana?.usd),
    },
  ];

  for (const source of sources) {
    try {
      const response = await fetch(source.url, { headers: { Accept: "application/json" } });
      if (!response.ok) continue;
      const payload = await response.json();
      return normalizePricePayload({
        price: source.parse(payload),
        source: source.source,
        updatedAt: new Date().toISOString(),
      });
    } catch {}
  }

  throw new Error("实时价格源暂不可用。");
}

function normalizePricePayload(payload) {
  const price = Number(payload.price);
  if (!Number.isFinite(price) || price <= 0) {
    throw new Error("价格接口返回异常。");
  }
  return {
    price,
    source: payload.source,
    updatedAt: payload.updatedAt,
  };
}

function analyze(tx, parsedTx) {
  const meta = tx.meta || {};
  const message = tx.transaction?.message || {};
  const accountKeys = collectAccountKeys(message, meta);
  const instructions = message.instructions || [];
  const header = message.header || {};
  const signatureCount = header.numRequiredSignatures || tx.transaction?.signatures?.length || 0;
  const computeBudget = parseComputeBudget(instructions, accountKeys);
  const explicitLimit = computeBudget.unitLimit ?? null;
  const inferredLimit = explicitLimit ?? inferDefaultComputeLimit(instructions, accountKeys);
  const unitPrice = computeBudget.unitPriceMicroLamports ?? 0n;
  const priorityFeeFromBudget = Number(
    (unitPrice * BigInt(inferredLimit) + 999_999n) / MICRO_LAMPORTS_PER_LAMPORT,
  );
  const totalFee = meta.fee ?? 0;
  const precompileSignatureCount = countPrecompileSignatures(instructions, accountKeys);
  const billableSignatureCount = signatureCount + precompileSignatureCount;
  const expectedSignatureFee = billableSignatureCount * LAMPORTS_PER_SIGNATURE;
  const maxPriorityFeeByMeta = Math.max(totalFee - expectedSignatureFee, 0);
  const priorityFee =
    priorityFeeFromBudget > totalFee && maxPriorityFeeByMeta < priorityFeeFromBudget
      ? maxPriorityFeeByMeta
      : priorityFeeFromBudget;
  const priorityFeeSource = priorityFee === priorityFeeFromBudget ? "budget" : "meta";
  const baseNetworkFee = Math.max(totalFee - priorityFee, 0);
  const preBalances = meta.preBalances || [];
  const postBalances = meta.postBalances || [];
  const balanceChanges = accountKeys.map((address, index) => ({
    address,
    index,
    before: preBalances[index] ?? 0,
    after: postBalances[index] ?? 0,
    change: (postBalances[index] ?? 0) - (preBalances[index] ?? 0),
  }));
  const payer = balanceChanges[0] || null;
  const payerNetworkAdjustedChange = payer ? payer.change + totalFee : 0;
  const createdAccounts = balanceChanges.filter((item) => item.before === 0 && item.after > 0);
  const closedAccounts = balanceChanges.filter((item) => item.before > 0 && item.after === 0);
  const feeAudit = analyzeFeeAudit(tx, parsedTx, accountKeys, balanceChanges, totalFee);

  return {
    tx,
    meta,
    accountKeys,
    signatureCount,
    precompileSignatureCount,
    billableSignatureCount,
    computeBudget,
    explicitLimit,
    inferredLimit,
    unitPrice,
    priorityFee,
    priorityFeeFromBudget,
    priorityFeeSource,
    totalFee,
    baseNetworkFee,
    expectedSignatureFee,
    computeUnitsConsumed: meta.computeUnitsConsumed ?? null,
    costUnits: meta.costUnits ?? null,
    payer,
    payerNetworkAdjustedChange,
    createdAccounts,
    closedAccounts,
    balanceChanges,
    feeAudit,
  };
}

function analyzeFeeAudit(tx, parsedTx, accountKeys, balanceChanges, networkFee) {
  const message = tx.transaction?.message || {};
  const header = message.header || {};
  const signerCount = header.numRequiredSignatures || tx.transaction?.signatures?.length || 0;
  const signers = new Set(accountKeys.slice(0, signerCount));
  const parsedAccountKeys = collectParsedAccountKeys(parsedTx);
  for (const key of parsedAccountKeys) {
    if (key.signer) signers.add(key.pubkey);
  }

  const programHits = detectProgramHits(tx, parsedTx, accountKeys);
  const tokenAccountOwners = buildTokenAccountOwners(parsedTx, parsedAccountKeys);
  const tokenDeltas = buildTokenDeltas(parsedTx, parsedAccountKeys);
  const parsedTransfers = collectParsedTransfers(parsedTx, tokenAccountOwners);
  const candidates = [];
  const transferRows = [];

  const userTokenOut = parsedTransfers.filter(
    (transfer) =>
      transfer.kind === "token" &&
      transfer.amountRaw > 0n &&
      (signers.has(transfer.sourceOwner) || signers.has(transfer.authority)) &&
      !signers.has(transfer.destinationOwner),
  );

  const byMint = groupBy(userTokenOut, (transfer) => transfer.mint || "unknown");
  for (const [mint, transfers] of byMint.entries()) {
    const sorted = [...transfers].sort((a, b) => compareBigInt(b.amountRaw, a.amountRaw));
    const totalOut = sorted.reduce((sum, transfer) => sum + transfer.amountRaw, 0n);
    const largest = sorted[0]?.amountRaw || 0n;

    for (const transfer of sorted) {
      const ratioToLargest = largest > 0n ? Number((transfer.amountRaw * 10_000n) / largest) / 100 : 0;
      const looksLikeFee =
        sorted.length > 1 &&
        transfer !== sorted[0] &&
        ratioToLargest <= 10 &&
        ratioToLargest > 0;
      const label = inferFeeLabel(transfer, programHits, ratioToLargest);
      transferRows.push({
        ...transfer,
        role: looksLikeFee ? "疑似平台/钱包/推荐费" : "用户支出/Swap 本金",
        ratioToLargest,
      });
      if (looksLikeFee) {
        candidates.push({
          type: "token",
          label,
          confidence: ratioToLargest <= 2 ? "较高" : "中等",
          reason: `同资产用户支出中较小的一笔，约为最大支出的 ${trimNumber(ratioToLargest, 4)}%`,
          mint,
          amountRaw: transfer.amountRaw,
          decimals: transfer.decimals,
          destination: transfer.destination,
          destinationOwner: transfer.destinationOwner,
          source: transfer.source,
          program: transfer.program,
          totalOut,
        });
      }
    }
  }

  const routerToolHit = findRouterToolHit(programHits);
  const tradeSolLamports = inferTradeSolLamports(parsedTransfers, tokenAccountOwners, signers);
  const userSolOut = parsedTransfers.filter(
    (transfer) =>
      transfer.kind === "sol" &&
      transfer.lamports > 0 &&
      signers.has(transfer.source) &&
      !signers.has(transfer.destination),
  );
  const sortedSolOut = [...userSolOut].sort((a, b) => b.lamports - a.lamports);
  const largestSolOut = sortedSolOut[0]?.lamports || 0;

  for (const transfer of sortedSolOut) {
    const ratioToLargest = largestSolOut > 0 ? (transfer.lamports / largestSolOut) * 100 : 0;
    const adjustedLamports = transfer.source === accountKeys[0] ? Math.max(transfer.lamports - networkFee, 0) : transfer.lamports;
    const looksLikeFee = sortedSolOut.length > 1 && transfer !== sortedSolOut[0] && ratioToLargest <= 10;
    transferRows.push({
      ...transfer,
      lamports: adjustedLamports,
      role: looksLikeFee ? "疑似 SOL 平台/钱包费" : "SOL 支出/押金/转账",
      ratioToLargest,
    });
    if (looksLikeFee && adjustedLamports > 0) {
      candidates.push({
        type: "sol",
        label: inferFeeLabel(transfer, programHits, ratioToLargest),
        confidence: ratioToLargest <= 2 ? "较高" : "中等",
        reason: `SOL 用户支出中较小的一笔，约为最大 SOL 支出的 ${trimNumber(ratioToLargest, 4)}%`,
        lamports: adjustedLamports,
        destination: transfer.destination,
        source: transfer.source,
        program: transfer.program,
      });
    }
  }

  addRouterToolSolTransferCandidates(
    candidates,
    transferRows,
    userSolOut,
    tokenAccountOwners,
    signers,
    routerToolHit,
    tradeSolLamports || largestSolOut,
  );
  addBalanceBasedHints(candidates, transferRows, tokenDeltas, balanceChanges, signers, programHits);

  return {
    signers: [...signers],
    programHits,
    pumpInfo: buildPumpInfo(programHits, candidates, transferRows),
    ruleMatches: runFeeRules({ programHits, candidates, transferRows, tx }),
    candidates,
    transferRows: transferRows.slice(0, 60),
    tokenDeltas,
  };
}

function findRouterToolHit(programHits) {
  return programHits.find((hit) =>
    [FLASHX_PROGRAM, AXIOM_FRONT_SIGNAL, JUPITER_SWAP_PROGRAM, JUPITER_REFERRAL_PROGRAM, RAYDIUM_ROUTE_PROGRAM, "gmgn-log"].includes(hit.address),
  );
}

function inferTradeSolLamports(parsedTransfers, tokenAccountOwners, signers) {
  const values = [];
  for (const transfer of parsedTransfers) {
    if (transfer.kind === "token" && transfer.mint === WSOL_MINT && signers.has(transfer.authority)) {
      values.push(Number(transfer.amountRaw));
    }
    if (transfer.kind === "sol") {
      const destinationTokenOwner = tokenAccountOwners.get(transfer.destination);
      if (destinationTokenOwner?.mint === WSOL_MINT && signers.has(destinationTokenOwner.owner)) {
        values.push(transfer.lamports);
      }
    }
  }
  return values.length ? Math.max(...values) : 0;
}

function addRouterToolSolTransferCandidates(candidates, transferRows, userSolOut, tokenAccountOwners, signers, routerToolHit, tradeSolLamports) {
  if (!routerToolHit || !tradeSolLamports) return;
  const candidateKeys = new Set(candidates.map((item) => `sol:${item.destination}:${item.lamports}`));

  for (const transfer of userSolOut) {
    const destinationTokenOwner = tokenAccountOwners.get(transfer.destination);
    const isSignerWsolSetup = destinationTokenOwner?.mint === WSOL_MINT && signers.has(destinationTokenOwner.owner);
    if (isSignerWsolSetup) continue;

    const ratioToTrade = (transfer.lamports / tradeSolLamports) * 100;
    if (ratioToTrade <= 0 || ratioToTrade > 3) continue;

    const key = `sol:${transfer.destination}:${transfer.lamports}`;
    if (candidateKeys.has(key)) continue;

    candidates.push({
      type: "sol",
      label: `${routerToolHit.label} SOL fee candidate`,
      confidence: "较高",
      reason: `交易命中 ${routerToolHit.label}，该 SOL 转账约为交易额的 ${trimNumber(ratioToTrade, 4)}%`,
      lamports: transfer.lamports,
      destination: transfer.destination,
      source: transfer.source,
      program: routerToolHit.address,
      totalOut: tradeSolLamports,
    });

    transferRows.push({
      ...transfer,
      role: "Router / 交易工具 SOL 费用候选",
      ratioToLargest: ratioToTrade,
    });
    candidateKeys.add(key);
  }
}

function runFeeRules({ programHits, candidates, transferRows, tx }) {
  const hitIds = new Set(programHits.map((hit) => hit.address));
  const logs = tx.meta?.logMessages || [];

  return FEE_RULES.map((rule) => {
    const matchedPrograms = (rule.programIds || [])
      .filter((programId) => hitIds.has(programId))
      .map((programId) => ({
        address: programId,
        label: PROGRAM_LABELS[programId] || shortAddress(programId),
      }));
    const logMatched = (rule.logPatterns || []).some((pattern) => logs.some((line) => pattern.test(line)));
    const relatedCandidates = candidates.filter((candidate) => {
      const label = candidate.label.toLowerCase();
      return (
        matchedPrograms.some((program) => candidate.program === program.address) ||
        label.includes(rule.id.toLowerCase()) ||
        label.includes(rule.name.toLowerCase().split(" ")[0])
      );
    });

    const detected = matchedPrograms.length > 0 || logMatched || relatedCandidates.length > 0;
    if (!detected) return null;

    const tradeBase = inferPumpTradeBase(transferRows);
    const estimate =
      rule.estimateRate && tradeBase
        ? {
            amount: tradeBase.amount * rule.estimateRate,
            asset: tradeBase.asset,
            rate: rule.estimateRate,
          }
        : null;

    return {
      id: rule.id,
      name: rule.name,
      category: rule.category,
      feeNote: rule.feeNote,
      matchedPrograms,
      logMatched,
      relatedCandidates,
      estimate,
      confidence: matchedPrograms.length ? "高" : logMatched ? "中" : "候选",
    };
  }).filter(Boolean);
}

function buildPumpInfo(programHits, candidates, transferRows) {
  const pumpPrograms = programHits.filter((hit) =>
    [PUMP_FUN_PROGRAM, PUMP_AMM_PROGRAM, PUMP_FEES_PROGRAM].includes(hit.address),
  );
  const hasBondingCurve = pumpPrograms.some((hit) => hit.address === PUMP_FUN_PROGRAM);
  const hasPumpSwap = pumpPrograms.some((hit) => hit.address === PUMP_AMM_PROGRAM);
  const hasFeeProgram = pumpPrograms.some((hit) => hit.address === PUMP_FEES_PROGRAM);
  const explicitFees = candidates.filter((item) => /pump/i.test(item.label) || item.program === PUMP_FEES_PROGRAM);

  const tradeBase = inferPumpTradeBase(transferRows);
  const estimated = [];
  if (tradeBase && hasBondingCurve) {
    estimated.push({
      label: "Pump.fun bonding curve 总费用估算",
      rate: 0.0125,
      amount: tradeBase.amount * 0.0125,
      asset: tradeBase.asset,
      detail: "官方费率：Creator 0.300% + Protocol 0.95% + LP 0% = 1.25%",
    });
  }
  if (tradeBase && hasPumpSwap) {
    estimated.push({
      label: "PumpSwap canonical pool 费用提示",
      rate: null,
      amount: null,
      asset: tradeBase.asset,
      detail: "PumpSwap canonical pool 费率按 SOL 市值档位变化，通常为 0.80% - 1.25% 总费用；需池子档位才能精算",
    });
  }

  return {
    detected: pumpPrograms.length > 0,
    programs: pumpPrograms,
    hasBondingCurve,
    hasPumpSwap,
    hasFeeProgram,
    explicitFees,
    tradeBase,
    estimated,
  };
}

function inferPumpTradeBase(transferRows) {
  const paidStable = transferRows
    .filter((item) => item.kind === "token" && USDT_VALUED_MINTS.has(item.mint) && item.role?.includes("用户支出"))
    .sort((a, b) => compareBigInt(b.amountRaw, a.amountRaw))[0];
  if (paidStable) {
    return {
      amount: Number(paidStable.amountRaw) / 10 ** paidStable.decimals,
      asset: tokenSymbol(paidStable.mint),
    };
  }

  const paidSol = transferRows
    .filter((item) => item.kind === "sol" && item.role?.includes("SOL 支出"))
    .sort((a, b) => b.lamports - a.lamports)[0];
  if (paidSol && solUsdtPrice) {
    return {
      amount: (paidSol.lamports / LAMPORTS_PER_SOL) * solUsdtPrice,
      asset: "USDT",
    };
  }

  return null;
}

function collectParsedAccountKeys(parsedTx) {
  const keys = parsedTx?.transaction?.message?.accountKeys || [];
  return keys.map((key) => ({
    pubkey: typeof key === "string" ? key : key.pubkey,
    signer: Boolean(typeof key === "object" && key.signer),
    writable: Boolean(typeof key === "object" && key.writable),
  }));
}

function detectProgramHits(tx, parsedTx, accountKeys) {
  const hits = new Map();
  for (const instruction of tx.transaction?.message?.instructions || []) {
    const programId = accountKeys[instruction.programIdIndex];
    if (programId) hits.set(programId, PROGRAM_LABELS[programId] || programId);
  }
  for (const group of tx.meta?.innerInstructions || []) {
    for (const instruction of group.instructions || []) {
      const programId = accountKeys[instruction.programIdIndex];
      if (programId) hits.set(programId, PROGRAM_LABELS[programId] || programId);
    }
  }
  for (const instruction of parsedTx?.transaction?.message?.instructions || []) {
    const programId = instruction.programId || instruction.program;
    if (programId) hits.set(programId, PROGRAM_LABELS[programId] || programId);
  }
  if ((tx.meta?.logMessages || []).some((line) => /gmgn/i.test(line))) {
    hits.set("gmgn-log", "GMGN log signal");
  }
  if (
    accountKeys.some((key) => /jitodontfront/i.test(key)) ||
    (tx.meta?.logMessages || []).some((line) => /axiom|flashx|jitodontfront/i.test(line))
  ) {
    hits.set(AXIOM_FRONT_SIGNAL, PROGRAM_LABELS[AXIOM_FRONT_SIGNAL]);
  }
  return [...hits.entries()].map(([address, label]) => ({
    address,
    label,
    feeRelevant: KNOWN_FEE_PROGRAMS.has(address),
  }));
}

function buildTokenAccountOwners(parsedTx, parsedAccountKeys) {
  const owners = new Map();
  for (const balance of [
    ...(parsedTx?.meta?.preTokenBalances || []),
    ...(parsedTx?.meta?.postTokenBalances || []),
  ]) {
    const account = parsedAccountKeys[balance.accountIndex]?.pubkey;
    if (!account) continue;
    owners.set(account, {
      owner: balance.owner || "",
      mint: balance.mint,
      decimals: balance.uiTokenAmount?.decimals ?? 0,
    });
  }
  return owners;
}

function buildTokenDeltas(parsedTx, parsedAccountKeys) {
  const map = new Map();
  for (const side of ["pre", "post"]) {
    const balances = parsedTx?.meta?.[`${side}TokenBalances`] || [];
    for (const balance of balances) {
      const account = parsedAccountKeys[balance.accountIndex]?.pubkey;
      if (!account) continue;
      const key = `${account}:${balance.mint}`;
      const item =
        map.get(key) ||
        {
          account,
          owner: balance.owner || "",
          mint: balance.mint,
          decimals: balance.uiTokenAmount?.decimals ?? 0,
          pre: 0n,
          post: 0n,
        };
      item[side] = BigInt(balance.uiTokenAmount?.amount || "0");
      item.owner = item.owner || balance.owner || "";
      item.decimals = balance.uiTokenAmount?.decimals ?? item.decimals;
      map.set(key, item);
    }
  }
  return [...map.values()]
    .map((item) => ({ ...item, delta: item.post - item.pre }))
    .filter((item) => item.delta !== 0n);
}

function collectParsedTransfers(parsedTx, tokenAccountOwners) {
  const transfers = [];
  const pushInstruction = (instruction, outerIndex = null) => {
    const parsed = instruction.parsed;
    const info = parsed?.info || {};
    if (!parsed) return;

    if (instruction.program === "system" && parsed.type === "transfer" && Number(info.lamports) > 0) {
      transfers.push({
        kind: "sol",
        source: info.source || "",
        destination: info.destination || "",
        lamports: Number(info.lamports),
        program: instruction.programId || "11111111111111111111111111111111",
        outerIndex,
      });
    }

    const parsedType = String(parsed.type || "").toLowerCase();
    if ((instruction.program === "spl-token" || instruction.program === "spl-token-2022") && parsedType.includes("transfer")) {
      const tokenAmount = info.tokenAmount || {};
      const sourceMeta = tokenAccountOwners.get(info.source) || {};
      const destinationMeta = tokenAccountOwners.get(info.destination) || {};
      const mint = info.mint || tokenAmount.mint || sourceMeta.mint || destinationMeta.mint || "";
      const decimals = tokenAmount.decimals ?? sourceMeta.decimals ?? destinationMeta.decimals ?? 0;
      const amountRaw = BigInt(tokenAmount.amount || info.amount || "0");
      transfers.push({
        kind: "token",
        source: info.source || "",
        destination: info.destination || "",
        sourceOwner: sourceMeta.owner || info.authority || "",
        destinationOwner: destinationMeta.owner || "",
        authority: info.authority || "",
        amountRaw,
        mint,
        decimals,
        program: instruction.programId || "",
        outerIndex,
      });
    }
  };

  for (const instruction of parsedTx?.transaction?.message?.instructions || []) {
    pushInstruction(instruction);
  }
  for (const group of parsedTx?.meta?.innerInstructions || []) {
    for (const instruction of group.instructions || []) {
      pushInstruction(instruction, group.index);
    }
  }
  return transfers.filter((transfer) => transfer.kind === "sol" || transfer.amountRaw > 0n);
}

function addBalanceBasedHints(candidates, transferRows, tokenDeltas, balanceChanges, signers, programHits = []) {
  const candidateKeys = new Set(candidates.map((item) => `${item.type}:${item.destination}:${item.mint || "SOL"}:${item.amountRaw || item.lamports}`));
  const routerHit = programHits.find((hit) =>
    [JUPITER_SWAP_PROGRAM, JUPITER_REFERRAL_PROGRAM, RAYDIUM_ROUTE_PROGRAM, "gmgn-log"].includes(hit.address),
  );
  const signerOutByMint = new Map();

  for (const delta of tokenDeltas) {
    if (delta.delta >= 0n || !signers.has(delta.owner)) continue;
    const existing = signerOutByMint.get(delta.mint) || { amountRaw: 0n, decimals: delta.decimals };
    existing.amountRaw += -delta.delta;
    existing.decimals = delta.decimals ?? existing.decimals;
    signerOutByMint.set(delta.mint, existing);
  }

  const positiveByMint = groupBy(
    tokenDeltas.filter((delta) => delta.delta > 0n && !signers.has(delta.owner)),
    (delta) => delta.mint,
  );

  if (routerHit) {
    for (const [mint, deltas] of positiveByMint.entries()) {
      const signerOut = signerOutByMint.get(mint);
      if (!signerOut?.amountRaw || deltas.length < 2) continue;
      const sorted = [...deltas].sort((a, b) => compareBigInt(b.delta, a.delta));
      const largest = sorted[0]?.delta || 0n;

      for (const delta of sorted.slice(1)) {
        const ratioToUserOut = Number((delta.delta * 10_000n) / signerOut.amountRaw) / 100;
        const ratioToLargest = largest > 0n ? Number((delta.delta * 10_000n) / largest) / 100 : 0;
        if (ratioToUserOut <= 0 || ratioToUserOut > 2 || ratioToLargest > 10) continue;

        const key = `token:${delta.account}:${delta.mint}:${delta.delta}`;
        if (candidateKeys.has(key)) continue;
        const label =
          routerHit.address === JUPITER_SWAP_PROGRAM || routerHit.address === JUPITER_REFERRAL_PROGRAM
            ? "Jupiter Router / 前端拆分费用候选"
            : "Router / 交易工具拆分费用候选";

        candidates.push({
          type: "token",
          label,
          confidence: ratioToUserOut <= 0.5 ? "较高" : "中等",
          reason: `同一币种用户净流出被拆分，小额入账约为用户支出的 ${trimNumber(ratioToUserOut, 4)}%`,
          mint,
          amountRaw: delta.delta,
          decimals: delta.decimals,
          destination: delta.account,
          destinationOwner: delta.owner,
          source: "",
          program: routerHit.address,
          totalOut: signerOut.amountRaw,
        });
        candidateKeys.add(key);
      }
    }
  }

  for (const delta of tokenDeltas) {
    if (delta.delta <= 0n || signers.has(delta.owner)) continue;
    const key = `token:${delta.account}:${delta.mint}:${delta.delta}`;
    if (candidateKeys.has(key)) continue;
    transferRows.push({
      kind: "token-delta",
      role: "非用户账户净增 Token",
      destination: delta.account,
      destinationOwner: delta.owner,
      mint: delta.mint,
      decimals: delta.decimals,
      amountRaw: delta.delta,
    });
  }

  for (const change of balanceChanges) {
    if (change.change <= 0 || signers.has(change.address)) continue;
    transferRows.push({
      kind: "sol-delta",
      role: "非用户账户净增 SOL",
      destination: change.address,
      lamports: change.change,
    });
  }
}

function inferFeeLabel(transfer, programHits, ratioToLargest) {
  const labels = [];
  if (programHits.some((hit) => hit.address === PUMP_FEES_PROGRAM)) labels.push("Pump.fun Fees 程序费用候选");
  if (programHits.some((hit) => hit.address === PUMP_FUN_PROGRAM)) labels.push("Pump.fun bonding curve 费用候选");
  if (programHits.some((hit) => hit.address === PUMP_AMM_PROGRAM)) labels.push("PumpSwap 池子费用候选");
  if (programHits.some((hit) => hit.address === JUPITER_REFERRAL_PROGRAM)) labels.push("Jupiter 推荐/集成商费用候选");
  if (programHits.some((hit) => hit.address === JUPITER_SWAP_PROGRAM)) labels.push("Jupiter 路由相关费用候选");
  if (programHits.some((hit) => hit.address === "gmgn-log")) labels.push("GMGN 平台费用候选");
  if (transfer.mint === WSOL_MINT || transfer.kind === "sol") {
    if (ratioToLargest >= 0.5 && ratioToLargest <= 2) labels.push("Router / 交易工具约 1% 手续费候选");
  }
  return labels[0] || "平台 / 钱包 / 协议费用候选";
}

function groupBy(items, getKey) {
  const map = new Map();
  for (const item of items) {
    const key = getKey(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  }
  return map;
}

function compareBigInt(a, b) {
  if (a === b) return 0;
  return a > b ? 1 : -1;
}

function countPrecompileSignatures(instructions, accountKeys) {
  return instructions.reduce((count, instruction) => {
    const programId = accountKeys[instruction.programIdIndex];
    if (!PRECOMPILE_PROGRAMS.has(programId)) return count;
    const bytes = decodeBase58(instruction.data || "");
    return count + (bytes[0] || 0);
  }, 0);
}

function collectAccountKeys(message, meta) {
  const staticKeys = (message.accountKeys || []).map((item) =>
    typeof item === "string" ? item : item.pubkey || item.toString(),
  );
  const writableLoaded = meta.loadedAddresses?.writable || [];
  const readonlyLoaded = meta.loadedAddresses?.readonly || [];
  return [...staticKeys, ...writableLoaded, ...readonlyLoaded];
}

function parseComputeBudget(instructions, accountKeys) {
  const parsed = {
    unitLimit: null,
    unitPriceMicroLamports: null,
    heapFrameBytes: null,
    loadedAccountsDataSizeLimit: null,
    deprecatedRequests: [],
    raw: [],
  };

  for (const instruction of instructions) {
    const programId = accountKeys[instruction.programIdIndex];
    if (programId !== COMPUTE_BUDGET_PROGRAM) continue;

    const bytes = decodeBase58(instruction.data || "");
    const tag = bytes[0];
    const item = { tag, name: "未知 Compute Budget 指令", detail: "无法解析参数" };

    if (tag === 0 && bytes.length >= 9) {
      const units = readU32LE(bytes, 1);
      const additionalFee = readU32LE(bytes, 5);
      parsed.deprecatedRequests.push({ units, additionalFee });
      item.name = "RequestUnitsDeprecated";
      item.detail = `${units.toLocaleString()} CU，额外 ${additionalFee.toLocaleString()} lamports`;
    }

    if (tag === 1 && bytes.length >= 5) {
      parsed.heapFrameBytes = readU32LE(bytes, 1);
      item.name = "RequestHeapFrame";
      item.detail = `${parsed.heapFrameBytes.toLocaleString()} bytes`;
    }

    if (tag === 2 && bytes.length >= 5) {
      parsed.unitLimit = readU32LE(bytes, 1);
      item.name = "SetComputeUnitLimit";
      item.detail = `${parsed.unitLimit.toLocaleString()} CU`;
    }

    if (tag === 3 && bytes.length >= 9) {
      parsed.unitPriceMicroLamports = readU64LE(bytes, 1);
      item.name = "SetComputeUnitPrice";
      item.detail = `${parsed.unitPriceMicroLamports.toLocaleString()} micro-lamports / CU`;
    }

    if (tag === 4 && bytes.length >= 5) {
      parsed.loadedAccountsDataSizeLimit = readU32LE(bytes, 1);
      item.name = "SetLoadedAccountsDataSizeLimit";
      item.detail = `${parsed.loadedAccountsDataSizeLimit.toLocaleString()} bytes`;
    }

    parsed.raw.push(item);
  }

  if (parsed.unitPriceMicroLamports === null) parsed.unitPriceMicroLamports = 0n;
  return parsed;
}

function inferDefaultComputeLimit(instructions, accountKeys) {
  const total = instructions.reduce((sum, instruction) => {
    const programId = accountKeys[instruction.programIdIndex];
    if (programId === COMPUTE_BUDGET_PROGRAM) return sum;
    return sum + (BUILTIN_PROGRAMS.has(programId) ? DEFAULT_BUILTIN_CU : DEFAULT_NON_BUILTIN_CU);
  }, 0);
  return Math.min(Math.max(total, DEFAULT_BUILTIN_CU), MAX_COMPUTE_UNITS);
}

function decodeBase58(value) {
  let num = 0n;
  for (const char of value) {
    const index = BASE58_ALPHABET.indexOf(char);
    if (index < 0) return new Uint8Array();
    num = num * 58n + BigInt(index);
  }

  const bytes = [];
  while (num > 0n) {
    bytes.unshift(Number(num & 255n));
    num >>= 8n;
  }

  for (const char of value) {
    if (char === "1") bytes.unshift(0);
    else break;
  }

  return new Uint8Array(bytes);
}

function readU32LE(bytes, offset) {
  return (
    bytes[offset] |
    (bytes[offset + 1] << 8) |
    (bytes[offset + 2] << 16) |
    (bytes[offset + 3] << 24)
  ) >>> 0;
}

function readU64LE(bytes, offset) {
  let value = 0n;
  for (let index = 7; index >= 0; index -= 1) {
    value = (value << 8n) + BigInt(bytes[offset + index] || 0);
  }
  return value;
}

function renderAnalysis(data) {
  setText("#totalFee", formatSolOnly(data.totalFee));
  setText("#totalFeeLamports", `${data.totalFee.toLocaleString()} lamports · ${formatSolUsdtOnly(data.totalFee)}`);
  setText("#baseFee", formatSolOnly(data.baseNetworkFee));
  setText(
    "#signatureCount",
    `${formatSolUsdtOnly(data.baseNetworkFee)} · ${data.signatureCount} 签名 + ${data.precompileSignatureCount} 预编译`,
  );
  setText("#priorityFee", formatSolOnly(data.priorityFee));
  setText(
    "#priorityFormula",
    data.priorityFeeSource === "budget"
      ? `${formatSolUsdtOnly(data.priorityFee)} · ${data.unitPrice.toLocaleString()} micro-lamports/CU`
      : "按 meta.fee 与签名费反推校准",
  );
  setText("#computeUsage", data.computeUnitsConsumed === null ? "未知" : data.computeUnitsConsumed.toLocaleString());
  setText(
    "#computeLimit",
    `${data.explicitLimit ? "显式上限" : "推算上限"} ${data.inferredLimit.toLocaleString()} CU`,
  );
  setText("#solUsdtPrice", solUsdtPrice ? `${trimNumber(solUsdtPrice, 4)} USDT` : "暂不可用");
  setText(
    "#priceSource",
    solUsdtPrice
      ? `${solUsdtSource || "实时价格源"} · ${formatPriceTime(solUsdtUpdatedAt)}`
      : "实时价格暂不可用",
  );
  setText("#statusBadge", data.meta.err ? "失败，手续费仍扣除" : "成功");
  document.querySelector("#statusBadge").classList.toggle("warning", Boolean(data.meta.err));
  setText("#slotInfo", `Slot ${data.tx.slot.toLocaleString()}`);

  renderBreakdown(data);
  renderTotalCost(data);
  renderFeeCategories(data);
  renderRuleMatches(data);
  renderPlatformFees(data);
  renderTransfers(data);
  renderPayer(data);
  renderRent(data);
  renderBudget(data);
}

function renderRuleMatches(data) {
  const matches = data.feeAudit.ruleMatches || [];
  const rows = matches.map((match) => {
    const candidateSummary = match.relatedCandidates.length
      ? `；显式费用候选 ${match.relatedCandidates.length} 笔`
      : "";
    const estimateSummary = match.estimate
      ? `；按 ${trimNumber(match.estimate.rate * 100, 4)}% 估算 ≈ ${formatUsdt(match.estimate.amount)} ${match.estimate.asset}`
      : "";
    const programSummary = match.matchedPrograms.length
      ? match.matchedPrograms.map((program) => program.label).join("、")
      : match.logMatched
        ? "日志特征命中"
        : "费用候选命中";

    return {
      label: match.name,
      hint: `${programSummary}${candidateSummary}${estimateSummary}`,
      amount: match.category === "router" ? "Router / 工具" : "协议 / 池子",
      tags: [match.confidence, match.category === "router" ? "交易工具" : "底层协议"],
      code: match.matchedPrograms.map((program) => program.address).join(" / "),
    };
  });

  if (!rows.length) {
    rows.push({
      label: "没有命中内置主流协议/工具规则",
      hint: "仍会展示通用转账拆分；可以继续补充新的 program id / fee account 规则",
      amount: "-",
      tags: ["通用模式"],
    });
  }

  setText(
    "#ruleMatchSummary",
    matches.length
      ? `${matches.filter((item) => item.category === "protocol").length} 个协议，${matches.filter((item) => item.category === "router").length} 个工具`
      : "未命中",
  );
  setRows("#ruleMatchList", rows);
}

function renderFeeCategories(data) {
  const chainUsdt = estimateUsdtForSolLamports(data.totalFee);
  const buckets = bucketFeeCandidates(data.feeAudit.candidates);

  setText("#chainFeeAmount", `${formatSolOnly(data.totalFee)}${chainUsdt ? ` · ≈ ${formatUsdt(chainUsdt)} USDT` : ""}`);
  setText(
    "#chainFeeDetail",
    `确定费用：基础费 ${formatSolOnly(data.baseNetworkFee)} + 优先费 ${formatSolOnly(data.priorityFee)}`,
  );

  const pumpText = formatPumpBucket(data.feeAudit.pumpInfo, buckets.pump);
  setText("#pumpFeeAmount", pumpText.amount);
  setText("#pumpFeeDetail", pumpText.detail);

  const routeText = formatRouterBucket(data.feeAudit.ruleMatches, buckets.route);
  setText("#routeFeeAmount", routeText.amount);
  setText("#routeFeeDetail", routeText.detail);
}

function renderTotalCost(data) {
  const networkUsdt = estimateUsdtForSolLamports(data.totalFee);
  const rentLamports = data.createdAccounts.reduce((sum, item) => sum + item.after, 0);
  const rentUsdt = estimateUsdtForSolLamports(rentLamports);
  const platformGroups = summarizeFeeCandidates(data.feeAudit.candidates);
  const platformUsdt = platformGroups.reduce((sum, item) => sum + (item.usdtValue || 0), 0);
  const valuedTotal = networkUsdt + rentUsdt + platformUsdt;
  const tradeNotional = estimateTradeNotionalUsdt(data);
  const costRatio = tradeNotional ? (valuedTotal / tradeNotional) * 100 : null;
  const unvalued = platformGroups.filter((item) => item.usdtValue === null);
  const detailParts = [
    `网络费 ${formatUsdt(networkUsdt)} USDT`,
    platformUsdt ? `平台/钱包 ${formatUsdt(platformUsdt)} USDT` : "",
    rentUsdt ? `押金 ${formatUsdt(rentUsdt)} USDT` : "",
  ].filter(Boolean);

  const rows = [
    {
      label: "网络手续费",
      hint: "Solana 基础签名费 + 优先费，确定已扣除",
      amount: `${formatLamports(data.totalFee)}${networkUsdt ? ` · ≈ ${formatUsdt(networkUsdt)} USDT` : ""}`,
      tags: ["确定费用"],
    },
    {
      label: "平台 / 钱包 / 推荐费候选",
      hint: data.feeAudit.candidates.length
        ? "按用户侧小额转账、已知程序和资产流向识别"
        : "未识别到候选费用",
      amount: platformGroups.length
        ? platformGroups.map((item) => `${item.amount}${item.usdtValue !== null ? ` · ≈ ${formatUsdt(item.usdtValue)} USDT` : ""}`).join(" / ")
        : "-",
      tags: data.feeAudit.candidates.length ? ["候选推断"] : ["无候选"],
    },
    {
      label: "账户创建 / 租金押金",
      hint: "链上成本但通常可在关闭账户时退回，不等同手续费",
      amount: rentLamports ? `${formatLamports(rentLamports)}${rentUsdt ? ` · ≈ ${formatUsdt(rentUsdt)} USDT` : ""}` : "-",
      tags: rentLamports ? ["可退押金"] : ["无新增押金"],
    },
    {
      label: "已估值合计",
      hint: unvalued.length ? `另有 ${unvalued.length} 类资产暂未估值` : "只汇总可换算成 USDT 的项目",
      amount: valuedTotal ? `≈ ${formatUsdt(valuedTotal)} USDT` : "-",
      tags: ["USDT 估算"],
    },
  ];

  if (unvalued.length) {
    rows.push({
      label: "未估值资产",
      hint: "需要接入更多 token 价格源后才能折算 USDT",
      amount: unvalued.map((item) => item.amount).join(" / "),
      tags: unvalued.map((item) => item.asset),
    });
  }

  setText("#totalCostSummary", valuedTotal ? `已估值 ≈ ${formatUsdt(valuedTotal)} USDT` : "暂无可估值合计");
  setText("#topTotalCost", valuedTotal ? `≈ ${formatUsdt(valuedTotal)} USDT` : "-");
  setText("#topTotalCostDetail", detailParts.length ? detailParts.join(" + ") : "暂无可估值项目");
  setText("#topTradeNotional", tradeNotional ? `≈ ${formatUsdt(tradeNotional)} USDT` : "-");
  setText(
    "#topTradeNotionalDetail",
    solUsdtPrice
      ? `SOL/USDT ${trimNumber(solUsdtPrice, 4)} · ${solUsdtSource || "实时价格"} · ${formatPriceTime(solUsdtUpdatedAt)}`
      : "SOL/USDT 实时价格暂不可用",
  );
  setText("#topCostRatio", costRatio !== null ? `${trimNumber(costRatio, 4)}%` : "-");
  setText(
    "#topCostRatioDetail",
    costRatio !== null
      ? `交易额约 ${formatUsdt(tradeNotional)} USDT；成本 ${formatUsdt(valuedTotal)} USDT`
      : "缺少可估值交易额，暂不能计算",
  );
  setRows("#totalCostList", rows);
}

function renderPlatformFees(data) {
  const hits = data.feeAudit.programHits.filter((program) => program.feeRelevant);
  const rows = [];

  if (data.feeAudit.candidates.length) {
    const totals = summarizeFeeCandidates(data.feeAudit.candidates);
    for (const total of totals) {
      rows.push({
        label: `${total.label} · ${total.asset}`,
        hint: `${total.count} 笔候选；置信度 ${total.confidence}`,
        amount: total.amount,
        tags: total.tags,
      });
    }

    for (const item of data.feeAudit.candidates) {
      rows.push({
        label: `${item.label} 明细`,
        hint: `${item.reason}；收款 ${shortAddress(item.destinationOwner || item.destination)}`,
        amount: formatCandidateAmount(item),
        code: item.destinationOwner || item.destination,
        tags: [
          item.confidence,
          item.type === "sol" ? "SOL" : shortMint(item.mint),
          programLabel(item.program),
        ].filter(Boolean),
      });
    }
  }

  if (!rows.length) {
    rows.push({
      label: "未自动识别出明确平台/钱包收费",
      hint: hits.length
        ? "检测到相关聚合器/推荐程序，但没有发现可明确拆出的较小用户支出"
        : "没有检测到已知收费程序；请查看下方交易内转账拆分中的小额非用户收款",
      amount: "-",
      tags: hits.map((hit) => hit.label),
    });
  }

  if (hits.length) {
    rows.unshift({
      label: "命中的已知收费/路由程序",
      hint: hits.map((hit) => hit.address).join(" / "),
      amount: hits.map((hit) => hit.label).join("、"),
      tags: hits.map((hit) => "已识别"),
    });
  }

  setText("#platformFeeSummary", `${data.feeAudit.candidates.length} 笔候选费用`);
  setRows("#platformFeeList", rows);
}

function renderTransfers(data) {
  const rows = data.feeAudit.transferRows.map((item) => {
    if (item.kind === "sol" || item.kind === "sol-delta") {
      return {
        label: item.role,
        hint: `${shortAddress(item.source || "balance")} → ${shortAddress(item.destination)}`,
        amount: formatLamports(item.lamports),
        code: item.destination,
        tags: [item.ratioToLargest ? `占最大 SOL 支出 ${trimNumber(item.ratioToLargest, 4)}%` : "", programLabel(item.program)].filter(Boolean),
      };
    }

    return {
      label: item.role,
      hint: `${shortAddress(item.source || "balance")} → ${shortAddress(item.destination)}；owner ${shortAddress(item.destinationOwner)}`,
      amount: formatTokenAmount(item.amountRaw, item.decimals, item.mint),
      code: item.destinationOwner || item.destination,
      tags: [shortMint(item.mint), item.ratioToLargest ? `占最大同币支出 ${trimNumber(item.ratioToLargest, 4)}%` : "", programLabel(item.program)].filter(Boolean),
    };
  });

  if (!rows.length) {
    rows.push({
      label: "没有可展示的用户侧转账拆分",
      hint: "RPC 没有返回 parsed inner instructions，或这笔交易没有显式 SOL/SPL 转账",
      amount: "-",
    });
  }

  setRows("#transferList", rows);
}

function renderBreakdown(data) {
  const rows = [
    {
      label: "链上实际扣除网络手续费",
      hint: "来自 getTransaction 的 meta.fee，失败交易也会扣除",
      amount: formatLamports(data.totalFee),
    },
    {
      label: "基础签名费",
      hint:
        data.baseNetworkFee === data.expectedSignatureFee
          ? "与计费签名数量 × 5,000 lamports 一致"
          : "包含交易签名费；差额可能来自预编译签名验证或 RPC/历史费率细节",
      amount: formatLamports(data.baseNetworkFee),
    },
    {
      label: "计费签名数量",
      hint: "交易签名 + Ed25519/Secp256k1/Secp256r1 预编译签名验证",
      amount: `${data.billableSignatureCount} × 5,000 = ${formatLamports(data.expectedSignatureFee)}`,
    },
    {
      label: "优先费",
      hint:
        data.priorityFeeSource === "budget"
          ? "按请求的 CU 上限计算，不按实际消耗的 CU 计算"
          : "默认 CU 上限无法从历史交易完全还原，已用 meta.fee 校准",
      amount: formatLamports(data.priorityFee),
    },
    {
      label: "基础费分配",
      hint: "当前规则：基础费 50% 销毁，50% 给出块验证者",
      amount: `${formatLamports(Math.floor(data.baseNetworkFee / 2))} / ${formatLamports(Math.ceil(data.baseNetworkFee / 2))}`,
    },
    {
      label: "优先费分配",
      hint: "当前规则：优先费 100% 给出块验证者",
      amount: formatLamports(data.priorityFee),
    },
  ];

  setRows("#breakdownList", rows);
}

function renderPayer(data) {
  if (!data.payer) {
    setRows("#payerList", [{ label: "没有余额数据", hint: "RPC 返回缺少 pre/post balances", amount: "-" }]);
    return;
  }

  const rows = [
    {
      label: "Fee payer",
      hint: shortAddress(data.payer.address),
      amount: `#${data.payer.index}`,
      code: data.payer.address,
    },
    {
      label: "付款人 SOL 净变化",
      hint: "包含网络手续费、转账、创建账户押金和退款",
      amount: signedLamports(data.payer.change),
      amountClass: data.payer.change < 0 ? "negative" : "positive",
    },
    {
      label: "扣除网络费后的业务变化",
      hint: "用来观察这笔交易本身给付款人带来的 SOL 流入/流出",
      amount: signedLamports(data.payerNetworkAdjustedChange),
      amountClass: data.payerNetworkAdjustedChange < 0 ? "negative" : "positive",
    },
  ];

  if (data.costUnits !== null && data.costUnits !== undefined) {
    rows.push({
      label: "Cost units",
      hint: "调度成本模型指标，不等同于实际消耗 CU",
      amount: data.costUnits.toLocaleString(),
    });
  }

  setRows("#payerList", rows);
}

function renderRent(data) {
  const rows = [];

  for (const item of data.createdAccounts) {
    rows.push({
      label: `新建或从 0 余额充值账户 #${item.index}`,
      hint: item.address,
      amount: formatLamports(item.after),
      code: item.address,
    });
  }

  for (const item of data.closedAccounts) {
    rows.push({
      label: `关闭或清空账户 #${item.index}`,
      hint: item.address,
      amount: `释放 ${formatLamports(item.before)}`,
      code: item.address,
    });
  }

  if (!rows.length) {
    rows.push({
      label: "未发现明显账户创建或关闭",
      hint: "没有 preBalance=0/postBalance>0 或 preBalance>0/postBalance=0 的账户",
      amount: "-",
    });
  }

  setRows("#rentList", rows);
}

function renderBudget(data) {
  const rows = [];

  if (data.computeBudget.raw.length) {
    for (const item of data.computeBudget.raw) {
      rows.push({
        label: item.name,
        hint: `Tag ${item.tag}`,
        amount: item.detail,
      });
    }
  } else {
    rows.push({
      label: "没有显式 Compute Budget 指令",
      hint: "优先费价格为 0；CU 上限按交易指令默认值推算",
      amount: "默认",
    });
  }

  rows.push({
    label: "本次用于估算优先费的 CU 上限",
    hint: data.explicitLimit ? "来自 SetComputeUnitLimit" : "按 Solana 默认规则估算",
    amount: `${data.inferredLimit.toLocaleString()} CU`,
  });

  setRows("#budgetList", rows);
}

function setRows(selector, rows) {
  const container = document.querySelector(selector);
  container.innerHTML = rows
    .map(
      (row) => `
        <div class="row">
          <div>
            <strong>${escapeHtml(row.label)}</strong>
            <small>${escapeHtml(row.hint || "")}</small>
            ${row.code ? `<code>${escapeHtml(row.code)}</code>` : ""}
            ${row.tags?.length ? `<div class="tag-line">${row.tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}</div>` : ""}
          </div>
          <div class="amount ${row.amountClass || ""}">${escapeHtml(row.amount || "-")}</div>
        </div>
      `,
    )
    .join("");
}

function formatSol(lamports) {
  const sol = lamports / LAMPORTS_PER_SOL;
  const usdt = solUsdtPrice ? ` ≈ ${formatUsdt(sol * solUsdtPrice)} USDT` : "";
  return `${trimNumber(sol, 9)} SOL${usdt}`;
}

function formatSolOnly(lamports) {
  return `${trimNumber(lamports / LAMPORTS_PER_SOL, 9)} SOL`;
}

function formatSolUsdtOnly(lamports) {
  if (!solUsdtPrice) return "USDT 暂不可用";
  return `≈ ${formatUsdt((lamports / LAMPORTS_PER_SOL) * solUsdtPrice)} USDT`;
}

function formatLamports(lamports) {
  return `${lamports.toLocaleString()} lamports (${formatSol(lamports)})`;
}

function formatTokenAmount(amountRaw, decimals = 0, mint = "") {
  const sign = amountRaw < 0n ? "-" : "";
  const absolute = amountRaw < 0n ? -amountRaw : amountRaw;
  const amount = Number(absolute) / 10 ** decimals;
  const symbol = tokenSymbol(mint);
  const usdtValue = estimateUsdtForToken(amountRaw, decimals, mint);
  const usdt = usdtValue !== null ? ` ≈ ${formatUsdt(usdtValue)} USDT` : "";
  return `${sign}${trimNumber(amount, decimals > 6 ? 9 : decimals)} ${symbol}${usdt}`;
}

function formatCandidateAmount(item) {
  if (item.type === "sol") return formatLamports(item.lamports);
  return formatTokenAmount(item.amountRaw, item.decimals, item.mint);
}

function summarizeFeeCandidates(candidates) {
  const map = new Map();
  for (const item of candidates) {
    const key = `${item.label}:${item.type}:${item.mint || "SOL"}`;
    const existing =
      map.get(key) ||
      {
        label: item.label,
        type: item.type,
        mint: item.mint,
        decimals: item.decimals,
        lamports: 0,
        amountRaw: 0n,
        count: 0,
        confidence: item.confidence,
        tags: new Set(),
      };
    existing.count += 1;
    existing.confidence = existing.confidence === "较高" || item.confidence === "较高" ? "较高" : item.confidence;
    if (item.type === "sol") existing.lamports += item.lamports;
    else existing.amountRaw += item.amountRaw;
    existing.tags.add(item.type === "sol" ? "SOL" : tokenSymbol(item.mint));
    map.set(key, existing);
  }

  return [...map.values()].map((item) => ({
    label: item.label,
    asset: item.type === "sol" ? "SOL" : tokenSymbol(item.mint),
    count: item.count,
    confidence: item.confidence,
    amount: item.type === "sol" ? formatLamports(item.lamports) : formatTokenAmount(item.amountRaw, item.decimals, item.mint),
    usdtValue: item.type === "sol" ? estimateUsdtForSolLamports(item.lamports) : estimateUsdtForToken(item.amountRaw, item.decimals, item.mint),
    tags: [...item.tags],
  }));
}

function bucketFeeCandidates(candidates) {
  const buckets = {
    pump: [],
    route: [],
    other: [],
  };

  for (const item of candidates) {
    const label = item.label.toLowerCase();
    if (label.includes("pump") || item.program === PUMP_FEES_PROGRAM || item.program === PUMP_FUN_PROGRAM || item.program === PUMP_AMM_PROGRAM) {
      buckets.pump.push(item);
    } else if (
      item.program === FLASHX_PROGRAM ||
      item.program === AXIOM_FRONT_SIGNAL ||
      label.includes("gmgn") ||
      label.includes("router") ||
      label.includes("jupiter") ||
      label.includes("jup") ||
      label.includes("路由") ||
      label.includes("referral") ||
      label.includes("1%")
    ) {
      buckets.route.push(item);
    } else {
      buckets.other.push(item);
    }
  }

  return buckets;
}

function formatPumpBucket(pumpInfo, items) {
  const explicit = formatBucketAmount(items);
  if (items.length) return explicit;

  if (!pumpInfo.detected) {
    return {
      amount: "未经过 Pump.fun",
      detail: "本交易未命中 Pump.fun / PumpSwap 程序",
    };
  }

  if (pumpInfo.estimated.length) {
    const estimate = pumpInfo.estimated[0];
    if (estimate.amount !== null) {
      return {
        amount: `≈ ${formatUsdt(estimate.amount)} USDT`,
        detail: `${estimate.label}：${estimate.detail}`,
      };
    }
    return {
      amount: "池子内嵌费用",
      detail: estimate.detail,
    };
  }

  return {
    amount: "检测到 Pump 程序",
    detail: `命中 ${pumpInfo.programs.map((item) => item.label).join("、")}；未发现独立转账费用，费用可能已内嵌在池子价格中`,
  };
}

function formatRouterBucket(ruleMatches, items) {
  if (items.length) return formatBucketAmount(items);

  const routerMatches = (ruleMatches || []).filter((match) => match.category === "router");
  if (!routerMatches.length) {
    return {
      amount: "未发现单独收费",
      detail: "未命中 Jupiter / GMGN / Raydium Router 等交易工具规则",
    };
  }

  return {
    amount: "未发现单独收费",
    detail: `命中 ${routerMatches.map((match) => match.name).join("、")}；未发现显式 router/referral 转账`,
  };
}

function formatBucketAmount(items) {
  if (!items.length) {
    return {
      amount: "未识别",
      detail: "未发现明确或候选费用",
    };
  }

  const groups = summarizeFeeCandidates(items);
  const parts = groups.map((item) => {
    const usdt = item.usdtValue !== null ? ` ≈ ${formatUsdt(item.usdtValue)} USDT` : "";
    return `${item.amount}${usdt}`;
  });
  const usdtTotal = groups.reduce((sum, item) => sum + (item.usdtValue || 0), 0);

  return {
    amount: usdtTotal ? `≈ ${formatUsdt(usdtTotal)} USDT` : parts.join(" / "),
    detail: `${items.length} 笔候选：${groups.map((item) => `${item.asset} ${item.amount}`).join(" / ")}`,
  };
}

function estimateTradeNotionalUsdt(data) {
  const values = [];

  for (const candidate of data.feeAudit?.candidates || []) {
    if (!candidate.totalOut) continue;
    const value =
      candidate.type === "sol"
        ? estimateUsdtForSolLamports(Number(candidate.totalOut))
        : estimateUsdtForToken(candidate.totalOut, candidate.decimals, candidate.mint);
    if (value) values.push(value);
  }

  for (const transfer of data.feeAudit?.transferRows || []) {
    let value = null;
    if (transfer.kind === "token" && transfer.amountRaw > 0n) {
      value = estimateUsdtForToken(transfer.amountRaw, transfer.decimals, transfer.mint);
    } else if (transfer.kind === "sol" && transfer.lamports > 0) {
      value = estimateUsdtForSolLamports(transfer.lamports);
    }
    if (value) values.push(value);
  }

  return values.length ? Math.max(...values) : null;
}

function estimateUsdtForSolLamports(lamports) {
  if (!solUsdtPrice || !lamports) return 0;
  return (lamports / LAMPORTS_PER_SOL) * solUsdtPrice;
}

function estimateUsdtForToken(amountRaw, decimals = 0, mint = "") {
  const amount = Number(amountRaw < 0n ? -amountRaw : amountRaw) / 10 ** decimals;
  if (mint === WSOL_MINT) return solUsdtPrice ? amount * solUsdtPrice : null;
  if (USDT_VALUED_MINTS.has(mint)) return amount;
  return null;
}

function signedLamports(lamports) {
  const sign = lamports > 0 ? "+" : "";
  return `${sign}${formatLamports(lamports)}`;
}

function trimNumber(value, decimals) {
  return value.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals,
  });
}

function formatUsdt(value) {
  if (!Number.isFinite(value)) return "-";
  if (Math.abs(value) > 1) return trimNumber(value, 4);
  if (Math.abs(value) > 0.0001) return trimNumber(value, 8);
  return trimNumber(value, 12);
}

function formatPriceTime(value) {
  if (!value) return "刚刚";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "刚刚";
  return date.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function shortAddress(address) {
  if (!address || address.length < 12) return address || "";
  return `${address.slice(0, 6)}...${address.slice(-6)}`;
}

function shortMint(mint) {
  if (!mint) return "Unknown";
  if (MINT_LABELS[mint]) return MINT_LABELS[mint];
  return shortAddress(mint);
}

function tokenSymbol(mint) {
  return MINT_LABELS[mint] || shortMint(mint);
}

function programLabel(programId) {
  if (!programId) return "";
  return PROGRAM_LABELS[programId] || shortAddress(programId);
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) element.textContent = value;
}

function showError(message) {
  notice.textContent = message;
  notice.classList.remove("hidden");
}

function hideError() {
  notice.classList.add("hidden");
}

function setLoading(isLoading) {
  analyzeButton.disabled = isLoading;
  analyzeButton.textContent = isLoading ? "分析中..." : "⌕ 分析交易";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
