# Migration

## Table of contents

- [Migration](#migration)
  - [Table of contents](#table-of-contents)
  - [How to migrate your packages to v5 from v4](#how-to-migrate-your-packages-to-v5-from-v4)
    - [Migrate to v5 - step by step guide](#migrate-to-v5---step-by-step-guide)
      - [Step 1 - Install new packages](#step-1---install-new-packages)
        - [Install packages separately](#install-packages-separately)
      - [Step 2 - Migrate your components](#step-2---migrate-your-components)
  - [Changes per component in v5](#changes-per-component-in-v5)
    - [Navbar](#navbar)
      - [Navbar prop overview table](#navbar-prop-overview-table)
      - [Removed Props](#removed-props)

## How to migrate your packages from v4 to v5

The following components contain breaking changes from v4 to v5

- [Navbar](#navbar)

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

| Property Name               | Type                       | Description                                                                       | Status     |
| --------------------------- | -------------------------- | --------------------------------------------------------------------------------- | ---------- |
| logo                        | React.ReactNode            | Accepts a React Component that will be displayed instead of the Contentful Logo   | new        |
| promotions                  | React.ReactNode            | Promotions component, displayed on most left side                                 | new        |
| switcher                    | React.ReactNode            | Environment Switcher component                                                    | no Changes |
| mainNavigation              | React.ReactNode            | Main Navigation Elements                                                          | new        |
| secondaryNavigation         | React.ReactNode            | Secondary Navigation Elements, displayed in the right side                        | new        |
| account                     | React.ReactNode            | User Account Component                                                            | no Changes |
| mobileNavigation            | React.ReactNode            | Navigation displayed on mobile versions                                           | new        |
| mobileNavigationProps       | object                     | Props for mobile navigation                                                       | new        |
| └─ breakpoint               | 'small' &#124; 'medium'    | Breakpoint to determine when to show the mobile navigation                        |            |
| └─ label                    | string                     | Label of the mobile navigation trigger button (default: 'Menu')                   |            |
| contentMaxWidth             | string                     | Defines the max-width of the content inside the navbar (default: '100%')          | no Changes |
| className                   | string                     | Enables additional styling on the main navbar container                           | no Changes |
| testId                      | string                     | sets test-id property. (default: 'cf-ui-navbar')                                  | no Changes |
| variant                     | 'wide' &#124; 'fullscreen' | Describes the size variation of the Navbar. 'wide' sets contentMaxWidth to 1524px | new        |
| aria                        | object                     | Aria labels for different areas of the navigation bar, improve accessibility      | new        |
| └─ labelMainNavigation      | string                     | aria-label for main navigation                                                    |            |
| └─ labelSecondaryNavigation | string                     | aria-label for secondary navigation                                               |            |
| └─ labelPromotions          | string                     | aria-label for promotions                                                         |            |
| └─ labelAccount             | string                     | aria-label for account                                                            |            |

#### Removed Props

The following props will no longer be accepted by the Navbar Component. This table gives an overview of how to replace the contents in the new structure.

| Property Name    | Type            | Description                                                                            |
| ---------------- | --------------- | -------------------------------------------------------------------------------------- |
| children         | React.ReactNode | Children elements to be rendered inside the Navbar and must be split accordingly       |
| search           | React.ReactNode | Search component, should now be added to the secondaryNavigation as `Navbar.Item`      |
| help             | React.ReactNode | Help component, should now be added to the secondaryNavigation as `Navbar.Item`        |
| badge            | React.ReactNode | Badge component, badges can be added in secondary or mainNaviagation                   |
| bottomRightItems | React.ReactNode | Items rendered on the bottom-right of the navbar, should now go to secondaryNavigation |
| topRightItems    | React.ReactNode | Items rendered on the top-right of the navbar, should now go to the secondaryNavigaton |
