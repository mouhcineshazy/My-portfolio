'use client';

import SectionHeading from './section-heading';
import { motion, useReducedMotion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

const statKeys = [
  { value: '9+', labelKey: TranslationKeys.ABOUT_STAT_EXPERIENCE },
  { value: '6', labelKey: TranslationKeys.ABOUT_STAT_COMPANIES },
  { value: '200+', labelKey: TranslationKeys.ABOUT_STAT_RETAILERS },
  { value: 'AWS', labelKey: TranslationKeys.ABOUT_STAT_AWS },
] as const;

export default function About() {
  const { ref } = useSectionInView('About', 0.5);
  const intl = useIntl();
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="mb-28 max-w-[48rem] scroll-mt-28 sm:mb-40"
      id="about"
      ref={ref}
    >
      <SectionHeading>{intl.formatMessage({ id: TranslationKeys.SECTION_ABOUT })}</SectionHeading>

      {/* Stat cards */}
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10"
        initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {statKeys.map((stat, i) => (
          <motion.div
            key={stat.labelKey}
            className="flex flex-col items-center justify-center gap-1 py-5 px-4 rounded-2xl bg-white/60 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-center"
            initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 * i }}
          >
            <span className="text-2xl font-bold tracking-tight text-gray-950 dark:text-gray-50">
              {stat.value}
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight text-center">
              {intl.formatMessage({ id: stat.labelKey })}
            </span>
          </motion.div>
        ))}
      </motion.div>

      {/* Bio paragraphs */}
      <motion.div
        className="space-y-4 text-[1.02rem] leading-8 text-gray-600 dark:text-gray-300 text-center"
        initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
        whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: TranslationKeys.ABOUT_ME_PART_ONE }),
          }}
        />
        <p
          dangerouslySetInnerHTML={{
            __html: intl.formatMessage({ id: TranslationKeys.ABOUT_ME_PART_TWO }),
          }}
        />
      </motion.div>
    </section>
  );
}
