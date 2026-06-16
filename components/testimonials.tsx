'use client';

import SectionHeading from './section-heading';
import { testimonialsData } from '@/lib/data';
import { motion, useReducedMotion } from 'framer-motion';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

const AVATAR_COLORS = [
  'from-violet-400 to-fuchsia-400',
  'from-blue-400 to-cyan-400',
  'from-emerald-400 to-teal-400',
  'from-amber-400 to-orange-400',
] as const;

export default function Testimonials() {
  const intl = useIntl();
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="testimonials"
      className="mb-28 max-w-[56rem] w-full scroll-mt-28 sm:mb-40"
    >
      <SectionHeading>
        {intl.formatMessage({ id: TranslationKeys.SECTION_TESTIMONIALS })}
      </SectionHeading>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="
              relative flex flex-col gap-5 rounded-2xl px-7 py-7
              bg-white/60 dark:bg-white/[0.03]
              border border-black/[0.06] dark:border-white/[0.06]
              hover:bg-white/80 dark:hover:bg-white/[0.05]
              hover:border-black/[0.1] dark:hover:border-white/[0.1]
              hover:shadow-sm
              transition-all duration-200 group
            "
            initial={shouldReduce ? {} : { opacity: 0, y: 28 }}
            whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.1, ease: 'easeOut' }}
          >
            {/* Decorative quote mark */}
            <span
              aria-hidden
              className="text-[3.5rem] leading-none font-bold text-violet-300/50 dark:text-violet-500/25 select-none -mb-2"
            >
              ❝
            </span>

            {/* Quote text */}
            <p className="text-sm leading-[1.85] text-gray-600 dark:text-gray-300 flex-1">
              {intl.locale === 'fr' ? testimonial.text_FR : testimonial.text_EN}
            </p>

            {/* Attribution */}
            <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06] dark:border-white/[0.06]">
              {/* Avatar */}
              <div
                className={`
                  flex items-center justify-center w-10 h-10 rounded-full
                  bg-gradient-to-br ${AVATAR_COLORS[index]}
                  text-white text-xs font-bold tracking-wide shrink-0
                  shadow-sm
                `}
              >
                {testimonial.initials}
              </div>

              {/* Name + role */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 leading-snug truncate">
                  {testimonial.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {testimonial.title} · {testimonial.company} · {testimonial.date}
                </p>
              </div>

              {/* Translation badge */}
              {intl.locale !== testimonial.originalLang && (
                <span className="shrink-0 text-[0.6rem] font-medium uppercase tracking-wider text-violet-500 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-700/40 rounded-full px-2 py-0.5">
                  {intl.formatMessage({
                    id: testimonial.originalLang === 'fr'
                      ? TranslationKeys.TESTIMONIALS_TRANSLATED_FROM_FR
                      : TranslationKeys.TESTIMONIALS_TRANSLATED_FROM_EN,
                  })}
                </span>
              )}
            </div>

            {/* Subtle hover shimmer */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-violet-50/30 via-transparent to-transparent dark:from-violet-900/10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
