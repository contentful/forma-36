# Base Shell

The source Figma design is the single source of truth. This guide provides the correct Forma 36 implementation for each structural element — use the patterns below **when the design includes them**, but never add elements the design doesn't show.

## Principle

Replicate the source design 1:1. If the design omits the navbar, omit it. If it shows a different sidebar width, match it. If it uses a non-standard layout (full-bleed editor, modal, settings panel), build what you see — don't force it into the shell below.

---

## Structural elements

Most Contentful screens follow this layout, but not all. Match the source.

```
+---------------------------------------------------------+
|  Top bar  (60px, gray-100 background)                   |
+----------------+----------------------------------------+
|                |  Content area                           |
|  Sidebar       |  +------------------------------------+|
|  (280px)       |  |  Header (title + actions)          ||
|                |  +------------------------------------+|
|                |  |  Page content                      ||
|                |  +------------------------------------+|
+----------------+----------------------------------------+
```

When all three elements are present, this is the structural skeleton:

```tsx
import { Navbar } from '@contentful/f36-navbar';

<Box style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
  {/* Top bar — only if the design shows it */}
  <Navbar ... />

  <Flex style={{ flex: 1 }}>
    {/* Sidebar — only if the design shows it */}
    <Box style={{ width: '280px', flexShrink: 0, ... }}>
      ...
    </Box>

    {/* Content area — fills remaining width */}
    <Box style={{ flex: 1, ... }}>
      <Box style={{ padding: '12px 24px 0' }}>
        ...
      </Box>
    </Box>
  </Flex>
</Box>
```

---

## Top bar — `Navbar` component

**When the design includes a top navigation bar**, use the `Navbar` component from `@contentful/f36-navbar`. Never hand-build it with Flex, Box, or custom styles.

The Navbar has a fixed height of `60px`, renders the Contentful logo automatically, and handles responsive behavior, spacing, and active states.

> **Requires a global `box-sizing: border-box` CSS reset.** The Navbar sets `height: 60px` with internal padding — without `border-box`, the browser adds padding on top of the height, inflating it to ~92px. Ensure your app includes:
>
> ```css
> *,
> *::before,
> *::after {
>   box-sizing: border-box;
> }
> ```

```tsx
import { Navbar } from '@contentful/f36-navbar';
```

### Navbar.Item — nav items with icons

Each nav item **must** use `Navbar.Item` with the `icon` and `title` props. The component handles height (32px), padding, icon sizing, active state styling, and typography automatically.

```tsx
<Navbar.Item title="Content" icon={<ImageSquareIcon />} isActive />
<Navbar.Item title="Media" icon={<GlobeIcon />} />
```

- **`isActive`** renders the blue active pill (background + border)
- **`icon`** renders a 16px icon before the label — always provide one
- **`title`** is the nav label text
- **`as`** allows polymorphic rendering (e.g., `as="a"` for links)
- Items with **children** render as dropdown menus automatically

### Navbar.Switcher — environment pill

```tsx
<Navbar.Switcher
  space="Space"
  environment="Production"
  envVariant="master" // "master" = green, "non-master" = orange, "trial" = blue
  isAlias={false}
/>
```

The switcher renders the green (or orange/blue) environment pill with correct colors, padding, and typography. Never hand-build this.

### Navbar.Account — user avatar

```tsx
<Navbar.Account
  username="Conny Contentful"
  avatar="https://..." // optional image URL
  initials="CC" // fallback when no avatar
  label="Account settings"
>
  <Navbar.MenuItem title="Account settings" />
  <Navbar.MenuDivider />
  <Navbar.MenuItem title="Log out" />
</Navbar.Account>
```

### Complete Navbar example

```tsx
<Navbar
  mainNavigation={
    <>
      <Navbar.Item title="Content model" icon={<PenNibIcon />} />
      <Navbar.Item title="Content" icon={<ImageSquareIcon />} isActive />
      <Navbar.Item title="Experiences" icon={<SparkleIcon />} />
      <Navbar.Item title="Media" icon={<GlobeIcon />} />
      <Navbar.Item title="AI & Automations" icon={<SparkleIcon />} />
      <Navbar.Item title="Apps">
        <Navbar.MenuItem title="Installed apps" />
        <Navbar.MenuItem title="Marketplace" />
      </Navbar.Item>
    </>
  }
  switcher={
    <Navbar.Switcher
      space="Space"
      environment="Production"
      envVariant="master"
    />
  }
  account={
    <Navbar.Account username="User" initials="U" label="Account">
      <Navbar.MenuItem title="Account settings" />
      <Navbar.MenuDivider />
      <Navbar.MenuItem title="Log out" />
    </Navbar.Account>
  }
/>
```

### When the design shows a different top bar

Some Contentful screens use a simplified header, a breadcrumb bar, or no top bar at all. If the source design does not show the standard Navbar (logo + nav items + environment pill + account), do not add one. Build what the design shows using the appropriate Forma 36 components.

---

## Sidebar

**When the design includes a sidebar**, use these specs:

- **Width:** match the source design — the standard Contentful sidebar is `280px`, but some designs use narrower or wider sidebars. Default to `280px` if the exact width is ambiguous.
- **`flexShrink: 0`** — never let it compress
- **Background:** `tokens.colorWhite`
- **Border radius:** `12px 0 0 0` (top-left only)
- **Inner padding:** `24px top`, `8px bottom`, `12px` horizontal. Inner menu groups: `padding: 0 12px`, `gap: 12px` between sections.

### Nav items

Each item is `34px` tall (`32px` inner + `1px` top margin). Inner: `padding: 6px 12px`, `gap: 8px`, `border-radius: 4px`.

- **Icon:** 20x20px — use the appropriate Phosphor icon from `@contentful/f36-icons` or the icon-shim
- **Label:** body text, `tokens.gray900`
- **Active:** `tokens.blue100` background
- **Default:** transparent
- **Hover:** `tokens.gray100`

### Sections (separated by `gray200` bottom border)

Section title: `font-size: 12px`, `font-weight: 600`, `color: tokens.gray700`, `height: 28px`, `padding-left: 16px`.

Replicate the exact sections shown in the source design — do not add or remove sections.

### When the design has no sidebar

Some pages (entry editors, settings, modals, full-bleed layouts) omit the sidebar entirely. If the source design doesn't show one, don't add one — let the content area fill the full width.

---

## Content area

**When the design includes a main content area** (nearly all pages):

- **`flex: 1`** — fills all remaining width after sidebar (or full width if no sidebar)
- **Background:** `tokens.colorWhite`
- **Border radius:** `12px 12px 0 0` (both top corners) when adjacent to a sidebar; adjust if the layout differs
- **Inner padding:** `12px` top, `24px` left and right, `0` bottom

Do not use `tokens.spacingL` (which is 24px) for the top padding — use `12px`.

### Header

When the design shows a page header:

- **Title variant** for top-level pages (e.g., "All content", "Content model")
- **Breadcrumb variant** for subpages (e.g., entry editor, settings detail)

The header area (title row + filter/search bar) sits inside the padded zone. The table or main content below it should be full-width (no horizontal padding) so table borders span edge to edge.

### Tables

When the page contains a table:

- The table extends full-width within the content area (no horizontal padding on the table itself)
- **Header row height:** `36px` — override the Forma 36 default if needed
- **Body row height:** `56px`
- Pad header/body text with `12px` horizontal cell padding

---

## Buttons

Default button height in Contentful is `32px`. Use `size="small"` on the Forma 36 `Button` component. Do not let buttons render at the default `40px` height — that is the "medium" size and is too tall for most Contentful UI contexts.

```tsx
<Button variant="secondary" size="small">View</Button>
<Button variant="positive" size="small" startIcon={<PlusIcon />}>Add entry</Button>
```

The only exception is if the source design explicitly shows a larger button (e.g., in a hero or empty state).

---

## Common mistakes

| Mistake                                           | Correct approach                                   |
| ------------------------------------------------- | -------------------------------------------------- |
| Adding a navbar the design doesn't show           | Only include elements visible in the source design |
| Hand-building the top bar with Flex/Box           | Use `<Navbar>` from `@contentful/f36-navbar`       |
| Navbar items without icons                        | Always pass `icon` prop to `Navbar.Item`           |
| Hand-building the environment switcher            | Use `<Navbar.Switcher>`                            |
| Buttons at 40px height (medium)                   | Use `size="small"` for 32px buttons                |
| Sidebar width guessed at 200px or 240px           | Default to `280px`, or match the source design     |
| Content area top padding `spacingL` (24px)        | Use `12px`                                         |
| Navbar at 92px instead of 60px                    | Ensure global `box-sizing: border-box` reset       |
| Omitting the sidebar when the design shows one    | Always replicate every section shown in the source |
| Adding a sidebar when the design doesn't show one | Only include elements visible in the source design |
| Table header taller than 36px                     | Cap at `36px`                                      |
| Inventing sidebar sections not in the design      | Replicate the source exactly                       |
