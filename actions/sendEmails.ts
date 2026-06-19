'use server';

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const buildEmailHtml = (message: string, senderEmail: string) => {
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');
  const safeEmail = escapeHtml(senderEmail);
  const date = new Date().toLocaleDateString('en-CA', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'America/Toronto',
    timeZoneName: 'short',
  });

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>New message — Portfolio</title>
</head>
<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f1f5f9;padding:40px 16px">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:580px">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1e1b4b 0%,#312e81 50%,#4c1d95 100%);border-radius:16px 16px 0 0;padding:36px 40px 32px">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <!-- Monogram -->
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="background:linear-gradient(135deg,#a78bfa,#ec4899);border-radius:10px;width:42px;height:42px;text-align:center;vertical-align:middle">
                          <span style="font-size:15px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;line-height:42px;display:block">MS</span>
                        </td>
                        <td style="padding-left:14px;vertical-align:middle">
                          <span style="display:block;font-size:13px;font-weight:600;color:#c4b5fd;letter-spacing:0.06em;text-transform:uppercase">Mouhcine Soukaki</span>
                          <span style="display:block;font-size:11px;color:#7c72a0;margin-top:2px;letter-spacing:0.04em">Portfolio · Contact Form</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:28px">
                    <p style="margin:0;font-size:22px;font-weight:700;color:#ffffff;line-height:1.3;letter-spacing:-0.4px">New message<br>from your portfolio</p>
                    <p style="margin:10px 0 0;font-size:12px;color:#7c72a0;line-height:1.5">${date}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#ffffff;padding:36px 40px 28px">

              <!-- Sender chip -->
              <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:28px">
                <tr>
                  <td style="background:#f5f3ff;border:1px solid #ede9fe;border-radius:8px;padding:10px 16px">
                    <table cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="vertical-align:middle">
                          <span style="display:inline-block;width:8px;height:8px;background:#7c3aed;border-radius:50%;margin-right:10px;vertical-align:middle"></span>
                        </td>
                        <td style="vertical-align:middle">
                          <span style="font-size:11px;font-weight:600;color:#6d28d9;letter-spacing:0.06em;text-transform:uppercase;display:block">From</span>
                          <span style="font-size:13px;color:#374151;font-weight:500">${safeEmail}</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Message label -->
              <p style="margin:0 0 12px;font-size:11px;font-weight:600;color:#9ca3af;letter-spacing:0.08em;text-transform:uppercase">Message</p>

              <!-- Message content -->
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-left:3px solid #7c3aed;padding-left:20px">
                    <p style="margin:0;font-size:15px;line-height:1.8;color:#374151">${safeMessage}</p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Reply CTA -->
          <tr>
            <td style="background:#fafafa;border-top:1px solid #f3f4f6;padding:24px 40px;border-radius:0 0 16px 16px">
              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <p style="margin:0 0 16px;font-size:13px;color:#9ca3af;line-height:1.5">Hit reply or click the button to respond directly to <strong style="color:#6b7280;font-weight:600">${safeEmail}</strong></p>
                    <a href="mailto:${safeEmail}" style="display:inline-block;background:#111827;color:#ffffff;font-size:13px;font-weight:600;text-decoration:none;padding:11px 24px;border-radius:8px;letter-spacing:0.01em">Reply to ${safeEmail} &rarr;</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px 0;text-align:center">
              <p style="margin:0;font-size:11px;color:#cbd5e1;line-height:1.6">
                This email was generated by the contact form at <span style="color:#94a3b8">mouhcinesoukaki.com</span>
                &nbsp;&middot;&nbsp; Ottawa, ON &nbsp;&middot;&nbsp; Canada
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
};

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return { error: 'invalid sender email' };
  }

  if (!validateString(message, 5000)) {
    return { error: 'invalid sender message' };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'soukaki.m@gmail.com',
      subject: `New message from ${senderEmail as string} — Portfolio`,
      replyTo: senderEmail as string,
      html: buildEmailHtml(message as string, senderEmail as string),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
