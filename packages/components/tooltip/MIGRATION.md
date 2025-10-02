# Migration of Tooltip from v5.x to 6.x

## Breaking change: Changed prop types

The Popover component introduces one change:

- placement no longer accepts `"auto-start"` and `"auto-end"`

---

## Summary of Changes

| Prop                     | Old Type                                                                                                                                                                                       | New Type                                                                                                                                                                      | Default (Old → New)   | Status                                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`               | `React.ReactNode`                                                                                                                                                                              | `React.ReactNode`                                                                                                                                                             | n/a                   | Unchanged                                                                                                                                     |
| `content`                | `ReactElement \| string`                                                                                                                                                                       | `ReactElement \| string`                                                                                                                                                      | undefined → undefined | Unchanged                                                                                                                                     |
| `label`                  | `string`                                                                                                                                                                                       | `string`                                                                                                                                                                      | undefined → undefined | Unchanged                                                                                                                                     |
| `as`                     | `React.ElementType`                                                                                                                                                                            | `React.ElementType`                                                                                                                                                           | 'span' → 'span'       | Unchanged                                                                                                                                     |
| `id`                     | `string`                                                                                                                                                                                       | `string`                                                                                                                                                                      | undefined → undefined | Unchanged                                                                                                                                     |
| `isVisible`              | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false         | Unchanged                                                                                                                                     |
| `maxWidth`               | `number \| CSS.Property.MaxWidth`                                                                                                                                                              | `number \| CSS.Property.MaxWidth`                                                                                                                                             | 360 → 360             | Unchanged                                                                                                                                     |
| `hideDelay`              | `number`                                                                                                                                                                                       | `number`                                                                                                                                                                      | 0 → 0                 | Unchanged                                                                                                                                     |
| `showDelay`              | `number`                                                                                                                                                                                       | `number`                                                                                                                                                                      | 375 → 375             | Unchanged                                                                                                                                     |
| `placement`              | `"auto"`, `"left"`, `"right"`, `"top"`, `"bottom"`, `"auto-start"`, `"auto-end"`, `"top-start"`, `"top-end"`, `"bottom-start"`, `"bottom-end"`, `"right-start"`, `"right-end"`, `"left-start"` | `"auto"`, `"top"`, `"right"`, `"bottom"`, `"left"`, `"bottom-start"`, `"bottom-end"`, `"left-start"`, `"left-end"`,`"right-start"`, `"right-end"`, `"top-start"`, `"top-end"` | undefined → undefined | Changed `"auto-start"` and `"auto-end"` have been removed, as auto-adjustment for `"top"`, `"right"`, `"bottom"`, `"left"` is already applied |
| `targetWrapperClassName` | `string`                                                                                                                                                                                       | `string`                                                                                                                                                                      | undefined → undefined | Unchanged                                                                                                                                     |
| `usePortal`              | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false         | Unchanged                                                                                                                                     |
| `isDisabled`             | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false         | Unchanged                                                                                                                                     |
| `onBlur`                 | `(evt: FocusEvent) => void`                                                                                                                                                                    | `(evt: FocusEvent) => void`                                                                                                                                                   | undefined → undefined | Unchanged                                                                                                                                     |
| `onFocus`                | `(evt: FocusEvent) => void`                                                                                                                                                                    | `(evt: FocusEvent) => void`                                                                                                                                                   | undefined → undefined | Unchanged                                                                                                                                     |
| `onMouseLeave`           | `(evt: MouseEvent) => void`                                                                                                                                                                    | `(evt: MouseEvent) => void`                                                                                                                                                   | undefined → undefined | Unchanged                                                                                                                                     |
| `onMouseOver`            | `(evt: MouseEvent) => void`                                                                                                                                                                    | `(evt: MouseEvent) => void`                                                                                                                                                   | undefined → undefined | Unchanged                                                                                                                                     |
| `onKeyDown`              | `(evt: KeyboardEvent) => void`                                                                                                                                                                 | `(evt: KeyboardEvent) => void`                                                                                                                                                | undefined → undefined | Unchanged                                                                                                                                     |

---

## placement Migration

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

## Migration Steps Checklist

1. Replace `auto-start` and `auto-end` with any of the other placements or adopt `placement="auto"`.
2. Re-test behavior

---

## Validation

- Popover still opens/closes correctly.
- Spacing matches expectations.
- No TypeScript errors for offset.
- Optional: add tests for placement='auto' behavior (if used).
