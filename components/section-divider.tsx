'use client';

import { motion } from 'framer-motion';

export default function SectionDivider() {
  return (
    <motion.div
      className="my-20 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.6 }}
    >
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
      <div className="mx-3 h-1.5 w-1.5 rounded-full bg-gray-300 dark:bg-gray-700" />
      <div className="h-px w-24 bg-gradient-to-l from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
    </motion.div>
  );
}
