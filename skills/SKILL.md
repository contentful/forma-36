---
name: forma36
description: >
  Forma 36 — Contentful's design system. Tokens, components, composition patterns,
  writing rules, and reference implementations for AI agents building Contentful UI.
  Use when the user references Forma 36, f36, Contentful components, or wants to
  build a Contentful app UI.
---

# Forma 36 — Contentful Design System

Forma 36 is the design language of Contentful. Every screen, component, and interaction built for Contentful must look and feel like it belongs in the product — calm, trustworthy, and focused on the user's task.

**Docs:** https://f36.contentful.com
**Source:** https://github.com/contentful/forma-36

---

## Choose your path

This skill serves two audiences. Pick the one that matches your task, then follow its reading order.

### Path A — Designer prototyping

You are designing a screen, vibe-coding a prototype, or exploring a UI concept in Figma Make. You care about how it *looks and feels* — layout, visual language, screen structure, copy.

**Figma Make Kit:** https://www.figma.com/make/jcC82kTLl5yz6W9Mk1LJF8/Forma-36-Kit

**Reading order:**
1. `guidelines/overview.md` — Design philosophy and critical rules
2. `guidelines/composition/base-shell.md` — The app chrome you must always use
3. `guidelines/composition/screen-patterns.md` — Pick the pattern closest to your screen
4. `guidelines/foundations/writing.md` — Get the copy right (sentence case, verb-first labels, "Never mind")
5. `guidelines/tokens/color.md` — Understand what each color means
6. `guidelines/tokens/typography.md` — Type roles and the Geist setup
7. `guidelines/tokens/spacing.md` — The spacing scale
8. `guidelines/components/overview.md` — Skim the decision tree to pick the right components
9. `examples/` — Start from the example closest to your screen and adapt it

**Focus on:** Screen patterns, visual hierarchy, writing rules, color meaning.
**Skim:** Individual component prop tables — reference them only when you need a specific detail.
**Use examples as:** Starting templates to fork and adapt.

### Path B — Developer implementing

You are writing production code, building a Contentful app, or implementing a design spec. You need exact prop names, token values, correct import paths, and API precision.

**Reading order:**
1. `guidelines/overview.md` — Critical rules (memorize these)
2. `guidelines/setup.md` — Dependencies, CSS import, font loading
3. `guidelines/tokens/` — Read all token files. Every value you use must come from here.
4. `guidelines/components/overview.md` — Decision tree, then read the specific component file you need
5. `guidelines/components/<relevant-file>.md` — Full prop tables, code examples, constraints
6. `guidelines/composition/screen-patterns.md` — Structural template for the page type you're building
7. `guidelines/foundations/accessibility.md` — ARIA labels, focus management, contrast
8. `examples/` — Verify your patterns match the reference implementations

**Focus on:** Token names, prop signatures, component rules, accessibility requirements, code conventions.
**Skim:** Composition overview and writing guidelines — reference them for structure and copy decisions.
**Use examples as:** API reference and correctness checks.

---

## Critical rules

These apply to both paths. Do not override them.

- **Tokens only** — never hardcode hex colors, pixel values, or font stacks. Always use `@contentful/f36-tokens`.
- **Sentence case** — all labels, headings, buttons, menu items. Never Title Case or ALL CAPS.
- **One primary button** per screen section maximum.
- **Every input in a `FormControl`** — Label is required for accessibility.
- **Every page has a `Header`** — Title variant for top-level, Breadcrumb for subpages.
- **Color carries meaning** — never decorative. Always pair with text or icon.
- **Phosphor icons only** — never Material, Heroicons, Feather, or Lucide.
- **"Never mind"** — the cancel label for destructive confirmations. Not "Cancel".
- **`Layout` not `Workbench`** — Workbench is deprecated.
- **No custom shadows** — only `shadowDefault`, `shadowHeavy`, `shadowButton`, `insetBoxShadowDefault`.
- **No border radius outside the scale** — 4px, 6px, 12px, 100px only.

---

## Code conventions

From the [Forma 36 code style guide](https://github.com/contentful/forma-36/blob/main/docs/code-style-guide.md):

- Prefix boolean props with `is` (e.g. `isActive`, `isDisabled`, `isLoading`)
- Prefix show/hide props with `with` (e.g. `withDragHandle`, `withCloseButton`)
- Callback props use `on` prefix (`onClick`, `onChange`); handler functions use `handle` (`handleClick`)
- Component type names use `ComponentNameProps` pattern
- Use `camelCase` for all prop names
- Pass string prop values with double quotes directly, not wrapped in `{}`
- Prefer `className` over inline `style` unless manipulating dynamic values

---

## Dependencies

```bash
npm install @contentful/f36-components @contentful/f36-tokens @contentful/f36-icons
```

Requires React 18. Compatible with Vite. CSS import is mandatory:

```tsx
import '@contentful/f36-components/dist/styles.css';
```

Font: Geist from `https://cdn.f36.contentful.com`. Apply `font-feature-settings: 'ss05' 1`.

---

## File map

Each folder contains an `overview.md` that indexes its contents.

### `guidelines/`

| File | What it covers |
|---|---|
| `overview.md` | Design philosophy, product character, critical rules |
| `setup.md` | Dependencies, CSS import, Geist font, token imports, icon library |

### `guidelines/tokens/`

| File | What it covers |
|---|---|
| `overview.md` | Token philosophy and index |
| `color.md` | Semantic colors, gray scale, blue/green/red/orange/purple/yellow palettes |
| `typography.md` | Font families, sizes, weights, line heights, letter spacing, composite type roles |
| `spacing.md` | 4px–80px spacing scale, content width tokens |
| `effects.md` | Shadows (4 only), focus rings, border radius, z-index, transitions |

### `guidelines/components/`

| File | What it covers |
|---|---|
| `overview.md` | Component decision tree and file index |
| `layout.md` | `Box`, `Flex`, `Stack`, `Grid`, `Layout` |
| `buttons.md` | `Button` (5 variants), `IconButton`, `TextLink`, `CopyButton` |
| `forms.md` | `FormControl`, `TextInput`, `Textarea`, `Select`, `Autocomplete`, `Multiselect`, `Checkbox`, `Radio`, `Switch`, `DatePicker` |
| `feedback.md` | `Notification`, `Note`, `Badge`, `EntityStatusBadge`, `Spinner` |
| `navigation.md` | `Tabs`, `Modal`, `Menu`, `Tooltip`, `Popover`, `NavList` |
| `data-display.md` | `Table`, `Card`, `EntityList`, `Accordion`, `Collapse`, `Skeleton`, `Pagination`, `List`, `ProgressStepper` |
| `content-media.md` | `Asset`, `Avatar`, `Image`, `DateTime`, `UsageCard` |
| `utility.md` | Typography components, `Header`, `DragHandle`, `Pill`, Icons |

### `guidelines/composition/`

| File | What it covers |
|---|---|
| `overview.md` | Composition philosophy and file index |
| `base-shell.md` | Standard app chrome — top bar (52px), sidebar (240px), content area |
| `screen-patterns.md` | 9 named patterns: list, detail, settings, empty state, error, confirmation, wizard, dashboard, form |

### `guidelines/foundations/`

| File | What it covers |
|---|---|
| `overview.md` | Foundations index |
| `writing.md` | Voice & tone, sentence case, button labels, error messages, forbidden phrases, status labels |
| `icons.md` | Phosphor library, Regular vs Duotone, sizing (14/16/20px), color-by-role |
| `accessibility.md` | WCAG contrast, keyboard navigation, ARIA labels, screen reader guidance, focus rings |

### `examples/`

Working TSX files demonstrating correct usage. Each maps to a screen pattern.

| File | Pattern | What it shows |
|---|---|---|
| `list-page.tsx` | List / Index | Table, search, EntityStatusBadge, Menu actions, Pagination, empty state, Skeleton |
| `detail-page.tsx` | Detail / Edit | Right sidebar, breadcrumbs, form validation, unsaved-changes Note |
| `settings-page.tsx` | Settings | Grouped sections, Switch toggles, danger zone |
| `confirmation-dialog.tsx` | Confirmation | Modal, "Never mind" cancel, `isLoading` confirm, `shouldCloseOnOverlayClick={false}` |
| `form-page.tsx` | Standalone Form | `Layout variant="narrow"`, grouped FormControls, Accordion, Notification |
| `error-state.tsx` | Error State | Centered error, WarningOctagonIcon, "Try again" + "Go back" |
