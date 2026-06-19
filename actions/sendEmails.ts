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
  const safeMessage = escapeHtml(message);
  const safeEmail = escapeHtml(senderEmail);
  return `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8" /></head>
<body style="background:#f3f4f6;color:#111827;font-family:ui-sans-serif,system-ui,sans-serif;margin:0;padding:0">
  <div style="max-width:560px;margin:2.5rem auto;background:#ffffff;border-radius:8px;padding:2.5rem;border:1px solid #e5e7eb">
    <h2 style="margin:0 0 1.25rem;line-height:1.3;font-size:1.125rem;font-weight:600;color:#111827">
      You received a new message from your portfolio contact form
    </h2>
    <p style="margin:0 0 1.25rem;line-height:1.7;white-space:pre-wrap;color:#374151">${safeMessage}</p>
    <hr style="border-color:#e5e7eb;margin:1.5rem 0" />
    <p style="margin:0;font-size:0.875rem;color:#6b7280">
      Reply to: <a href="mailto:${safeEmail}" style="color:#7c3aed;text-decoration:none">${safeEmail}</a>
    </p>
  </div>
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
      subject: 'Message from contact form',
      replyTo: senderEmail as string,
      html: buildEmailHtml(message as string, senderEmail as string),
    });
  } catch (error: unknown) {
    return { error: getErrorMessage(error) };
  }

  return { data };
};
