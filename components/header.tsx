'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import clsx from 'clsx';
import { useActiveSectionContext } from '@/context/active-section';
import { useLanguageSwitchContext } from '@/context/lang-switch';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const { locale } = useLanguageSwitchContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  const handleLinkClick = (linkName: (typeof links)[number]['name']) => {
    setActiveSection(linkName);
    setTimeOfLastClick(Date.now());
    setIsMenuOpen(false);
  };

  return (
    <header className="z-[999] relative">
      {/* ── Desktop pill background (md+ only) ── */}
      <motion.div
        className={clsx(
          'fixed top-0 left-1/2 hidden will-change-transform',
          'border border-white/40 bg-white/80 shadow-lg shadow-black/[0.03]',
          'backdrop-blur-[0.5rem]',
          'md:flex md:top-6 md:h-[3.25rem] md:rounded-full',
          'dark:bg-gray-950/75 dark:border-black/40',
          locale === 'en' ? 'md:w-[36rem]' : 'md:w-[40rem]',
        )}
        initial={{ y: shouldReduce ? 0 : -100, x: '-50%', opacity: shouldReduce ? 1 : 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      />

      {/* ── Desktop nav links (md+ only) ── */}
      <nav className="hidden md:flex fixed top-[1.7rem] left-1/2 -translate-x-1/2">
        <ul
          className={clsx(
            'flex flex-nowrap items-center text-[0.9rem] font-medium text-gray-500',
            locale === 'en' ? 'gap-5' : 'gap-3',
          )}
        >
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex items-center justify-center relative"
              initial={{ y: shouldReduce ? 0 : -100, opacity: shouldReduce ? 1 : 0 }}
              animate={{ y: 0, opacity: 1 }}
              onClick={() => handleLinkClick(link.name)}
            >
              <Link
                href={link.hash}
                className={clsx(
                  'flex items-center justify-center whitespace-nowrap',
                  'px-3 py-3 hover:text-gray-950 transition',
                  'dark:text-gray-500 dark:hover:text-gray-300',
                  locale === 'fr' && 'px-2 text-[0.82rem]',
                  { 'text-gray-950 dark:text-gray-200': activeSection === link.name },
                )}
              >
                {locale === 'en' ? link.name_EN : link.name_Fr}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile / tablet bar background (below md) ── */}
      <motion.div
        className={clsx(
          'md:hidden fixed top-0 left-0 right-0 h-[4rem] will-change-transform',
          'border-b border-white/40 bg-white/80 shadow-sm shadow-black/[0.03]',
          'backdrop-blur-[0.5rem]',
          'dark:bg-gray-950/75 dark:border-black/40',
        )}
        initial={{ y: shouldReduce ? 0 : -100, opacity: shouldReduce ? 1 : 0 }}
        animate={{ y: 0, opacity: 1 }}
      />

      {/* ── Mobile / tablet hamburger button ── */}
      <motion.button
        className="md:hidden fixed top-0 left-4 h-[4rem] flex items-center gap-2 text-gray-700 dark:text-gray-300"
        initial={{ y: shouldReduce ? 0 : -100, opacity: shouldReduce ? 1 : 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={isMenuOpen}
      >
        <motion.span
          animate={{ rotate: isMenuOpen ? 90 : 0 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          className="flex items-center justify-center w-8 h-8"
        >
          {isMenuOpen ? <HiX size={20} /> : <HiMenuAlt3 size={20} />}
        </motion.span>
        <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 dark:text-gray-400">
          Menu
        </span>
      </motion.button>

      {/* ── Mobile / tablet dropdown panel ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 top-[4rem] bg-black/10 dark:bg-black/30 z-[997]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              className={clsx(
                'md:hidden fixed top-[4.5rem] left-4 right-4 z-[998] will-change-transform',
                'bg-white/95 dark:bg-gray-950/95 backdrop-blur-[0.5rem]',
                'border border-white/50 dark:border-white/[0.08]',
                'rounded-2xl shadow-xl shadow-black/[0.1] overflow-hidden',
              )}
              initial={shouldReduce ? {} : { opacity: 0, y: -10, scale: 0.98 }}
              animate={shouldReduce ? {} : { opacity: 1, y: 0, scale: 1 }}
              exit={shouldReduce ? {} : { opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
            >
              <ul className="flex flex-col py-2">
                {links.map((link, index) => (
                  <motion.li
                    key={link.hash}
                    initial={shouldReduce ? {} : { opacity: 0, x: -6 }}
                    animate={shouldReduce ? {} : { opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.04, duration: 0.18 }}
                  >
                    <Link
                      href={link.hash}
                      onClick={() => handleLinkClick(link.name)}
                      className={clsx(
                        'flex items-center justify-between px-5 py-3.5',
                        'text-sm font-medium transition-colors',
                        activeSection === link.name
                          ? 'text-gray-950 dark:text-gray-50 bg-gray-100/80 dark:bg-gray-800/60'
                          : 'text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50/80 dark:hover:bg-gray-800/30',
                      )}
                    >
                      {locale === 'en' ? link.name_EN : link.name_Fr}
                      {link.name === activeSection && (
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-500 shrink-0" />
                      )}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
