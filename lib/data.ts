import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import type { ProjectData } from './types';

export const links = [
  {
    name: 'Home',
    name_EN: 'Home',
    name_Fr: 'Accueil',
    hash: '#home',
  },
  {
    name: 'About',
    name_EN: 'About',
    name_Fr: 'À propos',
    hash: '#about',
  },
  {
    name: 'Projects',
    name_EN: 'Projects',
    name_Fr: 'Projets',
    hash: '#projects',
  },
  {
    name: 'Skills',
    name_EN: 'Skills',
    name_Fr: 'Compétences',
    hash: '#skills',
  },
  {
    name: 'Experience',
    name_EN: 'Experience',
    name_Fr: 'Expérience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    name_EN: 'Contact',
    name_Fr: 'Me Contacter',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: "Master's in Computer Science & Engineering",
    location: 'Télécom SudParis (Grande École) — Paris, France',
    description:
      'Engineering degree with a focus on software architecture, distributed systems, and applied mathematics.',
    icon: React.createElement(LuGraduationCap),
    date: '2014 – 2016',
  },
  {
    title: 'Junior Full Stack Consultant',
    location: 'Capgemini — Paris, France',
    description:
      'Delivered Java and Angular full-stack applications for Orange Bank and Crédit Agricole Insurance across multiple concurrent Agile client engagements.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jun 2016 – Jul 2018',
  },
  {
    title: 'Full Stack Engineer',
    location: 'Natixis — Remote',
    description:
      'Modernised a personal loan subscription platform: led AngularJS→Angular 7 migration and extended Java 8 Spring Boot backend with new loan product configurations — submissions +20%, satisfaction +40%.',
    icon: React.createElement(CgWorkAlt),
    date: 'Aug 2018 – Mar 2019',
  },
  {
    title: 'Full Stack Engineer',
    location: 'Société Générale (Compliance IT) — Hybrid',
    description:
      'Built compliance evaluation platform full-stack: Java 8 SOLID-compliant backend and React/TypeScript real-time dashboards. Grew test coverage from 0 to 75% via TDD; platform usage climbed 25%.',
    icon: React.createElement(CgWorkAlt),
    date: 'Mar 2019 – Dec 2020',
  },
  {
    title: 'Senior Full Stack Engineer',
    location: 'AXA Insurance — Remote',
    description:
      'Built Java 17 DDD backend for the policy subscription lifecycle and architected a shared React component library adopted across 3+ squads (30% velocity improvement). Online subscriptions +10%.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jan 2021 – Jun 2022',
  },
  {
    title: 'Senior Full Stack Engineer',
    location: 'Société Générale (Cybersecurity IT) — Remote',
    description:
      'Built an internal risk assessment platform end-to-end: Java 17 Spring Boot REST backend and React 18/TypeScript real-time frontend. Raised test coverage to 80%; containerised with Docker/Kubernetes.',
    icon: React.createElement(CgWorkAlt),
    date: 'Jul 2022 – Nov 2023',
  },
  {
    title: 'Senior Full Stack Engineer',
    location: 'Rolex SA (Software Factory) — Remote',
    description:
      'Own complete features end-to-end — database schema through Spring Boot API to React/Angular UI — for B2B retailer applications used by 200+ dealers worldwide. Led OAuth2→Okta SSO migration and Angular v9→v16 modernisation.',
    icon: React.createElement(CgWorkAlt),
    date: 'Dec 2023 – Present',
  },
] as const;

// Projects will be populated once published
export const projectsData: readonly ProjectData[] = [];

export const skillsData = [
  'Java',
  'Spring Boot',
  'Spring Security',
  'JPA / Hibernate',
  'REST APIs',
  'OAuth2 / JWT',
  'React',
  'TypeScript',
  'Angular',
  'Next.js',
  'JavaScript',
  'HTML',
  'CSS',
  'Tailwind CSS',
  'Redux Toolkit',
  'React Query',
  'PostgreSQL',
  'MongoDB',
  'MySQL',
  'Redis',
  'AWS',
  'Docker',
  'Kubernetes',
  'ArgoCD',
  'CI/CD',
  'Jest',
  'JUnit',
  'TDD',
  'DDD',
  'Clean Architecture',
  'Git',
] as const;
