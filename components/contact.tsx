'use client';

import SectionHeading from './section-heading';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmails';
import SubmitBtn from './submit-btn';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';
import { HiCheckCircle } from 'react-icons/hi';
import { useState } from 'react';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const shouldReduce = useReducedMotion();
  const intl = useIntl();
  const [isSent, setIsSent] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 max-w-[40rem] w-full scroll-mt-28"
    >
      <SectionHeading>{intl.formatMessage({ id: TranslationKeys.SECTION_CONTACT })}</SectionHeading>

      <motion.div
        initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
        whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
      >
        <p
          className="text-sm text-gray-500 dark:text-gray-400 mb-8 leading-relaxed text-center"
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: TranslationKeys.CONTACT_INTRO }),
          }}
        />

        <AnimatePresence mode="wait">
          {isSent ? (
            <motion.div
              key="confirmation"
              initial={shouldReduce ? {} : { opacity: 0, scale: 0.97, y: 12 }}
              animate={shouldReduce ? {} : { opacity: 1, scale: 1, y: 0 }}
              exit={shouldReduce ? {} : { opacity: 0, scale: 0.97, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center gap-5 py-12 px-6 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-center"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-950/40">
                <HiCheckCircle className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
              </span>

              <div className="flex flex-col gap-2">
                <p className="text-base font-medium text-gray-900 dark:text-gray-100 tracking-tight">
                  {intl.formatMessage({ id: TranslationKeys.CONTACT_SUCCESS_TITLE })}
                </p>
                <p
                  className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[26rem]"
                  dangerouslySetInnerHTML={{
                    __html: intl.formatMessage({ id: TranslationKeys.CONTACT_SUCCESS_DESC }),
                  }}
                />
              </div>

              <button
                type="button"
                onClick={() => setIsSent(false)}
                className="mt-1 text-xs text-gray-400 dark:text-gray-600 underline underline-offset-2 decoration-gray-300 dark:decoration-gray-700 hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
              >
                {intl.formatMessage({ id: TranslationKeys.CONTACT_SEND_ANOTHER })}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={shouldReduce ? {} : { opacity: 0 }}
              animate={shouldReduce ? {} : { opacity: 1 }}
              exit={shouldReduce ? {} : { opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col gap-3"
              action={async (formData) => {
                setFormError(null);
                const { error } = await sendEmail(formData);
                if (error) {
                  setFormError(error);
                  return;
                }
                setIsSent(true);
              }}
            >
              {formError && (
                <p className="text-sm text-red-500 dark:text-red-400 text-center">
                  {formError}
                </p>
              )}
              <input
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder={intl.formatMessage({ id: TranslationKeys.CONTACT_EMAIL_PLACEHOLDER })}
                className="h-12 px-4 rounded-xl bg-white/70 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-400/40 dark:focus:ring-violet-600/40 transition-shadow"
              />
              <textarea
                name="message"
                required
                maxLength={5000}
                placeholder={intl.formatMessage({ id: TranslationKeys.CONTACT_MESSAGE_PLACEHOLDER })}
                rows={6}
                className="px-4 py-3 rounded-xl bg-white/70 dark:bg-white/[0.05] border border-black/[0.08] dark:border-white/[0.08] text-sm text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-400/40 dark:focus:ring-violet-600/40 transition-shadow resize-none"
              />
              <div className="flex justify-end">
                <SubmitBtn />
              </div>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}