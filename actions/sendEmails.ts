'use server';

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';
import ContactFormEmail from '@/email/contact-form-email';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail');
  const message = formData.get('message');

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'invalid sender email',
    };
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'invalid sender message',
    };
  }
  let data;
  try {
    data = await resend.emails.send({
      from: 'Contact form <onboarding@resend.dev>',
      to: 'soukaki.m@gmail.com',
      subject: 'Message from contact form',
      reply_to: senderEmail as string, // we are making the validation beforehand to make sure it's not null
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
