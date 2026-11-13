# Content & Media

## Asset

Represents an asset visually without displaying the file itself.

```tsx
<Asset src="/preview.jpg" type="image" title="Banner image" status="published" />
```

Types: `image`, `pdf`, `video`, `audio`, `code`, `spreadsheet`. When `type="image"` renders `<img>`. Archived assets show an icon.

## Avatar

```tsx
<Avatar src="/user.jpg" size="medium" variant="user" />
<Avatar initials="JD" size="small" colorVariant="purple" />
```

| Prop | Values |
|---|---|
| `size` | `'tiny'` (20px) `'small'` (24px) `'medium'` (32px) `'large'` (48px) |
| `variant` | `'user'` `'app'` |
| `colorVariant` | `'gray'` `'green'` `'purple'` `'pink'` `'muted'` |
| `src` | Image URL |
| `initials` | Fallback text |

Pass meaningful `alt` when used without adjacent name text.

## Image

Basic image component.

```tsx
<Image src="/photo.jpg" alt="Product screenshot" />
```

## DateTime

Display-only date/time. Renders a `<time>` tag.

```tsx
<DateTime date="2025-03-15T10:30:00Z" format="full" />
<DateTime date={new Date()} format="day" />
```

Formats: `full`, `fullWithSeconds`, `day`, `time`, `weekday`.

For date ranges, use en dash with spaces: "8:00 am -- 2:00 pm".

## UsageCard

Usage statistics display.

```tsx
<UsageCard variant="usage">
  <UsageCard.Header>API calls</UsageCard.Header>
  <UsageCount count={1250} limit={5000} />
  <UsageCard.Description>
    <TextLink href="/billing">Upgrade plan</TextLink>
  </UsageCard.Description>
</UsageCard>
```

Variants: `usage` (white bg, visible border), `info` (gray bg, no border).
