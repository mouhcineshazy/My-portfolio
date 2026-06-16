'use client';

import { SupportedLocales, defaultLanguage, locales } from '@/lang';
import { Langs } from '@/lang/constants';
import { Fragment, PropsWithChildren, createContext, useContext, useState } from 'react';
import { IntlProvider as ReactIntlProvider } from 'react-intl';

type LangProviderProps = {
  toggleLanguage: () => void;
  locale: SupportedLocales;
};

const LangContext = createContext<LangProviderProps | null>(null);

export const useLanguageSwitchContext = () => {
  const context = useContext(LangContext);
  if (!context) {
    throw new Error(
      'useLanguageSwitchContext must be used within LangSwitchProvider',
    );
  }

  return context;
};

export default function LangSwitchProvider({ children }: PropsWithChildren) {
  const [locale, setLocale] = useState<SupportedLocales>(() => {
    if (typeof window === 'undefined') return defaultLanguage as SupportedLocales;
    let lang = window.localStorage.getItem('language');
    if (!lang) {
      const language = navigator.language.toLowerCase().split(/[_-]+/)[0];
      lang = Object.keys(locales).includes(language) ? language : defaultLanguage;
    }
    return lang as SupportedLocales;
  });

  const toggleLanguage = () => {
    if (locale === Langs.ENGLISH) {
      setLocale(Langs.FRENCH);
      window.localStorage.setItem('language', Langs.FRENCH);
    } else {
      setLocale(Langs.ENGLISH);
      window.localStorage.setItem('language', Langs.ENGLISH);
    }
  };

  return (
    <LangContext.Provider value={{ locale, toggleLanguage }}>
      <ReactIntlProvider
        locale={locale}
        messages={locales[locale]}
        textComponent={Fragment}
      >
        {children}
      </ReactIntlProvider>
    </LangContext.Provider>
  );
}
