---
'@contentful/f36-components': minor
---

## ⚠️ Breaking Changes

### Workbench is deprecated and removed in v5

This package is now deprecated; please use the [Layout](https://f36.contentful.com/components/layout) component instead.

The package remains accessible in its latest v4 version, but its maintenance will be stopped in six months.

📖 Follow this [migration guide](https://github.com/contentful/forma-36/blob/main/MIGRATION.md#workbench).

### Typography is removed

It has been deprecated since v3 -> v4, follow the [migration recommendations](https://github.com/contentful/forma-36/blob/main/MIGRATION_V3_V4.md#typography).

## 📝 API changes in various components

- Autocomplete
- ButtonGroup
- Flex
- Header
- Icons
- IconButton
- Navbar
- Multiselect
- Typography

### Autocomplete

[https://f36.contentful.com/components/autocomplete](https://f36.contentful.com/components/autocomplete)

| Change | Recommendation |
|--------|--------|
| The `clearAfterSelect` prop is removed | Use `textOnAfterSelect` with `clear` instead |

### ButtonGroup

[https://f36.contentful.com/components/button-group](https://f36.contentful.com/components/button-group)

| Change | Recommendation |
|--------|--------|
| The `collapsed` value from the `variant` prop is removed | Use `merged` instead | 

### Flex

[https://f36.contentful.com/components/flex](https://f36.contentful.com/components/flex)

| Change | Recommendation |
|--------|--------|
| The `justifyItems` prop is removed | This CSS property is ignored in flexbox layouts, removing the property should have no impact |

### Header

[https://f36.contentful.com/components/header](https://f36.contentful.com/components/header)

### Icons

[https://f36.contentful.com/components/icon](https://f36.contentful.com/components/icon)

The `Icon` component has been significantly updated in version 5, introducing several breaking changes to its API. The available icon sizes have been streamlined to three options for greater consistency and ease of use. The `trimmed` and `variant` props have been removed to simplify the component. Instead, a new `color` prop has been added, allowing for more flexible icon styling. Additionally, an `isActive` prop is now available to indicate the active state of an icon.

📖 Follow this [migration guide](https://github.com/contentful/forma-36/blob/main/MIGRATION.md#icon).

A codemod is available to migrate your icons:

```bash
npx @contentful/f36-codemod
```

### IconButton

[https://f36.contentful.com/components/icon-button](https://f36.contentful.com/components/icon-button)

| Change | Recommendation |
|--------|--------|
| The `children` prop is removed | Use `Button` with `startIcon`/`endIcon` instead |

### Navbar

[https://f36.contentful.com/components/navbar](https://f36.contentful.com/components/navbar)

The Navbar component has undergone significant changes to its API and design.

| Change | Recommendation |
|--------|--------|
| The component is not exported from `@contentful/f36-components` anymore | Import it from `@contentful/f36-navbar` instead |

📖 Follow this [migration guide](https://github.com/contentful/forma-36/blob/main/MIGRATION.md#navbar).

### Multiselect

[https://f36.contentful.com/components/multiselect](https://f36.contentful.com/components/multiselect)

| Change | Recommendation |
|--------|--------|
| The `onSearchValueChange` prop is removed | Use the `searchProps.onSearchValueChange` instead |
| The `searchPlaceholder` prop is removed | Use the `searchProps.searchPlaceholder` instead |
| The `searchInputName` prop is removed | Use the `searchProps.searchInputName` instead |
| The `onSearchValueChange` prop is removed | Use the `searchProps.searchInputRef` instead |

## ✅ Entering stable

- Layout
- Multiselect
- NavList
- ProgressStepper

### Layout

Learn more about this component on the [documentation page](https://github.com/contentful/forma-36/blob/main/MIGRATION.md#layout).

### Multiselect

Learn more about this component on the [documentation page](https://f36.contentful.com/components/multiselect).

### NavList

Learn more about this component on the [documentation page](https://f36.contentful.com/components/navlist).

### ProgressStepper

Learn more about this component on the [documentation page](https://f36.contentful.com/components/progress-stepper).

## 🆕 New components

- UsageCard
- UsageCount

### UsageCard

A new generic component used for rendering usage data.

Learn more about this component on the [documentation page](https://f36.contentful.com/components/usage-card).

### UsageCount

Used to render usage values, often used inside the `UsageCard` component.

Learn more about this component on the [documentation page](https://f36.contentful.com/components/usage-count).

## 📖 Migration

The [migration guide](https://github.com/contentful/forma-36/blob/main/MIGRATION.md) details all changes and outlines the necessary actions, whether manual or automated using Codemod.

## 🫶 Contributors

It takes a village to go through a major version release; a special thanks to:

@damann @denkristoffer, @massao, @Lelith, @veu, @missating, @bgutsol, @stephanLeece, @roosterhack
