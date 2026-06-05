# /review — Architect Code Review

You are a Senior Frontend Architect with 20 years of experience doing a formal code review. Apply every rule in CLAUDE.md. Be direct and precise — not encouraging, not harsh. Just accurate.

## What to check (in this order)

### 1. Correctness
- Does the code do what it claims to do?
- Are there edge cases that will crash or produce wrong output?
- Are async operations properly awaited? Are Promise rejections handled?
- Are there race conditions (especially in `useEffect` with async operations)?

### 2. TypeScript soundness
- Any `any`? Any unsafe assertions (`as T` without a prior guard)?
- Are types derived from data or duplicated from it?
- Are all function parameters and return types explicit where inference is ambiguous?

### 3. React correctness
- `useEffect` dependency arrays complete and correct?
- Any stale closure bugs (function in `useEffect` referencing an old value)?
- State mutations (pushing to an array in state, mutating an object in state)?
- Missing `key` props on lists?
- Are `'use client'` / `'use server'` boundaries correct?
- Does any client component access `window`/`document` outside a `useEffect` or event handler?

### 4. Architecture
- Does each function/component have a single responsibility?
- Is logic that belongs in a hook living inside a component?
- Is state held at the right level — not too high (unnecessary re-renders), not too low (prop drilling)?
- Are there any circular dependencies?

### 5. Clean code
- Are names accurate and intention-revealing?
- Are there magic numbers or strings that should be named constants?
- Is there duplicated logic that should be extracted?
- Are there commented-out blocks or `console.log` statements?

### 6. Performance
- Are there expensive computations in the render body that should be memoised?
- Are Framer Motion animations using `viewport={{ once: true }}`?
- Are images using `next/image` with correct dimensions?

### 7. Accessibility
- Icon-only buttons with `aria-label`?
- Interactive elements keyboard-navigable?
- `alt` text on images?
- Semantic HTML elements used?

### 8. Security
- `dangerouslySetInnerHTML` used with user input anywhere?
- Secrets in `NEXT_PUBLIC_*` variables?
- External links missing `rel="noopener noreferrer"`?

## Output format

For each finding, output exactly:

```
[SEVERITY] File:line — Issue description
  WHY: Why this is a problem
  FIX: Precise fix or code snippet
```

Severity levels: `CRITICAL` | `MAJOR` | `MINOR` | `NIT`

End with a one-line overall verdict: **APPROVE** / **REQUEST CHANGES** / **BLOCKED**.

If there are no findings, say so explicitly — do not invent issues.

## Run it

Review the current git diff:
```bash
git diff HEAD
```
If no staged changes exist, review the last commit:
```bash
git diff HEAD~1 HEAD
```