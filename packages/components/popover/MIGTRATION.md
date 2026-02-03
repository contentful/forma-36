# Migration of Popover from v5.x to 6.x

## Breaking change: Changed prop types

The Popover component introduces two changes:

- placement no longer accepts `"auto-start"` and `"auto-end"`
- offset prop shape changed from a tuple [number, number] to OffsetOptions (number or object)

---

## Summary of changes

| Prop                     | Old Type                                                                                                                                                                                       | New Type                                                                                                                                                                      | Default (Old → New)                   | Status                                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`               | `React.ReactNode`                                                                                                                                                                              | `React.ReactNode`                                                                                                                                                             | n/a                                   | Unchanged                                                                                                                                     |
| `isFullWidth`            | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false                         | Unchanged                                                                                                                                     |
| `isOpen`                 | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false                         | Unchanged                                                                                                                                     |
| `onClose`                | `() => void`                                                                                                                                                                                   | `() => void`                                                                                                                                                                  | n/a                                   | Unchanged                                                                                                                                     |
| `placement`              | `"auto"`, `"left"`, `"right"`, `"top"`, `"bottom"`, `"auto-start"`, `"auto-end"`, `"top-start"`, `"top-end"`, `"bottom-start"`, `"bottom-end"`, `"right-start"`, `"right-end"`, `"left-start"` | `"auto"`, `"top"`, `"right"`, `"bottom"`, `"left"`, `"bottom-start"`, `"bottom-end"`, `"left-start"`, `"left-end"`,`"right-start"`, `"right-end"`, `"top-start"`, `"top-end"` | 'auto' OR bottom-start → bottom-start | Changed `"auto-start"` and `"auto-end"` have been removed, as auto-adjustment for `"top"`, `"right"`, `"bottom"`, `"left"` is already applied |
| `isAutoalignmentEnabled` | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |
| `usePortal`              | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |
| `closeOnBlur`            | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |
| `closeOnEsc`             | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |
| `autoFocus`              | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |
| `id`                     | `string`                                                                                                                                                                                       | `string`                                                                                                                                                                      | undefined → undefined                 | Unchanged                                                                                                                                     |
| `offset`                 | `[number, number]`                                                                                                                                                                             | `number` OR { mainAxis?: number; crossAxis?: number; alignmentAxis?: number }`                                                                                                | [1,4] → 0                             | Changed Requires migration (see mapping)                                                                                                      |
| `renderOnlyWhenOpen`     | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |

---

## Property placement migration

OLD: `auto-start` or `auto-end` are no longer supported. Auto-adjustment for `"top"`, `"right"`, `"bottom"`, `"left"` is already applied, so either can be used.

```tsx
placement = 'auto-start';
```

NEW:

```tsx
placement = 'left-start';
```

Use when you prefer automatic best-fit without manually managing flipping logic.

---

## Property offset migration

OLD: `[x, y]` where x = horizontal shift, y = vertical gap (for top/bottom placements).  
NEW: `offset` can be:

- `number` → shorthand for `{ mainAxis: number }`
- object: `{ mainAxis?, crossAxis?, alignmentAxis? }`

Axis mapping depends on the primary side:

- top / bottom: mainAxis = vertical gap, crossAxis = horizontal shift
- left / right: mainAxis = horizontal gap, crossAxis = vertical shift

### Mapping table

| Primary Placement | Old [x, y] | New Object                    |
| ----------------- | ---------- | ----------------------------- |
| top / bottom      | [x, y]     | { mainAxis: y, crossAxis: x } |
| left / right      | [x, y]     | { mainAxis: x, crossAxis: y } |

Default change:

- Old default `[1,4]`
- New default `0`
  Approximate previous default (bottom-start): `{ mainAxis: 4, crossAxis: 1 }` (or just `offset={4}` if the small cross shift was negligible).

### Examples

Old:

```tsx
<Popover placement="bottom-start" offset={[0, 8]} />
```

New:

```tsx
<Popover placement="bottom-start" offset={{ mainAxis: 8, crossAxis: 0 }} />
```

Old:

```tsx
<Popover placement="left" offset={[8, 2]} />
```

New:

```tsx
<Popover placement="left" offset={{ mainAxis: 8, crossAxis: 2 }} />
```

Shorthand:

```tsx
<Popover offset={8} /> // { mainAxis: 8 }
```

Advanced alignment tweak:

```tsx
<Popover placement="bottom-end" offset={{ mainAxis: 8, alignmentAxis: -4 }} />
```

### Optional helper

```ts
function migrateOffset(oldOffset: [number, number], placement: string) {
  const [x, y] = oldOffset;
  const primary = placement.split('-')[0];
  if (primary === 'top' || primary === 'bottom') {
    return { mainAxis: y, crossAxis: x };
  }
  return { mainAxis: x, crossAxis: y };
}
```

---

## Migration steps checklist

1. Replace all `[x, y]` offsets with new object (or number) using mapping above.
2. Replace `auto-start` and `auto-end` with any of the other placements or adopt `placement="auto"`.
3. Re-test visual spacing (tune mainAxis).
4. Adjust horizontal/vertical nudges via crossAxis or alignmentAxis.
5. Remove obsolete tuple references.

---

## Validation

- Popover still opens/closes correctly.
- Spacing matches expectations.
- No TypeScript errors for offset.
- Optional: add tests for placement='auto' behavior (if used).
