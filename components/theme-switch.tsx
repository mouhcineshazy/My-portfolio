'use client';

import { useThemeSwitchContext } from '@/context/theme-switch-context';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { toggleTheme, theme } = useThemeSwitchContext();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
      className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950 dark:border-white/20"
    >
      {theme === 'light' ? (
        <BsSun className="text-gray-600 text-base" />
      ) : (
        <BsMoon className="text-gray-300 text-base" />
      )}
    </button>
  );
}
