export async function POST(req: Request) {
  const { name, email, phone, message } = await req.json();

  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) {
    return Response.json({ error: "Webhook not configured" }, { status: 500 });
  }

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      date: new Date().toISOString(),
      name,
      email,
      phone,
      message: message || "",
    }),
  });

  if (!res.ok) {
    return Response.json({ error: "Failed to submit" }, { status: 500 });
  }

  return Response.json({ ok: true });
}
