'use client';

import type { ProjectData } from '@/lib/types';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { useIntl } from 'react-intl';
import { LuExternalLink } from 'react-icons/lu';

type Props = ProjectData & { index: number };

export default function Project({ titleKey, descriptionKey, tags, imageUrl, url, index }: Props) {
  const intl = useIntl();
  const shouldReduce = useReducedMotion();
  const title = intl.formatMessage({ id: titleKey });
  const description = intl.formatMessage({ id: descriptionKey });

  return (
    <motion.div
      className="group relative flex flex-col rounded-2xl border border-black/[0.06] dark:border-white/[0.06] bg-white/60 dark:bg-white/[0.03] overflow-hidden"
      initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      {/* Screenshot */}
      <div className="relative h-40 overflow-hidden border-b border-black/[0.06] dark:border-white/[0.06] shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          quality={90}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 gap-3 px-6 py-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100 leading-snug">
            {title}
          </h3>
          {url && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title}`}
              className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 dark:bg-white/[0.06] border border-black/[0.06] dark:border-white/[0.06] text-gray-500 dark:text-gray-400 hover:scale-110 active:scale-100 transition-transform duration-150"
            >
              <LuExternalLink className="text-sm" />
            </a>
          )}
        </div>

        <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-300">
          {description}
        </p>

        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 text-[0.62rem] font-semibold uppercase tracking-widest rounded-full bg-black/[0.06] dark:bg-white/[0.06] text-gray-600 dark:text-gray-400 border border-black/[0.05] dark:border-white/[0.05]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
