'use client';

import SectionHeading from './section-heading';
import Project from './project';
import { projectsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useReducedMotion } from 'framer-motion';
import { LuConstruction } from 'react-icons/lu';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

const TOTAL_SLOTS = 3;

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.2);
  const shouldReduce = useReducedMotion();
  const intl = useIntl();
  const placeholderCount = TOTAL_SLOTS - projectsData.length;

  return (
    <section ref={ref} id="projects" className="mb-28 max-w-[56rem] scroll-mt-28 sm:mb-40">
      <SectionHeading>{intl.formatMessage({ id: TranslationKeys.SECTION_PROJECTS })}</SectionHeading>

      {/* Coming-soon notice */}
      {placeholderCount > 0 && (
        <motion.div
          className="mb-8 flex items-center gap-3 rounded-2xl border border-amber-200/60 dark:border-amber-800/40 bg-amber-50/60 dark:bg-amber-950/20 px-5 py-4"
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <LuConstruction className="shrink-0 text-amber-500 dark:text-amber-400 text-xl" />
          <p className="text-sm text-amber-800 dark:text-amber-300">
            {intl.formatMessage({ id: TranslationKeys.PROJECTS_NOTICE })}
          </p>
        </motion.div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Real project cards */}
        {projectsData.map((project, index) => (
          <Project key={index} {...project} index={index} />
        ))}

        {/* Placeholder cards for remaining slots */}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <motion.div
            key={`placeholder-${index}`}
            className="group relative flex flex-col gap-3 rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.03] px-6 py-7 overflow-hidden"
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (projectsData.length + index) * 0.08 }}
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

            <div className="h-32 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-white/[0.04] dark:to-white/[0.02] border border-black/[0.05] dark:border-white/[0.05] flex items-center justify-center">
              <span className="text-3xl opacity-20 select-none">?</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-gray-400 dark:text-gray-500 italic">
                {intl.formatMessage({ id: TranslationKeys.PROJECTS_CARD_TITLE })}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-600 leading-relaxed">
                {intl.formatMessage({ id: TranslationKeys.PROJECTS_CARD_DESC })}
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-1 px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/[0.04] border border-black/[0.06] dark:border-white/[0.06] text-gray-400 dark:text-gray-600 text-[0.65rem] font-semibold uppercase tracking-wider">
              {intl.formatMessage({ id: TranslationKeys.PROJECTS_BADGE })}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
