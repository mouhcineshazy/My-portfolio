'use client';

import { createContext, useContext, useEffect, useState } from 'react';
export type Theme = 'light' | 'dark' | 'system';
type ThemeSwitchContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

type ThemeSwitchContextProps = {
  children: React.ReactNode;
};
const ThemeContext = createContext<ThemeSwitchContextType | null>(null);

export const useThemeSwitchContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(
      'useThemeSwitchContext should be used  within an themeSwitchContextProvider',
    );
  }
  return context;
};

export default function ThemeContextProvider({
  children,
}: ThemeSwitchContextProps) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme:Dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
