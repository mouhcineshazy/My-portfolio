'use client';

import { useActiveSectionContext } from '@/context/active-section';
import { TranslationKeys } from '@/lang/constants';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import { FormattedMessage, useIntl } from 'react-intl';

export default function Intro() {
  const { ref } = useSectionInView('Home');
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const intl = useIntl();

  return (
    <section
      className="mb-2 max-w-[50rem] scroll-mt-[100rem]"
      id="home"
      ref={ref}
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src="/profile.jpeg"
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
            <motion.span
              className="absolute bottom-0 right-0 text-4xl"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 125,
                delay: 0.1,
                duration: 0.7,
              }}
            >
              👋
            </motion.span>
          </motion.div>
        </div>
      </div>
      <motion.h1
        className="mb-10 text-center mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: TranslationKeys.INTRO_TEXT }),
        }}
      ></motion.h1>
      <motion.div
        className="flex flex-col items-center justify-center gap-2 px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href={'#contact'}
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
          onClick={() => {
            setActiveSection('Contact');
            setTimeOfLastClick(Date.now());
          }}
        >
          <FormattedMessage id={TranslationKeys.INTRO_CONTACT_ME} />
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/Mouhcine_Soukaki_Resume.docx"
          download
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
        >
          <FormattedMessage id={TranslationKeys.INTRO_DOWLOAD_CV} />
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2 sm:flex sm:flex-row">
          <a
            href="https://www.linkedin.com/in/mouhcine-soukaki/"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/mouhcineshazy"
            target="_blank"
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.25rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack  dark:bg-white/10 dark:text-white/60"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
