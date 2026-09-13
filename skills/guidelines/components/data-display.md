# Data Display

## Table

```tsx
<Table>
  <Table.Head>
    <Table.Row>
      <Table.Cell>Name</Table.Cell>
      <Table.Cell>Status</Table.Cell>
      <Table.Cell width="60px" />
    </Table.Row>
  </Table.Head>
  <Table.Body>
    <Table.Row>
      <Table.Cell>Blog Post</Table.Cell>
      <Table.Cell>
        <EntityStatusBadge entityStatus="published" />
      </Table.Cell>
      <Table.Cell>
        <Menu>
          <Menu.Trigger>
            <IconButton
              icon={<DotsThreeIcon />}
              aria-label="Actions"
              variant="transparent"
              size="small"
            />
          </Menu.Trigger>
          <Menu.List>
            <Menu.Item>Edit</Menu.Item>
            <Menu.Item>Delete</Menu.Item>
          </Menu.List>
        </Menu>
      </Table.Cell>
    </Table.Row>
  </Table.Body>
</Table>
```

| Prop                           | Component    | Notes                                                                                          |
| ------------------------------ | ------------ | ---------------------------------------------------------------------------------------------- |
| `layout`                       | `Table`      | `'inline'` (default) or `'embedded'` — embedded removes outer borders for nesting inside cards |
| `isSticky`                     | `Table.Head` | Makes the header stick to the top of the scroll container                                      |
| `isSelected`                   | `Table.Row`  | Highlight selected rows                                                                        |
| `isSortable` / `sortDirection` | `Table.Cell` | Sortable column header                                                                         |
| `isTruncated`                  | `Table.Cell` | Truncate long text                                                                             |
| `width`                        | `Table.Cell` | Fixed column width                                                                             |

**Loading state:** Use `Skeleton.Row` inside a `Table.Body` for table loading states. Props: `rowCount` (default 1), `columnCount` (default 5).

## Card

```tsx
<Card padding="default">
  <Heading>API Keys</Heading>
  <Paragraph>Manage your API keys</Paragraph>
</Card>;

{
  /* Interactive card — adds role="button" and focus/hover states automatically */
}
<Card onClick={handleClick} padding="default">
  <Heading>Configure</Heading>
</Card>;
```

| Prop             | Notes                                                                          |
| ---------------- | ------------------------------------------------------------------------------ |
| `padding`        | `'none'` `'default'` `'large'`                                                 |
| `onClick`        | Makes card interactive — automatically adds `role="button"` and `tabIndex={0}` |
| `href`           | Makes card a link — renders as `<a>`                                           |
| `isSelected`     | Selection state                                                                |
| `isLoading`      | Shows skeleton overlay                                                         |
| `badge`          | ReactNode shown in card header                                                 |
| `icon`           | ReactNode shown in card header                                                 |
| `withDragHandle` | Show drag handle                                                               |
| `ariaLabel`      | Required when interactive but no visible title                                 |

## EntityList

Lists of Contentful entries or assets.

```tsx
<EntityList>
  <EntityList.Item
    title="Homepage Banner"
    contentType="Asset"
    status="published"
    withThumbnail
    actions={<Menu>...</Menu>}
  />
</EntityList>
```

Status values: `published`, `draft`, `changed`, `archived`.

## Accordion

Secondary content not needed by default.

```tsx
<Accordion align="end">
  <Accordion.Item title="Advanced settings">
    <Stack flexDirection="column" spacing="spacingM">
      <FormControl>...</FormControl>
    </Stack>
  </Accordion.Item>
</Accordion>
```

| Prop    | Component   | Notes                                                  |
| ------- | ----------- | ------------------------------------------------------ |
| `align` | `Accordion` | `'start'` or `'end'` (default) — positions the chevron |

## Skeleton

Show during data fetch. Never show empty state until fetch completes.

```tsx
<Skeleton.Container>
  <Skeleton.DisplayText />
  <Skeleton.BodyText numberOfLines={3} />
</Skeleton.Container>;

{
  /* Table loading state */
}
<Table.Body>
  <Skeleton.Row rowCount={5} columnCount={4} />
</Table.Body>;
```

**Valid Skeleton sub-components:** `Skeleton.Container`, `Skeleton.DisplayText`, `Skeleton.BodyText`, `Skeleton.Image`, `Skeleton.Row`. There is no `Skeleton.Table` or `Skeleton.Cell`.

| Prop                       | Component                                                     | Notes                                    |
| -------------------------- | ------------------------------------------------------------- | ---------------------------------------- |
| `isAnimated`               | `Skeleton.Container`                                          | Whether to animate (default `true`)      |
| `speed`                    | `Skeleton.Container`                                          | Animation speed in seconds (default `2`) |
| `svgWidth` / `svgHeight`   | `Skeleton.Container`                                          | Dimensions of the SVG container          |
| `numberOfLines`            | `Skeleton.BodyText`, `Skeleton.DisplayText`                   | Number of text lines (default `1`)       |
| `offsetTop` / `offsetLeft` | `Skeleton.BodyText`, `Skeleton.DisplayText`, `Skeleton.Image` | Positioning offsets                      |
| `width` / `height`         | `Skeleton.Image`                                              | Dimensions (default `70`x`70`)           |
| `rowCount`                 | `Skeleton.Row`                                                | Number of rows (default `1`)             |
| `columnCount`              | `Skeleton.Row`                                                | Number of columns (default `5`)          |

## Pagination

```tsx
<Pagination
  activePage={page}
  onPageChange={setPage}
  totalItems={100}
  itemsPerPage={20}
/>
```

| Prop                  | Type                        | Notes                          |
| --------------------- | --------------------------- | ------------------------------ |
| `activePage`          | number                      | Current page (0-indexed)       |
| `onPageChange`        | `(page: number) => void`    | Page change handler            |
| `totalItems`          | number                      | Total item count               |
| `itemsPerPage`        | number                      | Items per page                 |
| `isLastPage`          | boolean                     | Override last-page detection   |
| `pageLength`          | number                      | Number of page buttons to show |
| `showViewPerPage`     | boolean                     | Show items-per-page selector   |
| `viewPerPageLabel`    | string                      | Label for per-page selector    |
| `onViewPerPageChange` | `(perPage: number) => void` | Per-page change handler        |

## List

Simple bullet or numbered list.

```tsx
<List>
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
</List>
<List as="ol">...</List>
```

| Prop | Type                       | Notes                     |
| ---- | -------------------------- | ------------------------- |
| `as` | `'ul'` (default) or `'ol'` | Unordered or ordered list |

## ProgressStepper

Multi-step progress indicator.

```tsx
<ProgressStepper ariaLabel="Setup progress" activeStep={1}>
  <ProgressStepper.Step state="complete" labelText="Create" />
  <ProgressStepper.Step state="active" labelText="Configure" />
  <ProgressStepper.Step state="incomplete" labelText="Deploy" />
</ProgressStepper>
```

States: `active`, `complete`, `incomplete`, `disabled`, `error`, `warning`.
