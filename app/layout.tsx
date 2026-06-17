import Header from '@/components/header';
import './globals.css';
import { DM_Sans } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-switch-context';
import LangSwitchProvider from '@/context/lang-switch';
import LanguageSwitch from '@/components/language-switch';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] });

export const metadata = {
  title: 'Mouhcine SOUKAKI — Senior Full Stack Engineer',
  description:
    'Senior Full Stack Engineer with 9+ years of experience — Java · Spring Boot · React · TypeScript · AWS. Based in Ottawa, ON. Available immediately.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${dmSans.className} bg-gray-50 text-gray-950 relative pt-28 md:pt-36 dark:bg-gray-950 dark:text-gray-50 dark:text-opacity-90`}
      >
        {/* Ambient blob — warm pink-red */}
        <div className="bg-[#fbe2e3] absolute top-[-8rem] -z-10 right-[8rem] h-[40rem] w-[40rem] rounded-full blur-[8rem] sm:w-[72rem] opacity-60 dark:bg-[#7c3d3f] dark:opacity-40" />
        {/* Ambient blob — cool purple */}
        <div className="bg-[#dbd7fb] absolute top-[4rem] -z-10 left-[-38rem] h-[50rem] w-[36rem] rounded-full blur-[10rem] sm:w-[72rem] md:left-[-30rem] lg:left-[-22rem] xl:left-[-12rem] 2xl:left-[-2rem] opacity-60 dark:bg-[#3f3a5c] dark:opacity-50" />

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <LangSwitchProvider>
              <Header />
              <Toaster position="top-right" toastOptions={{ className: 'dark:bg-gray-800 dark:text-gray-100' }} />
              {children}
              <Footer />
              {/* Utility controls — top-right, aligned with the nav pill */}
              <div className="fixed top-2 right-4 md:top-6 md:right-6 lg:top-[1.375rem] lg:right-6 flex flex-row md:flex-col lg:flex-row items-center gap-2 z-[999]">
                <LanguageSwitch />
                <ThemeSwitch />
              </div>
            </LangSwitchProvider>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
