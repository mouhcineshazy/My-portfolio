const SITE_URL = 'https://mouhcine-soukaki.com';

const person = {
  '@type': 'Person',
  '@id': `${SITE_URL}/#person`,
  name: 'Mouhcine Soukaki',
  givenName: 'Mouhcine',
  familyName: 'Soukaki',
  jobTitle: 'Senior Full Stack Engineer',
  description:
    'Senior Full Stack Engineer with 9+ years of experience building end-to-end features — Java/Spring Boot backend through React/TypeScript frontend — in regulated enterprise environments including banking, insurance, and luxury goods. AWS Certified Solutions Architect. Based in Ottawa, Ontario, Canada.',
  url: SITE_URL,
  email: 'soukaki.m@gmail.com',
  image: `${SITE_URL}/profile.jpg`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ottawa',
    addressRegion: 'Ontario',
    addressCountry: 'CA',
  },
  knowsAbout: [
    'Java', 'Spring Boot', 'Spring Security', 'JPA', 'Hibernate',
    'REST APIs', 'OAuth2', 'JWT', 'Domain-Driven Design', 'Clean Architecture', 'SOLID',
    'Node.js', 'NestJS',
    'React', 'Next.js', 'Angular', 'TypeScript', 'JavaScript',
    'Tailwind CSS', 'Redux Toolkit', 'React Query',
    'AWS', 'Docker', 'Kubernetes', 'ArgoCD', 'GitLab CI/CD', 'GitHub Actions',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis',
    'Jest', 'JUnit', 'Mockito', 'TDD',
  ],
  knowsLanguage: ['en', 'fr'],
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'AWS Certified Solutions Architect – Associate',
    credentialCategory: 'certification',
    recognizedBy: {
      '@type': 'Organization',
      name: 'Amazon Web Services',
    },
    dateCreated: '2025-12',
  },
  alumniOf: {
    '@type': 'EducationalOrganization',
    name: 'Télécom SudParis',
    url: 'https://www.telecom-sudparis.eu',
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Rolex',
  },
  sameAs: [
    'https://www.linkedin.com/in/mouhcine-soukaki/',
    'https://github.com/mouhcineshazy',
  ],
};

const website = {
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  name: 'Mouhcine Soukaki Portfolio',
  url: SITE_URL,
  author: { '@id': `${SITE_URL}/#person` },
  inLanguage: ['en', 'fr'],
};

const profilePage = {
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profilepage`,
  url: SITE_URL,
  name: 'Mouhcine Soukaki — Senior Full Stack Engineer',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  mainEntity: { '@id': `${SITE_URL}/#person` },
  inLanguage: ['en', 'fr'],
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [person, website, profilePage],
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
