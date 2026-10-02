import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";
export const runtime = "nodejs";
const recipient = "jorge.joshua0124@gmail.com";
const schema = z.object({
  name: z.string().trim().min(1).max(100).regex(/^[^\r\n]+$/),
  email: z.string().trim().email().max(254),
  subject: z.string().trim().min(1).max(160).regex(/^[^\r\n]+$/),
  message: z.string().trim().min(1).max(10000),
  website: z.string().max(200).optional(),
});
const requests = new Map<string, { count: number; expires: number }>();
export async function POST(request: NextRequest) {
  if (request.headers.get("origin") && request.headers.get("origin") !== request.nextUrl.origin) {
    return NextResponse.json({ error: "Please send your message from the portfolio." }, { status: 403 });
  }
  let raw: string;
  try { raw = await request.text(); } catch { return NextResponse.json({ error: "Invalid message." }, { status: 400 }); }
  if (raw.length > 16000) return NextResponse.json({ error: "Message is too long." }, { status: 413 });
  let value: unknown;
  try { value = JSON.parse(raw); } catch { return NextResponse.json({ error: "Invalid message." }, { status: 400 }); }
  const parsed = schema.safeParse(value);
  if (!parsed.success) return NextResponse.json({ error: "Please enter a name, valid email, subject, and message." }, { status: 400 });
  if (parsed.data.website) return NextResponse.json({ error: "Unable to send this message." }, { status: 400 });
  const now = Date.now();
  for (const [key, item] of requests) if (item.expires < now) requests.delete(key);
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  const limit = requests.get(ip);
  if (limit && limit.expires > now && limit.count >= 5) return NextResponse.json({ error: "Too many messages. Please try again in a few minutes." }, { status: 429 });
  requests.set(ip, limit && limit.expires > now ? { ...limit, count: limit.count + 1 } : { count: 1, expires: now + 600000 });
  const user = process.env.GMAIL_USER || recipient;
  const password = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
  if (!password) return NextResponse.json({ error: "Message delivery is not configured yet. Please contact Jorge directly by email or phone." }, { status: 503 });
  const { name, email, subject, message } = parsed.data;
  try {
    const transport = nodemailer.createTransport({ service: "gmail", auth: { user, pass: password }, connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 20000 });
    const result = await transport.sendMail({
      from: { name: "Jorge Portfolio", address: user }, to: recipient,
      replyTo: { name, address: email }, subject: `[Portfolio] ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });
    if (!result.accepted?.length) throw new Error("Message rejected");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Message could not be sent. Please try again later or contact Jorge directly." }, { status: 502 });
  }
}
