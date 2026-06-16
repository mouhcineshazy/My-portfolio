'use client';

import { useLanguageSwitchContext } from '@/context/lang-switch';

export default function LanguageSwitch() {
  const { toggleLanguage, locale } = useLanguageSwitchContext();

  return (
    <button
      onClick={toggleLanguage}
      aria-label={locale === 'en' ? 'Passer en français' : 'Switch to English'}
      className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/20"
    >
      <span className="text-[0.65rem] font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300">
        {locale === 'en' ? 'EN' : 'FR'}
      </span>
    </button>
  );
}
