```javascript
export async function onRequest({ request }) {
  const url = new URL(request.url);
  const target = "https://fapi.binance.com" + url.pathname + url.search;
  const resp = await fetch(target, {
    method: request.method,
    headers: request.headers,
    body: request.method === "GET" || request.method === "HEAD" ? undefined : request.body
  });
  const r = new Response(resp.body, resp);
  r.headers.set("Access-Control-Allow-Origin", "*");
  return r;
}
