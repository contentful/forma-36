---
'@contentful/f36-pill-next': minor
---

Replace `onRemove`/`removeButtonLabel`/`removeButtonClassName`/`removeIconColor` with a generic action icon slot. The new `actionIcon`, `onAction`, and `actionButtonLabel` props allow consumers to render any icon as the end action button (e.g., X for remove, + for add, ... for menu) with the correct pill styling (24px circular IconButton, gray/300 hover, luminosity blend). Breaking change to the alpha API — no stable consumers exist.
