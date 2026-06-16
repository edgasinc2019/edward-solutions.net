const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

export async function onRequestOptions() {
  return new Response(null, { headers: CORS_HEADERS });
}

export async function onRequestGet(context) {
  const count = parseInt(await context.env.VISITS_KV.get('count') || '0', 10);
  return new Response(JSON.stringify({ count }), {
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}

export async function onRequestPost(context) {
  let count = parseInt(await context.env.VISITS_KV.get('count') || '0', 10);
  count += 1;
  await context.env.VISITS_KV.put('count', count.toString());
  return new Response(JSON.stringify({ count }), {
    headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
  });
}
