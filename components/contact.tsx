'use client';

import SectionHeading from './section-heading';
import { motion, useReducedMotion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmails';
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

export default function Contact() {
  const { ref } = useSectionInView('Contact');
  const shouldReduce = useReducedMotion();
  const intl = useIntl();

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

        <form
          className="flex flex-col gap-3"
          action={async (formData) => {
            const { error } = await sendEmail(formData);
            if (error) {
              toast.error(error);
              return;
            }
            toast.success(intl.formatMessage({ id: TranslationKeys.CONTACT_SUCCESS }));
          }}
        >
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
        </form>
      </motion.div>
    </section>
  );
}
