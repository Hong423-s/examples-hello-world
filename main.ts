Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const target = "https://fapi.binance.com" + url.pathname + url.search;
  const resp = await fetch(target, {
    method: req.method,
    headers: req.headers,
    body: req.method === "GET" || req.method === "HEAD" ? undefined : req.body,
  });
  const r = new Response(resp.body, resp);
  r.headers.set("Access-Control-Allow-Origin", "*");
  return r;
});
