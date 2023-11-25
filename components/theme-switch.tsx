'use client';

import { useThemeSwitchContext } from '@/context/theme-switch-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

export default function ThemeSwitch() {
  const { toggleTheme, theme } = useThemeSwitchContext();
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-0[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
    >
      {theme === 'light' ? <BsSun /> : <BsMoon />}
    </button>
  );
}
