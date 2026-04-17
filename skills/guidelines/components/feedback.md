# Feedback & Status

## Notification (toast)

Temporary feedback after a user action. Auto-dismisses after 6 seconds.

```tsx
Notification.success('Entry published');
Notification.error('Failed to save. Check your connection and try again.');
Notification.success('Saved', { id: 'save-success' }); // prevent duplicates
Notification.error('Upload failed', { duration: 0, withClose: true }); // persistent error
```

**Rules:**
- Active voice, present tense: "Entry published" not "The entry has been published"
- Max 1–2 sentences
- `duration: 0` for errors that need acknowledgment
- Use `id` to prevent duplicate toasts
- Do not use Notification for persistent context — use Note

## Note

Persistent inline context. Stays visible until dismissed or the condition changes.

```tsx
<Note variant="warning" title="Unsaved changes">
  You have unsaved changes that will be lost if you navigate away.
</Note>

<Note variant="positive">Environment published successfully.</Note>
```

| Variant | Icon | Use |
|---|---|---|
| `primary` | InfoIcon | General information |
| `neutral` | InfoIcon | Neutral context |
| `positive` | CheckCircleIcon | Success, confirmation |
| `warning` | WarningIcon | Caution, potential issues |
| `negative` | WarningOctagonIcon | Errors, critical issues |
| `premium` | DiamondIcon | Paid feature context |

| Prop | Type | Notes |
|---|---|---|
| `variant` | see above | Default: `'primary'` |
| `title` | string | Optional heading |
| `withCloseButton` | boolean | Adds dismiss button |
| `onClose` | function | Pair with `withCloseButton` |
| `icon` | ReactNode | Override default variant icon |

Place Note near the relevant content, not generically at the top of the page.

## Badge

Labels and status indicators. Keep to one word.

```tsx
<Badge variant="positive">Published</Badge>
<Badge variant="warning">Draft</Badge>
<Badge variant="featured">New</Badge>
```

| Variant | Use |
|---|---|
| `primary` | Default |
| `primary-filled` | Emphasized default |
| `positive` | Published, active |
| `negative` | Deleted, error |
| `warning` | Draft, pending |
| `secondary` | Muted status |
| `featured` | Premium, new |

Sizes: `default`, `small`. Use `textTransform="none"` when text is already in correct case.

**For Contentful entity status, always use `EntityStatusBadge`:**

```tsx
<EntityStatusBadge entityStatus="published" />
<EntityStatusBadge entityStatus="draft" />
<EntityStatusBadge entityStatus="changed" />
<EntityStatusBadge entityStatus="archived" />
```

Do not construct a raw Badge for entity status.

## Spinner

Full-area loading indicator.

```tsx
<Spinner size="large" />
```

Sizes: `small` (14px), `medium` (20px, default), `large` (36px).
Variants: `default`, `primary`, `white`.

For button loading, use `Button isLoading` instead of adding a Spinner.
