import React from 'react';

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export default function ContactFormEmail({ message, senderEmail }: ContactFormEmailProps) {
  return (
    <html lang="en">
      <head />
      <body style={{ backgroundColor: '#f3f4f6', color: '#111827', fontFamily: 'ui-sans-serif, system-ui, sans-serif', margin: 0, padding: 0 }}>
        <div style={{ maxWidth: '560px', margin: '2.5rem auto', backgroundColor: '#ffffff', borderRadius: '8px', padding: '2.5rem', border: '1px solid #e5e7eb' }}>
          <h2 style={{ margin: '0 0 1.25rem', lineHeight: 1.3, fontSize: '1.125rem', fontWeight: 600, color: '#111827' }}>
            You received a new message from your portfolio contact form
          </h2>
          <p style={{ margin: '0 0 1.25rem', lineHeight: 1.7, whiteSpace: 'pre-wrap', color: '#374151' }}>
            {message}
          </p>
          <hr style={{ borderColor: '#e5e7eb', margin: '1.5rem 0' }} />
          <p style={{ margin: 0, fontSize: '0.875rem', color: '#6b7280' }}>
            Reply to:{' '}
            <a href={`mailto:${senderEmail}`} style={{ color: '#7c3aed', textDecoration: 'none' }}>
              {senderEmail}
            </a>
          </p>
        </div>
      </body>
    </html>
  );
}
