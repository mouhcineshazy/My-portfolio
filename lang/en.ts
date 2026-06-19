import { TranslationKeys, Translations } from './constants';

export const en: Translations = {
  // CTA buttons
  [TranslationKeys.INTRO_DOWLOAD_CV]: 'Download CV',
  [TranslationKeys.INTRO_CONTACT_ME]: 'Contact Me',

  // Hero
  [TranslationKeys.INTRO_AVAILABLE]: 'Available · Ottawa, ON · Remote · EST',
  [TranslationKeys.INTRO_ROLE]: 'Senior Full Stack Engineer',

  // Section headings
  [TranslationKeys.SECTION_ABOUT]: 'About me',
  [TranslationKeys.SECTION_SKILLS]: 'My Skills',
  [TranslationKeys.SECTION_EXPERIENCE]: 'My Experience',
  [TranslationKeys.SECTION_PROJECTS]: 'My Projects',
  [TranslationKeys.SECTION_CONTACT]: 'Contact Me',

  // About body
  [TranslationKeys.ABOUT_ME_PART_ONE]: `I hold a <span class="font-medium">Master's in Computer Science and Engineering</span> from <span class="font-medium">Télécom SudParis</span> (Grande École, Paris) and have spent 9+ years building end-to-end systems across banking, insurance, cybersecurity, and luxury — at <span class="font-medium">Rolex</span>, <span class="font-medium">Société Générale</span>, <span class="font-medium">AXA</span>, and <span class="font-medium">Natixis</span>. I own features completely: I design the database schema, build the Spring Boot API, and ship the React frontend — no hand-offs. I apply <span class="font-medium">DDD and Clean Architecture</span> on the backend and strict TypeScript with component systems on the frontend. I'm also an <span class="font-medium">AWS Certified Solutions Architect</span> and work daily with Docker, Kubernetes, and ArgoCD.`,
  [TranslationKeys.ABOUT_ME_PART_TWO]: `<span class="italic">Outside of coding</span>, I enjoy football, boxing, and weightlifting. I read constantly — personal development and <span class="font-medium">history</span> in particular. I'm bilingual <span class="font-medium">EN / FR</span> and based in Ottawa, ON — available immediately, remote or hybrid.`,

  // About stats
  [TranslationKeys.ABOUT_STAT_EXPERIENCE]: 'Years of experience',
  [TranslationKeys.ABOUT_STAT_COMPANIES]: 'Companies',
  [TranslationKeys.ABOUT_STAT_RETAILERS]: 'Retailers served',
  [TranslationKeys.ABOUT_STAT_AWS]: 'Solutions Architect',

  // Skills categories
  [TranslationKeys.SKILLS_CAT_BACKEND]: 'Backend',
  [TranslationKeys.SKILLS_CAT_FRONTEND]: 'Frontend',
  [TranslationKeys.SKILLS_CAT_CLOUD]: 'Cloud & DevOps',
  [TranslationKeys.SKILLS_CAT_DATABASES]: 'Databases',
  [TranslationKeys.SKILLS_CAT_TESTING]: 'Testing & Craft',
  [TranslationKeys.SKILLS_CAT_AI_TOOLS]: 'AI Tools',

  // Experience — shared
  [TranslationKeys.EXPERIENCE_EDUCATION_BADGE]: 'Education',
  [TranslationKeys.EXPERIENCE_CERTIFICATION_BADGE]: 'Certification',

  // Experience entry 1 — Télécom SudParis
  [TranslationKeys.EXP_1_TITLE]: "Master's in Computer Science & Engineering",
  [TranslationKeys.EXP_1_LOCATION]: 'Télécom SudParis (Grande École) — Paris, France',
  [TranslationKeys.EXP_1_DESC]: 'Engineering degree with a focus on software architecture, distributed systems, and applied mathematics.',
  [TranslationKeys.EXP_1_DATE]: '2014 – 2016',

  // Experience entry 2 — Capgemini
  [TranslationKeys.EXP_2_TITLE]: 'Junior Full Stack Consultant',
  [TranslationKeys.EXP_2_LOCATION]: 'Capgemini — Paris, France',
  [TranslationKeys.EXP_2_DESC]: 'Delivered Java and Angular full-stack applications for Orange Bank and Crédit Agricole Insurance across multiple concurrent Agile client engagements.',
  [TranslationKeys.EXP_2_DATE]: 'Jun 2016 – Jul 2018',

  // Experience entry 3 — Natixis
  [TranslationKeys.EXP_3_TITLE]: 'Full Stack Engineer',
  [TranslationKeys.EXP_3_LOCATION]: 'Natixis — Remote',
  [TranslationKeys.EXP_3_DESC]: 'Modernised a personal loan subscription platform: led AngularJS→Angular 7 migration and extended Java 8 Spring Boot backend with new loan product configurations — submissions +20%, satisfaction +40%.',
  [TranslationKeys.EXP_3_DATE]: 'Aug 2018 – Mar 2019',

  // Experience entry 4 — SocGen Compliance
  [TranslationKeys.EXP_4_TITLE]: 'Full Stack Engineer',
  [TranslationKeys.EXP_4_LOCATION]: 'Société Générale (Compliance IT) — Hybrid',
  [TranslationKeys.EXP_4_DESC]: 'Built compliance evaluation platform full-stack: Java 8 SOLID-compliant backend and React/TypeScript real-time dashboards. Grew test coverage from 0 to 75% via TDD; platform usage climbed 25%.',
  [TranslationKeys.EXP_4_DATE]: 'Mar 2019 – Dec 2020',

  // Experience entry 5 — AXA
  [TranslationKeys.EXP_5_TITLE]: 'Senior Full Stack Engineer',
  [TranslationKeys.EXP_5_LOCATION]: 'AXA Insurance — Remote',
  [TranslationKeys.EXP_5_DESC]: 'Built Java 17 DDD backend for the policy subscription lifecycle and architected a shared React component library adopted across 3+ squads (30% velocity improvement). Online subscriptions +10%.',
  [TranslationKeys.EXP_5_DATE]: 'Jan 2021 – Jun 2022',

  // Experience entry 6 — SocGen Cybersecurity
  [TranslationKeys.EXP_6_TITLE]: 'Senior Full Stack Engineer',
  [TranslationKeys.EXP_6_LOCATION]: 'Société Générale (Cybersecurity IT) — Remote',
  [TranslationKeys.EXP_6_DESC]: 'Built an internal risk assessment platform end-to-end: Java 17 Spring Boot REST backend and React 18/TypeScript real-time frontend. Raised test coverage to 80%; containerised with Docker/Kubernetes.',
  [TranslationKeys.EXP_6_DATE]: 'Jul 2022 – Nov 2023',

  // Experience entry 7 — Rolex
  [TranslationKeys.EXP_7_TITLE]: 'Senior Full Stack Engineer',
  [TranslationKeys.EXP_7_LOCATION]: 'Rolex SA (Software Factory) — Remote',
  [TranslationKeys.EXP_7_DESC]: 'Own complete features end-to-end — database schema through Spring Boot API to React/Angular UI — for B2B retailer applications used by 200+ dealers worldwide. Led OAuth2→Okta SSO migration and Angular v9→v16 modernisation.',
  [TranslationKeys.EXP_7_DATE]: 'Dec 2023 – Present',

  // Experience entry 8 — AWS Certification
  [TranslationKeys.EXP_8_TITLE]: 'AWS Certified Solutions Architect – Associate',
  [TranslationKeys.EXP_8_LOCATION]: 'Amazon Web Services',
  [TranslationKeys.EXP_8_DESC]: 'Validates cloud architecture expertise across compute, storage, networking, and security on AWS. Demonstrates ability to design resilient, high-performing, and cost-optimised distributed systems.',
  [TranslationKeys.EXP_8_DATE]: 'Dec 2025',

  // Testimonials
  [TranslationKeys.SECTION_TESTIMONIALS]: 'What People Say',
  [TranslationKeys.TESTIMONIALS_TRANSLATED_FROM_FR]: 'Translated from French',
  [TranslationKeys.TESTIMONIALS_TRANSLATED_FROM_EN]: 'Translated from English',

  // Projects — section UI
  [TranslationKeys.PROJECTS_NOTICE]: 'Two more projects are currently in development and will be published here soon. Stay tuned.',
  [TranslationKeys.PROJECTS_CARD_TITLE]: 'Project coming soon',
  [TranslationKeys.PROJECTS_CARD_DESC]: 'Full-stack application — details to be published.',
  [TranslationKeys.PROJECTS_BADGE]: 'Coming soon',
  [TranslationKeys.PROJECTS_VIEW]: 'View project',

  // Project 1 — MAB Services
  [TranslationKeys.PROJ_1_TITLE]: 'MAB Services',
  [TranslationKeys.PROJ_1_DESC]: 'Bilingual lead-generation website for an insurance broker and financial security advisor licensed in Québec (AMF) and Ontario (FSRA). Features Cal.com consultation booking, a masterclass with countdown timer, and AI-optimised SEO with JSON-LD structured data.',

  // Contact
  [TranslationKeys.CONTACT_INTRO]: `Available for senior full-stack roles (US remote · Ottawa), technical consulting, and freelance projects. Hiring a senior engineer, launching a product, or have a project that needs to ship? Let's talk — at <a href="mailto:soukaki.m@gmail.com" class="text-gray-700 dark:text-gray-300 underline underline-offset-2 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500 transition-colors">soukaki.m@gmail.com</a> or below.`,
  [TranslationKeys.CONTACT_EMAIL_PLACEHOLDER]: 'Your email',
  [TranslationKeys.CONTACT_MESSAGE_PLACEHOLDER]: 'Your message',
  [TranslationKeys.CONTACT_SUCCESS_TITLE]: 'Message received.',
  [TranslationKeys.CONTACT_SUCCESS_DESC]: "I'll get back to you within 24 hours. In the meantime, feel free to connect on <a href=\"https://www.linkedin.com/in/mouhcine-soukaki\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"text-gray-700 dark:text-gray-300 underline underline-offset-2 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500 transition-colors\">LinkedIn</a>.",
  [TranslationKeys.CONTACT_SEND_ANOTHER]: 'Send another message',
  [TranslationKeys.CONTACT_SUBMIT]: 'Send message',

  // Footer
  [TranslationKeys.FOOTER_TEXT]: 'Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.',
};
