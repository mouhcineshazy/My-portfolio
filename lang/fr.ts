import { TranslationKeys, Translations } from './constants';

export const fr: Translations = {
  // CTA buttons
  [TranslationKeys.INTRO_DOWLOAD_CV]: 'Télécharger le CV',
  [TranslationKeys.INTRO_CONTACT_ME]: 'Me contacter',

  // Hero
  [TranslationKeys.INTRO_AVAILABLE]: 'Disponible · Ottawa, ON · Télétravail · EST',
  [TranslationKeys.INTRO_ROLE]: 'Ingénieur Full Stack Senior',

  // Section headings
  [TranslationKeys.SECTION_ABOUT]: 'À propos',
  [TranslationKeys.SECTION_SKILLS]: 'Mes Compétences',
  [TranslationKeys.SECTION_EXPERIENCE]: 'Mon Expérience',
  [TranslationKeys.SECTION_PROJECTS]: 'Mes Projets',
  [TranslationKeys.SECTION_CONTACT]: 'Me Contacter',

  // About body
  [TranslationKeys.ABOUT_ME_PART_ONE]: `Je suis titulaire d'un <span class="font-medium">Master en Informatique et Ingénierie</span> de <span class="font-medium">Télécom SudParis</span> (Grande École, Paris) et j'ai acquis 9+ ans d'expérience en développement full-stack dans les secteurs bancaire, assurance, cybersécurité et luxe — chez <span class="font-medium">Rolex</span>, <span class="font-medium">Société Générale</span>, <span class="font-medium">AXA</span> et <span class="font-medium">Natixis</span>. Je prends en charge les fonctionnalités de bout en bout : conception du schéma de données, développement de l'API Spring Boot et livraison du frontend React — sans transfert inter-équipes. J'applique le <span class="font-medium">DDD et la Clean Architecture</span> côté backend, et un TypeScript strict avec des systèmes de composants côté frontend. Je suis également <span class="font-medium">AWS Certified Solutions Architect</span> et je travaille quotidiennement avec Docker, Kubernetes et ArgoCD.`,
  [TranslationKeys.ABOUT_ME_PART_TWO]: `<span class="italic">En dehors du code</span>, je pratique le football, la boxe et la musculation. Je lis beaucoup — développement personnel et <span class="font-medium">histoire</span> en particulier. Je suis bilingue <span class="font-medium">EN / FR</span> et basé à Ottawa, ON — disponible immédiatement, en remote ou hybride.`,

  // About stats
  [TranslationKeys.ABOUT_STAT_EXPERIENCE]: "Années d'expérience",
  [TranslationKeys.ABOUT_STAT_COMPANIES]: 'Entreprises',
  [TranslationKeys.ABOUT_STAT_RETAILERS]: 'Revendeurs accompagnés',
  [TranslationKeys.ABOUT_STAT_AWS]: 'Solutions Architect',

  // Skills categories
  [TranslationKeys.SKILLS_CAT_BACKEND]: 'Backend',
  [TranslationKeys.SKILLS_CAT_FRONTEND]: 'Frontend',
  [TranslationKeys.SKILLS_CAT_CLOUD]: 'Cloud & DevOps',
  [TranslationKeys.SKILLS_CAT_DATABASES]: 'Bases de données',
  [TranslationKeys.SKILLS_CAT_TESTING]: 'Tests & Pratiques',
  [TranslationKeys.SKILLS_CAT_AI_TOOLS]: 'Outils IA',

  // Experience — shared
  [TranslationKeys.EXPERIENCE_EDUCATION_BADGE]: 'Formation',
  [TranslationKeys.EXPERIENCE_CERTIFICATION_BADGE]: 'Certification',

  // Experience entry 1 — Télécom SudParis
  [TranslationKeys.EXP_1_TITLE]: 'Master en Informatique et Ingénierie',
  [TranslationKeys.EXP_1_LOCATION]: 'Télécom SudParis (Grande École) — Paris, France',
  [TranslationKeys.EXP_1_DESC]: "Diplôme d'ingénieur avec spécialisation en architecture logicielle, systèmes distribués et mathématiques appliquées.",
  [TranslationKeys.EXP_1_DATE]: '2014 – 2016',

  // Experience entry 2 — Capgemini
  [TranslationKeys.EXP_2_TITLE]: 'Consultant Full Stack Junior',
  [TranslationKeys.EXP_2_LOCATION]: 'Capgemini — Paris, France',
  [TranslationKeys.EXP_2_DESC]: "Livraison d'applications full-stack Java et Angular pour Orange Bank et Crédit Agricole Assurances, dans le cadre de plusieurs engagements clients Agile simultanés.",
  [TranslationKeys.EXP_2_DATE]: 'Juin 2016 – Juil. 2018',

  // Experience entry 3 — Natixis
  [TranslationKeys.EXP_3_TITLE]: 'Ingénieur Full Stack',
  [TranslationKeys.EXP_3_LOCATION]: 'Natixis — Télétravail',
  [TranslationKeys.EXP_3_DESC]: "Modernisation d'une plateforme de souscription de prêts personnels : migration AngularJS→Angular 7 et extension du backend Java 8 Spring Boot avec de nouvelles configurations produit — souscriptions +20%, satisfaction +40%.",
  [TranslationKeys.EXP_3_DATE]: 'Août 2018 – Mars 2019',

  // Experience entry 4 — SocGen Compliance
  [TranslationKeys.EXP_4_TITLE]: 'Ingénieur Full Stack',
  [TranslationKeys.EXP_4_LOCATION]: 'Société Générale (Conformité IT) — Hybride',
  [TranslationKeys.EXP_4_DESC]: "Développement full-stack d'une plateforme d'évaluation de conformité : backend Java 8 respectant les principes SOLID et tableaux de bord temps réel React/TypeScript. Couverture de tests portée de 0 à 75% via TDD ; utilisation de la plateforme +25%.",
  [TranslationKeys.EXP_4_DATE]: 'Mars 2019 – Déc. 2020',

  // Experience entry 5 — AXA
  [TranslationKeys.EXP_5_TITLE]: 'Ingénieur Full Stack Senior',
  [TranslationKeys.EXP_5_LOCATION]: 'AXA Insurance — Télétravail',
  [TranslationKeys.EXP_5_DESC]: "Développement d'un backend Java 17 DDD pour le cycle de vie de souscription de contrats et conception d'une bibliothèque de composants React partagée, adoptée par 3+ squads (vélocité +30%). Souscriptions en ligne +10%.",
  [TranslationKeys.EXP_5_DATE]: 'Janv. 2021 – Juin 2022',

  // Experience entry 6 — SocGen Cybersecurity
  [TranslationKeys.EXP_6_TITLE]: 'Ingénieur Full Stack Senior',
  [TranslationKeys.EXP_6_LOCATION]: 'Société Générale (Cybersécurité IT) — Télétravail',
  [TranslationKeys.EXP_6_DESC]: "Développement de bout en bout d'une plateforme interne d'évaluation des risques : backend REST Java 17 Spring Boot et frontend temps réel React 18/TypeScript. Couverture de tests portée à 80% ; conteneurisation avec Docker/Kubernetes.",
  [TranslationKeys.EXP_6_DATE]: 'Juil. 2022 – Nov. 2023',

  // Experience entry 7 — Rolex
  [TranslationKeys.EXP_7_TITLE]: 'Ingénieur Full Stack Senior',
  [TranslationKeys.EXP_7_LOCATION]: 'Rolex SA (Software Factory) — Télétravail',
  [TranslationKeys.EXP_7_DESC]: "Prise en charge de fonctionnalités complètes de bout en bout — schéma base de données, API Spring Boot jusqu'à l'interface React/Angular — pour des applications B2B utilisées par 200+ revendeurs dans le monde. Migration OAuth2→Okta SSO et modernisation Angular v9→v16.",
  [TranslationKeys.EXP_7_DATE]: 'Déc. 2023 – Présent',

  // Experience entry 8 — AWS Certification
  [TranslationKeys.EXP_8_TITLE]: 'AWS Certified Solutions Architect – Associate',
  [TranslationKeys.EXP_8_LOCATION]: 'Amazon Web Services',
  [TranslationKeys.EXP_8_DESC]: "Certification validant la maîtrise de l'architecture cloud AWS : calcul, stockage, réseau et sécurité. Atteste la capacité à concevoir des systèmes distribués résilients, performants et économiques.",
  [TranslationKeys.EXP_8_DATE]: 'Déc. 2025',

  // Testimonials
  [TranslationKeys.SECTION_TESTIMONIALS]: 'Ce qu\'ils disent',
  [TranslationKeys.TESTIMONIALS_TRANSLATED_FROM_FR]: 'Traduit du français',
  [TranslationKeys.TESTIMONIALS_TRANSLATED_FROM_EN]: 'Traduit de l\'anglais',

  // Projects — section UI
  [TranslationKeys.PROJECTS_NOTICE]: 'Deux autres projets sont en cours de développement et seront publiés ici très bientôt. Restez connecté.',
  [TranslationKeys.PROJECTS_CARD_TITLE]: 'Projet à venir',
  [TranslationKeys.PROJECTS_CARD_DESC]: 'Application full-stack — détails à venir.',
  [TranslationKeys.PROJECTS_BADGE]: 'À venir',
  [TranslationKeys.PROJECTS_VIEW]: 'Voir le projet',

  // Project 1 — MAB Services
  [TranslationKeys.PROJ_1_TITLE]: 'MAB Services',
  [TranslationKeys.PROJ_1_DESC]: "Site web bilingue de génération de leads pour un courtier en assurance et conseiller en sécurité financière agréé au Québec (AMF) et en Ontario (FSRA). Intègre la réservation Cal.com, une masterclass avec compte à rebours et un SEO optimisé pour l'IA avec des données structurées JSON-LD.",

  // Contact
  [TranslationKeys.CONTACT_INTRO]: `Disponible pour de nouvelles opportunités — contactez-moi à <a href="mailto:soukaki.m@gmail.com" class="text-gray-700 dark:text-gray-300 underline underline-offset-2 decoration-gray-300 dark:decoration-gray-600 hover:decoration-gray-500 transition-colors">soukaki.m@gmail.com</a> ou via le formulaire ci-dessous.`,
  [TranslationKeys.CONTACT_EMAIL_PLACEHOLDER]: 'Votre email',
  [TranslationKeys.CONTACT_MESSAGE_PLACEHOLDER]: 'Votre message',
  [TranslationKeys.CONTACT_SUCCESS]: 'Message envoyé — je vous répondrai dans les plus brefs délais.',
  [TranslationKeys.CONTACT_SUBMIT]: 'Envoyer',

  // Footer
  [TranslationKeys.FOOTER_TEXT]: 'Construit avec Next.js, TypeScript, Tailwind CSS & Framer Motion.',
};
