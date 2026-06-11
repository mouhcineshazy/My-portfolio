# Mouhcine SOUKAKI — Senior Full Stack Engineer

**Java · React · TypeScript · AWS Solutions Architect**

Ottawa, ON · Permanent Resident · Remote · EST · Available Immediately

[soukaki.m@gmail.com](mailto:soukaki.m@gmail.com) · [linkedin.com/in/mouhcine-soukaki](https://linkedin.com/in/mouhcine-soukaki) · [github.com/mouhcineshazy](https://github.com/mouhcineshazy)

---

## About Me

9+ years building end-to-end full-stack systems in equal measure — Java/Spring Boot backend and React/TypeScript frontend. Currently at **Rolex** owning complete features from database schema through REST API design to UI, designing and shipping both sides independently without hand-offs.

Deep Java expertise (8→21) with DDD and Clean Architecture across regulated, high-stakes environments at **Société Générale**, **AXA**, and **Natixis** — bounded domain services, scalable API design, Spring Security 6, and JPA/Hibernate in production. Strong subscription and monetisation domain experience: built policy subscription flows at AXA and loan subscription platforms at Natixis.

Strong React 18/19 and TypeScript frontend depth — component systems, auth flows, performance optimisation, and test coverage at every engagement. Led Angular v9→v16 migration at Rolex and AngularJS→Angular 7 at Natixis.

**AWS Certified Solutions Architect** (Dec 2025) · Docker · Kubernetes · ArgoCD · CI/CD · Bilingual EN/FR · Engineering degree from **Télécom SudParis** (Grande École).

---

## Professional Stack

| Domain | Technologies |
|---|---|
| **Backend** | Java 8–21, Spring Boot, Spring Security 6, JPA/Hibernate, REST APIs, OAuth2/Okta, JWT, Maven — DDD, SOLID & Clean Architecture |
| **Frontend** | React 18/19 (hooks, context, Suspense), TypeScript (strict), Angular 7–16, JavaScript ES2022+, Tailwind CSS, Redux Toolkit, React Query |
| **Cloud & Infra** | AWS (EC2, S3, Lambda, RDS, CloudFront — Solutions Architect certified), Docker, Kubernetes, ArgoCD, GitLab CI/CD, GitHub Actions |
| **Databases** | PostgreSQL, MongoDB, MySQL, Redis |
| **Testing** | JUnit, Mockito, Jest, React Testing Library, TDD |
| **AI Tooling** | Claude Code, GitHub Copilot, JetBrains AI Assistant — daily workflow |
| **Languages** | French (Native) · English (Fluent / Professional) · Arabic (Native) |

---

## This Repository

This is the source code for my **personal portfolio website** — a bilingual (EN/FR), dark-mode-aware single-page application that showcases my projects, skills, experience, and a working contact form. It is also a live demonstration of modern frontend architecture: Next.js App Router, React Server Actions, Framer Motion animations, and a clean React Context state model.

### Portfolio Build Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19 |
| Language | TypeScript 6 (strict) |
| Styling | Tailwind CSS 3 (class dark-mode strategy) |
| Animations | Framer Motion 12 |
| i18n | React Intl 10 (EN / FR) |
| Email | Resend + React Email |
| Icons | React Icons 5 · country-flag-icons |
| Linting | ESLint 9 (flat config) + Prettier 3 |
| Hosting | Vercel |

---

## Portfolio Features

- **Animated hero** — profile image, CTA buttons, and social links with spring/tween entrance animations
- **Bilingual support** — English and French, toggled at runtime with browser-locale auto-detection and `localStorage` persistence
- **Dark / light theme** — system-preference detection on first load, persisted in `localStorage`
- **Active-section tracking** — header nav highlights the current section via `IntersectionObserver`, with a 1-second debounce after manual clicks
- **Parallax project cards** — scroll-linked scale and opacity transforms using Framer Motion's `useScroll` / `useTransform`
- **Staggered skills grid** — each skill badge animates in with a cascading delay using `whileInView`
- **Vertical experience timeline** — theme-aware `react-vertical-timeline-component` with light/dark background switching
- **Contact form** — Next.js Server Action submits directly without a separate API route; `react-hot-toast` shows success/error feedback
- **Transactional email** — Resend sends a React Email template to the owner's inbox on each form submission
- **CV download** — direct link to `/public/CV.pdf`

---

## Project Structure

```
.
├── actions/
│   └── sendEmails.ts          # Next.js Server Action — validates input, calls Resend
├── app/
│   ├── favicon.ico
│   ├── globals.css            # Tailwind directives + CSS custom properties for timeline line color
│   ├── layout.tsx             # Root layout — fonts, decorative blobs, all context providers
│   └── page.tsx               # Single-page composition of all sections
├── components/
│   ├── about.tsx              # About section — i18n paragraph rendered via dangerouslySetInnerHTML
│   ├── contact.tsx            # Contact section — Server Action form + toast feedback
│   ├── experience.tsx         # Experience section — vertical timeline, theme-aware styles
│   ├── footer.tsx             # Footer — copyright + tech credits
│   ├── header.tsx             # Sticky frosted-glass nav, locale-aware link labels
│   ├── intro.tsx              # Hero section — profile image, i18n heading, CTA/social links
│   ├── language-switch.tsx    # Fixed-position flag button (GB / FR)
│   ├── project.tsx            # Single project card — scroll parallax, tag pills, hover image tilt
│   ├── projects.tsx           # Projects section — maps projectsData to Project cards
│   ├── section-divider.tsx    # Decorative animated divider between Intro and About
│   ├── section-heading.tsx    # Shared <h2> with consistent styling
│   ├── skills.tsx             # Skills section — staggered badge grid
│   ├── submit-btn.tsx         # Form submit button — useFormStatus pending state
│   └── theme-switch.tsx       # Fixed-position sun/moon button
├── context/
│   ├── active-section.tsx     # Active nav-section state + last-click timestamp
│   ├── lang-switch.tsx        # Locale state, toggle fn, wraps ReactIntlProvider
│   └── theme-switch-context.tsx # Theme state, toggle fn, DOM class + localStorage sync
├── email/
│   └── contact-form-email.tsx # React Email template for incoming contact messages
├── lang/
│   ├── constants.ts           # TranslationKeys enum + Langs enum
│   ├── en.ts                  # English translation strings (HTML fragments)
│   ├── fr.ts                  # French translation strings (HTML fragments)
│   └── index.ts               # SupportedLocales type, locales map, defaultLanguage
├── lib/
│   ├── data.ts                # Static data — nav links, experiencesData, projectsData, skillsData
│   ├── hooks.ts               # useSectionInView — wraps useInView with active-section side effect
│   ├── types.ts               # SectionName type (derived from links const)
│   └── utils.ts               # validateString, getErrorMessage
├── public/
│   ├── CV.pdf
│   ├── Mouhcine_Soukaki_Resume.docx
│   ├── profile.jpeg
│   ├── corpcomment.png
│   ├── rmtdev.png
│   └── wordanalytics.png
├── eslint.config.mjs
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────┐
│  RootLayout (app/layout.tsx)                        │
│  ┌─────────────────────────────────────────────┐   │
│  │  ThemeContextProvider                        │   │
│  │  ┌─────────────────────────────────────────┐│   │
│  │  │  ActiveSectionContextProvider            ││   │
│  │  │  ┌───────────────────────────────────────┐│   │
│  │  │  │  LangSwitchProvider                  ││   │
│  │  │  │  (wraps ReactIntlProvider)            ││   │
│  │  │  │                                       ││   │
│  │  │  │  Header · [children] · Footer         ││   │
│  │  │  │  LanguageSwitch · ThemeSwitch         ││   │
│  │  │  └───────────────────────────────────────┘│   │
│  │  └─────────────────────────────────────────┘│   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘

Data Flow — Contact Form
  User submits → contact.tsx <form action={sendEmail}>
    → actions/sendEmails.ts (Server Action)
      → validateString() on email + message
      → resend.emails.send({ react: <ContactFormEmail /> })
      → returns { data } | { error }
    → toast.success() | toast.error()
```

### State management

Three independent React Context providers compose globally at the layout level:

| Context | State | Consumers |
|---|---|---|
| `ActiveSectionContext` | `activeSection`, `timeOfLastClick` | `Header`, all section components via `useSectionInView` |
| `ThemeContext` | `theme` (`'light'` \| `'dark'`) | `ThemeSwitch`, `Experience` |
| `LangContext` + `IntlProvider` | `locale` (`'en'` \| `'fr'`) | `Header`, `Intro`, `About`, `LanguageSwitch` |

### Custom hook: `useSectionInView`

```ts
// lib/hooks.ts
useSectionInView(sectionName, threshold = 0.5)
```

Wraps `useInView` from `react-intersection-observer`. When a section enters the viewport **and** more than 1 second has elapsed since the last nav-link click, it calls `setActiveSection`. This prevents the observer from fighting the scroll animation triggered by a click.

---

## Getting Started

### Prerequisites

- Node.js **≥ 20.9.0** (v24 LTS recommended)
- npm ≥ 10
- A [Resend](https://resend.com) account + API key (free tier sufficient)

### Installation

```bash
git clone https://github.com/mouhcineshazy/My-portfolio.git
cd My-portfolio
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Resend API key used by the Server Action to send transactional emails |

> The contact form sends messages to `soukaki.m@gmail.com`. Update the `to` field in `actions/sendEmails.ts` to use your own address.

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the Next.js development server with Turbopack |
| `npm run build` | Production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint across the project |

---

## Configuration

### Tailwind CSS

`tailwind.config.js` — dark mode uses the **class strategy**, enabled by adding `dark` to the `<html>` element. The `ThemeContextProvider` manages this via `document.documentElement.classList`.

`globals.css` defines a `--line-color` CSS custom property used by the vertical timeline:

```css
html          { --line-color: #e5e7eb; }
html.dark     { --line-color: rgba(255,255,255,0.2); }
```

### TypeScript

`tsconfig.json` uses `"moduleResolution": "bundler"` (Next.js 15+ recommendation) and targets **ES2022**. Strict mode is enabled. Path alias `@/*` maps to the project root.

### ESLint & Prettier

Flat config (`eslint.config.mjs`) extends `next/core-web-vitals` and `next/typescript` via the `@eslint/eslintrc` `FlatCompat` adapter, with `eslint-config-prettier` applied last to disable formatting rules.

Prettier is configured in `.prettierrc.json`:

```json
{ "singleQuote": true, "tabWidth": 2, "semi": true }
```

---

## Internationalization (i18n)

The portfolio supports **English** and **French** using [React Intl](https://formatjs.io/docs/react-intl/).

### How it works

1. `LangSwitchProvider` (`context/lang-switch.tsx`) initialises the locale from `localStorage`. If no preference is stored, it reads `navigator.language` and falls back to `"en"` if the browser locale is not supported.
2. It wraps `ReactIntlProvider` from `react-intl`, making translation strings available via the `useIntl()` hook and `<FormattedMessage>` component throughout the tree.
3. The `LanguageSwitch` component renders a GB/FR flag button (bottom-right, above the theme toggle) that calls `toggleLanguage()`.
4. The nav header dynamically renders `link.name_EN` or `link.name_Fr` based on the current locale.

### Adding a new locale

1. Add the locale code to `lang/constants.ts` (`Langs` enum) and `lang/index.ts` (`locales` map).
2. Create a translation file, e.g. `lang/de.ts`, implementing the `Translations` type.
3. Update `LanguageSwitch` to include the new flag/toggle logic.

### Adding a new translation key

1. Add the key to the `TranslationKeys` enum in `lang/constants.ts`.
2. Add the translated string to both `lang/en.ts` and `lang/fr.ts`.
3. Use it in a component:

```tsx
// hook
const intl = useIntl();
intl.formatMessage({ id: TranslationKeys.YOUR_KEY })

// JSX
<FormattedMessage id={TranslationKeys.YOUR_KEY} />
```

> Translation strings can contain **inline HTML** (bold, italic, underline spans). Components that render these strings use `dangerouslySetInnerHTML`. Only controlled, developer-authored strings are passed this way — no user input is ever rendered as HTML.

---

## Content Customisation

All static content lives in `lib/data.ts`. Edit it to update your own info without touching any component:

```ts
// Navigation links (also drives section IDs and i18n labels)
export const links = [ ... ] as const;

// Experience timeline entries
export const experiencesData = [ ... ] as const;

// Project cards (title, description, tags, imageUrl)
export const projectsData = [ ... ] as const;

// Skills badge list
export const skillsData = [ ... ] as const;
```

Place project screenshots in `/public/` and import them in `lib/data.ts` using Next.js static image imports for automatic optimisation.

---

## License

© 2023 Mouhcine SOUKAKI. All rights reserved.
