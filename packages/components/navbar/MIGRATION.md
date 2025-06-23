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

The navbar offers a variety of compound components to enable styling and functionalites

**Removed Compund Components **
| Removed Component | Replacement | Description|
|-------------------|-------------|------------|
| Navbar.Help | Navbar.Item, Navbar.MenuItem | Use Navbar.Item for the main trigger element and Navbar.MenuItem as its children to create the Popout Menu.|
| Navbar.Search| Navbar.Item | Use Navbar.Item for the main trigger element|
| Navbar.SwitcherItem|Navbar.Switcher|NavbarSwitcher no longer reuqires Navbar.SwitchterItem as child.|
| Navbar.TopbarItem|Navbar.Item or Navbar.MenuItem||

## Navbar.Account

This compound component is used to generate the Accountmenu, the Menutrigger is represented by the Users Avatar.

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

### New Props

- label
- **New**. Used to give an accessible label to the account menu
