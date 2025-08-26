# Migration Guideline Layout from v4.X.X to v5.X.X

The Layout component got an overhaul in its capabilities and behaviour towards scrolling and widths. It is optimized for displaying a page-cut layout with a default `max-width: 1920px`. It also offers a `fullscreen` version and a `narrow` variant, which sets `max-width: 900px` to the `layoutBody`.

## Layout

> [!NOTE]
> This component does not contain breaking changes to the props. However it does have significant design changes.

The `Layout` component is expected to be used with a `Layout.Body` as its child. It can also be given `Layout.Sidebar` via the `leftSidebar` or `rightSidebar` properties and `Layout.Header` through the `header` property.
The major change to this component is that it now has `background-color: #fff`, which wasn't the case before. Another major change is the new `max-width`, increasing from `1550px` to `1920px`.

### Layout prop overview table

| Property Name         | Type                                       | Description                                                                        | Status    |
| --------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------- | --------- |
| `children`            | `React.ReactNode`                          | Expects the compound component `Layout.Body` as child                              | unchanged |
| `header`              | `React.ReactNode`                          | Header component.                                                                  | unchanged |
| `leftSidebar`         | `React.ReactNode`                          | Left-hand sidebar component.                                                       | unchanged |
| `leftSidebarVariant`  | `narrow` &#124; `wide`                     | Defines the width of the layout left-hand sidebar (default: `narrow` (`280px`))    | new       |
| `rightSidebar`        | `React.ReactNode`                          | Right-hand sidebar component.                                                      | unchanged |
| `rightSidebarVariant` | `narrow` &#124; `wide`                     | Defines the width of the layout right-hand sidebar (default: `wide` (`340px`))     | new       |
| `variant`             | `narrow` &#124; `wide` &#124; `fullscreen` | Defines the width of the layout and its content. (default: `wide`)                 | changed   |
| `withBoxShadow`       | `boolean`                                  | Adds a box shadow to the layout.                                                   | new       |
| `contentClassName`    | `string`                                   | Classname for the main content div.                                                | unchanged |
| `contentTestId`       | `string`                                   | Test id for the main content div.                                                  | unchanged |
| `offsetTop`           | `number`                                   | Offset for layout heights calculation (default: `60` (equals to the navbar height) | changed   |
| `className`           | `string`                                   | Custom class name for the root element (from `CommonProps`).                       | unchanged |
| `testId`              | `string`                                   | Test id for the root element (from `CommonProps`).                                 | unchanged |
| `...HTMLAttributes`   | `HTMLAttributes<HTMLDivElement>`           | Standard HTML div attributes.                                                      | unchanged |

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

This is the compound component expected to be handed over to the `header` prop on the `Layout` component. The significant design change is that it now centers its content by default. It follows through in the `max-width` adjustment from `1550px` to `1920px` on the `wide` variant.

### Layout.Header prop overview table

| Property Name       | Type                             | Description                                                 | Status    |
| ------------------- | -------------------------------- | ----------------------------------------------------------- | --------- |
| `children`          | `React.ReactNode`                | Content to be rendered inside the header.                   | unchanged |
| `className`         | `string`                         | Custom class name for the root element.                     | unchanged |
| `testId`            | `string`                         | Test id for the root element. (default: `cf-layout.header`) | unchanged |
| `...HTMLAttributes` | `HTMLAttributes<HTMLDivElement>` | Standard HTML div attributes.                               | unchanged |

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

This compound component is expected to be handed over to the `leftSidebar` or `rightSidebar` props in the `Layout` component. Their size can be influenced via the `leftSidebarVariant` and `rightSidebarVariant` of the `Layout` component. The two variants are `narrow` (sets `width: 280px`) and `wide` (sets `width:340px`). These widths can be combined, and both sidebars can have different widths.

### Layout.Sidebar prop overview table

| Property Name       | Type                             | Description                                                  | Status    |
| ------------------- | -------------------------------- | ------------------------------------------------------------ | --------- |
| `children`          | `React.ReactNode`                | Content to be rendered inside the sidebar.                   | unchanged |
| `className`         | `string`                         | Custom class name for the root element.                      | unchanged |
| `testId`            | `string`                         | Test id for the root element. (default: `cf-layout-sidebar`) | unchanged |
| `...HTMLAttributes` | `HTMLAttributes<HTMLDivElement>` | Standard HTML div attributes.                                | unchanged |

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

The Layout component expects the `Layout.Body` component to be handed over as a child element. The `Layout.Body` wrapper is essential for the correct overflow and scrolling behaviors.

### Layout.Body prop overview table

| Property Name       | Type                             | Description                                               | Status    |
| ------------------- | -------------------------------- | --------------------------------------------------------- | --------- |
| `children`          | `React.ReactNode`                | Content to be rendered inside the body.                   | unchanged |
| `className`         | `string`                         | Custom class name for the root element.                   | unchanged |
| `testId`            | `string`                         | Test id for the root element. (default: `cf-layout-body`) | unchanged |
| `...HTMLAttributes` | `HTMLAttributes<HTMLDivElement>` | Standard HTML div attributes.                             | unchanged |

### Code Example

```jsx
<Layout>
  <Layout.Body>
    <Box>Content</Box>
  </Layout.Body>
</Layout>
```
