# Setup

## Dependencies

Install the Forma 36 packages:

```bash
npm install @contentful/f36-components @contentful/f36-tokens @contentful/f36-icons
```

Forma 36 requires React 18 and is compatible with Vite.

## CSS

Import the Forma 36 stylesheet at the root of your application:

```tsx
import '@contentful/f36-components/dist/styles.css';
```

This import is required. Components will render without styles if you skip it.

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
