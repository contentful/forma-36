# Migration of Menu from v5.x to 6.x

## Breaking change: Changed prop types

The Menu component introduces two changes:

- placement no longer accepts `"auto-start"` and `"auto-end"`
- offset prop shape changed from a tuple [number, number] to OffsetOptions (number or object)

---

## Summary of changes

| Prop                     | Old Type                                                                                                                                                                                       | New Type                                                                                                                                                                      | Default (Old → New)                   | Status                                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`               | `React.ReactNode`                                                                                                                                                                              | `React.ReactNode`                                                                                                                                                             | n/a                                   | Unchanged                                                                                                                                     |
| `isFullWidth`            | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false                         | Unchanged                                                                                                                                     |
| `isOpen`                 | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false                         | Unchanged                                                                                                                                     |
| `defaultIsOpen`          | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false → false                         | Unchanged                                                                                                                                     |
| `onClose`                | `() => void`                                                                                                                                                                                   | `() => void`                                                                                                                                                                  | n/a                                   | Unchanged                                                                                                                                     |
| `onOpen`                 | `() => void`                                                                                                                                                                                   | `() => void`                                                                                                                                                                  | n/a                                   | Unchanged                                                                                                                                     |
| `placement`              | `"auto"`, `"left"`, `"right"`, `"top"`, `"bottom"`, `"auto-start"`, `"auto-end"`, `"top-start"`, `"top-end"`, `"bottom-start"`, `"bottom-end"`, `"right-start"`, `"right-end"`, `"left-start"` | `"auto"`, `"top"`, `"right"`, `"bottom"`, `"left"`, `"bottom-start"`, `"bottom-end"`, `"left-start"`, `"left-end"`,`"right-start"`, `"right-end"`, `"top-start"`, `"top-end"` | 'auto' OR bottom-start → bottom-start | Changed `"auto-start"` and `"auto-end"` have been removed, as auto-adjustment for `"top"`, `"right"`, `"bottom"`, `"left"` is already applied |
| `isAutoalignmentEnabled` | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |
| `usePortal`              | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | true → true                           | Unchanged                                                                                                                                     |
| `useTypeahead`           | `boolean`                                                                                                                                                                                      | `boolean`                                                                                                                                                                     | false                                 | New                                                                                                                                           |
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

### Mapping Table

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
<Menu placement="bottom-start" offset={[0, 8]} />
```

New:

```tsx
<Menu placement="bottom-start" offset={{ mainAxis: 8, crossAxis: 0 }} />
```

Old:

```tsx
<Menu placement="left" offset={[8, 2]} />
```

New:

```tsx
<Menu placement="left" offset={{ mainAxis: 8, crossAxis: 2 }} />
```

Shorthand:

```tsx
<Menu offset={8} /> // { mainAxis: 8 }
```

Advanced alignment tweak:

```tsx
<Menu placement="bottom-end" offset={{ mainAxis: 8, alignmentAxis: -4 }} />
```

### Optional Helper

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

## New Property Typeahead

The `useTypeahead` prop enables a quick navigation feature within a Menu. If a user opens the menu and then starts typing, the focus will jump to the first entry with the typed letter.
Important: `useTypeahead` will catch and intervene `onKeyDown` events. So it can not be used with `TextInput` inside the `MenuList`.

### Example

```tsx
<Menu useTypeahead>
  <Menu.Trigger>
    <Button>Open</Button>
  </Menu.Trigger>
  <Menu.List>
    <Menu.Item>Apple</Menu.Item>
    <Menu.Submenu>
      <Menu.SubmenuTrigger>Banana</Menu.SubmenuTrigger>
      <Menu.List>
        <Menu.Item>Cantaloupe</Menu.Item>
        <Menu.Item>Dates</Menu.Item>
      </Menu.List>
    </Menu.Submenu>
  </Menu.List>
</Menu>
```

---

## Deprecated: `Menu.Submenu`

The compound component `Menu.Submenu` has been deprecated in v6.

### What changed

Previously you could nest menus using:

```tsx
<Menu>
  <Menu.Trigger>
    <Button>Actions</Button>
  </Menu.Trigger>
  <Menu.List>
    <Menu.Item>Item 1</Menu.Item>
    <Menu.Submenu>
      <Menu.SubmenuTrigger>More actions</Menu.SubmenuTrigger>
      <Menu.List>
        <Menu.Item>Nested A</Menu.Item>
        <Menu.Item>Nested B</Menu.Item>
      </Menu.List>
    </Menu.Submenu>
  </Menu.List>
</Menu>
```

In v6 you should compose nested menus directly with `Menu` elements. The nested `Menu` automatically detects its parent and switches to submenu (fly-out) behavior (placement defaults to `right-start`).

### Migration

1. Replace `<Menu.Submenu>` with `<Menu>`.
2. Keep the nested `<Menu.List>` and its `<Menu.Item>` children unchanged.

Updated example:

```tsx
<Menu>
  <Menu.Trigger>
    <Button>Actions</Button>
  </Menu.Trigger>
  <Menu.List>
    <Menu.Item>Item 1</Menu.Item>
    <Menu>
      <Menu.SubmenuTrigger>More actions</Menu.SubmenuTrigger>
      <Menu.List>
        <Menu.Item>Nested A</Menu.Item>
        <Menu.Item>Nested B</Menu.Item>
      </Menu.List>
    </Menu>
  </Menu.List>
</Menu>
```

### Why

Removing the special-case `Submenu` component simplifies the API surface; all menus—root or nested—share the same props and logic. Nesting is inferred via context (presence of a parent floating node) so fewer concepts need to be learned.

### Notes

- No new props are required; nesting works automatically.
- The deprecated `Submenu` still renders (with a console warning in development) to ease incremental migration, but it will be removed in a future major version.
- If you previously relied on custom styling targeting `Menu.Submenu`, switch your selectors to target nested `Menu` instances (e.g. via an additional class or data attribute you apply yourself).

### Quick Find & Replace Strategy

Regex suggestions (adapt as needed):

| Intent    | Find               | Replace   |
| --------- | ------------------ | --------- |
| Open tag  | `<Menu\.Submenu>`  | `<Menu>`  |
| Close tag | `</Menu\.Submenu>` | `</Menu>` |

Always review replacements manually—especially if you had additional props on `Submenu`

---

## Migration steps checklist

1. Replace all `[x, y]` offsets with new object (or number) using mapping above.
2. Replace `auto-start` and `auto-end` with any of the other placements or adopt `placement="auto"`.
3. Re-test visual spacing (tune mainAxis).
4. Adjust horizontal/vertical nudges via crossAxis or alignmentAxis.
5. Remove obsolete tuple references.
