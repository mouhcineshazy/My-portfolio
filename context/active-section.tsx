'use client';
import { SectionName } from '@/lib/types';
import React, { createContext, useContext, useState } from 'react';

type AciveSectionProps = {
  children: React.ReactNode;
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};
export const AciveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: AciveSectionProps) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we keep track of this to disable the observer temporarily when user clicks on link so when the scroll don"t activate the observer when scrolling happens
  return (
    <AciveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </AciveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(AciveSectionContext);

  if (!context) {
    throw new Error(
      'useActiveSectionContext should be used  within an ActiveSectionContextProvider',
    );
  }

  return context;
}
