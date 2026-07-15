(() => {
  "use strict";

  const status = document.getElementById("payment-sync-status");
  if (!status) return;

  const source = new URLSearchParams(window.location.search);
  const required = ["pid", "trade_no", "out_trade_no", "type", "name", "money", "trade_status", "sign", "sign_type"];
  const allowed = [...required, "param"];
  const hasSignedReturn = required.every((key) => source.get(key));

  function show(state, message) {
    status.dataset.state = state;
    status.textContent = message;
  }

  if (!hasSignedReturn) {
    show("warning", "本页没有检测到完整的付款结果。若您刚完成付款，请回到 Edge 刷新会员状态；仍未到账时可在账号页手动同步订单。");
    return;
  }

  if (allowed.some((key) => source.getAll(key).length > 1)) {
    show("error", "付款结果包含重复字段，自动同步已停止。请回到 Edge，在账号页手动同步订单。");
    return;
  }

  if (source.get("trade_status") !== "TRADE_SUCCESS" || source.get("sign_type").toUpperCase() !== "MD5") {
    show("warning", "支付平台尚未返回可确认的付款成功状态。请回到 Edge 稍后刷新会员状态。");
    return;
  }

  const forwarded = new URLSearchParams();
  for (const key of allowed) {
    if (source.has(key)) forwarded.set(key, source.get(key));
  }

  const endpoint = new URL("https://paper-sentinel-extension-production.up.railway.app/v1/billing/zpay");
  endpoint.search = forwarded.toString();

  fetch(endpoint, {
    method: "GET",
    mode: "cors",
    credentials: "omit",
    cache: "no-store",
    referrerPolicy: "no-referrer",
    headers: { Accept: "text/plain" },
  })
    .then(async (response) => {
      const body = await response.text();
      if (!response.ok || body.trim() !== "success") throw new Error("payment sync rejected");
      show("success", "付款已经确认，会员已安全同步。现在请回到 Edge，点击“刷新会员状态”。");
    })
    .catch(() => {
      show("error", "付款已成功返回，但自动同步暂未完成。请回到 Edge，在账号页点击“已付款？同步支付结果”，或提交私密工单。");
    });
})();
