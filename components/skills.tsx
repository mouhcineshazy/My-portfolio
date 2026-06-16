'use client';

import SectionHeading from './section-heading';
import { skillCategories } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useReducedMotion } from 'framer-motion';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.3);
  const shouldReduce = useReducedMotion();
  const intl = useIntl();

  return (
    <section
      ref={ref}
      id="skills"
      className="mb-28 max-w-[56rem] scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>{intl.formatMessage({ id: TranslationKeys.SECTION_SKILLS })}</SectionHeading>

      <div className="flex flex-col gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.labelKey}
            initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIndex * 0.07 }}
          >
            {/* Category label */}
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3 px-1">
              {intl.formatMessage({ id: category.labelKey })}
            </p>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 text-sm font-medium rounded-xl bg-white/70 dark:bg-white/[0.05] border border-black/[0.07] dark:border-white/[0.07] text-gray-700 dark:text-gray-300"
                  initial={shouldReduce ? {} : { opacity: 0, scale: 0.9 }}
                  whileInView={shouldReduce ? {} : { opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: catIndex * 0.05 + skillIndex * 0.03 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
