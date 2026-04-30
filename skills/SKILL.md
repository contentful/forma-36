---
name: forma36
description: >
  Forma 36 — Contentful's design system. Tokens, components, composition patterns,
  writing rules, Code Connect mappings, and reference implementations for AI agents building Contentful UI.
  Use when the user references Forma 36, f36, Contentful components, or wants to
  build a Contentful app UI — including prototypes, screens, and interface explorations.
  Also powers the Forma 36 Figma Make Kit guidelines.
---

# Forma 36 — Contentful Design System

Forma 36 is the design language of Contentful. Every screen, component, and interaction built for Contentful must look and feel like it belongs in the product — calm, trustworthy, and focused on the user's task.

**Docs:** https://f36.contentful.com
**Source:** https://github.com/contentful/forma-36
**Figma Components:** https://www.figma.com/design/BDteZSphg3YPJTMlABQozc/Forma-36-Components
**Figma Icons/Assets:** https://www.figma.com/design/ILoICAP1fxyvE7xmpWiJBi/Forma-36-Assets

---

## Pre-flight checklist — VERIFY before generating ANY code

```
REQUIRED  import '@contentful/f36-components/dist/styles.css'  — without this, all components render unstyled
REQUIRED  Every component has an explicit import from @contentful/f36-components or @contentful/f36-icons
REQUIRED  All icon names come from @contentful/f36-icons (Phosphor set) — see guidelines/foundations/icons.md for the approved list. NEVER invent icon names. Common: DotsThreeIcon (menus), TrashIcon (delete), PencilIcon (edit), GearIcon (settings), PlusIcon, SearchIcon, CloseIcon, CheckIcon, WarningIcon, ArrowLeftIcon.
REQUIRED  All colors, spacing, typography use @contentful/f36-tokens — NEVER hardcode hex, px, or font stacks
REQUIRED  Use Layout (not Workbench) as the page shell. Layout.Header, Layout.Body, Layout.Sidebar are REAL compound sub-components (verified in source) — use them confidently. These are the ONLY valid sub-components.
REQUIRED  Skeleton sub-components: Skeleton.Container, Skeleton.DisplayText, Skeleton.BodyText, Skeleton.Image — these are the ONLY valid sub-components. There is NO Skeleton.Row.
```

---

## Choose your path

This skill serves three workflows. Pick the one that matches your task, then follow its reading order.

### Path A — Designer prototyping (no Figma URL)

You are designing a screen, vibe-coding a prototype, or exploring a UI concept. You care about how it _looks and feels_ — layout, visual language, screen structure, copy.

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

### Path B — Developer implementing (no Figma URL)

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

### Path C — Figma design to code (Figma URL provided)

A Figma URL is present. The goal is to translate Figma designs into production code using the correct Forma 36 components with their exact props, tokens, and patterns.

**How this works:**

1. Use the Figma MCP server to call `get_design_context` with the Figma URL's `fileKey` and `nodeId`
2. The response will include **Code Connect snippets** for any Forma 36 component that has a published mapping — these tell you exactly which `@contentful/f36-components` or `@contentful/f36-icons` import to use
3. Cross-reference Code Connect snippets with the component files in `guidelines/components/` for full prop tables and constraints
4. Use `guidelines/tokens/` to map any remaining design values (colors, spacing, typography) to token names
5. Follow `guidelines/composition/screen-patterns.md` for the page structure

**Reading order:**

1. Fetch design context via MCP — read the Code Connect snippets first
2. `guidelines/code-connect.md` — Reference for Figma→code property mappings when Code Connect snippets are ambiguous
3. `guidelines/components/<relevant-file>.md` — Full prop tables for each connected component
4. `guidelines/tokens/` — Map remaining design values to tokens
5. `guidelines/composition/screen-patterns.md` — Verify page structure
6. `guidelines/foundations/accessibility.md` — Ensure ARIA labels and focus management

**Key principle:** When a Code Connect snippet is available, trust it — it maps the Figma component's exact variant properties to the correct React props. Use the component reference files only for props not covered by Code Connect (event handlers, children, complex composition).

**Code Connect coverage:**

- **48 components** connected in the Forma 36 Components Figma file
- **239 icons** connected in the Forma 36 Assets Figma file
- See `guidelines/code-connect.md` for the complete mapping table

**Visual verification (post-flight for Path C):**

Code Connect maps individual components but does NOT describe page-level composition — sidebar presence, top nav structure, filter chip patterns, avatar columns, or layout hierarchy. The design context alone is often incomplete. You MUST visually verify.

After generating code from a Figma design context:

1. **Screenshot the source** — call `get_screenshot(fileKey, nodeId)` to capture the original Figma design
2. **Render your output** — start a local dev server and open the generated page
3. **Screenshot your output** — use Playwright MCP `browser_take_screenshot` to capture the rendered page
4. **Compare both screenshots.** Systematically check for:
   - Missing navigation (top bar, sidebar, breadcrumbs, nav items)
   - Missing or extra table/list columns (avatars, workflows, icons)
   - Different filter patterns (chips vs dropdowns, filter bar layout)
   - Missing UI elements (content type icons next to entries, avatars, badges)
   - Layout structure differences (sidebar vs no sidebar, narrow vs wide)
   - Data format mismatches (relative vs absolute dates, "by Author" attribution)
   - Missing page-level chrome (space/environment pill, search icon, settings icon)
5. **Fix every difference** — update the code to match the source design
6. **Re-render and re-compare** until the output faithfully matches the source

This loop typically converges in 1–2 iterations. The first comparison catches structural gaps (missing sidebar, missing columns); the second catches detail gaps (wrong date format, missing icons).

See `guidelines/composition/visual-verification.md` for the detailed checklist.

---

## Critical rules

These apply to all paths. Do not override them.

- **CSS import is REQUIRED** — every file must include `import '@contentful/f36-components/dist/styles.css';`. Without it, all components render unstyled. This is the #1 most-forgotten rule.
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

## Forma 36 Make Kit

The Forma 36 Make Kit is published to Figma's cloud and consumed by Figma Make at:
**https://www.figma.com/make/jcC82kTLl5yz6W9Mk1LJF8/Forma-36-Kit**

The authoring source lives locally at `Forma 36 Make Kit/` in the workspace root.

### Relationship between this skill and the Make Kit

- **This skill** is the reference for **Claude Code** when building prototypes and implementing designs.
- **The Make Kit** (`guidelines/` + `examples/`) is the reference for **Figma Make** — the same design system knowledge restructured for Figma Make's progressive disclosure pattern.
- Both contain the same design system rules. When editing one, keep the other in sync.

---

## File map

Each folder contains an `overview.md` that indexes its contents.

### `guidelines/`

| File              | What it covers                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------ |
| `overview.md`     | Design philosophy, product character, critical rules                                                         |
| `setup.md`        | Dependencies, CSS import, Geist font, token imports, icon library                                            |
| `code-connect.md` | Complete Figma Code Connect mapping — 48 connected components + 239 icons with verified Figma property names |

### `guidelines/tokens/`

| File            | What it covers                                                                    |
| --------------- | --------------------------------------------------------------------------------- |
| `overview.md`   | Token philosophy and index                                                        |
| `color.md`      | Semantic colors, gray scale, blue/green/red/orange/purple/yellow palettes         |
| `typography.md` | Font families, sizes, weights, line heights, letter spacing, composite type roles |
| `spacing.md`    | 4px-80px spacing scale, content width tokens                                      |
| `effects.md`    | Shadows (4 only), focus rings, border radius, z-index, transitions                |

### `guidelines/components/`

| File               | What it covers                                                                                                               |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `overview.md`      | Component decision tree and file index                                                                                       |
| `layout.md`        | `Box`, `Flex`, `Stack`, `Grid`, `Layout`                                                                                     |
| `buttons.md`       | `Button` (5 variants), `IconButton`, `TextLink`, `CopyButton`                                                                |
| `forms.md`         | `FormControl`, `TextInput`, `Textarea`, `Select`, `Autocomplete`, `Multiselect`, `Checkbox`, `Radio`, `Switch`, `DatePicker` |
| `feedback.md`      | `Notification`, `Note`, `Badge`, `EntityStatusBadge`, `Spinner`                                                              |
| `navigation.md`    | `Tabs`, `Modal`, `Menu`, `Tooltip`, `Popover`, `NavList`                                                                     |
| `data-display.md`  | `Table`, `Card`, `EntityList`, `Accordion`, `Collapse`, `Skeleton`, `Pagination`, `List`, `ProgressStepper`                  |
| `content-media.md` | `Asset`, `Avatar`, `Image`, `DateTime`, `UsageCard`                                                                          |
| `utility.md`       | Typography components, `Header`, `DragHandle`, `Pill`, Icons                                                                 |

### `guidelines/composition/`

| File                     | What it covers                                                                                      |
| ------------------------ | --------------------------------------------------------------------------------------------------- |
| `overview.md`            | Composition philosophy and file index                                                               |
| `base-shell.md`          | Standard app chrome — top bar (52px), sidebar (240px), content area                                 |
| `screen-patterns.md`     | 9 named patterns: list, detail, settings, empty state, error, confirmation, wizard, dashboard, form |
| `visual-verification.md` | Figma-to-code post-flight — screenshot comparison loop to catch missing page-level elements         |

### `guidelines/foundations/`

| File               | What it covers                                                                               |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `overview.md`      | Foundations index                                                                            |
| `writing.md`       | Voice & tone, sentence case, button labels, error messages, forbidden phrases, status labels |
| `icons.md`         | Phosphor library, Regular vs Duotone, sizing (14/16/20px), color-by-role                     |
| `accessibility.md` | WCAG contrast, keyboard navigation, ARIA labels, screen reader guidance, focus rings         |

### `examples/`

Working TSX files demonstrating correct usage. Each maps to a screen pattern.

| File                      | Pattern         | What it shows                                                                        |
| ------------------------- | --------------- | ------------------------------------------------------------------------------------ |
| `list-page.tsx`           | List / Index    | Table, search, EntityStatusBadge, Menu actions, Pagination, empty state, Skeleton    |
| `detail-page.tsx`         | Detail / Edit   | Right sidebar, breadcrumbs, form validation, unsaved-changes Note                    |
| `settings-page.tsx`       | Settings        | Grouped sections, Switch toggles, danger zone                                        |
| `confirmation-dialog.tsx` | Confirmation    | Modal, "Never mind" cancel, `isLoading` confirm, `shouldCloseOnOverlayClick={false}` |
| `form-page.tsx`           | Standalone Form | `Layout variant="narrow"`, grouped FormControls, Accordion, Notification             |
| `error-state.tsx`         | Error State     | Centered error, WarningOctagonIcon, "Try again" + "Go back"                          |

---

## Post-flight checklist — VERIFY before returning code to the user

```
CHECK  CSS import present: import '@contentful/f36-components/dist/styles.css'
CHECK  Every color, spacing, and font value comes from @contentful/f36-tokens — no hardcoded hex, px, or font stacks
CHECK  Every icon name exists in @contentful/f36-icons — see guidelines/foundations/icons.md. If unsure, DON'T guess.
CHECK  Every input is inside a FormControl with a Label
CHECK  Only ONE primary button per visible screen section
CHECK  All labels and headings use sentence case — never Title Case or ALL CAPS
CHECK  Destructive confirmation cancel label is "Never mind" — not "Cancel"
CHECK  No usage of Workbench — use Layout instead
CHECK  No fabricated sub-components: Layout only has Layout.Header, Layout.Body, Layout.Sidebar. Skeleton only has Skeleton.Container, Skeleton.DisplayText, Skeleton.BodyText, Skeleton.Image.
```
