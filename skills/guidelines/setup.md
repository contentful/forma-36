# Setup

## Dependencies

Install the Forma 36 packages:

```bash
npm install @contentful/f36-components @contentful/f36-tokens @contentful/f36-icons @contentful/f36-navbar
```

Forma 36 requires React 18 and is compatible with Vite.

## CSS

Forma 36 v6 uses **Emotion** for runtime CSS injection. Components are self-styling — there is no separate CSS file to import.

**Do NOT add** `import '@contentful/f36-components/dist/styles.css'` — this file does not exist in v6 and will cause a build error.

## Font

Forma 36 uses the **Geist** typeface by Vercel. Load it from the Contentful CDN:

```html
<link rel="stylesheet" href="https://cdn.f36.contentful.com/fonts/geist.css" />
```

Fallback stack: `-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif`.

Apply `font-feature-settings: 'ss05' 1` on all Geist text to activate stylistic alternates.

## Tokens

Import tokens for use in inline styles and custom CSS:

```tsx
import tokens from '@contentful/f36-tokens';

// Use in inline styles
<div style={{ padding: tokens.spacingM, color: tokens.colorPrimary }} />;

// Or import individual tokens
import { spacingM, colorPrimary } from '@contentful/f36-tokens';
```

Do not hardcode hex values, pixel measurements, or font stacks. Always use the token.

## Icons

All icons come from the Phosphor library, packaged in `@contentful/f36-icons`:

```tsx
import {
  PlusIcon,
  MagnifyingGlassIcon,
  TrashSimpleIcon,
} from '@contentful/f36-icons';
```

Do not use Material Icons, Heroicons, Feather, Lucide, or any other icon library.
