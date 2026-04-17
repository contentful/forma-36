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
      <Table.Cell><EntityStatusBadge entityStatus="published" /></Table.Cell>
      <Table.Cell>
        <Menu>
          <Menu.Trigger>
            <IconButton icon={<MoreHorizontalIcon />} aria-label="Actions" variant="transparent" size="small" />
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

| Prop | Component | Notes |
|---|---|---|
| `isSticky` | `Table.Head` | Sticky header |
| `isSelected` | `Table.Row` | Highlight selected rows |
| `isSortable` / `sortDirection` | `Table.Cell` | Sortable column header |
| `isTruncated` | `Table.Cell` | Truncate long text |
| `width` | `Table.Cell` | Fixed column width |

**Loading state:** `Skeleton.Row` inside `Table.Body` with `rowCount` and `columnCount`.

## Card

```tsx
<Card onClick={handleClick} padding="default">
  <Heading>API Keys</Heading>
  <Paragraph>Manage your API keys</Paragraph>
</Card>
```

| Prop | Notes |
|---|---|
| `onClick` | Makes card interactive |
| `isSelected` | Selection state |
| `padding` | `'none'` `'default'` `'large'` |
| `withDragHandle` | Show drag handle |
| `ariaLabel` | Required when interactive but no visible title |

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
<Accordion>
  <Accordion.Item title="Advanced settings">
    <Stack flexDirection="column" spacing="spacingM">
      <FormControl>...</FormControl>
    </Stack>
  </Accordion.Item>
</Accordion>
```

## Skeleton

Show during data fetch. Never show empty state until fetch completes.

```tsx
<!-- Full area skeleton -->
<Skeleton.Container>
  <Skeleton.DisplayText />
  <Skeleton.BodyText numberOfLines={3} />
</Skeleton.Container>

<!-- Table skeleton -->
<Table.Body>
  <Skeleton.Row rowCount={5} columnCount={3} />
</Table.Body>
```

## Pagination

```tsx
<Pagination
  activePage={page}
  onPageChange={setPage}
  totalItems={100}
  itemsPerPage={20}
/>
```

## List

Simple bullet or numbered list.

```tsx
<List>
  <List.Item>First item</List.Item>
  <List.Item>Second item</List.Item>
</List>
<List as="ol">...</List>
```

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
