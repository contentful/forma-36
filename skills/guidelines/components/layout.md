# Layout Components

The hierarchy: `Box` (base) → `Flex` (extends Box + flexbox) → `Stack` (wraps Flex, uniform gap) → `Grid` (CSS grid). `Layout` is the page-level shell.

## Box

The base primitive. All layout components extend it.

```tsx
<Box padding="spacingM" marginBottom="spacingL">content</Box>
<Box as="span" display="inline" marginRight="spacingL">text</Box>
```

| Prop | Type | Notes |
|---|---|---|
| `as` | `React.ElementType` | Render as any HTML element |
| `display` | CSS display value | |
| `margin`, `marginTop/Right/Bottom/Left` | Spacing token | e.g. `"spacingM"` |
| `padding`, `paddingTop/Right/Bottom/Left` | Spacing token | |

Spacing token scale: `'none'` `'spacing2Xs'` `'spacingXs'` `'spacingS'` `'spacingM'` `'spacingL'` `'spacingXl'` `'spacing2Xl'` `'spacing3Xl'` `'spacing4Xl'`

## Flex

Extends Box with `display: flex` and all flexbox props.

```tsx
<Flex justifyContent="space-between" alignItems="center">
  <Subheading marginBottom="none">Users</Subheading>
  <Button>Add user</Button>
</Flex>

<Flex flexDirection="column" gap="spacingS">
  <Box style={{ height: '50px' }} />
  <Box style={{ height: '50px' }} />
</Flex>
```

| Prop | Type | Default |
|---|---|---|
| `flexDirection` | `'row'` `'column'` `'row-reverse'` `'column-reverse'` | — |
| `gap` | Spacing token or CSS string | — |
| `justifyContent` | CSS value | — |
| `alignItems` | CSS value | — |
| `flexWrap` | `'wrap'` `'nowrap'` | — |
| `fullWidth` / `fullHeight` | boolean | `false` |
| `isInline` | boolean | `false` → `inline-flex` |

## Stack

Shorthand for uniform-gap stacking. Use for toolbars, form field columns, button groups.

```tsx
<!-- Horizontal toolbar -->
<Stack spacing="spacingS">
  <Button variant="secondary">Export</Button>
  <Button variant="primary">Publish</Button>
</Stack>

<!-- Vertical form fields -->
<Stack flexDirection="column" spacing="spacingM">
  <FormControl>...</FormControl>
  <FormControl>...</FormControl>
</Stack>
```

| Prop | Type | Default |
|---|---|---|
| `flexDirection` | `'row'` `'column'` | `'row'` |
| `spacing` | Spacing token | `'spacingM'` |
| `alignItems` | CSS value | `'center'` |

Do not use Stack for reverse layouts — use `Flex` with `row-reverse` or `column-reverse`.

## Grid

CSS Grid layout.

```tsx
<Grid columns="1fr 2fr" rowGap="spacingM" columnGap="spacingM">
  <Grid.Item>sidebar</Grid.Item>
  <Grid.Item>main content</Grid.Item>
</Grid>

<Grid columns={3} columnGap="spacingL">
  <Grid.Item>col 1</Grid.Item>
  <Grid.Item>col 2</Grid.Item>
  <Grid.Item>col 3</Grid.Item>
</Grid>
```

| Prop | Type | Default |
|---|---|---|
| `columns` | number or CSS string | `'auto'` |
| `rows` | number or CSS string | `'auto'` |
| `columnGap` | Spacing token | `'spacingM'` |
| `rowGap` | Spacing token | `'none'` |

`Grid.Item` props: `area`, `columnStart/End`, `rowStart/End`, `alignSelf`, `order`.

## Layout (page-level shell)

Replaces the deprecated `Workbench`. Provides the app-page frame.

```tsx
<Layout
  variant="wide"
  header={
    <Layout.Header>
      <Header title="Experiences" actions={<Button variant="primary">Create</Button>} />
    </Layout.Header>
  }
  leftSidebar={
    <Layout.Sidebar>
      <NavList>...</NavList>
    </Layout.Sidebar>
  }
>
  <Layout.Body>
    <Table>...</Table>
  </Layout.Body>
</Layout>
```

| Prop | Type | Default |
|---|---|---|
| `variant` | `'narrow'` `'wide'` `'fullscreen'` | `'wide'` |
| `header` | ReactNode (wrap in `Layout.Header`) | — |
| `leftSidebar` | ReactNode (wrap in `Layout.Sidebar`) | — |
| `rightSidebar` | ReactNode (wrap in `Layout.Sidebar`) | — |
| `leftSidebarVariant` | `'narrow'` (280px) `'wide'` (340px) | `'narrow'` |
| `rightSidebarVariant` | `'narrow'` (280px) `'wide'` (340px) | `'wide'` |
| `offsetTop` | number (px) | `60` |

**Rules:**
- Always wrap body content in `Layout.Body`
- Never nest Layout inside Layout or inside Modal
- Set `dividerLine={true}` on Header when a right sidebar is present
- `offsetTop={0}` for standalone apps without the Contentful navbar
