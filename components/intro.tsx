'use client';

import { useActiveSectionContext } from '@/context/active-section';
import { TranslationKeys } from '@/lang/constants';
import { useSectionInView } from '@/lib/hooks';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { FormattedMessage, useIntl } from 'react-intl';

const stack = ['Java', 'Spring Boot', 'React', 'TypeScript', 'AWS'] as const;

export default function Intro() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const shouldReduce = useReducedMotion();
  const intl = useIntl();

  const fadeUp = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] as const, delay },
        };

  return (
    <section
      className="mb-2 max-w-[52rem] scroll-mt-[100rem] text-center"
      id="home"
      ref={ref}
    >
      {/* Availability badge */}
      <motion.div
        className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400 text-sm font-medium select-none"
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, y: -16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.4 },
        })}
      >
        <span className="relative flex h-2 w-2 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        {intl.formatMessage({ id: TranslationKeys.INTRO_AVAILABLE })}
      </motion.div>

      {/* Profile photo */}
      <motion.div
        className="flex justify-center mb-7"
        {...(shouldReduce ? {} : {
          initial: { opacity: 0, scale: 0.85 },
          animate: { opacity: 1, scale: 1 },
          transition: { type: 'spring', stiffness: 220, damping: 22, delay: 0.05 },
        })}
      >
        <div className="p-[3px] rounded-full bg-gradient-to-br from-violet-400 via-fuchsia-400 to-pink-400 shadow-lg shadow-violet-200 dark:shadow-violet-900/30">
          <div className="p-0.5 rounded-full bg-gray-50 dark:bg-gray-950">
            <Image
              src="/profile.jpg"
              alt="Mouhcine Soukaki"
              width={96}
              height={96}
              quality={85}
              priority
              className="rounded-full object-cover w-24 h-24"
            />
          </div>
        </div>
      </motion.div>

      {/* Name */}
      <motion.h1
        className="text-5xl sm:text-6xl font-bold tracking-tighter text-gray-950 dark:text-gray-50 mb-3 leading-none"
        {...fadeUp(0.1)}
      >
        Mouhcine Soukaki
      </motion.h1>

      {/* Role */}
      <motion.p
        className="text-lg sm:text-xl font-medium text-gray-500 dark:text-gray-400 mb-6 tracking-wide"
        {...fadeUp(0.15)}
      >
        {intl.formatMessage({ id: TranslationKeys.INTRO_ROLE })}
      </motion.p>

      {/* Tech stack pills */}
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 mb-9"
        {...fadeUp(0.2)}
      >
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-widest rounded-full bg-black/[0.05] dark:bg-white/[0.07] text-gray-500 dark:text-gray-400 border border-black/[0.07] dark:border-white/[0.07]"
          >
            {tech}
          </span>
        ))}
      </motion.div>

      {/* CTA buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-7"
        {...fadeUp(0.25)}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 bg-gray-950 dark:bg-white text-white dark:text-gray-950 px-7 py-3 rounded-full font-medium text-sm hover:scale-[1.03] active:scale-[0.98] focus:scale-[1.03] focus:outline-none transition-transform duration-150 shadow-sm"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          <FormattedMessage id={TranslationKeys.INTRO_CONTACT_ME} />
          <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-150" />
        </Link>

        <a
          href="/Mouhcine_Soukaki_Resume.pdf"
          download
          className="group flex items-center gap-2 bg-white dark:bg-white/10 text-gray-700 dark:text-gray-200 px-7 py-3 rounded-full font-medium text-sm border border-black/[0.09] dark:border-white/[0.09] hover:scale-[1.03] active:scale-[0.98] focus:scale-[1.03] focus:outline-none transition-transform duration-150 shadow-sm"
        >
          <FormattedMessage id={TranslationKeys.INTRO_DOWLOAD_CV} />
          <HiDownload className="group-hover:translate-y-0.5 transition-transform duration-150" />
        </a>
      </motion.div>

      {/* Social links */}
      <motion.div
        className="flex items-center justify-center gap-3"
        {...fadeUp(0.3)}
      >
        <a
          href="https://www.linkedin.com/in/mouhcine-soukaki/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-white/10 border border-black/[0.09] dark:border-white/[0.09] text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-100 focus:scale-110 focus:outline-none transition-transform duration-150 shadow-sm"
        >
          <BsLinkedin className="text-base" />
        </a>
        <a
          href="https://github.com/mouhcineshazy"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="flex items-center justify-center w-11 h-11 rounded-full bg-white dark:bg-white/10 border border-black/[0.09] dark:border-white/[0.09] text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-100 focus:scale-110 focus:outline-none transition-transform duration-150 shadow-sm"
        >
          <FaGithubSquare className="text-[1.1rem]" />
        </a>
      </motion.div>
    </section>
  );
}
