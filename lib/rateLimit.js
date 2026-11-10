// In-memory limiter: fine for one server, only best-effort on serverless. Use Upstash/Redis for strict limits.
const hits = new Map();
export function limited(key, max = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now(),
    list = (hits.get(key) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(key, list);
  if (hits.size > 5000) hits.clear();
  return list.length > max;
}
