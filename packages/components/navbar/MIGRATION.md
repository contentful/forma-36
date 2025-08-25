# Migration Guideline Navbar from v4.X.X to v5.X.X

The API of the `Navbar` has changed, along with significant design alterations. In version 5 we added support for a responsive design via a mobile navigation. The space `Switcher` element moved to the right-hand side.
Several previous props have been removed or reorganized, and new props (such as `logo`, `promotions`, `mainNavigation`, `secondaryNavigation`, `mobileNavigation`, `variant`, and `aria`) have been introduced. The following migration guideline provides a detailed mapping and recommendations for developers upgrading to the updated `Navbar` component

## Table of Contents

- [Migration Guideline Navbar from v4.X.X to v5.X.X](#migration-guideline-navbar-from-v4xx-to-v5xx)
  - [Table of Contents](#table-of-contents)
  - [Navbar](#navbar)
    - [Navbar prop overview table](#navbar-prop-overview-table)
      - [Removed Props](#removed-props)
    - [Code Example](#code-example)
  - [Compound Components](#compound-components)
    - [Removed Compound Components](#removed-compound-components)
  - [Navbar.Account](#navbaraccount)
    - [Code Example](#code-example-1)
    - [Navbar.Account prop overview table](#navbaraccount-prop-overview-table)
  - [Navbar.Badge](#navbarbadge)
    - [Code Example](#code-example-2)
    - [Navbar.Badge prop overview table](#navbarbadge-prop-overview-table)
  - [Navbar.Item](#navbaritem)
    - [Code Examples](#code-examples)
      - [Icon only](#icon-only)
      - [Icon and text or just text](#icon-and-text-or-just-text)
      - [As menu trigger](#as-menu-trigger)
    - [Navbar.Item prop overview table](#navbaritem-prop-overview-table)
  - [Navbar.MenuItem, Navbar.MenuDivider, Navbar.MenuSectionTitle](#navbarmenuitem-navbarmenudivider-navbarmenusectiontitle)
    - [Navbar.MenuItem prop overview table](#navbarmenuitem-prop-overview-table)
    - [Navbar.MenuDivider prop overview table](#navbarmenudivider-prop-overview-table)
    - [Navbar.SectionTitle prop overview table](#navbarsectiontitle-prop-overview-table)
  - [Navbar.Submenu](#navbarsubmenu)
    - [Code Example](#code-example-3)
    - [Navbar.Submenu prop overview table](#navbarsubmenu-prop-overview-table)
  - [Navbar.Switcher](#navbarswitcher)
    - [Code Example](#code-example-4)
    - [Navbar.Switcher prop overview table](#navbarswitcher-prop-overview-table)

## Navbar

> [!CAUTION]
> The `Navbar` component no longer accepts child components. Navigation items that were previously passed as children must now be separated into the `mainNavigation` or `secondaryNavigation` properties. As a rule of thumb, elements from `bottomRightItems` and `topRightItems` should go into `secondaryNavigation`.

### Navbar prop overview table

| Property Name                 | Type                       | Description                                                                    | Status    |
| ----------------------------- | -------------------------- | ------------------------------------------------------------------------------ | --------- |
| `logo`                        | `React.ReactNode`          | Accepts a React component to display instead of the Contentful logo            | new       |
| `promotions`                  | `React.ReactNode`          | Promotions component, displayed on the far left                                | new       |
| `switcher`                    | `React.ReactNode`          | Environment Switcher component                                                 | unchanged |
| `mainNavigation`              | `React.ReactNode`          | Main navigation elements                                                       | new       |
| `secondaryNavigation`         | `React.ReactNode`          | Secondary navigation elements, displayed on the right side                     | new       |
| `account`                     | `React.ReactNode`          | User account component                                                         | unchanged |
| `mobileNavigation`            | `React.ReactNode`          | Navigation displayed on mobile devices                                         | new       |
| `mobileNavigationProps`       | `object`                   | Props for mobile navigation                                                    | new       |
| └─ `breakpoint`               | `small` &#124; `medium`    | Breakpoint to determine when to show the mobile navigation                     |           |
| └─ `label`                    | `string`                   | Label for the mobile navigation trigger button (default: `Menu`)               |           |
| `contentMaxWidth`             | `string`                   | Defines the max-width of the content inside the navbar (default: `100%`)       | unchanged |
| `className`                   | `string`                   | Enables additional styling on the main navbar container                        | unchanged |
| `testId`                      | `string`                   | Sets test-id property (default: `cf-ui-navbar`)                                | unchanged |
| `variant`                     | `wide` &#124; `fullscreen` | Size variation of the Navbar. `wide` sets `contentMaxWidth` to `1524px`        | new       |
| `aria`                        | `object`                   | Aria labels for different areas of the navigation bar to improve accessibility | new       |
| └─ `labelMainNavigation`      | `string`                   | `aria-label` for main navigation                                               |           |
| └─ `labelSecondaryNavigation` | `string`                   | `aria-label` for secondary navigation                                          |           |
| └─ `labelPromotions`          | `string`                   | `aria-label` for promotions                                                    |           |
| └─ `labelAccount`             | `string`                   | `aria-label` for account                                                       |           |

#### Removed Props

The following props will no longer be accepted by the Navbar Component. This table gives an overview of how to replace the contents in the New structure.

| Property Name      | Type              | Description                                                                                         |
| ------------------ | ----------------- | --------------------------------------------------------------------------------------------------- |
| `children`         | `React.ReactNode` | Child elements to be rendered inside the `Navbar`; must now be split into appropriate props.        |
| `search`           | `React.ReactNode` | Search component; should now be added to `secondaryNavigation` as a `Navbar.Item`.                  |
| `help`             | `React.ReactNode` | Help component; should now be added to `secondaryNavigation` as a `Navbar.Item`.                    |
| `badge`            | `React.ReactNode` | Badge component; badges can be added to `mainNavigation` or `secondaryNavigation`.                  |
| `bottomRightItems` | `React.ReactNode` | Items rendered on the bottom-right-hand side of the navbar; should now go to `secondaryNavigation`. |
| `topRightItems`    | `React.ReactNode` | Items rendered on the top-right-hand side of the navbar; should now go to `secondaryNavigation`.    |

### Code Example

```jsx
<Navbar
  mainNavigation={
    <>
      <Navbar.Item
        title="Content Model"
        icon={<GearSixIcon />}
        isActive={isActive}
        onClick={() => doSomething()}
        isDisabled={isDisabled}
      />
      <Navbar.Item
        title="Content"
        icon={<PenNibIcon />}
        isActive={isActive}
        onClick={() => doSomething()}
        isDisabled={isDisabled}
      />
    </>
  }
  promotions={
    <>
      <TextLink>Upgrade</TextLink>
    </>
  }
  secondaryNavigation={
    <>
      <Navbar.Item label="Quick Search" icon={<MagnifyingGlassIcon />} />
    </>
  }
  switcher={
    <Navbar.Switcher
      isAlias={isAlias}
      envVariant={envVariant}
      space="Space"
      environment="Environment name"
    />
  }
  account={
    <>
      <Navbar.Badge>Trial</Navbar.Badge>
      <Navbar.Account
        username="Conny Contentful"
        avatar="avatar.jpg"
        initials="CC"
        hasNotification={hasNotification}
        notificationVariant="info"
        label="Account settings"
      />
    </>
  }
  aria={{
    labelMainNavigation: 'Main Navigation',
    labelSecondaryNavigation: 'Secondary Navigation',
    labelPromotions: 'Promotions',
    labelAccount: 'My Account',
  }}
  mobileNavigation={
    <>
      <Navbar.MenuItem title="Content" icon={<PenNibIcon />} />
      <Navbar.Submenu title="Apps" icon={<PuzzlePieceIcon />}>
        <Navbar.MenuItem title="App 1" />
        <Navbar.MenuItem title="App 2" />
      </Navbar.Submenu>
    </>
  }
  mobileNavigationProps={{ label: 'Menu' }}
/>
```

## Compound Components

> [!CAUTION]
> Some of the compound components no longer exist to simplify the usage and design.

The Navbar still uses a variety of compound components to enable styling and functionalites for individual parts of the main component.

### Removed Compound Components

| Removed Component     | Replacement                        | Description                                                                                                     |
| --------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `Navbar.Help`         | `Navbar.Item`, `Navbar.MenuItem`   | Use `Navbar.Item` for the main trigger element and `Navbar.MenuItem` as its children to create the Popout Menu. |
| `Navbar.Search`       | `Navbar.Item`                      | Use `Navbar.Item` for the main trigger element                                                                  |
| `Navbar.SwitcherItem` | `Navbar.Switcher`                  | `NavbarSwitcher` no longer reuqires `Navbar.SwitchterItem` as child.                                            |
| `Navbar.TopbarItem`   | `Navbar.Item` or `Navbar.MenuItem` | The Topbar area got removed, children of this property should move to `secondaryNavigation` or `promotions`     |

## Navbar.Account

> [!NOTE]
> This component does not contain breaking changes

This compound component is used to generate the account menu; the user's Avatar represents the menu trigger. It should be handed over to the Navbar via the `account` property, which will be rendered as the last element.

### Code Example

```jsx
<Navbar
  account={
    <Navbar.Account
      username="Conny Contentful"
      avatar="avatar.jpg"
      initials="CC"
      hasNotification={hasNotification}
      notificationVariant="info"
      label="Account settings"
    >
      <Navbar.MenuItem title="Account settings" icon={<WrenchIcon />} />
      <Navbar.MenuItem title="Dashboard" />
      <Navbar.MenuDivider />
      <Navbar.MenuItem
        title="External link"
        as="a"
        href="https://www.contentful.com"
        target="_blank"
      />
      <Navbar.MenuDivider />
      <Navbar.MenuItem title="Log out" />
    </Navbar.Account>
  }
/>
```

### Navbar.Account prop overview table

| Property Name         | Type                                            | Description                                                             | Status    |
| --------------------- | ----------------------------------------------- | ----------------------------------------------------------------------- | --------- |
| `children`            | `React.ReactNode`                               | Menu items to be rendered in the account dropdown                       | unchanged |
| `className`           | `string`                                        | Enables additional styling                                              | unchanged |
| `testId`              | `string`                                        | Sets `data-test-id` property (default: `cf-ui-navbar-account-trigger`)  | unchanged |
| `username`            | `string`                                        | Name of the user displayed in the account menu                          | unchanged |
| `avatar`              | `string`                                        | URL of the user's avatar image                                          | unchanged |
| `initials`            | `string`                                        | Initials to display if no avatar image is provided                      | unchanged |
| `hasNotification`     | `boolean`                                       | Shows a notification badge on the avatar                                | unchanged |
| `notificationVariant` | `'warning'` &#124; `'negative'` &#124; `'info'` | Variant of the notification badge (default: `warning`)                  | unchanged |
| `label`               | `string`                                        | Accessible label for the account menu trigger (default: `Account menu`) | new       |

## Navbar.Badge

> [!NOTE]
> This components usage has not changed and does not contain breaking changes

This compound component is used for highlights and promotions. It should be used as a element applied to the `promotions` or `account` prop on the Navbar component

### Code Example

```jsx
<Navbar promotions={<Navbar.Badge>Trial</Navbar.Badge>} />
```

### Navbar.Badge prop overview table

| Property Name | Type                | Description                                                            | Status    |
| ------------- | ------------------- | ---------------------------------------------------------------------- | --------- |
| `children`    | `React.ReactNode`   | Content to be displayed inside the badge                               | unchanged |
| `as`          | `React.ElementType` | The element type to render the badge as (e.g., `span`, default: `div`) | unchanged |
| `className`   | `string`            | Enables additional styling                                             | unchanged |
| `testId`      | `string`            | Sets `data-test-id` property (default: `cf-ui-navbar-badge`)           | unchanged |

## Navbar.Item

> [!NOTE]
> This component does not contain breaking changes

This component generates the Navigation Items. It expects a callback function and can not be used as a normal link. It is versatile and can be used with a title, as an icon-only element, or as a dropdown menu. It can be handed over to the area properties `mainNavigation` `secondaryNavigation`, or `account`

### Code Examples

#### Icon only

Use `Navbar.Item` as an icon-only element to replace, for example, the `Navbar.Search` component. To generate an icon-only `Navbar.Item`, do not hand over a `title` property but `label` instead. For accessibility, the label is required; it will also be shown as a tooltip on hover of the element.

```jsx
<Navbar.Item
  onClick={() => doSomething()}
  label="Quick Search"
  icon={<MagnifyingGlassIcon />}
/>
```

#### Icon and text or just text

This is the default use-case of the `Navbar.Item`, the `title` property is to contain the title of the item; icons will be shown on the left-hand side of the title.

```jsx
<Navbar.Item
  title="Content"
  icon={<PenNibIcon />}
  isActive={isActive}
  onClick={() => doSomething()}
  isDisabled={isDisabled}
/>
```

#### As menu trigger

`Navbar.Item` accepts children. As soon as you hand over child-items, it will automatically become a dropdown menu trigger. It can be combined with `title` and `icon` or with `icon` and `label` for an icon-only menu.

```jsx
<Navbar.Item title="Apps" icon={<PuzzlePieceIcon />} isDisabled={isDisabled}>
  <Navbar.MenuItem title="App 1" />
  <Navbar.MenuItem title="App 2" />
</Navbar.Item>
```

### Navbar.Item prop overview table

| Property Name | Type                | Description                                                                   | Status    |
| ------------- | ------------------- | ----------------------------------------------------------------------------- | --------- |
| `label`       | `string`            | Accessible label for icon-only items (required for accessibility and tooltip) | new       |
| `title`       | `string`            | Title text displayed for the item                                             | unchanged |
| `icon`        | `React.ReactNode`   | Icon displayed before the title or as the only content                        | unchanged |
| `isActive`    | `boolean`           | Marks the item as active (e.g., for current page)                             | unchanged |
| `as`          | `React.ElementType` | The element type to render the item as (e.g., `button`, `a`)                  | unchanged |
| `isDisabled`  | `boolean`           | Disables the item, making it non-interactive                                  | new       |
| `children`    | `React.ReactNode`   | If provided, turns the item into a dropdown menu trigger                      | unchanged |
| `onOpen`      | `() => void`        | Callback fired when the dropdown menu opens (only if children are provided)   | unchanged |
| `onClose`     | `() => void`        | Callback fired when the dropdown menu closes (only if children are provided)  | unchanged |
| `className`   | `string`            | Enables additional styling                                                    | unchanged |
| `testId`      | `string`            | Sets `data-test-id` property (default: `cf-ui-navbar-item`)                   | unchanged |

## Navbar.MenuItem, Navbar.MenuDivider, Navbar.MenuSectionTitle

> [!NOTE]
> These components usage has not changed

These compound components are used as children of a `Navbar.Item` or as children to the `mobileNavigation`

```jsx
<Navbar
  mainNavigation={
    <Navbar.Item title="Apps" icon={<PuzzlePieceIcon />}>
      <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
      <Navbar.MenuItem title="App 1" icon={<App1Icon />} />
      <Navbar.MenuItem title="App 2" />
      <Navbar.MenuDivider />
      <Navbar.MenuSectionTitle>Productivity</Navbar.MenuSectionTitle>
      <Navbar.MenuItem title="App 3" />
      <Navbar.MenuItem title="App 4" />
      <Navbar.MenuItem title="App 5" />
    </Navbar.Item>
  }
  mobileNavigation={
    <>
      <Navbar.MenuItem title="Content" icon={<PenNibIcon />} />
      <Navbar.MenuSectionTitle>General</Navbar.MenuSectionTitle>
      <Navbar.MenuItem title="App 1" />
      <Navbar.MenuItem title="App 2" />
      <Navbar.MenuDivider />
      <Navbar.MenuSectionTitle>Productivity</Navbar.MenuSectionTitle>
      <Navbar.MenuItem title="App 3" />
      <Navbar.MenuItem title="App 4" />
      <Navbar.MenuItem title="App 5" />
    </>
  }
/>
```

### Navbar.MenuItem prop overview table

| Property Name | Type                | Description                                                  | Status    |
| ------------- | ------------------- | ------------------------------------------------------------ | --------- |
| `title`       | `string`            | Title text displayed for the item                            | unchanged |
| `icon`        | `React.ReactNode`   | Icon displayed before the title or as the only content       | unchanged |
| `as`          | `React.ElementType` | The element type to render the item as (e.g., `button`, `a`) | unchanged |
| `className`   | `string`            | Enables additional styling                                   | unchanged |

### Navbar.MenuDivider prop overview table

| Property Name | Type     | Description                                           | Status    |
| ------------- | -------- | ----------------------------------------------------- | --------- |
| `className`   | `string` | Enables additional styling                            | unchanged |
| `testId`      | `string` | Sets test-id property (default: `cf-ui-menu-divider`) | unchanged |

### Navbar.SectionTitle prop overview table

| Property Name | Type              | Description                                                 | Status    |
| ------------- | ----------------- | ----------------------------------------------------------- | --------- |
| `className`   | `string`          | Enables additional styling                                  | unchanged |
| `testId`      | `string`          | Sets test-id property (default: `cf-ui-menu-section-title`) | unchanged |
| `children`    | `React.ReactNode` | Contains the actual title displayed                         | unchanged |

## Navbar.Submenu

> [!NOTE]
> This is a New Compound Component to help generating the responsive mobile navigation

`Navbar.Submenu` can be used to generate a nested Menu, it expects `Navbar.MenuItem` as children. It should only be used in the `mobileNavigation` property of the Navbar.

### Code Example

```jsx
<Navbar
  mobileNavigation={
    <>
      <Navbar.MenuItem title="Content" icon={<PenNibIcon />} />
      <Navbar.Submenu title="Apps" icon={<PuzzlePieceIcon />}>
        <Navbar.MenuItem title="App 1" />
        <Navbar.MenuItem title="App 2" />
      </Navbar.Submenu>
    </>
  }
/>
```

### Navbar.Submenu prop overview table

| Property Name | Type              | Description                                                                                          | Status |
| ------------- | ----------------- | ---------------------------------------------------------------------------------------------------- | ------ |
| `title`       | `string`          | Title text displayed for the submenu                                                                 | new    |
| `icon`        | `React.ReactNode` | Icon displayed before the title, required                                                            | new    |
| `children`    | `React.ReactNode` | `Navbar.MenuItem` elements to be rendered inside the submenu                                         | new    |
| `testId`      | `string`          | Sets `data-test-id` property (passed to the submenu container, default: `cf-ui-navbar-submenu-list`) | new    |
| `onOpen`      | `() => void`      | Callback fired when the submenu opens                                                                | new    |
| `onClose`     | `() => void`      | Callback fired when the submenu closes                                                               | new    |

## Navbar.Switcher

> [!Caution] > `Navbar.Switcher` has removed elements
> The following elements have been removed or changed in the new `Navbar.Switcher` API and require code changes:
>
> - Compound component `Navbar.SwitcherItem`
> - `children` only allowed when `isLoading:true`
> - `logo` prop
> - `isCircle` prop

The `Navbar.Switcher` component is used for displaying the current space and environment names. It can also be used as a trigger element to open a space switcher menu. The New design and usage are much simplified and no longer require `Navbar.SwitcherItem` to build the breadcrumb style display. The `Navbar.Switcher` should always be handed over via the `switcher` property to ensure proper positioning.

### Code Example

```jsx
<Navbar
  switcher={
    <Navbar.Switcher
      isAlias={isAlias}
      envVariant={envVariant}
      space="Space"
      environment="Environment name"
    />
  }
/>
```

### Navbar.Switcher prop overview table

| Property Name | Type                                        | Description                                                     | Status           |
| ------------- | ------------------------------------------- | --------------------------------------------------------------- | ---------------- |
| `isLoading`   | `boolean`                                   | If `true`, shows a loading state and renders children           | new              |
| `children`    | `React.ReactNode`                           | Content to display when loading, dependent on `isLoading`       | changed behavior |
| `environment` | `string`                                    | Name of the environment to display (required if not loading)    | new              |
| `space`       | `string`                                    | Name of the space to display (required if not loading)          | new              |
| `envVariant`  | `master` &#124; `non-master` &#124; `trial` | Visual variant for the environment badge                        | new              |
| `isAlias`     | `boolean`                                   | Indicates if the environment is an alias                        | new              |
| `ariaLabel`   | `string`                                    | Accessible label for the switcher button                        | new              |
| `className`   | `string`                                    | Enables additional styling                                      | unchanged        |
| `testId`      | `string`                                    | Sets `data-test-id` property (default: `cf-ui-navbar-switcher`) | unchanged        |
| `logo`        | `string`                                    | Shows the logo of the organization                              | removed          |
| `isCircle`    | `boolean`                                   | Used for styling                                                | removed          |
