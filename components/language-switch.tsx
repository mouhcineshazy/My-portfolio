'use client';
import { useLanguageSwitchContext } from '@/context/lang-switch';
import GB from 'country-flag-icons/react/3x2/GB';
import FR from 'country-flag-icons/react/3x2/FR';

export default function LanguageSwitch() {
  const { toggleLanguage, locale } = useLanguageSwitchContext();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-5 right-5 mb-[3.5rem] bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-0[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {locale === 'en' ? (
        <GB title="English" className="w-5 h-4 rounded-sm" />
      ) : (
        <FR title="Français" className="w-5 h-4 rounded-sm" />
      )}
    </button>
  );
}
