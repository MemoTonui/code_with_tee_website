// Builds the enquiry email sent to info@lsr.co.ke
// Inline styles + tables only: email clients ignore <style> tags and Tailwind

export type Enquiry = {
  name: string;
  email: string;
  interest: string;
  age: string;
  message: string;
};

// Match these to the colours in your Tailwind config
const COLORS = {
  ink: "#1F1B2D",
  pink: "#EF4A7C",
  teal: "#14A39A",
  cream: "#FFF8F1",
  muted: "#7A7487",
  border: "#EEE7DF",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!
  );
}

function detailRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 0;border-bottom:1px solid ${COLORS.border};width:38%;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${COLORS.muted};vertical-align:top;">
        ${label}
      </td>
      <td style="padding:14px 0;border-bottom:1px solid ${COLORS.border};font-size:15px;font-weight:700;color:${COLORS.ink};">
        ${value}
      </td>
    </tr>`;
}

export function buildContactEmail(enquiry: Enquiry) {
  const { name, email, interest, age, message } = enquiry;

  const receivedAt = new Date().toLocaleString("en-KE", {
    timeZone: "Africa/Nairobi",
    dateStyle: "medium",
    timeStyle: "short",
  });

  const firstName = name.split(" ")[0];
  const replyLink = `mailto:${email}?subject=${encodeURIComponent(
    `Re: Your LSR enquiry`
  )}&body=${encodeURIComponent(`Hi ${firstName},\n\n`)}`;

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    interest: escapeHtml(interest),
    age: escapeHtml(age.replace("-", "–")),
    message: escapeHtml(message),
  };

  const subject = `Website enquiry from ${name} (${interest}, ages ${age})`;

  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0;padding:0;background:${COLORS.cream};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLORS.cream};padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

            <!-- Brand -->
            <tr>
              <td style="padding:0 4px 18px;">
                <span style="font-size:26px;font-weight:900;letter-spacing:-1.5px;color:${COLORS.ink};">LSR</span>
                <span style="font-size:12px;font-weight:600;color:${COLORS.muted};padding-left:8px;">Learn. Solve. Repeat.</span>
              </td>
            </tr>

            <!-- Card -->
            <tr>
              <td style="background:#ffffff;border-radius:24px;padding:36px 32px;border:1px solid ${COLORS.border};">

                <p style="margin:0;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:${COLORS.pink};">
                  New enquiry
                </p>

                <h1 style="margin:12px 0 0;font-size:30px;line-height:1.1;font-weight:900;letter-spacing:-0.8px;color:${COLORS.ink};">
                  ${safe.name} wants to start building.
                </h1>

                <!-- Tags -->
                <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:20px;">
                  <tr>
                    <td style="background:${COLORS.ink};color:#ffffff;border-radius:999px;padding:8px 14px;font-size:13px;font-weight:700;">
                      ${safe.interest}
                    </td>
                    <td style="width:8px;"></td>
                    <td style="background:${COLORS.cream};color:${COLORS.ink};border-radius:999px;padding:8px 14px;font-size:13px;font-weight:700;">
                      Ages ${safe.age}
                    </td>
                  </tr>
                </table>

                <!-- Details -->
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;border-top:1px solid ${COLORS.border};">
                  ${detailRow("Parent", safe.name)}
                  ${detailRow(
                    "Email",
                    `<a href="mailto:${safe.email}" style="color:${COLORS.ink};text-decoration:underline;">${safe.email}</a>`
                  )}
                  ${detailRow("Interest", safe.interest)}
                  ${detailRow("Child's age", safe.age)}
                </table>

                <!-- Message -->
                <p style="margin:28px 0 10px;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:${COLORS.muted};">
                  Their message
                </p>
                <div style="background:${COLORS.cream};border-left:4px solid ${COLORS.teal};border-radius:12px;padding:18px 20px;font-size:15px;line-height:1.65;color:${COLORS.ink};white-space:pre-wrap;">${
                  safe.message || `<span style="color:${COLORS.muted};">No message added.</span>`
                }</div>

                <!-- Reply -->
                <p style="margin:28px 0 0;font-size:14px;line-height:1.6;color:${COLORS.ink};">
                  To respond, just hit Reply. It goes straight to ${escapeHtml(firstName)} at
                  <a href="${replyLink}" style="color:${COLORS.pink};font-weight:700;">${safe.email}</a>.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:20px 4px 0;font-size:12px;line-height:1.6;color:${COLORS.muted};">
                Sent from the contact form on lsr.co.ke · ${receivedAt} (Nairobi)
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const text = [
    `NEW ENQUIRY — LSR`,
    ``,
    `Parent: ${name}`,
    `Email: ${email}`,
    `Interest: ${interest}`,
    `Child's age: ${age}`,
    ``,
    `Message:`,
    message || "(none)",
    ``,
    `Reply to this email to respond to ${firstName}.`,
    `Received ${receivedAt} (Nairobi)`,
  ].join("\n");

  return { subject, html, text };
}