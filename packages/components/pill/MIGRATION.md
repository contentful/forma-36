# Migration from Pill to PillNext

## Summary of Change

The `Pill` component from `@contentful/f36-pill` is deprecated. Use `PillNext` from the new `@contentful/f36-pill-next` package instead. `Pill` will be removed in the next major version.

## Why

`PillNext` is a ground-up rewrite that:

- Supports four visual variants (secondary, primary, warning, negative) instead of two (idle, active, deleted)
- Uses `IconButton` for the close action with proper circular hover and disabled states
- Adds leading-icon support with keyboard-accessible tooltip for warning/negative variants
- Removes the drag-handle concern — pill is now indication-first, not reorderable
- Aligns with the refreshed Figma design spec

## Installation

```bash
npm install @contentful/f36-pill-next
```

## Before → After

### Basic usage

```tsx
// ❌ Deprecated
import { Pill } from '@contentful/f36-pill';

<Pill label="Category" onClose={() => {}} />;

// ✅ Recommended
import { PillNext } from '@contentful/f36-pill-next';

<PillNext label="Category" onRemove={() => {}} />;
```

### Variants

```tsx
// ❌ Deprecated
<Pill label="Active tag" variant="active" />
<Pill label="Deleted tag" variant="deleted" />

// ✅ Recommended
<PillNext label="Active tag" variant="primary" />
<PillNext label="Deleted tag" variant="negative" />
```

### Disabled close button

```tsx
// ❌ Deprecated (Pill has no disabled state for close)
<Pill label="Tag" onClose={() => {}} />

// ✅ Recommended
<PillNext label="Tag" onRemove={() => {}} isDisabled />
```

### Drag handle

PillNext intentionally does not support drag handles. If you need drag-and-drop reordering, wrap PillNext in a drag container from your drag-and-drop library (e.g. dnd-kit).

```tsx
// ❌ Deprecated
<Pill label="Draggable" isDraggable onDrag={handleDrag} />;

// ✅ Recommended — use dnd-kit or similar
import { useSortable } from '@dnd-kit/sortable';

function DraggablePill({ label }) {
  const { attributes, listeners, setNodeRef } = useSortable({ id: label });
  return (
    <PillNext ref={setNodeRef} label={label} {...attributes} {...listeners} />
  );
}
```

## Prop Mapping

| Pill (deprecated)      | PillNext              | Notes                                                              |
| ---------------------- | --------------------- | ------------------------------------------------------------------ |
| `label`                | `label`               | Unchanged                                                          |
| `onClose`              | `onRemove`            | Renamed                                                            |
| `closeButtonAriaLabel` | `removeButtonLabel`   | Renamed, default changed from "Close" to "Remove"                  |
| `variant="idle"`       | `variant="secondary"` | Default variant                                                    |
| `variant="active"`     | `variant="primary"`   | Highlighted state                                                  |
| `variant="deleted"`    | `variant="negative"`  | Error/deleted state                                                |
| —                      | `variant="warning"`   | New variant, no equivalent in old Pill                             |
| `isDraggable`          | —                     | Removed, use external drag library                                 |
| `onDrag`               | —                     | Removed, use external drag library                                 |
| `dragHandleComponent`  | —                     | Removed, use external drag library                                 |
| —                      | `isDisabled`          | New, disables the remove button                                    |
| —                      | `tooltipContent`      | New, tooltip on leading icon (warning/negative)                    |
| —                      | `tooltipProps`        | New, override tooltip placement etc.                               |
| `testId`               | `testId`              | Unchanged (default changes from "cf-ui-pill" to "cf-ui-pill-next") |
| `className`            | `className`           | Unchanged                                                          |

## Important Differences

- **No drag handle**: PillNext is indication-only. If you need drag-and-drop, wrap PillNext in a sortable container.
- **Remove vs Close**: The callback is named `onRemove` (not `onClose`) and the button uses `IconButton` with a circular hover state.
- **Leading icons**: Warning and negative variants automatically show a leading icon (WarningIcon / WarningOctagonIcon). No configuration needed.
- **No label truncation**: PillNext does not truncate labels. The pill expands to accommodate the full text.
- **Default test ID**: Changes from `cf-ui-pill` to `cf-ui-pill-next`.

## Validation Checklist

- [ ] All `@contentful/f36-pill` `Pill` imports replaced with `@contentful/f36-pill-next` `PillNext`
- [ ] `onClose` renamed to `onRemove`
- [ ] `closeButtonAriaLabel` renamed to `removeButtonLabel`
- [ ] Variant values mapped (`idle` → `secondary`, `active` → `primary`, `deleted` → `negative`)
- [ ] Drag-related props removed and replaced with external drag library if needed
- [ ] Test IDs updated if hardcoded assertions reference `cf-ui-pill`

## Support

If you encounter issues during migration:

- Check our [GitHub Issues](https://github.com/contentful/forma-36/issues) or create a new one
- Send us direct feedback via our feedback form on our [website](https://f36.contentful.com/)
