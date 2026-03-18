# Migration

## Table of contents

- [Migration](#migration)
  - [Table of contents](#table-of-contents)
  - [How to migrate your packages from v4 to v5](#how-to-migrate-your-packages-from-v4-to-v5)
    - [Migrate to v5 - step by step guide](#migrate-to-v5---step-by-step-guide)
      - [Step 1 - Install new packages](#step-1---install-new-packages)
        - [Install packages separately](#install-packages-separately)
      - [Step 2 - Migrate your components](#step-2---migrate-your-components)
  - [Changes per component in v5](#changes-per-component-in-v5)
    - [Navbar](#navbar)
      - [Navbar prop overview table](#navbar-prop-overview-table)
      - [Removed Props](#removed-props)
    - [Layout](#layout)
      - [Layout prop overview table](#layout-prop-overview-table)
    - [Icon](#icon)
      - [Icon Prop Table](#icon-prop-table)
  - [Deprecated Components](#deprecated-components)
    - [Workbench](#workbench)
      - [Key Differences](#key-differences)
      - [Prop Mapping Table](#prop-mapping-table)
      - [Example Migration](#example-migration)

## How to migrate your packages from v4 to v5

The following components contain breaking changes from v4 to v5

- [Navbar](#navbar)
- [Layout](#layout)
- [Icon](#icon)

### Migrate to v5 - step by step guide

#### Step 1 - Install new packages

Install a package that contains all of the components from Forma 36 version 5. Tree-shaking will take care of your build, so it will include only components that you use.

For NPM

```bash
npm install @contentful/f36-components
npm install @contentful/f36-tokens
npm install @contentful/f36-icons
```

For YARN

```bash
yarn add @contentful/f36-components
yarn add @contentful/f36-tokens
yarn add @contentful/f36-icons
```

##### Install packages separately

You can install packages separately in version 4 if, for some reason, you project requires it.
For example, if you only need the `Button` component in your project, you can add this package by running the following command:

For NPM

```bash
npm install @contentful/f36-button
```

For YARN

```bash
yarn add @contentful/f36-button
```

Note: We don't recommend using it this way, it is much easier to [install the full package of components](#Step-1-install-new-packages). Tree-shaking will take care of your build

#### Step 2 - Migrate your components

We created codemods for most of the components to make it easier for you to migrate. All you need to do is run this command and follow the prompt:

```bash
npx @contentful/f36-codemod
```

Note: When running this command for the first time it installs the package in the NPM cache. Make sure you run it again.

There are still a couple of components that require manual migration, have a look at [the detailed documentation on how to do it](#changes-per-component-in-v4).

## Changes per component in v5

### Navbar

The Navbar component has undergone significant API and design changes in v5, including:

- No longer accepting `children` directly; use `mainNavigation` and `secondaryNavigation` instead.
- Several props have been removed or reorganized (see table below).
- New props for responsive/mobile navigation, accessibility, and layout variants.
- Compound components have changed or been removed.

For a **detailed migration guide, including prop mapping tables, code examples, and compound component changes**, see [packages/components/navbar/MIGRATION.md](./packages/components/navbar/MIGRATION.md).

#### Navbar prop overview table

| Property Name                 | Type                       | Description                                                                           | Status    |
| ----------------------------- | -------------------------- | ------------------------------------------------------------------------------------- | --------- |
| `logo`                        | `React.ReactNode`          | Accepts a React Component that will be displayed instead of the Contentful Logo       | new       |
| `promotions`                  | `React.ReactNode`          | Promotions component, displayed on most left-hand side                                | new       |
| `switcher`                    | `React.ReactNode`          | Environment Switcher component                                                        | unchanged |
| `mainNavigation`              | `React.ReactNode`          | Main Navigation Elements                                                              | new       |
| `secondaryNavigation`         | `React.ReactNode`          | Secondary Navigation Elements, displayed on the right-hand side                       | new       |
| `account`                     | `React.ReactNode`          | User Account Component                                                                | unchanged |
| `mobileNavigation`            | `React.ReactNode`          | Navigation displayed on mobile versions                                               | new       |
| `mobileNavigationProps`       | `object`                   | Props for mobile navigation                                                           | new       |
| └─ `breakpoint`               | `small` &#124; `medium`    | Breakpoint to determine when to show the mobile navigation                            |           |
| └─ `label`                    | `string`                   | Label of the mobile navigation trigger button (default: `Menu`)                       |           |
| `contentMaxWidth`             | `string`                   | Defines the max-width of the content inside the navbar (default: `100%`)              | unchanged |
| `className`                   | `string`                   | Enables additional styling on the main navbar container                               | unchanged |
| `testId`                      | `string`                   | sets test-id property. (default: `cf-ui-navbar`)                                      | unchanged |
| `variant`                     | `wide` &#124; `fullscreen` | Describes the size variation of the Navbar. `wide` sets `contentMaxWidth` to `1524px` | new       |
| `aria`                        | `object`                   | Aria labels for different areas of the navigation bar, improve accessibility          | new       |
| └─ `labelMainNavigation`      | `string`                   | aria-label for main navigation                                                        |           |
| └─ `labelSecondaryNavigation` | `string`                   | aria-label for secondary navigation                                                   |           |
| └─ `labelPromotions`          | `string`                   | aria-label for promotions                                                             |           |
| └─ `labelAccount`             | `string`                   | aria-label for account                                                                |           |

#### Removed Props

The following props will no longer be accepted by the Navbar Component. This table gives an overview of how to replace the contents in the new structure.

| Property Name      | Type              | Description                                                                                         |
| ------------------ | ----------------- | --------------------------------------------------------------------------------------------------- |
| `children`         | `React.ReactNode` | Children elements to be rendered inside the Navbar and must be split accordingly                    |
| `search`           | `React.ReactNode` | Search component, should now be added to the secondaryNavigation as `Navbar.Item`                   |
| `help`             | `React.ReactNode` | Help component, should now be added to the secondaryNavigation as `Navbar.Item`                     |
| `badge`            | `React.ReactNode` | Badge component, badges can be added to the `mainNavigation` or `secondaryNavigation`               |
| `bottomRightItems` | `React.ReactNode` | Items rendered on the bottom-right-hand side of the navbar, should now go to `secondaryNavigation`  |
| `topRightItems`    | `React.ReactNode` | Items rendered on the top-right-hand side of the navbar, should now go to the `secondaryNavigation` |

### Layout

The `Layout` component has undergone significant changes in its visual appearance and behavior. It accepts the following new props: `leftSidebarVariant`, `rightSidebarVariant`, `withBoxShadow`. If you have custom styles that overwrite scroll and positioning behavior, you might have to adjust them. The default styling is the most significant change: `background-color: #fff` and `max-width: 1920px`. The props API of its compound components `Layout.Header`, `Layout.Body`, and `Layout.Sidebar` are unchanged.

For a **detailed guide, including prop mapping tables and code examples**, see [packages/components/layout/MIGRATION.md](./packages/components/layout/MIGRATION.md).

#### Layout prop overview table

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

### Icon

The `Icon` component has been significantly updated in version 5, introducing several breaking changes to its API. The available icon sizes have been streamlined to three options for greater consistency and ease of use. The `trimmed` and `variant` props have been removed to simplify the component. Instead, a new `color` prop has been added, allowing for more flexible icon styling. Additionally, an `isActive` prop is now available to indicate the active state of an icon.

#### Icon Prop Table

| Property Name | Type                                      | Description                                                                                                                                                                      | Status    |
| ------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| `size`        | `IconSize`                                | Supports three sizes `medium` (`20px x 20px`), `small` (`16px x 16px`), and `tiny` (`14px x 14px`). No longer supported are `xlarge` (`48px x 48px`) and `large` (`32px x 32px`) | updated   |
| `trimmed`     | `boolean`                                 |                                                                                                                                                                                  | removed   |
| `variant`     | `IconVariant`                             |                                                                                                                                                                                  | removed   |
| `color`       | `string`                                  | Allows setting the icon color directly via a string value.                                                                                                                       | new       |
| `isActive`    | `boolean`                                 | Indicates whether the icon is in an active state.                                                                                                                                | new       |
| `viewBox`     | `SVGAttributes<SVGSVGElement>['viewBox']` | Allows custom SVG viewBox.                                                                                                                                                       | unchanged |
| `children`    | `ReactElement \| ReactElement[]`          |                                                                                                                                                                                  | unchanged |

## Deprecated Components

### Workbench

`Workbench` component was used to arrange the layout of a single page view. It got replaced now by the `Layout` component.

#### Key Differences

- `Layout` replaces `Workbench` and its compound components (`WorkbenchHeader`, `WorkbenchSidebar`, `WorkbenchContent`).
- The API and prop names may differ.
- `Layout` supports left and right sidebars, header, and content via dedicated props.

---

#### Prop Mapping Table

| Workbench Prop/Component | Layout Prop/Component                                                | Notes                                                                            |
| ------------------------ | -------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `<Workbench>`            | `<Layout>`                                                           | Main container                                                                   |
| `<WorkbenchHeader>`      | `<Layout.Header>` supplied to `header` prop                          | Header area, use `Header` as child                                               |
| `<WorkbenchSidebar>`     | `<Layout.Sidebar>` supplied to `leftSidebar` or `rightSidebar` props | Use `leftSidebarVariant` or `rightSidebarVariant` to adjust width of the Sidebar |
| `<WorkbenchContent>`     | `children` wrapped in `<Layout.Body>`                                | Main content area                                                                |
| `className`, `testId`    | `className`, `testId`                                                | Supported on both                                                                |
| (no direct equivalent)   | `variant`, `withBoxShadow`, `offsetTop`                              | New features in `Layout`                                                         |

---

#### Example Migration

**Before (Workbench):**

```tsx
import {
  Workbench,
  WorkbenchHeader,
  WorkbenchSidebar,
  WorkbenchContent,
} from '@contentful/f36-workbench';

<Workbench className="custom-workbench">
  <WorkbenchHeader>Header Content</WorkbenchHeader>
  <WorkbenchSidebar>Sidebar Content</WorkbenchSidebar>
  <WorkbenchContent>Main Content</WorkbenchContent>
</Workbench>;
```

**After (Layout):**

```tsx
import { Layout } from '@contentful/f36-layout';
import { Header } from '@contentful/f36-header';

<Layout
  className="custom-workbench"
  header={
    <Layout.Header>
      <Header title="Header Content" />
    </Layout.Header>
  }
  leftSidebar={<Layout.Sidebar>Sidebar Content</Layout.Sidebar>}
>
  <Layout.Body>Main Content</Layout.Body>
</Layout>;
```
