# Migration Guideline Layout from v6.X.X to a future release

The Layout header was designed to fit in one row without support for smaller viewports.
With this update the header elements will break into multiple rows,
which requires some updates across multiple components and might cause incompatibilities for customized layouts.

## Before → After

### Basic usage

```tsx
// ❌ Deprecated
import { Layout } from '@contentful/f36-layout';

<Layout
  header={
    <Layout.Header>
      <Header title="Title" />
    </Layout.Header>
  }
>
  ...
</Layout>;

// ✅ Recommended
import { PillNext } from '@contentful/f36-pill-next';

<Layout
  withResponsiveHeader
  header={
    <Layout.Header>
      <Header title="Title" />
    </Layout.Header>
  }
>
  ...
</Layout>;
```

### With filters

```tsx
// ❌ Deprecated
import { Layout } from '@contentful/f36-layout';

<Layout
  header={
    <Layout.Header>
      <Header title="Title" filters={<CustomFilterComponent />} />
    </Layout.Header>
  }
>
  ...
</Layout>;

// ✅ Recommended
import { PillNext } from '@contentful/f36-pill-next';

<Layout
  withResponsiveHeader
  header={
    <Layout.Header>
      <Header title="Title" />
    </Layout.Header>
  }
>
  <CustomFilterComponent />
  ...
</Layout>;
```

## Prop changes

### Layout

- The `withResponsiveHeader` prop temporarily enables the responsive header.
  It will be removed in a future major version when the responsive header becomes the default.

### Header

- The `filters` prop will be removed in a future major version when the responsive header becomes the default,
  because the filters would not fit into a wrapped header.
  Filters should be added below the header as a separate component.
