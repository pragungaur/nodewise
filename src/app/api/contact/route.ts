export async function POST(req: Request) {
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
