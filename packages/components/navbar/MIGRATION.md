# Migration Guideline Navbar from v4.X.X to v5.X.X

The API of the Navbar has changed, it has also significantly changed in it's design. In version 5 we added support for a responsive design via a mobile navigation. The space switcher element motved to the right hand side.
Many previous props have been removed or reorganized, and new props (such as logo, promotions, mainNavigation, secondaryNavigation, mobileNavigation, variant, and aria) have been introduced. The following migration guideline provides a detailed mapping and recommendations for developers upgrading to the new Navbar component

## Navbar

> [!CAUTION]
> The comoponent no longer accepts children. Navigation Items that have been handed over as children before have now to be sorted into the `mainNavigation` or `secondaryNavigation` properties.

**Navbar prop overview table**

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
| aria                        | object                     | Aria labels for different areas of the navigation bar                             | new        |
| └─ labelMainNavigation      | string                     | aria-label for main navigation                                                    |            |
| └─ labelSecondaryNavigation | string                     | aria-label for secondary navigation                                               |            |
| └─ labelPromotions          | string                     | aria-label for promotions                                                         |            |
| └─ labelAccount             | string                     | aria-label for account                                                            |            |

**Removed Props**
| Property Name | Type | Description |
|-------------------|------------------|---------------------------------------------------------------------------------------------------------------|
| children | React.ReactNode | Children elements to be rendered inside the Navbar |
| search | React.ReactNode | Search component, should now be added to the secondaryNavigation |
| help | React.ReactNode | Help component, should now be added to the secondaryNavigation |
| badge | React.ReactNode | Badge component, badges can be added in secondary or mainNaviagation |
| bottomRightItems | React.ReactNode | Items rendered on the bottom-right of the navbar, should now go to secondaryNavigation |
| topRightItems | React.ReactNode | Items rendered on the top-right of the navbar, should now go to the secondaryNavigaton |

## Compund Components

> [!CAUTION]
> Some of the compund components no longer exist to simplify the usage and design.

The navbar uses a variety of compound components to enable styling and functionalites for individual parts of the main component.

**Removed Compund Components**
| Removed Component | Replacement | Description|
|-------------------|-------------|------------|
| Navbar.Help | Navbar.Item, Navbar.MenuItem | Use Navbar.Item for the main trigger element and Navbar.MenuItem as its children to create the Popout Menu.|
| Navbar.Search| Navbar.Item | Use Navbar.Item for the main trigger element|
| Navbar.SwitcherItem|Navbar.Switcher|NavbarSwitcher no longer reuqires Navbar.SwitchterItem as child.|
| Navbar.TopbarItem|Navbar.Item or Navbar.MenuItem|There is no loger a Topbar area |

## Navbar.Account

> [!NOTE]
> This component does not contain breaking changes
>
> This compound component is used to generate the Accountmenu, the Menutrigger is represented by the Users Avatar.

### Code Example

```
<Navbar.Account
    username="Conny Contentful"
    avatar='avatar.jpg'
    initials='CC'
    hasNotification={hasNotification}
    notificationVariant='info'
    label='Account settings'
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
```

**Navbar.Account prop overview table**

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
> This components usage has not changed
>
> This compound component is used for highlights and promotions.

### Code Example

```
<Navbar.Badge>Trial</Navbar.Badge>
```

**Navbar.Badge prop overview table**

| Property Name | Type              | Description                                                            | Status     |
| ------------- | ----------------- | ---------------------------------------------------------------------- | ---------- |
| children      | React.ReactNode   | Content to be displayed inside the badge                               | no Changes |
| as            | React.ElementType | The element type to render the badge as (e.g., 'span', default: 'div') | no Changes |
| className     | string            | Enables additional styling                                             | no Changes |
| testId        | string            | Sets test-id property (default: 'cf-ui-navbar-badge')                  | no Changes |

## Navbar.Item

> [!NOTE]
> This component does not contain breaking changes

This component generates the Navigation Items. It expects a callback function and can not be used as a normal link. It is versatile and can be used with a title, as a Icon-Only Element or as a Dropdown Menu.

### Code Examples

#### Icon only

As Icon only Element to replace for example the Navbar.Search, the label is required in this case to make it accessible. If the Navbar.Item is used like this, the label will then also be shown as a tooltip on hover of the element.

```
 <Navbar.Item onClick={()=> doSomething()} label="Quick Search" icon={<MagnifyingGlassIcon />} />
```

#### Icon and text

```
  <Navbar.Item
    title='Content'
    icon={<PenNibIcon/>}
    isActive={isActive}
    onClick={()=> doSomething()}
    isDisabled={isDisabled}
  />
```

### As menu trigger

Navbar.Item accepts children, as soon as you hand over child-items, it will automatically become a dropodown menu trigger.

```

  <Navbar.Item
    title="Apps"
    icon={<PuzzlePieceIcon />}
    isDisabled={isDisabled}
  >
    <Navbar.MenuItem title="App 1" />
    <Navbar.MenuItem title="App 2" />
  </Navbar.Item>
```
