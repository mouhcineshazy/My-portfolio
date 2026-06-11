# Setup Guide

Technical reference for email integration and deployment.

---

## Email Integration

The contact form uses a **Next.js Server Action** (`actions/sendEmails.ts`) — no separate API route needed. The flow:

1. The `<form action={sendEmail}>` in `contact.tsx` calls the Server Action directly.
2. Server-side validation with `validateString()` ensures email ≤ 500 chars and message ≤ 5 000 chars.
3. If valid, `resend.emails.send()` delivers a React Email template (`email/contact-form-email.tsx`) styled with Tailwind.
4. The `replyTo` field is set to the sender's email so you can reply directly from your inbox.

To test email locally, set `RESEND_API_KEY` in `.env.local`. Emails from the free tier are sent from `onboarding@resend.dev`. To use a custom domain, update the `from` field and verify the domain in the Resend dashboard.

---

## Deployment

This project is optimised for **Vercel**.

1. Push to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Add the `RESEND_API_KEY` environment variable in the Vercel project settings.
4. Deploy — Vercel auto-detects Next.js and configures the build.

The project has no database dependency, making cold-start latency negligible.
