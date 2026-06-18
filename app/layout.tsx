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
import JsonLd from '@/components/json-ld';
import type { Metadata } from 'next';

const dmSans = DM_Sans({ subsets: ['latin'], weight: ['400', '500', '600'] });

const SITE_URL = 'https://mouhcine-soukaki.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Mouhcine Soukaki — Senior Full Stack Engineer | Java · Spring Boot · React · AWS',
    template: '%s | Mouhcine Soukaki',
  },
  description:
    'Senior Full Stack Engineer with 9+ years of experience in Java, Spring Boot, React, TypeScript, and AWS. End-to-end ownership in banking, insurance, and enterprise. Ottawa, ON — available immediately, remote-ready EST.',
  keywords: [
    'Senior Full Stack Engineer Ottawa',
    'Java Spring Boot developer Ottawa',
    'React TypeScript engineer Canada',
    'AWS Certified Solutions Architect Ottawa',
    'Senior software engineer Ottawa Ontario',
    'Java developer remote Canada EST',
    'Full stack Java React developer',
    'Spring Boot React TypeScript AWS',
    'Senior engineer banking fintech Ottawa',
    'Software engineer bilingual French English Canada',
    'Senior Java developer federal government Ottawa',
    'DDD Clean Architecture Java engineer',
    'Mouhcine Soukaki',
  ],
  authors: [{ name: 'Mouhcine Soukaki', url: SITE_URL }],
  creator: 'Mouhcine Soukaki',
  publisher: 'Mouhcine Soukaki',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en-CA': SITE_URL,
      'fr-CA': SITE_URL,
      'en-US': SITE_URL,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    siteName: 'Mouhcine Soukaki Portfolio',
    title: 'Mouhcine Soukaki — Senior Full Stack Engineer | Java · Spring Boot · React · AWS',
    description:
      'Senior Full Stack Engineer, 9+ years — Java, Spring Boot, React, TypeScript, AWS. Banking, insurance, luxury enterprise. Ottawa, ON. Canadian PR, no visa needed. Available immediately.',
    locale: 'en_CA',
    images: [
      {
        url: '/profile.jpg',
        width: 800,
        height: 800,
        alt: 'Mouhcine Soukaki — Senior Full Stack Engineer',
      },
    ],
    firstName: 'Mouhcine',
    lastName: 'Soukaki',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mouhcine Soukaki — Senior Full Stack Engineer | Java · Spring Boot · React · AWS',
    description:
      'Senior Full Stack Engineer, 9+ years — Java, Spring Boot, React, TypeScript, AWS. Ottawa, ON. Available immediately.',
    images: ['/profile.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${dmSans.className} bg-gray-50 text-gray-950 relative pt-28 md:pt-36 dark:bg-gray-950 dark:text-gray-50/90`}
      >
        {/* Ambient blob — warm pink-red */}
        <div aria-hidden className="bg-[#fbe2e3] absolute top-[-8rem] -z-10 right-[8rem] h-[22rem] w-[22rem] rounded-full blur-[3rem] sm:h-[40rem] sm:w-[72rem] sm:blur-[8rem] opacity-60 dark:bg-[#7c3d3f] dark:opacity-40 pointer-events-none" />
        {/* Ambient blob — cool purple */}
        <div aria-hidden className="bg-[#dbd7fb] absolute top-[4rem] -z-10 left-[-20rem] h-[28rem] w-[28rem] rounded-full blur-[3rem] sm:h-[50rem] sm:w-[72rem] sm:blur-[10rem] sm:left-[-38rem] md:left-[-30rem] lg:left-[-22rem] xl:left-[-12rem] 2xl:left-[-2rem] opacity-60 dark:bg-[#3f3a5c] dark:opacity-50 pointer-events-none" />

        <JsonLd />
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
