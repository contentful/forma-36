# Migration of Table to TableNext

`TableNext` is the responsive successor to `Table`. The major shift is that table headers are no longer customizable. Instead of composing a header with `Table.Head`, `Table.Row`, and `Table.Cell`, `TableNext` auto-generates the header from the root `columnTitles` prop.

This currently limits what can be migrated to `TableNext`. Header-level customizations such as sortable column buttons, check-all checkboxes, action controls, tooltips, menus, icons, or any other custom React component inside a table head are not supported at the moment.

The root component API changed in a few important places:

- the component and package names changed from `Table` / `@contentful/f36-table` to `TableNext` / `@contentful/f36-tablenext`
- `layout` no longer accepts `"inline"` or `"embedded"`; visual styling moved to the new `variant` prop
- the default layout changed from `"inline"` to `"scrollable"`
- `columnTitles` now generates the table header and powers the `stackable` layout
- `isSticky` moved to the root component and got renamed to `isHeaderSticky`, will be applied when the header is generated from `columnTitles`
- `offsetTop` moved from `Table.Head` to the root `TableNext` component, will be applied when the generated header is sticky
- custom table heads are no longer supported; table heads are generated from the `columnTitles` prop

---

## Current header limitations

Only plain text column titles are supported in generated table heads.

Do not migrate a `Table` to `TableNext` yet if it depends on any of the following header features:

- check-all checkboxes
- custom header controls or buttons
- icons, badges, menus, tooltips, or other custom React components inside the table head
- custom table head structure beyond one generated row of column titles

Those tables should stay on `Table` until `TableNext` supports custom header composition or the specific feature has a replacement API.

Sortable header cells are supported in `TableNext` for non-stackable tables. See the sorting migration section below.

---

## Summary of root prop changes

| Prop                  | Old Type / Behavior                                       | New Type / Behavior                                               | Default (Old -> New)         | Status                                                                                                      |
| --------------------- | --------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `children`            | `React.ReactNode`                                         | `React.ReactNode`                                                 | n/a                          | Unchanged                                                                                                   |
| `layout`              | `"inline"`, `"embedded"`, `"scrollable"`                  | `"scrollable"`, `"stackable"`                                     | `"inline"` -> `"scrollable"` | Changed. Use `variant` for current visual variants. There is no non-responsive table layout in `TableNext`. |
| `variant`             | n/a                                                       | `"inline"`, `"embedded"`                                          | n/a -> `"inline"`            | New                                                                                                         |
| `isFirstColumnSticky` | Available only with `layout="scrollable"`                 | Available only with `layout="scrollable"`                         | `false` -> `false`           | Mostly unchanged                                                                                            |
| `verticalAlign`       | `"baseline"`, `"bottom"`, `"middle"`, `"top"`             | `"baseline"`, `"bottom"`, `"middle"`, `"top"`                     | `"top"` -> `"top"`           | Unchanged                                                                                                   |
| `columnTitles`        | n/a                                                       | `Array<string>`                                                   | n/a                          | New. Required for generated headers and stackable row labels.                                               |
| `stackableBreakpoint` | n/a                                                       | `` number \| `${number}px` \| `${number}rem` \| `${number}em` ``  | n/a -> `700` (px)            | New. Only available when `layout="stackable"`. Numbers are treated as px.                                   |
| `isHeaderSticky`      | Controlled by `Table.Head isSticky` internally            | Root prop for generated headers from `columnTitles`               | n/a -> `false`               | New root prop                                                                                               |
| `offsetTop`           | Prop on `Table.Head`                                      | Root prop for generated headers from `columnTitles`               | `0` -> `0`                   | Moved                                                                                                       |
| `testId`              | `"cf-ui-table"`                                           | `"cf-ui-table-next"`                                              | Changed                      | Changed                                                                                                     |
| custom header content | Supported through `Table.Head` composition                | Not supported                                                     | n/a                          | Removed                                                                                                     |
| sortable headers      | Supported through `Table.Cell isSortable` in `Table.Head` | Supported on non-stackable tables via `TableNext.Cell isSortable` | n/a                          | Supported (non-stackable only)                                                                              |

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
import { TableNext } from '@contentful/f36-tablenext';
```

Then replace compound-component references for the table body:

```tsx
Table.Body -> TableNext.Body
Table.Row -> TableNext.Row
Table.Cell -> TableNext.Cell
```

If you imported subcomponents directly, remove the direct `TableHead` usage and migrate header titles to `columnTitles`:

```tsx
// Old
import {
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@contentful/f36-table';

// New
import { TableNext } from '@contentful/f36-tablenext';
```

`@contentful/f36-tablenext` exports `TableNext`, `TableBody`, `TableRow`, and `TableCell`, but it does not export `TableHead` as a standalone named export. Header rows should be generated by passing `columnTitles` to `TableNext`.

---

## Layout and variant migration

The old `Table` used `layout` for both visual density and scroll behavior:

- `layout="inline"`
- `layout="embedded"`
- `layout="scrollable"`

`TableNext` separates these concerns:

- `layout` controls responsive behavior: `"scrollable"` or `"stackable"`
- `variant` controls the visual style: `"inline"` or `"embedded"`

### Mapping table

| Old                                               | New                                                   |
| ------------------------------------------------- | ----------------------------------------------------- |
| `<Table>`                                         | `<TableNext>`                                         |
| `<Table layout="inline">`                         | `<TableNext variant="inline">`                        |
| `<Table layout="embedded">`                       | `<TableNext variant="embedded">`                      |
| `<Table layout="scrollable">`                     | `<TableNext layout="scrollable">`                     |
| `<Table layout="scrollable" isFirstColumnSticky>` | `<TableNext layout="scrollable" isFirstColumnSticky>` |

Important: `TableNext` defaults to `layout="scrollable"` and always wraps the table in a `section`. If you relied on the old default inline visual styling, migrate to:

```tsx
<TableNext variant="inline">...</TableNext>
```

There is no exact replacement for the old non-scrollable DOM structure. Update tests or selectors that assume the root rendered element is the `table`; with `TableNext`, the forwarded ref still points to the `table`, but the rendered component returns a wrapper `section`.

If you want the table to become a stacked layout on narrow containers, use:

```tsx
<TableNext layout="stackable" columnTitles={['Name', 'Email', 'Role']}>
  ...
</TableNext>
```

The breakpoint at which the table switches from stacked to tabular layout defaults to `700px`. Pass `stackableBreakpoint` to override it. Numbers are treated as px; strings accept `px`, `rem`, or `em` units.

```tsx
<TableNext
  layout="stackable"
  columnTitles={['Name', 'Email', 'Role']}
  stackableBreakpoint={500}
>
  ...
</TableNext>
```

`stackableBreakpoint` is only valid with `layout="stackable"`. TypeScript will reject it on `layout="scrollable"`.

`isFirstColumnSticky` is only valid with `layout="scrollable"`. It should not be used with `layout="stackable"`.

---

## Header migration

`TableNext` generates table heads from the root `columnTitles` prop. Move simple header labels out of `Table.Head` / `TableHead` and into `columnTitles`.

This is not a one-to-one replacement for custom table heads. `columnTitles` accepts strings only, so generated headers cannot contain sorting buttons, checkboxes, menus, tooltips, icons, badges, or other custom components.

OLD:

```tsx
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Email</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>...</Table.Body>
</Table>
```

NEW:

```tsx
<TableNext columnTitles={['Name', 'Email']}>
  <TableNext.Body>...</TableNext.Body>
</TableNext>
```

Use `columnTitles` for both responsive modes. In `layout="scrollable"`, the titles generate a regular table header. In `layout="stackable"`, the same titles are also used as labels next to row values.

OLD:

```tsx
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Email</Table.Cell>
      <Table.Cell>Role</Table.Cell>
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Claus Mitchell</Table.Cell>
      <Table.Cell>claus.mitchell@contentful.com</Table.Cell>
      <Table.Cell>CEO</Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

NEW:

```tsx
<TableNext columnTitles={['Name', 'Email', 'Role']}>
  <TableNext.Body>
    <TableNext.Row>
      <TableNext.Cell>Claus Mitchell</TableNext.Cell>
      <TableNext.Cell>claus.mitchell@contentful.com</TableNext.Cell>
      <TableNext.Cell>CEO</TableNext.Cell>
    </TableNext.Row>
  </TableNext.Body>
</TableNext>
```

When `columnTitles` is provided, `TableNext` renders the table header for you. Do not also render a manual head for the same columns, otherwise the table will contain duplicate headers.

The number and order of `columnTitles` must match the cells in each row. In `stackable` layout, these titles are used as labels next to the corresponding row values.

---

## Sticky header migration

Use the root `isHeaderSticky` prop for sticky generated headers:

```tsx
<TableNext
  layout="scrollable"
  isHeaderSticky
  offsetTop={64}
  columnTitles={['Name', 'Status', 'Updated']}
>
  <TableNext.Body>...</TableNext.Body>
</TableNext>
```

`offsetTop` is no longer passed to `Table.Head`. Pass it to `TableNext` instead. It is forwarded to the generated header and applied to the sticky header cells.

---

## Compound component changes

The compound components are still available on the root component:

| Old          | New              | Notes                                                       |
| ------------ | ---------------- | ----------------------------------------------------------- |
| `Table.Head` | `columnTitles`   | Direct head usage is replaced by generated headers          |
| `Table.Body` | `TableNext.Body` | Same props                                                  |
| `Table.Row`  | `TableNext.Row`  | Same props, with additional stackable behavior from context |
| `Table.Cell` | `TableNext.Cell` | Same props                                                  |

`TableNext.Row` and `TableNext.Body` read the root table context to support `layout="stackable"` and `columnTitles`. This means rows can render additional hidden label cells for stackable presentation. Keep row cell order stable and make sure each row has the same number of cells as `columnTitles`.

---

## Cell props and removed header features

`TableNext.Cell` supports all cell props from `Table.Cell`, including sorting on non-stackable tables:

| Prop                  | Status                                  |
| --------------------- | --------------------------------------- |
| `align`               | Unchanged                               |
| `children`            | Unchanged                               |
| `width`               | Unchanged                               |
| `isTruncated`         | Unchanged                               |
| `isWordBreak`         | Unchanged                               |
| `isSortable`          | Supported (non-stackable tables only)   |
| `sortDirection`       | Supported (requires `isSortable: true`) |
| `sortButtonAriaLabel` | Supported (requires `isSortable: true`) |

Sorting works the same way as in `Table`: set `isSortable` on head cells, pass a controlled `sortDirection`, and handle `onClick` to update sort state. Sorting props are silently ignored on `layout="stackable"` tables.

OLD:

```tsx
<Table.Head>
  <Table.Row>
    <Table.Cell
      isSortable
      onClick={() => handleSort('name')}
      sortDirection={sorting?.column === 'name' ? sorting.direction : undefined}
    >
      Name
    </Table.Cell>
  </Table.Row>
</Table.Head>
```

NEW:

```tsx
<TableNext.Head>
  <TableNext.Row>
    <TableNext.Cell
      isSortable
      onClick={() => handleSort('name')}
      sortDirection={sorting?.column === 'name' ? sorting.direction : undefined}
    >
      Name
    </TableNext.Cell>
  </TableNext.Row>
</TableNext.Head>
```

Import `TableCellSorting` from `@contentful/f36-table-next` instead of `@contentful/f36-table`.

The body cell props (`align`, `width`, `isTruncated`, `isWordBreak`) migrate unchanged to `TableNext.Cell`.

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
<TableNext variant="embedded" columnTitles={['Name', 'Email']}>
  <TableNext.Body>
    <TableNext.Row>
      <TableNext.Cell>Claus Mitchell</TableNext.Cell>
      <TableNext.Cell>claus.mitchell@contentful.com</TableNext.Cell>
    </TableNext.Row>
  </TableNext.Body>
</TableNext>
```

---

## Migration steps checklist

1. Replace imports from `Table` to `TableNext`.
2. Rename body compound components from `Table.Body`, `Table.Row`, and `Table.Cell` to `TableNext.Body`, `TableNext.Row`, and `TableNext.Cell`.
3. Replace `layout="inline"` with `variant="inline"` or remove it if the default is enough.
4. Replace `layout="embedded"` with `variant="embedded"`.
5. Keep `layout="scrollable"` only when you want horizontal scrolling.
6. Add `layout="stackable"` only for tables that should stack on narrow containers; optionally set `stackableBreakpoint` to override the default 700px breakpoint.
7. Move simple header text into `columnTitles` when using generated headers or stackable layout.
8. Do not migrate tables that need check-all checkboxes or custom header components. Sortable headers can be migrated — see the cell props section above.
9. Remove direct `Head` usage; generated table heads come from `columnTitles`.
10. Move sticky generated headers from `Table.Head isSticky` to root `isHeaderSticky`.
11. Move sticky header offset from `Table.Head offsetTop` to root `offsetTop`.
12. Check each row has the same cell count and order as `columnTitles`.
13. Re-test responsive behavior, sticky headers, sticky first columns, and keyboard access for scrollable tables.
