# /new-section — Scaffold a New Page Section

You are a Senior Frontend Architect. Scaffold a new section for this portfolio following every convention already established in the codebase. Ask the user for the section name if not provided in the command arguments.

## Before writing any code

1. Read `lib/data.ts` — understand how static data is structured
2. Read `lib/types.ts` — understand how `SectionName` is derived
3. Read `lib/hooks.ts` — understand `useSectionInView`
4. Read one existing section component (e.g., `components/skills.tsx`) as a reference template
5. Read `lang/constants.ts`, `lang/en.ts`, `lang/fr.ts` — understand the i18n pattern

## What to generate

### Step 1 — Data (`lib/data.ts`)
Add a new `as const` array for the section's data. Derive its item type with `typeof newArray[number]` — do not write a separate interface.

### Step 2 — Translation keys (`lang/constants.ts`)
Add new keys to `TranslationKeys` enum only if the section has i18n text.

### Step 3 — Translations (`lang/en.ts` and `lang/fr.ts`)
Add corresponding strings to both files. Keep them in sync — missing a key in one file is a type error.

### Step 4 — Nav link (`lib/data.ts`)
Add a new entry to `links` with `name`, `name_EN`, `name_Fr`, and `hash`. The `SectionName` type is derived from this — adding it here is sufficient.

### Step 5 — Component (`components/<section-name>.tsx`)
```tsx
'use client';

import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function <SectionName>() {
  const { ref } = useSectionInView('<SectionName>');

  return (
    <section
      ref={ref}
      id="<section-hash>"
      className="mb-28 scroll-mt-28 sm:mb-40"
    >
      <SectionHeading><Section Title></SectionHeading>
      {/* section content */}
    </section>
  );
}
```

Rules:
- `'use client'` only if the component uses hooks or browser APIs. If it's purely presentational, omit it.
- `useSectionInView` goes in every section — it drives the header's active state.
- `scroll-mt-28` on the section so the sticky header doesn't cover the anchor target.
- Animations use `framer-motion` `motion.*` elements — no CSS animations.
- Use `whileInView` + `viewport={{ once: true }}` for scroll-triggered animations.

### Step 6 — Register in `app/page.tsx`
Import and add the component in the correct visual order.

### Step 7 — Validate
After generating all files, run:
```bash
npm run build
```
Fix any TypeScript errors before reporting done.

## Output

Show each file change as a clearly labelled diff or full file content. Explain any architectural decision that isn't obvious from the code.
