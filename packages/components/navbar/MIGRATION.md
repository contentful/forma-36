# Migration Guideline Navbar from v4.X.X to v5.X.X

The API of the Navbar has changed, it has also significantly changed in it's design. In version 5 we added support for a responsive design via a mobile navigation. The space switcher element motved to the right hand side.
Many previous props have been removed or reorganized, and new props (such as logo, promotions, mainNavigation, secondaryNavigation, mobileNavigation, variant, and aria) have been introduced. The following migration guideline provides a detailed mapping and recommendations for developers upgrading to the new Navbar component

## Navbar

> [!CAUTION]
> The comoponent no longer accepts children. Navigation Items that have been handed over as children before have now to be sorted into the `mainNavigation` or `secondaryNavigation` properties.

**Prop overview table**

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
| variant                     | 'wide' &#124; 'fullscreen' | Describes the size variation of the Navbar. 'wide' sets contentMaxWidth to 1524px |            |
| aria                        | object                     | Aria labels for different areas of the navigation bar                             |            |
| └─ labelMainNavigation      | string                     | aria-label for main navigation                                                    |            |
| └─ labelSecondaryNavigation | string                     | aria-label for secondary navigation                                               |            |
| └─ labelPromotions          | string                     | aria-label for promotions                                                         |            |
| └─ labelAccount             | string                     | aria-label for account                                                            |            |

                         |

### Removed Props

- children
  **Removed** All main content in the navbar should now be provided through explicit structural props.

- search, help, badge, bottomRightItems, topRightItems

  **Removed.** These should be mapped to one of the new explicit props or reorganized as part of mainNavigation, secondaryNavigation, or promotions components.

### Retained or Renamed Props

- account

  **Retained**. Use as before to supply the compound component `<Navbar.Account />`

- switcher

  **Retained**. Use as before for the Environment Switcher with the compound component `<Navbar.Switcher />` Visually moved from the left side to the right side.

- contentMaxWidth

  **Retained**, Optional. Same function, default is 100%; can be set to override the max-width of the content inside the navbar.

Major Changes and New Props

- logo

  **New**, Optional. Accepts a React component to appear as the first element of the navbar. Per default the Contentful logo is shown.

- mainNavigation
  **New**, . All primary navigation elements should be grouped into this prop. Items previously passed as children or distributed between children/topRightItems/bottomRightItems should now be reorganized here.

- promotions

  **New**, Optional. Area placed right after the mainNavigation and can be used to feature promotions, company branding, or announcements that were previously placed using children or topRightItems.

secondaryNavigation
New. For navigation/action items that appear at the right side—most content from topRightItems or items you formerly split out as secondary actions should now reside here.

mobileNavigation & mobileNavigationProps
New. For specifying dedicated mobile navigation components and configuring mobile breakpoints and labels.

variant
New. Allows quick setting of size variation: 'wide' (1524px max width) or 'fullscreen'.

aria
New. For adding accessible aria-labels to distinct areas of the navbar.

## Navbar.Account

New Props

- label
- **New**. Used to give an accessible label to the menu

##### Navbar.Help

**Deleted** This compound component was deleted, instead replace it with a `<Navbar.Item />`

##### Navbar,Item

New Props

- label
  **New**. Used to give an accessible aria-label to the item.
- isDisabled
  **New**. Determines if an item is click-able
