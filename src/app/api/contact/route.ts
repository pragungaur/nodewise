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

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const body = JSON.stringify({
    date: new Date().toISOString(),
    name,
    email,
    phone,
    message: message || "",
  });

  // Google Apps Script redirects POST requests (302). Node's fetch drops
  // the body when following a redirect, so we intercept and re-POST manually.
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    redirect: "manual",
  });

  let finalRes: Response;
  if (res.status === 301 || res.status === 302) {
    const location = res.headers.get("location");
    if (!location) {
      return Response.json({ error: "Redirect with no location" }, { status: 500 });
    }
    finalRes = await fetch(location, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
    });
  } else {
    finalRes = res;
  }

  if (!finalRes.ok) {
    return Response.json({ error: "Failed to submit" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
