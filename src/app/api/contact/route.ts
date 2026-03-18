// In-memory rate limiter: max 3 submissions per IP per hour
const rateLimit = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 3;
const WINDOW_MS = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_REQUESTS) return true;

  entry.count++;
  return false;
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const { name, email, phone, message } = await req.json();

  const origin = req.headers.get("origin") ?? "https://nodewise.vercel.app";

  const res = await fetch("https://formspree.io/f/xlgpalwy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Referer: origin,
      Origin: origin,
    },
    body: JSON.stringify({ name, email, phone, message }),
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to submit" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
