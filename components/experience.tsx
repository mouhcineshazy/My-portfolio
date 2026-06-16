'use client';

import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useReducedMotion } from 'framer-motion';
import { LuGraduationCap, LuAward } from 'react-icons/lu';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

export default function Experience() {
  const { ref } = useSectionInView('Experience', 0.2);
  const shouldReduce = useReducedMotion();
  const intl = useIntl();

  return (
    <section
      ref={ref}
      id="experience"
      className="mb-28 max-w-[48rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>{intl.formatMessage({ id: TranslationKeys.SECTION_EXPERIENCE })}</SectionHeading>

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-[1.4rem] top-3 bottom-3 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-800 to-transparent" />

        <ol className="space-y-6">
          {experiencesData.map((item, index) => (
            <motion.li
              key={index}
              className="relative flex gap-6"
              initial={shouldReduce ? {} : { opacity: 0, x: -20 }}
              whileInView={shouldReduce ? {} : { opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex items-start pt-5 shrink-0">
                <div className="flex items-center justify-center w-[2.8rem] h-[2.8rem] rounded-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 shadow-sm text-base">
                  {item.icon}
                </div>
              </div>

              {/* Card */}
              <div className="flex-1 rounded-2xl bg-white/60 dark:bg-white/[0.03] border border-black/[0.06] dark:border-white/[0.06] px-6 py-5 shadow-sm">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
                      {intl.formatMessage({ id: item.titleKey })}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                      {intl.formatMessage({ id: item.locationKey })}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs font-medium text-gray-400 dark:text-gray-500 mt-0.5 sm:text-right whitespace-nowrap">
                    {intl.formatMessage({ id: item.dateKey })}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {intl.formatMessage({ id: item.descriptionKey })}
                </p>

                {/* Education badge */}
                {item.icon.type === LuGraduationCap && (
                  <span className="inline-flex items-center gap-1 mt-3 px-2.5 py-0.5 rounded-full bg-violet-50 dark:bg-violet-950/30 border border-violet-200/60 dark:border-violet-800/40 text-violet-600 dark:text-violet-400 text-[0.68rem] font-semibold uppercase tracking-wider">
                    {intl.formatMessage({ id: TranslationKeys.EXPERIENCE_EDUCATION_BADGE })}
                  </span>
                )}

                {/* Certification badge */}
                {item.icon.type === LuAward && (
                  <span className="inline-flex items-center gap-1 mt-3 px-2.5 py-0.5 rounded-full bg-orange-50 dark:bg-orange-950/30 border border-orange-200/60 dark:border-orange-800/40 text-orange-600 dark:text-orange-400 text-[0.68rem] font-semibold uppercase tracking-wider">
                    {intl.formatMessage({ id: TranslationKeys.EXPERIENCE_CERTIFICATION_BADGE })}
                  </span>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
