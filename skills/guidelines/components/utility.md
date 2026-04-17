# Utility Components

## Typography

```tsx
import { DisplayText, Heading, Subheading, SectionHeading, Paragraph, Text } from '@contentful/f36-components';
```

| Component | Size | Use |
|---|---|---|
| `DisplayText` | 2xl–4xl | Hero/splash headings only |
| `Heading` | xl | Page section titles |
| `Subheading` | l | Sub-section titles |
| `SectionHeading` | s, 600 weight | Nav group labels, table column headers |
| `Paragraph` | m | Body copy |
| `Text` | any | Inline styled text with token overrides |

Use the `as` prop to decouple HTML element from visual size. Never skip heading levels (h1 → h3).

## Header

Every page must have one. Two variants:

**Title variant** — top-level pages:
```tsx
<Header title="Experiences" actions={<Button variant="primary">Create</Button>} />
```

**Breadcrumb variant** — subpages:
```tsx
<Header
  title="Blog Post"
  breadcrumbs={[{ label: 'Content', href: '/content' }]}
  withBackButton
  actions={<Button variant="positive">Publish</Button>}
/>
```

| Prop | Notes |
|---|---|
| `title` | Page title text |
| `actions` | Right-aligned action buttons |
| `breadcrumbs` | Parent path for subpages |
| `withBackButton` | Show back arrow |
| `filters` | Filter controls below title |
| `dividerLine` | Set `true` when right sidebar is present |

Rules: actions slot order is secondary buttons first, primary last.

## DragHandle

For custom drag implementations.

```tsx
<DragHandle label="Reorder item" />
```

Card already includes this via `withDragHandle`.

## Pill

Tags and labels with optional close/drag.

```tsx
<Pill label="JavaScript" onClose={() => removeTag('js')} />
<Pill label="Draft" variant="active" />
```

Variants: `idle`, `active`, `deleted`.

## Icons

```tsx
import { PlusIcon, DeleteIcon, SearchIcon, MoreHorizontalIcon } from '@contentful/f36-icons';

<Button startIcon={<PlusIcon />}>Add field</Button>
<PlusIcon size="medium" color={tokens.blue600} />
```

| Size | Pixels | Use |
|---|---|---|
| `tiny` | 14px | Caption text, metadata |
| `small` | 16px (default) | Nav items, form fields, buttons |
| `medium` | 20px | Body text, headings |

**Regular** = outline (default). **Duotone** = active/toggled state.

Source: Phosphor library. Never use icons from other libraries.
