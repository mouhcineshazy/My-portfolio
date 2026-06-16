import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap, LuAward } from 'react-icons/lu';
import type { ProjectData } from './types';
import { TranslationKeys } from '@/lang/constants';

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
    titleKey: TranslationKeys.EXP_1_TITLE,
    locationKey: TranslationKeys.EXP_1_LOCATION,
    descriptionKey: TranslationKeys.EXP_1_DESC,
    dateKey: TranslationKeys.EXP_1_DATE,
    icon: React.createElement(LuGraduationCap),
  },
  {
    titleKey: TranslationKeys.EXP_2_TITLE,
    locationKey: TranslationKeys.EXP_2_LOCATION,
    descriptionKey: TranslationKeys.EXP_2_DESC,
    dateKey: TranslationKeys.EXP_2_DATE,
    icon: React.createElement(CgWorkAlt),
  },
  {
    titleKey: TranslationKeys.EXP_3_TITLE,
    locationKey: TranslationKeys.EXP_3_LOCATION,
    descriptionKey: TranslationKeys.EXP_3_DESC,
    dateKey: TranslationKeys.EXP_3_DATE,
    icon: React.createElement(CgWorkAlt),
  },
  {
    titleKey: TranslationKeys.EXP_4_TITLE,
    locationKey: TranslationKeys.EXP_4_LOCATION,
    descriptionKey: TranslationKeys.EXP_4_DESC,
    dateKey: TranslationKeys.EXP_4_DATE,
    icon: React.createElement(CgWorkAlt),
  },
  {
    titleKey: TranslationKeys.EXP_5_TITLE,
    locationKey: TranslationKeys.EXP_5_LOCATION,
    descriptionKey: TranslationKeys.EXP_5_DESC,
    dateKey: TranslationKeys.EXP_5_DATE,
    icon: React.createElement(CgWorkAlt),
  },
  {
    titleKey: TranslationKeys.EXP_6_TITLE,
    locationKey: TranslationKeys.EXP_6_LOCATION,
    descriptionKey: TranslationKeys.EXP_6_DESC,
    dateKey: TranslationKeys.EXP_6_DATE,
    icon: React.createElement(CgWorkAlt),
  },
  {
    titleKey: TranslationKeys.EXP_7_TITLE,
    locationKey: TranslationKeys.EXP_7_LOCATION,
    descriptionKey: TranslationKeys.EXP_7_DESC,
    dateKey: TranslationKeys.EXP_7_DATE,
    icon: React.createElement(CgWorkAlt),
  },
  {
    titleKey: TranslationKeys.EXP_8_TITLE,
    locationKey: TranslationKeys.EXP_8_LOCATION,
    descriptionKey: TranslationKeys.EXP_8_DESC,
    dateKey: TranslationKeys.EXP_8_DATE,
    icon: React.createElement(LuAward),
  },
] as const;

export const testimonialsData = [
  {
    name: 'Andrea Zireddu',
    title: 'Scrum Master | Product Owner | PMP | Consulting',
    company: 'Rolex SA',
    date: 'Jan 2024',
    initials: 'AZ',
    originalLang: 'fr' as const,
    text_FR: "Je suis ravi de recommander Mouhcine en tant que développeur Full Stack. En travaillant avec lui en tant que Scrum Master au sein de notre équipe Masai, j'ai constaté qu'il a toujours apporté une contribution unique en combinant son expertise technique approfondie avec une vision fonctionnelle hors pair. Mouhcine ne s'est jamais contenté de simplement répondre aux exigences du client, mais a toujours été promoteur d'une relation d'équipe solide en faisant preuve d'une véritable passion pour le travail collaboratif. Je recommande vivement Mouhcine à toute équipe qui cherche à renforcer son expertise technique tout en favorisant une culture collaborative.",
    text_EN: "I am delighted to recommend Mouhcine as a Full Stack developer. Working with him as Scrum Master within our Masai team, I observed that he consistently brought a unique contribution by combining deep technical expertise with an outstanding grasp of functional and business requirements. Mouhcine never settled for simply meeting client requirements — he was always a driver of strong team cohesion, demonstrating a genuine passion for collaborative work. I strongly recommend Mouhcine to any team looking to strengthen its technical expertise while fostering a collaborative culture.",
  },
  {
    name: 'Théo Haddad',
    title: 'Founder @BellumAI @SalesConnect',
    company: 'Société Générale',
    date: 'Jan 2024',
    initials: 'TH',
    originalLang: 'fr' as const,
    text_FR: "Mouhcine est un consultant humain, technique et fonctionnel. Il a su apporter beaucoup de plus value au projet au sein de l'équipe de mon client à la Société Générale. Il connait ses sujets et n'hésites pas à s'intégrer pleinement dans l'équipe. Je ne peux que vous le recommander !",
    text_EN: "Mouhcine is a consultant who is warm, technically strong, and business-minded all at once. He brought tremendous added value to the project within my client's team at Société Générale. He knows his domain inside and out and never hesitates to seamlessly integrate into the team. I can only recommend him!",
  },
  {
    name: 'Joelle Chamoun',
    title: 'IT Project Manager | PMP',
    company: 'Société Générale',
    date: 'Dec 2023',
    initials: 'JC',
    originalLang: 'en' as const,
    text_EN: 'Great contribution to the project and excellent development skills! Thank you Mouhcine, was a pleasure working with you!',
    text_FR: "Excellente contribution au projet et compétences de développement remarquables ! Merci Mouhcine, c'était un plaisir de travailler avec vous !",
  },
  {
    name: 'Mathieu Levi',
    title: 'CTO @fretguard.com',
    company: 'AXA Insurance',
    date: 'Aug 2021',
    initials: 'ML',
    originalLang: 'fr' as const,
    text_FR: "Excellent developpeur consciencieux de la qualité de code et toujours prêt à apporter son aide. Il connait son sujet sur le bout des doigts. C'est un très bon collègue. Je le recommande !",
    text_EN: "Excellent developer, conscientious about code quality and always ready to lend a hand. He knows his craft inside and out. He is a great colleague. I recommend him!",
  },
] as const;

export const projectsData: readonly ProjectData[] = [
  {
    titleKey: TranslationKeys.PROJ_1_TITLE,
    descriptionKey: TranslationKeys.PROJ_1_DESC,
    tags: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'next-intl', 'React Hook Form', 'Resend', 'Cal.com', 'Netlify'],
    imageUrl: '/mab-services-project/mabservices-screenshot-en.png',
    url: 'https://mabservices-ca.com/',
  },
];

export const skillCategories = [
  {
    labelKey: TranslationKeys.SKILLS_CAT_FRONTEND,
    skills: ['React 18/19', 'Next.js 14', 'Angular 7–16', 'TypeScript', 'JavaScript (ES2022+)', 'Tailwind CSS', 'Redux Toolkit', 'React Query', 'CSS-in-JS', 'HTML5 / CSS3'],
  },
  {
    labelKey: TranslationKeys.SKILLS_CAT_BACKEND,
    skills: ['Java 8–21', 'Spring Boot', 'Spring Security 6', 'JPA / Hibernate', 'REST APIs', 'OAuth2 / Okta', 'JWT', 'Node.js / NestJS', 'DDD', 'SOLID', 'Clean Architecture'],
  },
  {
    labelKey: TranslationKeys.SKILLS_CAT_CLOUD,
    skills: ['AWS', 'Docker', 'Kubernetes', 'ArgoCD', 'GitLab CI/CD', 'GitHub Actions'],
  },
  {
    labelKey: TranslationKeys.SKILLS_CAT_DATABASES,
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase'],
  },
  {
    labelKey: TranslationKeys.SKILLS_CAT_TESTING,
    skills: ['Jest', 'React Testing Library', 'JUnit', 'Mockito', 'Jasmine / Karma', 'k6', 'TDD'],
  },
  {
    labelKey: TranslationKeys.SKILLS_CAT_AI_TOOLS,
    skills: ['Claude Code', 'GitHub Copilot', 'JetBrains AI Assistant'],
  },
] as const;
