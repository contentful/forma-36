# Base Shell

Every Contentful screen uses this exact shell. Do not invent alternative chrome.

```
+---------------------------------------------------------+
|  Top bar  (52px, gray-100 background)                   |
+----------------+----------------------------------------+
|                |  Content area                           |
|  Sidebar       |  +------------------------------------+|
|  (240px)       |  |  Header (title + actions)          ||
|                |  +------------------------------------+|
|                |  |  Page content                      ||
|                |  +------------------------------------+|
+----------------+----------------------------------------+
                                                [8px agent strip]
```

## Top bar

Height `52px`, background `gray100`. Horizontal padding: `24px` left, `64px` right (the 64px gap is reserved for the agent strip).

**Left side:** Contentful "C" logo -> Space/Environment switcher pill
**Right side:** Search icon -> Help icon -> User avatar (24px)

**Environment switcher:**

- Background: `green100`
- Border: `green400`
- Text: `green700` — "Space > Production"
- Right-edge indicator strip: `green300`
- Icon: rocket

## Sidebar

Width `240px`, white background, `boxShadowDefault`, top corners rounded to `12px`.
Padding: `pt-12px pb-8px px-4px`. Inner menu: `px-12px`, gap between sections `12px`.

Always implement the sidebar faithfully — replicate all sections, items, icons, and states exactly. Never stub or simplify it.

**Nav item** (32px tall): `px-12px py-6px`, `gap-8px`, `border-radius: 4px`

- Icon (16px, duotone for active) + label (body, `gray900`) + optional caret
- Active: `blue100` background
- Default: transparent
- Hover: `gray100` background

**Sections** (separated by `gray200` bottom border):

1. **Setup** — Design System, Content Model
2. **Creation** — Experiences, Content
3. **Optimization** — Optimizations, Analytics
4. **Platform Configuration** — Collections, AI & Automations, Taxonomy, Apps
5. _(no title)_ — Settings

Section title: `12px` size, `600` weight, `gray700`, `28px` tall, `pl-12px`.
Collapse button: transparent `IconButton` with `CaretLeft` icon, bottom-right of sidebar.

## Content area

Fills remaining width. White background, `boxShadowDefault`, top corners rounded to `12px`.
Padding: `pt-12px px-24px`.

**Top:** `Header` component — always present, never omit.

- Use `Title` variant for top-level pages
- Use `Breadcrumb` variant for subpages
- Set `dividerLine={true}` when content area has a right sidebar

**Below header:** unrestricted content area.
