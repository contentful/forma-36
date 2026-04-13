# Forma 36 — Design Tokens

All values come from `@contentful/f36-tokens`. Never use raw hex values or arbitrary numbers in code — always use the token name. This ensures the UI stays in sync with the design system.

```js
import tokens from '@contentful/f36-tokens';
// or individual tokens:
import { colorPrimary, spacingM } from '@contentful/f36-tokens';
```

---

## Color Tokens

### Semantic (use these first)

These are the tokens to reach for by default. They express intent, not shade.

| Token | Value | Meaning |
|---|---|---|
| `colorPrimary` | `#0059C8` | Primary interactive actions, links |
| `colorPositive` | `#006D23` | Success, published state, constructive |
| `colorNegative` | `#BD002A` | Errors, destructive actions, deleted |
| `colorWarning` | `#CC4500` | Warnings, draft/unpublished state |
| `colorTextDark` | `#111B2B` | Primary text — highest contrast |
| `colorTextBase` | `#1B273A` | Default body text |
| `colorTextMid` | `#414D63` | Secondary labels, section titles |
| `colorTextLight` | `#5A657C` | Tertiary text, captions |
| `colorTextLightest` | `#67728A` | Placeholder text, inactive |

### Gray Scale

Used for surfaces, borders, and text.

| Token | Hex | Common use |
|---|---|---|
| `gray100` | `#F7F9FA` | Page background |
| `gray200` | `#E7EBEE` | Dividers, subtle borders |
| `gray300` | `#CFD9E0` | Borders, input outlines |
| `gray400` | `#B4C3CC` | Disabled borders |
| `gray500` | `#8D9BA6` | Muted icons |
| `gray600` | `#536171` | Muted/secondary icons |
| `gray700` | `#414D63` | Section heading text |
| `gray800` | `#2A3546` | Strong secondary text |
| `gray900` | `#111B2B` | Primary text, nav labels |

### Blue (Primary)

| Token | Hex | Common use |
|---|---|---|
| `blue100` | `#E8F5FF` | Active nav item background |
| `blue200` | `#CCE9FF` | Hover on primary elements |
| `blue300` | `#A0D2FD` | — |
| `blue400` | `#62B0F8` | — |
| `blue500` | `#036FE3` | — |
| `blue600` | `#0059C8` | **Primary action color** — buttons, links, active icons |
| `blue700` | `#0044A8` | Pressed state |
| `blue800` | `#003080` | — |
| `blue900` | `#002A8E` | — |

### Green (Positive)

| Token | Hex | Common use |
|---|---|---|
| `green100` | `#EAF9E8` | Environment switcher background |
| `green300` | `#9ED696` | Environment type indicator strip |
| `green400` | `#5DB057` | Environment switcher border |
| `green600` | `#006D23` | Published status, success text |
| `green700` | `#00550C` | Environment switcher text |

### Red (Negative)

| Token | Hex | Common use |
|---|---|---|
| `red100` | `#FFF2F2` | Error field background |
| `red600` | `#BD002A` | Error text, destructive button |
| `red700` | `#9A0020` | Pressed destructive state |

### Orange (Warning)

| Token | Hex | Common use |
|---|---|---|
| `orange100` | `#FFF2E4` | Warning note background |
| `orange400` | `#F07C00` | Warning icons |
| `orange500` | `#CC4500` | Draft/unpublished state, warning text |

### Purple (Premium — use sparingly)

| Token | Hex | Common use |
|---|---|---|
| `purple100` | `#F7F2FF` | Premium feature background |
| `purple600` | `#8553E7` | Premium label, "new feature" highlight |

### Yellow (last resort only)

| Token | Hex | Note |
|---|---|---|
| `yellow400` | `#FFC835` | Only when all other options fail |

### Absolute

| Token | Hex |
|---|---|
| `colorWhite` | `#FFFFFF` |
| `colorBlack` | `#0C141C` |

---

## Spacing Tokens

Components carry no external margin. Use these to create space between elements.

| Token | Value | Rem |
|---|---|---|
| `spacing2Xs` | 4px | 0.25rem |
| `spacingXs` | 8px | 0.5rem |
| `spacingS` | 12px | 0.75rem |
| `spacingM` | 16px | 1rem |
| `spacingL` | 24px | 1.5rem |
| `spacingXl` | 32px | 2rem |
| `spacing2Xl` | 48px | 3rem |
| `spacing3Xl` | 64px | 4rem |
| `spacing4Xl` | 80px | 5rem |

**Usage:**
```js
// Inline style
<div style={{ padding: tokens.spacingM }} />

// Layout component prop
<Stack spacing="spacingM" />
<Flex gap="spacingS" />
```

---

## Typography Tokens

### Font Families

| Token | Stack |
|---|---|
| `fontStackPrimary` | `Geist Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif` |
| `fontStackMonospace` | `Geist Mono, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace` |

Geist is loaded from `https://cdn.f36.contentful.com`. Always use `fontStackPrimary` — never hardcode `Geist` alone without the fallback stack.

### Font Sizes

| Token | Value | Use |
|---|---|---|
| `fontSize4Xl` | 3rem | Hero display text |
| `fontSize3Xl` | 2.25rem | Large display |
| `fontSize2Xl` | 1.5rem | Page-level headings |
| `fontSizeXl` | 1.25rem | Section headings |
| `fontSizeL` | 1rem | Large body |
| `fontSizeM` | 0.875rem | **Default body** — most interface text |
| `fontSizeS` | 0.75rem | Captions, metadata, section labels |

### Font Weights

| Token | Value | Use |
|---|---|---|
| `fontWeightNormal` | 400 | All body text |
| `fontWeightMedium` | 500 | Emphasized labels, active states |
| `fontWeightDemiBold` | 600 | Headings, section titles, nav group labels |

### Line Heights

| Token | Value | Use |
|---|---|---|
| `lineHeightDefault` | 1.5 | Body text |
| `lineHeightCondensed` | 1.25 | Nav items, badges, compact UI |

### Letter Spacing

| Token | Value |
|---|---|
| `letterSpacingDefault` | 0rem |
| `letterSpacingWide` | 0.1rem |

Forma 36 uses `0` letter spacing by default. Do not add tracking to Geist.

---

## Shadow Tokens

| Name | CSS Value | Use |
|---|---|---|
| `shadowDefault` | `0 0 0 1px rgba(25,37,50,.10), 0 3px 7px -3px rgba(25,37,50,.10), 0 6px 12px -2px rgba(25,37,50,.10)` | Panels, sidebar, content area, cards |
| `shadowButton` | `0 1px 0 rgba(17,27,43,.05)` | Secondary and transparent buttons |

Only these two shadows exist in Forma 36. Do not invent custom shadows.

---

## Border Radius Tokens

| Token | Value | Use |
|---|---|---|
| `borderRadiusSmall` | 4px | Nav items, badges, small chips |
| `borderRadiusMedium` | 6px | Buttons, inputs, menus |
| `borderRadiusLarge` | 12px | Panels, cards, modals |
| `borderRadiusPill` | 100px | Avatars, pill badges |

Top-only radius (panels flush to bottom edge): apply `border-radius: 12px 12px 0 0`.

---

## Z-Index Tokens

| Token | Value | Use |
|---|---|---|
| `zIndexDefault` | 0 | Normal flow |
| `zIndexSticky` | 101 | Sticky headers |
| `zIndexDropdown` | 200 | Menus, dropdowns |
| `zIndexModal` | 1000 | Modals, dialogs |
| `zIndexNotification` | 9000 | Toast notifications |
