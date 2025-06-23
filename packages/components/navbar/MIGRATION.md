# Migration Guideline Navbar from v4.X.X to v5.X.X

The API of the Navbar has changed, along with significant design alterations. In version 5 we added support for a responsive design via a mobile navigation. The space switcher element moved to the right hand side.
Several previous props have been removed or reorganized, and new props (such as logo, promotions, mainNavigation, secondaryNavigation, mobileNavigation, variant, and aria) have been introduced. The following migration guideline provides a detailed mapping and recommendations for developers upgrading to the new Navbar component

## Table of Contents

- [Migration Guideline Navbar from v4.X.X to v5.X.X](#migration-guideline-navbar-from-v4xx-to-v5xx)
  - [Table of Contents](#table-of-contents)
  - [Navbar](#navbar)
    - [Navbar prop overview table](#navbar-prop-overview-table)
      - [Removed Props](#removed-props)
    - [Code Example](#code-example)
  - [Compund Components](#compund-components)
    - [Removed Compund Components](#removed-compund-components)
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
> The Navbar component no longer accepts child components. Navigation Items which have been handed over as children before, have now to be seperated into the `mainNavigation` or `secondaryNavigation` properties. As rule of thumb, elements from `bottomRightItems` and `topRightItems` should go into `secondaryNavigation`

### Navbar prop overview table

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

## Compund Components

> [!CAUTION]
> Some of the compund components no longer exist to simplify the usage and design.

The Navbar still uses a variety of compound components to enable styling and functionalites for individual parts of the main component.

### Removed Compund Components

| Removed Component   | Replacement                    | Description                                                                                                     |
| ------------------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| Navbar.Help         | Navbar.Item, Navbar.MenuItem   | Use `Navbar.Item` for the main trigger element and Navbar.MenuItem as its children to create the Popout Menu.   |
| Navbar.Search       | Navbar.Item                    | Use `Navbar.Item` for the main trigger element                                                                  |
| Navbar.SwitcherItem | Navbar.Switcher                | `NavbarSwitcher` no longer reuqires `Navbar.SwitchterItem` as child.                                            |
| Navbar.TopbarItem   | Navbar.Item or Navbar.MenuItem | There is no loger a Topbar area, children of this property should move to `secondaryNavigation` or `promotions` |

## Navbar.Account

> [!NOTE]
> This component does not contain breaking changes

This compound component is used to generate the Accountmenu, the Menutrigger is represented by the Users Avatar. It should be handed over to the Navbar via the `account` property which will be rendered as the last element.

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

| Property Name       | Type                                      | Description                                                             | Status     |
| ------------------- | ----------------------------------------- | ----------------------------------------------------------------------- | ---------- |
| children            | React.ReactNode                           | Menu items to be rendered in the account dropdown                       | no Changes |
| className           | string                                    | Enables additional styling                                              | no Changes |
| testId              | string                                    | Sets test-id property (default: 'cf-ui-navbar-account-trigger')         | no Changes |
| username            | string                                    | Name of the user displayed in the account menu                          | no Changes |
| avatar              | string                                    | URL of the user's avatar image                                          | no Changes |
| initials            | string                                    | Initials to display if no avatar image is provided                      | no Changes |
| hasNotification     | boolean                                   | Shows a notification badge on the avatar                                | no Changes |
| notificationVariant | 'warning' &#124; 'negative' &#124; 'info' | Variant of the notification badge (default: 'warning')                  | no Changes |
| label               | string                                    | Accessible label for the account menu trigger (default: 'Account menu') | new        |

## Navbar.Badge

> [!NOTE]
> This components usage has not changed and does not contain breaking changes

This compound component is used for highlights and promotions. It should be used as a element applied to the `promotions` or `account` prop on the Navbar component

### Code Example

```jsx
<Navbar promotions={<Navbar.Badge>Trial</Navbar.Badge>} />
```

### Navbar.Badge prop overview table

| Property Name | Type              | Description                                                            | Status     |
| ------------- | ----------------- | ---------------------------------------------------------------------- | ---------- |
| children      | React.ReactNode   | Content to be displayed inside the badge                               | no Changes |
| as            | React.ElementType | The element type to render the badge as (e.g., 'span', default: 'div') | no Changes |
| className     | string            | Enables additional styling                                             | no Changes |
| testId        | string            | Sets test-id property (default: 'cf-ui-navbar-badge')                  | no Changes |

## Navbar.Item

> [!NOTE]
> This component does not contain breaking changes

This component generates the Navigation Items. It expects a callback function and can not be used as a normal link. It is versatile and can be used with a title, as a Icon-Only Element or as a Dropdown Menu. It can be handed over to the area properties `mainNavigation` `secondaryNavigation` or `account`

### Code Examples

#### Icon only

Use Navbar.Item as Icon only Element to replace for example the Navbar.Search component. To generate an Icon only Navbar.Item do not hand over a `title` property but `label` instead. For accessibility, the label is required, it will also be shown as a tooltip on hover of the element.

```jsx
<Navbar.Item
  onClick={() => doSomething()}
  label="Quick Search"
  icon={<MagnifyingGlassIcon />}
/>
```

#### Icon and text or just text

This is the default use-case of the `Navbar.Item`, the `title` property is to contain the title of the item, icons will be shown as start icon left of the title.

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

Navbar.Item accepts children, as soon as you hand over child-items, it will automatically become a dropodown menu trigger. It can be combined with `title` and `icon` or with `icon` and `label` for an icon-only menu.

```jsx
<Navbar.Item title="Apps" icon={<PuzzlePieceIcon />} isDisabled={isDisabled}>
  <Navbar.MenuItem title="App 1" />
  <Navbar.MenuItem title="App 2" />
</Navbar.Item>
```

### Navbar.Item prop overview table

| Property Name | Type              | Description                                                                   | Status     |
| ------------- | ----------------- | ----------------------------------------------------------------------------- | ---------- |
| label         | string            | Accessible label for icon-only items (required for accessibility and tooltip) | new        |
| title         | string            | Title text displayed for the item                                             | no Changes |
| icon          | React.ReactNode   | Icon displayed before the title or as the only content                        | no Changes |
| isActive      | boolean           | Marks the item as active (e.g., for current page)                             | no Changes |
| as            | React.ElementType | The element type to render the item as (e.g., 'button', 'a')                  | no Changes |
| isDisabled    | boolean           | Disables the item, making it non-interactive                                  | new        |
| children      | React.ReactNode   | If provided, turns the item into a dropdown menu trigger                      | no Changes |
| onOpen        | () => void        | Callback fired when the dropdown menu opens (only if children are provided)   | no Changes |
| onClose       | () => void        | Callback fired when the dropdown menu closes (only if children are provided)  | no Changes |
| className     | string            | Enables additional styling                                                    | no Changes |
| testId        | string            | Sets test-id property (default: 'cf-ui-navbar-item')                          | no Changes |

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

| Property Name | Type              | Description                                                  | Status     |
| ------------- | ----------------- | ------------------------------------------------------------ | ---------- |
| title         | string            | Title text displayed for the item                            | no Changes |
| icon          | React.ReactNode   | Icon displayed before the title or as the only content       | no Changes |
| as            | React.ElementType | The element type to render the item as (e.g., 'button', 'a') | no Changes |
| className     | string            | Enables additional styling                                   | no Changes |

### Navbar.MenuDivider prop overview table

| Property Name | Type   | Description                                           | Status     |
| ------------- | ------ | ----------------------------------------------------- | ---------- |
| className     | string | Enables additional styling                            | no Changes |
| testId        | string | Sets test-id property (default: 'cf-ui-menu-divider') | no Changes |

### Navbar.SectionTitle prop overview table

| Property Name | Type            | Description                                                 | Status     |
| ------------- | --------------- | ----------------------------------------------------------- | ---------- |
| className     | string          | Enables additional styling                                  | no Changes |
| testId        | string          | Sets test-id property (default: 'cf-ui-menu-section-title') | no Changes |
| children      | React.ReactNode | Contains the actual title displayed                         | no Changes |

## Navbar.Submenu

> [!NOTE]
> This is a new Compound Component to help generating the responsive mobile navigation

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

| Property Name | Type            | Description                                                                                   | Status |
| ------------- | --------------- | --------------------------------------------------------------------------------------------- | ------ |
| title         | string          | Title text displayed for the submenu                                                          | new    |
| icon          | React.ReactNode | Icon displayed before the title, required                                                     | new    |
| children      | React.ReactNode | Navbar.MenuItem items to be rendered inside the submenu                                       | new    |
| testId        | string          | Sets test-id property (passed to the submenu container, default: 'cf-ui-navbar-submenu-list') | new    |
| onOpen        | () => void      | Callback fired when the submenu opens                                                         | new    |
| onClose       | () => void      | Callback fired when the submenu closes                                                        | new    |

## Navbar.Switcher

> [!Caution]
> Navbar.Switcher has removed elements
> The following elements have been removed or changed in the new Navbar.Switcher API and require code changes:
>
> - Compound component `Navbar.SwitcherItem`
> - `children` only allowed when `isLoading:true`
> - `logo` prop
> - `isCircle` prop

The Navbar.Switcher component is used for displaying the current space and environment names. It can also be used as trigger element to open a space switcher menu. The new design and usage is much more simplified and no longer requires `Navbar.SwitcherItem` to build the breadcrumb style display. The `Navbar.Switcher` should always be handed over via the `switcher` property to ensure proper positioning.

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

| Property Name | Type                                        | Description                                                               | Status           |
| ------------- | ------------------------------------------- | ------------------------------------------------------------------------- | ---------------- |
| isLoading     | boolean                                     | If true, shows a loading state and renders children (used for loading UI) | new              |
| children      | React.ReactNode                             | Content to display when loading (only used if `isLoading` is true)        | Changed behavior |
| environment   | string                                      | Name of the environment to display (required if not loading)              | new              |
| space         | string                                      | Name of the space to display (required if not loading)                    | new              |
| envVariant    | 'master' &#124; 'non-master' &#124; 'trial' | Visual variant for the environment badge                                  | new              |
| isAlias       | boolean                                     | Indicates if the environment is an alias                                  | new              |
| ariaLabel     | string                                      | Accessible label for the switcher button                                  | new              |
| className     | string                                      | Enables additional styling                                                | no Changes       |
| testId        | string                                      | Sets test-id property (default: 'cf-ui-navbar-switcher')                  | no Changes       |
| logo          | string                                      | Showed the logo of the organization                                       | removed          |
| isCircle      | boolean                                     | used for styling                                                          | removed          |
