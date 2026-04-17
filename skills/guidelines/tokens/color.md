# Color Tokens

Color in Forma 36 carries meaning. It is never decorative.

## Choosing a color

Ask yourself: **what does this color communicate?**

- Primary interactive action → Blue
- Success or published state → Green
- Danger, error, or destructive action → Red
- Warning or draft/unpublished state → Orange
- Premium or paid feature → Purple (use sparingly)
- Neutral surface or text → Gray scale

If the answer is "it looks nice" — do not use that color. Use gray or white instead.

## Semantic tokens (use these first)

These express intent, not shade. Reach for them by default.

| Token | Hex | Use |
|---|---|---|
| `colorPrimary` | `#0059C8` | Primary interactive actions, links |
| `colorPositive` | `#006D23` | Success, published state, constructive actions |
| `colorNegative` | `#BD002A` | Errors, destructive actions, deleted state |
| `colorWarning` | `#CC4500` | Warnings, draft/unpublished state |

## Text color tokens

| Token | Hex | Use |
|---|---|---|
| `colorTextDark` | `#111B2B` | Highest-contrast text — headings, primary labels |
| `colorTextBase` | `#1B273A` | Default body text |
| `colorTextMid` | `#414D63` | Secondary labels, section titles |
| `colorTextLight` | `#5A657C` | Tertiary text, captions, hints |
| `colorTextLightest` | `#67728A` | Placeholder text, inactive labels |

## Gray scale

| Token | Hex | Use |
|---|---|---|
| `gray100` | `#F7F9FA` | Page background |
| `gray200` | `#E7EBEE` | Dividers, subtle borders |
| `gray300` | `#CFD9E0` | Input outlines, borders |
| `gray400` | `#AEC1CC` | Disabled borders |
| `gray500` | `#67728A` | Muted icons, placeholder text |
| `gray600` | `#5A657C` | Muted/secondary icons |
| `gray700` | `#414D63` | Section heading text |
| `gray800` | `#1B273A` | Strong secondary text |
| `gray900` | `#111B2B` | Primary text, nav labels |

## Blue (primary)

| Token | Hex | Use |
|---|---|---|
| `blue100` | `#E8F5FF` | Active nav item background |
| `blue200` | `#CEECFF` | Hover on primary elements |
| `blue600` | `#0059C8` | Primary action — buttons, links, active icons |
| `blue700` | `#0041AB` | Pressed state |

## Green (positive)

| Token | Hex | Use |
|---|---|---|
| `green100` | `#EAF9E8` | Environment switcher background |
| `green300` | `#9ED696` | Environment indicator strip |
| `green400` | `#5DB057` | Environment switcher border |
| `green600` | `#006D23` | Published status, success text |
| `green700` | `#00550C` | Environment switcher text |

## Red (negative)

| Token | Hex | Use |
|---|---|---|
| `red100` | `#FFF2F2` | Error field background |
| `red600` | `#BD002A` | Error text, destructive buttons |
| `red700` | `#990017` | Pressed destructive state |

## Orange (warning)

| Token | Hex | Use |
|---|---|---|
| `orange100` | `#FFF2E4` | Warning note background |
| `orange400` | `#F07F23` | Warning icons |
| `orange500` | `#CC4500` | Draft/unpublished state, warning text |

## Purple (premium — use sparingly)

| Token | Hex | Use |
|---|---|---|
| `purple100` | `#F7F2FF` | Premium feature background |
| `purple500` | `#8553E7` | Premium icons |
| `purple600` | `#6C3ECF` | Premium label, "new feature" highlight |

## Yellow (last resort)

| Token | Hex |
|---|---|
| `yellow400` | `#FFC835` |

Only use yellow when no other color communicates the meaning. This is rare.

## Absolute

| Token | Hex |
|---|---|
| `colorWhite` | `#FFFFFF` |
| `colorBlack` | `#0C141C` |

## Rules

- Never use color as pure decoration
- Never rely on color alone to convey meaning — always pair with text or icon
- Blue is reserved for primary interactive elements — do not use it decoratively
- Active nav items use `blue100` as background, not a blue text color
- Do not use raw hex values — always use the token name
