---
'@contentful/f36-pill-next': minor
---

Add generic action icon slot to PillNext and Tag. The new `actionIcon`, `onAction`, and `actionButtonLabel` props allow consumers to render any icon as the end action button (e.g., a dots menu trigger, a plus icon) with the correct pill styling (24px circular button, gray/300 hover). When `actionIcon` is provided it takes precedence over `onRemove`.
