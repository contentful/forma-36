# Buttons

## Button

Five variants with clear hierarchy:

| Variant       | Token             | Use                                     | Limit                      |
| ------------- | ----------------- | --------------------------------------- | -------------------------- |
| `primary`     | `blue600`         | The single most important action        | **One per screen section** |
| `secondary`   | `gray300` outline | Supporting actions                      | Default choice             |
| `positive`    | `green600`        | Constructive actions                    |                            |
| `negative`    | `red600`          | Destructive actions                     |                            |
| `transparent` | None              | Lowest priority; light backgrounds only |                            |

**Sizes:** `small` (toolbars), `medium` (default), `large` (rare, hero CTAs only)

```tsx
<Button variant="primary" startIcon={<PlusIcon />}>Add field</Button>
<Button variant="secondary">Export</Button>
<Button variant="positive">Publish</Button>
<Button variant="negative" as="a" href="/settings/danger">Delete entry</Button>
```

| Prop                    | Type                                                                | Notes                                                            |
| ----------------------- | ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `variant`               | `'primary'` `'secondary'` `'positive'` `'negative'` `'transparent'` |                                                                  |
| `size`                  | `'small'` `'medium'` `'large'`                                      |                                                                  |
| `startIcon` / `endIcon` | ReactNode                                                           | Icon element                                                     |
| `isDisabled`            | boolean                                                             |                                                                  |
| `isLoading`             | boolean                                                             | Shows spinner — never disable + add spinner manually             |
| `isFullWidth`           | boolean                                                             |                                                                  |
| `isActive`              | boolean                                                             | Active/pressed state (e.g. toggle, current nav item)             |
| `as`                    | ElementType                                                         | Render as `'a'` for navigation, `'button'` (default) for actions |

Button can render as an `<a>` tag via `as="a"` with `href` — this is the correct way to make a button that navigates to a route.

**Writing rules:**

- Always start with a verb
- Max 3 words
- Sentence case
- Cancel label for destructive confirmations: **"Never mind"** — not "Cancel"

## IconButton

Icon-only button with built-in tooltip from `aria-label`.

```tsx
<IconButton
  icon={<DotsThreeIcon />}
  variant="secondary"
  aria-label="More actions"
/>
```

| Prop         | Type           | Notes                         |
| ------------ | -------------- | ----------------------------- |
| `icon`       | ReactNode      | Required                      |
| `variant`    | Same as Button |                               |
| `aria-label` | string         | Required — doubles as tooltip |
| `size`       | Same as Button |                               |

Do not use IconButton for navigation.

## TextLink

For navigation and low-priority actions. Never use Button for navigation.

```tsx
<TextLink href="/settings">Settings</TextLink>
<TextLink as="button" onClick={handleClear}>Clear filters</TextLink>
```

| Prop        | Type                                                                                | Notes                               |
| ----------- | ----------------------------------------------------------------------------------- | ----------------------------------- |
| `as`        | `'a'` (default) or `'button'`                                                       | `a` = navigation, `button` = action |
| `variant`   | `'primary'` `'positive'` `'negative'` `'secondary'` `'muted'` `'white'` `'premium'` |                                     |
| `icon`      | ReactNode                                                                           |                                     |
| `alignIcon` | `'start'` `'end'`                                                                   |                                     |

Use `rel="noreferrer noopener"` with `target="_blank"`.

## CopyButton

Place at the end of content the user wants to copy.

```tsx
<CopyButton value="abc123" tooltipText="Copy ID" />
```

| Prop                | Type   | Notes                        |
| ------------------- | ------ | ---------------------------- |
| `value`             | string | Required — the text to copy  |
| `tooltipText`       | string | Default: "Copy to clipboard" |
| `tooltipCopiedText` | string | Default: "Copied!"           |
