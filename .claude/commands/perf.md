# /perf — Performance Audit

You are a Senior Frontend Architect. Run a systematic performance audit of this Next.js portfolio. Prioritise impact over completeness — a finding that saves 200ms on first paint matters more than one that saves 2ms.

## Audit areas

### 1. Bundle analysis
```bash
# Check what's in the build output
npm run build 2>&1
```
Look at the Route sizes. Flag anything over:
- 100 kB first-load JS for a static page
- 50 kB for a single component chunk

Investigate these patterns:
- Barrel files (`index.ts` that re-exports many things) — they defeat tree-shaking
- Full library imports (`import * as icons from 'react-icons'`) — should be `import { FaGithub } from 'react-icons/fa'`
- Large dependencies imported client-side that could be server-side

### 2. Image optimisation
Read all component files that use `<Image>` or `<img>`.

Check:
- Every `<img>` is replaced with `next/image` `<Image>`
- `priority` is set on the LCP image (the profile photo in `intro.tsx`)
- `quality` prop is set (default 75 is often enough; 95 is used on the profile — verify this is intentional)
- Dimensions match the rendered size (no 4× oversized images)
- Image formats: `.jpg` for photos, `.webp` preferred, `.png` only for images needing transparency

### 3. Framer Motion
Read all components using `framer-motion`.

Check:
- `viewport={{ once: true }}` on every `whileInView` animation — re-animating on scroll-up wastes paint cycles
- `initial` state doesn't cause layout shift (avoid `height`, `width` animations that cause reflow)
- `useTransform` and `useScroll` hooks are only in components that need them — they run every scroll frame
- No unnecessary `motion.div` wrappers — use a `motion` variant of the semantic element directly

### 4. React render efficiency
For each context provider in `context/`:

Check:
- Context value is not an object literal created in render — it should be memoised or stable (e.g., `useMemo`)
- Consumers don't re-render when a part of the context they don't use changes
- If a context has both fast-changing state (activeSection) and stable callbacks, they could be split

### 5. Font loading
Check `app/layout.tsx`:
- `next/font/google` is used (already done — confirm)
- `subsets` is minimal (`['latin']` is correct for EN/FR)
- Font variable is applied at the `<body>` level — not re-applied in each component

### 6. Third-party scripts
- No `<Script>` tags loading analytics or tracking synchronously
- No `<link rel="stylesheet">` in `<head>` for external CSS

### 7. Server vs. client component split
Read `app/page.tsx` and all imported components.

For each `'use client'` component, ask:
- Does it actually need browser APIs, event handlers, or hooks?
- Could it be split so only the interactive part is a client component and the rest is a server component?

### 8. CSS
Read `app/globals.css` and `tailwind.config.js`.

Check:
- No unused Tailwind utility generation (content paths are specific — already correct)
- No `@apply` that replicates a utility class pattern (use the component abstraction instead)

## Output format

```
[IMPACT: HIGH/MED/LOW] Category — Finding
  Current: what exists now
  Problem: why it's a perf issue
  Fix: specific change with code if applicable
  Est. gain: rough estimate (e.g., "~40kB first-load JS", "1 fewer render per scroll event")
```

End with a prioritised action list: top 3 changes that will have the most impact.
