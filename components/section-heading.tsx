'use client';

import { motion } from 'framer-motion';

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <motion.h2
      className="text-3xl font-semibold tracking-tight text-center mb-10 text-gray-950 dark:text-gray-50"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      {children}
    </motion.h2>
  );
}
