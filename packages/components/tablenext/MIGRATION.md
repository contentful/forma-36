# Migration of Table to TableNext

`TableNext` is the responsive successor to `Table`. The API is largely the same — the compound sub-components (`Head`, `Body`, `Row`, `Cell`) are all present — but a few props were reorganised and new responsive capabilities were added.

---

## Summary of root prop changes

| Prop                  | Old (`Table`)                                       | New (`TableNext`)                                   | Default (Old → New)         | Status                                                                               |
| --------------------- | --------------------------------------------------- | --------------------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------ |
| `children`            | `React.ReactNode`                                   | `React.ReactNode`                                   | n/a                         | Unchanged                                                                            |
| `layout`              | `"inline"` \| `"embedded"` \| `"scrollable"`        | `"scrollable"` \| `"stackable"`                     | `"inline"` → `"scrollable"` | Changed. Visual variants moved to `variant`. New `"stackable"` layout added.         |
| `variant`             | n/a                                                 | `"inline"` \| `"embedded"`                          | n/a → `"inline"`            | New. Replaces `layout="inline"` and `layout="embedded"`.                             |
| `isFirstColumnSticky` | Only with `layout="scrollable"`                     | Only with `layout="scrollable"`                     | `false` → `false`           | Unchanged                                                                            |
| `verticalAlign`       | `"baseline"` \| `"bottom"` \| `"middle"` \| `"top"` | `"baseline"` \| `"bottom"` \| `"middle"` \| `"top"` | `"top"` → `"top"`           | Unchanged                                                                            |
| `columnTitles`        | n/a                                                 | `Array<string>` — only with `layout="stackable"`    | n/a                         | New. Inline row labels for the stacked view. Not available on `layout="scrollable"`. |
| `stackableBreakpoint` | n/a                                                 | `number \| string` (px/rem/em)                      | n/a → `700` (px)            | New. Only with `layout="stackable"`. Numbers treated as px.                          |
| `testId`              | `"cf-ui-table"`                                     | `"cf-ui-table-next"`                                | Changed                     | Changed                                                                              |

---

## Import migration

OLD:

```tsx
import { Table } from '@contentful/f36-components';
// or
import { Table } from '@contentful/f36-table';
```

NEW:

```tsx
import { TableNext } from '@contentful/f36-table-next';
```

Named sub-component exports are available from the new package as well:

```tsx
// Old
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@contentful/f36-table';

// New
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@contentful/f36-table-next';
```

Replace compound-component references:

```text
Table.Head → TableNext.Head
Table.Body → TableNext.Body
Table.Row  → TableNext.Row
Table.Cell → TableNext.Cell
```

---

## Layout and variant migration

`Table` used `layout` for both visual styling and scroll behaviour:

- `layout="inline"` — default, box-shadow border
- `layout="embedded"` — bottom border only, for use inside panels
- `layout="scrollable"` — horizontal scroll with sticky column support

`TableNext` separates these concerns:

- `layout` controls responsive behaviour: `"scrollable"` (default) or `"stackable"`
- `variant` controls visual styling: `"inline"` (default) or `"embedded"`

### Mapping table

| Old                                               | New                                                   |
| ------------------------------------------------- | ----------------------------------------------------- |
| `<Table>`                                         | `<TableNext>`                                         |
| `<Table layout="inline">`                         | `<TableNext variant="inline">` (or drop it — default) |
| `<Table layout="embedded">`                       | `<TableNext variant="embedded">`                      |
| `<Table layout="scrollable">`                     | `<TableNext layout="scrollable">`                     |
| `<Table layout="scrollable" isFirstColumnSticky>` | `<TableNext layout="scrollable" isFirstColumnSticky>` |

`TableNext` always wraps the table in a `<section tabIndex={0}>`, regardless of layout. Update tests or selectors that expect the root rendered element to be the `<table>` directly; the forwarded ref still points to the `<table>`, but the outermost DOM element is the wrapper `<section>`.

---

## Stackable layout (new)

Use `layout="stackable"` for tables that should reflow to a stacked card-like layout on narrow containers. This uses CSS Container Queries, so the breakpoint is relative to the component's own container width, not the viewport.

```tsx
const columnTitles = ['Name', 'Email', 'Role'];

<TableNext layout="stackable" columnTitles={columnTitles}>
  <TableNext.Head>
    <TableNext.Row>
      {columnTitles.map((title) => (
        <TableNext.Cell key={title}>{title}</TableNext.Cell>
      ))}
    </TableNext.Row>
  </TableNext.Head>
  <TableNext.Body>
    <TableNext.Row>
      <TableNext.Cell>Claus Mitchell</TableNext.Cell>
      <TableNext.Cell>claus.mitchell@contentful.com</TableNext.Cell>
      <TableNext.Cell>CEO</TableNext.Cell>
    </TableNext.Row>
  </TableNext.Body>
</TableNext>;
```

`columnTitles` provides the inline row labels shown next to each value when the table is stacked. The order and count of titles must match the cells in each row.

The breakpoint at which the table switches to the stacked view defaults to `700px`. Override it with `stackableBreakpoint`:

```tsx
<TableNext
  layout="stackable"
  columnTitles={['Name', 'Email']}
  stackableBreakpoint={500}
>
  ...
</TableNext>
```

Numbers are treated as px; strings accept `px`, `rem`, or `em` units.

`stackableBreakpoint` and `columnTitles` are only valid with `layout="stackable"`. TypeScript will reject them on `layout="scrollable"`. `isFirstColumnSticky` is only valid with `layout="scrollable"` and is not allowed on stackable tables.

### Current limitations of `layout="stackable"`

The stackable layout has restrictions that do not apply to `layout="scrollable"`:

- **No sorting.** Sorting props (`isSortable`, `sortDirection`, `sortButtonAriaLabel`) are accepted by TypeScript but have no effect in stackable mode. Move sortable columns to a `layout="scrollable"` table instead.
- **Plain text column titles only.** `columnTitles` accepts strings. Custom React elements — checkboxes, tooltips, icons, badges, or any other component — cannot be placed in the generated stacked row labels.
- **No custom head cell content beyond text.** For the same reason, head cells in a stackable table should contain plain text. Rendering additional React elements (e.g. a help tooltip or a sort button) inside `TableNext.Cell` within `TableNext.Head` is not supported in stackable mode.

Support for richer head cell content and sorting in stackable tables is planned for a future release.

---

## Compound component changes

| Old          | New              | Notes                               |
| ------------ | ---------------- | ----------------------------------- |
| `Table.Head` | `TableNext.Head` | Same `isSticky` / `offsetTop` props |
| `Table.Body` | `TableNext.Body` | Same props                          |
| `Table.Row`  | `TableNext.Row`  | Same props                          |
| `Table.Cell` | `TableNext.Cell` | Same props                          |

---

## Cell props

`TableNext.Cell` supports all the same props as `Table.Cell`:

| Prop                  | Status                                                |
| --------------------- | ----------------------------------------------------- |
| `align`               | Unchanged                                             |
| `children`            | Unchanged                                             |
| `width`               | Unchanged                                             |
| `isTruncated`         | Unchanged                                             |
| `isWordBreak`         | Unchanged                                             |
| `isSortable`          | Supported (not active on `layout="stackable"` tables) |
| `sortDirection`       | Supported (requires `isSortable: true`)               |
| `sortButtonAriaLabel` | Supported (requires `isSortable: true`)               |

Import `TableCellSorting` from `@contentful/f36-table-next` instead of `@contentful/f36-table`.

---

## Full migration example

OLD:

```tsx
<Table layout="embedded">
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Email</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Claus Mitchell</Table.Cell>
      <Table.Cell>claus.mitchell@contentful.com</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

NEW:

```tsx
<TableNext variant="embedded">
  <TableNext.Head>
    <TableNext.Row>
      <TableNext.Cell>Name</TableNext.Cell>
      <TableNext.Cell>Email</TableNext.Cell>
    </TableNext.Row>
  </TableNext.Head>
  <TableNext.Body>
    <TableNext.Row>
      <TableNext.Cell>Claus Mitchell</TableNext.Cell>
      <TableNext.Cell>claus.mitchell@contentful.com</TableNext.Cell>
    </TableNext.Row>
  </TableNext.Body>
</TableNext>
```

---

## Migration checklist

1. Replace package import from `@contentful/f36-table` to `@contentful/f36-table-next`.
2. Rename `Table` to `TableNext` and all compound references (`Table.Head` → `TableNext.Head`, etc.).
3. Replace `layout="inline"` with `variant="inline"`, or remove it (it is the default).
4. Replace `layout="embedded"` with `variant="embedded"`.
5. Keep `layout="scrollable"` only when you want horizontal scrolling.
6. Add `layout="stackable"` for tables that should stack on narrow containers; pass `columnTitles` with one label per column for inline row labels in the stacked view; optionally set `stackableBreakpoint`.
7. `isSticky` and `offsetTop` stay on `TableNext.Head` — no change needed there.
8. Update `testId` references from `"cf-ui-table"` to `"cf-ui-table-next"` in tests.
9. Update any selectors that target the root `<table>` element directly; `TableNext` always renders a wrapping `<section>` around it.
10. Re-test responsive behaviour, sticky headers, sticky first columns, and keyboard access for scrollable tables.
