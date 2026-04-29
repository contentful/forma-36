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

This skill serves five workflows. Pick the one that matches your task, then follow its reading order.

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

### Path D — Code to Figma design (writing to Figma via MCP)

You have existing code, a running prototype, or a component implementation and want to push it into a Figma file as a design. This uses the Figma MCP server's write capabilities.

**Prerequisites:**

- Figma MCP server connected (remote `mcp.figma.com` or local `127.0.0.1:3845/mcp`)
- Load the `figma-use` skill **before every `use_figma` call** — mandatory, skipping it causes hard-to-debug failures
- For full-page layouts, also load the `figma-generate-design` skill

**How this works:**

1. Read the source code to understand what components, tokens, and layout patterns are used
2. Use `search_design_system` via MCP to discover matching Forma 36 Figma components, variables, and styles in the target file's libraries
3. Map React props back to Figma component properties using `guidelines/code-connect.md` in reverse — e.g. `variant="primary"` on `<Button>` means set Figma property "Type" to "Primary"
4. Build the design in Figma section-by-section using `use_figma`, importing library components rather than drawing raw shapes
5. Bind Figma variables (color, spacing, typography) instead of hardcoding values — this keeps the design connected to the design system

**Reading order:**

1. Read the source code — identify all Forma 36 components, tokens, and screen pattern used
2. `guidelines/code-connect.md` — Use the mapping table **in reverse** (React prop -> Figma property name) to set correct variant properties on Figma components
3. `guidelines/tokens/color.md` + `guidelines/tokens/spacing.md` — Know which token values to bind as Figma variables
4. `guidelines/composition/base-shell.md` — Replicate the app chrome faithfully in the Figma frame
5. Load `figma-use` skill — required Plugin API reference for every `use_figma` call
6. Load `figma-generate-design` skill — for multi-section page assembly workflow

**Key principles:**

- **Use library components, not raw shapes.** Call `search_design_system` to find the published Forma 36 component, then create an instance. Never recreate a Button from rectangles and text.
- **Reverse the Code Connect table.** If the code says `<Button variant="primary" size="small">`, set Figma properties `Type=Primary`, `Size=Small (default)` on the component instance.
- **Bind variables, don't hardcode.** Map `tokens.spacingM` to the corresponding Figma spacing variable, `tokens.blue600` to the color variable. This keeps the design token-connected.
- **Build incrementally.** For full pages, assemble section-by-section — header first, then sidebar, then content area — verifying each section via `get_screenshot` before moving on.
- **Match the real layout.** Use auto-layout in Figma to mirror the Flex/Stack/Grid structure in code. A `<Stack flexDirection="column" spacing="spacingM">` becomes a vertical auto-layout frame with `itemSpacing=16`.

**When to use this path vs. `figma-capture-to-file`:**

- Use **Path D** when you want an editable, token-connected, component-based Figma design that designers can iterate on
- Use **`figma-capture-to-file`** when you just need a flat screenshot of a running localhost dropped into a Figma frame

### Path E — Edit existing Figma design (modify a frame on canvas)

A designer points to an existing Figma frame (via URL or desktop selection) and asks for changes — swap a variant, adjust layout, add a component, rearrange sections, update copy, or restyle an element. The design already exists; you are modifying it in place.

**Prerequisites:**

- Figma MCP server connected (remote `mcp.figma.com` or local `127.0.0.1:3845/mcp`)
- Load the `figma-use` skill **before every `use_figma` call** — mandatory

**How this works:**

1. Fetch the current state of the frame using `get_design_context` or `get_screenshot` to understand what's already there
2. Identify the specific nodes that need to change — use `get_metadata` or the Plugin API via `use_figma` to walk the layer tree
3. Make targeted edits using `use_figma` — change properties, swap component instances, reorder children, update text, adjust auto-layout settings
4. Verify each edit with `get_screenshot` before moving to the next change
5. Use `guidelines/code-connect.md` to ensure any component property changes use correct Figma property names (e.g., set "Type" not "Variant")

**Reading order:**

1. Fetch the design — `get_design_context` or `get_screenshot` to see the current state
2. `guidelines/code-connect.md` — Reference the Figma property names when changing component variants (the "Figma prop" column is what you set on the canvas)
3. `guidelines/tokens/` — When changing colors, spacing, or typography, bind to Figma variables matching the token names
4. `guidelines/composition/screen-patterns.md` — If restructuring a page, verify the result still follows the correct pattern
5. `guidelines/foundations/writing.md` — If updating copy, follow the writing rules (sentence case, verb-first labels, "Never mind")
6. Load `figma-use` skill — required before every `use_figma` call

**Key principles:**

- **Read, log, then write.** Always fetch current state AND return current property values before overwriting. Use a read-only `use_figma` call that returns `{ before: { componentProperties, text, fills } }`, then a separate write call. See `guidelines/code-connect.md` for the pattern.
- **Edit surgically.** Change only what was requested. Don't reorganize layers, rename nodes, or "clean up" the design unless asked.
- **Preserve component instances.** When swapping a variant, change the property on the existing instance — don't detach it and rebuild.
- **Use Figma property names, not React names.** On the canvas, it's "Type" not "variant", "Small (default)" not "small". The Code Connect table's "Figma prop" column is your reference.
- **Verify after EVERY edit.** Call `get_screenshot` MCP tool after each `use_figma` write. This is mandatory, not optional. Do not skip this step.
- **Respect auto-layout.** If a frame uses auto-layout, work within it — add children, change spacing, adjust padding. Don't switch to absolute positioning unless the designer explicitly asks.

**Common edit operations:**

- Change a component variant: set the Figma property (e.g., `Type=Negative` on a Button instance)
- Update text content: find the text node and set `characters`
- Add a component: use `search_design_system` to find it, create instance, insert into the target frame
- Reorder items: move child nodes within their parent's `children` array
- Adjust spacing: change `itemSpacing` on an auto-layout frame, or `paddingTop`/`paddingBottom`/etc.
- Swap an icon: find the icon instance, swap its component to a different one from the library

**When to use Path E vs. Path D:**

- Use **Path E** when a design already exists and needs modification
- Use **Path D** when creating a new design from scratch based on code

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
