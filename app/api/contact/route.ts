import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmail } from "../../../app/lib/contact-email";

// Nodemailer needs the Node.js runtime (not Edge)
export const runtime = "nodejs";

const INTERESTS = ["Software Engineering", "Robotics", "Both"];
const AGES = ["6-8", "9-12", "13-15", "16-18"];
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields, people don't
  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim().slice(0, 100);
  const email = String(body.email ?? "").trim().slice(0, 200);
  const interest = String(body.interest ?? "");
  const age = String(body.age ?? "");
  const message = String(body.message ?? "").trim().slice(0, 5000);

  if (!name || !EMAIL_RE.test(email) || !INTERESTS.includes(interest) || !AGES.includes(age)) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 }
    );
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO_EMAIL } = process.env;

  const missing = Object.entries({ SMTP_HOST, SMTP_USER, SMTP_PASS })
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missing.length) {
    console.error(`Contact form: missing env vars: ${missing.join(", ")}`);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }

  const port = Number(SMTP_PORT || 465);

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465, // 465 = SSL, 587 = STARTTLS
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  const { subject, html, text } = buildContactEmail({ name, email, interest, age, message });

  try {
    await transporter.sendMail({
      // Must be the authenticated mailbox, or Truehost will reject/spam it
      from: `"LSR Website" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL || SMTP_USER,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject,
      text,
      html,
    });
  } catch (err) {
    console.error("Contact form: SMTP error", err);
    return NextResponse.json(
      { error: "We couldn't send your message. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}