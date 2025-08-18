# Migration Guideline Layout from v4.X.X to v5.X.X

The Layout component got a overhaul in its capabilities and behaviour towards scrolling and widths. It is optimized for displaying a page-cut layout with a default `max-width: 1920px`. It also offers a `fullscreen` version and a `narrow` variant which sets `max-width: 900px` to the `layoutBody`.

## Layout

> [!NOTE]
> This component does not contain breaking changes to the props. However it does have significant design changes.

The `Layout` component is expected to be used with a `Layout.Body` as its child. It also can be given `Layout.Sidebar` via the `leftSidebar` or `rightSidebar` properties and `Layout.Header` trough the `header` property.
The major change to this component is that it now has `background-color: #fff` while before it did not set any specific background color. Other major changes are the move to a different `max-width` increasing from `1550px` to `1920px`.

### Layout prop overview table

| Property Name       | Type                                       | Description                                                             | Status    |
| ------------------- | ------------------------------------------ | ----------------------------------------------------------------------- | --------- |
| children            | React.ReactNode                            | Expects the compound component `Layout.Body` as child                   | Unchanged |
| header              | React.ReactNode                            | Header component.                                                       | Unchanged |
| leftSidebar         | React.ReactNode                            | Left sidebar component.                                                 | Unchanged |
| leftSidebarVariant  | 'narrow' &#124; 'wide'                     | Defines the width of the layout left sidebar. @default 'narrow' (280px) | new       |
| rightSidebar        | React.ReactNode                            | Right sidebar component.                                                | Unchanged |
| rightSidebarVariant | 'narrow' &#124; 'wide'                     | Defines the width of the layout right sidebar. @default 'wide' (340px)  | new       |
| variant             | 'narrow' &#124; 'wide' &#124; 'fullscreen' | Defines the width of the layout and its content. @default 'wide'        | changed   |
| withBoxShadow       | boolean                                    | Adds a box shadow to the layout.                                        | new       |
| contentClassName    | string                                     | Classname for the main content div.                                     | Unchanged |
| contentTestId       | string                                     | Test id for the main content div.                                       | Unchanged |
| offsetTop           | number                                     | Offset for layout heights calculation. @default 60 (= navbar height)    | changed   |
| className           | string                                     | Custom class name for the root element (from CommonProps).              | Unchanged |
| testId              | string                                     | Test id for the root element (from CommonProps).                        | Unchanged |
| ...HTMLAttributes   | HTMLAttributes<HTMLDivElement>             | Standard HTML div attributes.                                           | Unchanged |

### Code Example

```jsx
<Layout>
  <Layout.Body>
    <Box>Content</Box>
  </Layout.Body>
</Layout>
```

## Layout.Header

> [!NOTE]
> This component does not contain breaking changes to the props. However it does have significant design changes.

This is the compound component expected to be handed over to the `header` prop on the `Layout` component. The siginificant design change is that it now centers it's content on default. It follows trough in the `max-width` adjustment from `1550px` to `1920px` for the `wide` variant.

### Layout.Header prop overview table

| Property Name     | Type                           | Description                                                 | Status    |
| ----------------- | ------------------------------ | ----------------------------------------------------------- | --------- |
| children          | React.ReactNode                | Content to be rendered inside the header.                   | Unchanged |
| className         | string                         | Custom class name for the root element.                     | Unchanged |
| testId            | string                         | Test id for the root element. (default: 'cf-layout.header') | Unchanged |
| ...HTMLAttributes | HTMLAttributes<HTMLDivElement> | Standard HTML div attributes.                               | Unchanged |

### Code Example

```jsx
<Layout header={<Layout.Header>Headline</Layout.Header>}>
  <Layout.Body>
    <Box>Content</Box>
  </Layout.Body>
</Layout>
```

## Layout.Sidebar

> [!NOTE]
> This component does not contain breaking changes to the props. However it does have significant design changes.

This compound component is expected to be handed over to the `leftSidebar` or `rightSidebar` props on the `Layout` component. Their size can be influenced via the `leftSidebarVariant` and `rightSidebarVariant` of the `Layout` component. The two variants are `narrow` which sets `width: 280px` and `wide` with `width:340px`. These widths can be combined and left and right sidebar can have different width settings.

### Layout.Sidebar prop overview table

| Property Name     | Type                           | Description                                                  | Status    |
| ----------------- | ------------------------------ | ------------------------------------------------------------ | --------- |
| children          | React.ReactNode                | Content to be rendered inside the sidebar.                   | Unchanged |
| className         | string                         | Custom class name for the root element.                      | Unchanged |
| testId            | string                         | Test id for the root element. (default: 'cf-layout-sidebar') | Unchanged |
| ...HTMLAttributes | HTMLAttributes<HTMLDivElement> | Standard HTML div attributes.                                | Unchanged |

### Code Example

```jsx
<Layout
  sidebarLeft={<Layout.Sidebar>Left Sidebar</Layout.Sidebar>}
  sidebarRight={<Layout.Sidebar>right Sidebar</Layout.Sidebar>}
>
  <Layout.Body>
    <Box>Content</Box>
  </Layout.Body>
</Layout>
```

## Layout Body

> [!NOTE]
> This component does not contain breaking changes to the props. However it does have significant design changes.

The Layout component expects the Layout.Body component to be handed over as a child-element. The Layout.Body wrapper is essential for the correct overflow and scrolling behaviors.

### Layout.Body prop overview table

| Property Name     | Type                           | Description                                               | Status    |
| ----------------- | ------------------------------ | --------------------------------------------------------- | --------- |
| children          | React.ReactNode                | Content to be rendered inside the body.                   | Unchanged |
| className         | string                         | Custom class name for the root element.                   | Unchanged |
| testId            | string                         | Test id for the root element. (default: 'cf-layout-body') | Unchanged |
| ...HTMLAttributes | HTMLAttributes<HTMLDivElement> | Standard HTML div attributes.                             | Unchanged |

### Code Example

```jsx
<Layout>
  <Layout.Body>
    <Box>Content</Box>
  </Layout.Body>
</Layout>
```
