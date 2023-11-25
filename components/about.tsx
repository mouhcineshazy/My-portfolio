'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { useIntl } from 'react-intl';
import { TranslationKeys } from '@/lang/constants';

export default function About() {
  const { ref } = useSectionInView('About', 0.75);

  const intl = useIntl();

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p
        className="mb-3"
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({
            id: TranslationKeys.ABOUT_ME_PART_ONE,
          }),
        }}
      ></p>
      <p
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({
            id: TranslationKeys.ABOUT_ME_PART_TWO,
          }),
        }}
      ></p>
    </motion.section>
  );
}
