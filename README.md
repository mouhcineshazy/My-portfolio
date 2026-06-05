# Mouhcine SOUKAKI — Personal Portfolio

A modern, performant, and fully bilingual personal portfolio built with **Next.js 16**, **React 19**, and **TypeScript 6**. Features smooth scroll-linked animations, dark/light theme, English/French i18n, and a server-side contact form powered by Resend.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 6 |
| Styling | Tailwind CSS 3 (dark mode via class strategy) |
| Animations | Framer Motion 12 |
| i18n | React Intl 6 |
| Email | Resend + React Email |
| Icons | React Icons 5 |
| Linting | ESLint 9 (flat config) + Prettier |
| Hosting | Vercel |

---

## Features

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

> The contact form sends messages to `soukaki.m@gmail.com`. To use your own address, update the `to` field in `actions/sendEmails.ts`.

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

`tailwind.config.js` — dark mode uses the **class strategy**, enabled by adding `dark` to the `<html>` element. The `ThemeContextProvider` handles this directly via `document.documentElement.classList`.

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
// hook form
const intl = useIntl();
intl.formatMessage({ id: TranslationKeys.YOUR_KEY })

// JSX component
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

## Email Integration

The contact form uses a **Next.js Server Action** (`actions/sendEmails.ts`) — no separate API route needed. The flow:

1. The `<form action={sendEmail}>` in `contact.tsx` calls the Server Action directly.
2. Server-side validation with `validateString()` ensures email ≤ 500 chars and message ≤ 5 000 chars.
3. If valid, `resend.emails.send()` delivers a React Email template (`email/contact-form-email.tsx`) styled with Tailwind.
4. The `replyTo` field is set to the sender's email so you can reply directly from your inbox.

To test email locally, set `RESEND_API_KEY` in `.env.local`. Emails from the free tier are sent from `onboarding@resend.dev`. To use a custom domain, update the `from` field and verify the domain in the Resend dashboard.

---

## Deployment

This project is optimised for **Vercel**.

1. Push to GitHub.
2. Import the repository on [vercel.com](https://vercel.com).
3. Add the `RESEND_API_KEY` environment variable in the Vercel project settings.
4. Deploy — Vercel auto-detects Next.js and configures the build.

The project has no database dependency, making cold-start latency negligible.

---

## License

© 2023 Mouhcine SOUKAKI. All rights reserved.