# Icons

Forma 36 uses the **Phosphor** icon library exclusively.

```tsx
import { PlusIcon, SearchIcon, DeleteIcon } from '@contentful/f36-icons';
```

## Styles

- **Regular** (outline, 2px stroke) — default state
- **Duotone** (filled, two-tone) — active/toggled state

Never use filled solid single-color icons. Never use icons from Material Icons, Heroicons, Feather, Lucide, or any other library.

## Sizing

Match icon size to the text it accompanies:

| Context | Size | Pixels |
|---|---|---|
| Caption text, metadata | `tiny` | 14px |
| Nav items, form fields, buttons | `small` (default) | 16px |
| Body text, headings | `medium` | 20px |

## Color

Match icon color to its semantic role:

| Role | Token |
|---|---|
| Default / neutral | `gray900` |
| Muted / decorative | `gray600` |
| Active / primary action | `blue600` |
| On dark backgrounds | `colorWhite` |
| Success | `green600` |
| Destructive / error | `red600` |
| Warning | `orange400` |
| Premium / new feature | `purple600` (sparingly) |

## Labels

Most icons need a visible text label. Icons may appear without labels only when:
- Universally understood (magnifying glass for search, question mark for help, gear for settings)
- In a consistent, expected position

When in doubt, add a label or tooltip. Icon-only buttons always need `aria-label`.
