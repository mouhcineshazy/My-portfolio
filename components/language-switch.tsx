'use client';
import { useLanguageSwitchContext } from '@/context/lang-switch';
import React from 'react';
import { FlagIcon } from 'react-flag-kit';

export default function LanguageSwitch() {
  const { toggleLanguage, locale } = useLanguageSwitchContext();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-5 right-5 mb-[3.5rem] bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-0[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {locale === 'en' ? <FlagIcon code="GB" /> : <FlagIcon code="FR" />}
    </button>
  );
}
