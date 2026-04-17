# Buttons

## Button

Four variants with clear hierarchy:

| Variant | Color | Use | Limit |
|---|---|---|---|
| `primary` | Blue | The single most important action | **One per screen section** |
| `secondary` | Gray outline | Supporting actions | Default choice |
| `positive` | Green | Constructive: create, publish, add | |
| `negative` | Red | Destructive: delete, remove, archive | |
| `transparent` | None | Lowest priority; light backgrounds only | |

**Sizes:** `small` (toolbars), `medium` (default), `large` (rare, hero CTAs only)

```tsx
<Button variant="primary" startIcon={<PlusIcon />}>Add field</Button>
<Button variant="secondary">Export</Button>
<Button variant="positive">Publish</Button>
<Button variant="negative">Delete entry</Button>
```

| Prop | Type | Notes |
|---|---|---|
| `variant` | `'primary'` `'secondary'` `'positive'` `'negative'` `'transparent'` | |
| `size` | `'small'` `'medium'` `'large'` | |
| `startIcon` / `endIcon` | ReactNode | Icon element |
| `isDisabled` | boolean | |
| `isLoading` | boolean | Shows spinner — never disable + add spinner manually |
| `isFullWidth` | boolean | |
| `as` | ElementType | Use `as="a"` with `href` for navigation buttons |

**Writing rules:**
- Always start with a verb: "Add field", "Delete entry", "Publish"
- Max 3 words
- Sentence case
- Cancel for destructive actions: **"Never mind"** — not "Cancel"

## IconButton

Icon-only button with built-in tooltip from `aria-label`.

```tsx
<IconButton icon={<MoreHorizontalIcon />} variant="secondary" aria-label="More actions" />
```

| Prop | Type | Notes |
|---|---|---|
| `icon` | ReactNode | Required |
| `variant` | Same as Button | |
| `aria-label` | string | Required — doubles as tooltip |
| `size` | Same as Button | |

Do not use IconButton for navigation.

## TextLink

For navigation and low-priority actions. Never use Button for navigation.

```tsx
<TextLink href="/settings">Settings</TextLink>
<TextLink as="button" onClick={handleClear}>Clear filters</TextLink>
```

| Prop | Type | Notes |
|---|---|---|
| `as` | `'a'` (default) or `'button'` | `a` = navigation, `button` = action |
| `variant` | `'primary'` `'positive'` `'negative'` `'secondary'` `'muted'` `'white'` `'premium'` | |
| `icon` | ReactNode | |
| `alignIcon` | `'start'` `'end'` | |

Use `rel="noreferrer noopener"` with `target="_blank"`.

## CopyButton

Place at the end of content the user wants to copy.

```tsx
<CopyButton value="abc123" tooltipText="Copy ID" />
```

| Prop | Type | Notes |
|---|---|---|
| `value` | string | Required — the text to copy |
| `tooltipText` | string | Default: "Copy to clipboard" |
| `tooltipCopiedText` | string | Default: "Copied!" |
