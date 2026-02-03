# Migration

## Table of Contents

- [Migration](#migration)
  - [Table of Contents](#table-of-contents)
  - [Migration from V5 to V6](#migration-from-v5-to-v6)
    - [Summary](#summary)
    - [Breaking Changes Overview](#breaking-changes-overview)
    - [Component-Specific Migrations](#component-specific-migrations)
      - [Accordion](#accordion)
      - [Menu](#menu)
      - [Popover](#popover)
      - [Skeleton](#skeleton)
      - [Tooltip](#tooltip)
    - [Quick Start Migration Checklist](#quick-start-migration-checklist)

## Migration from V5 to V6

### Summary

Forma 36 v6 introduces several breaking changes focused on:

- **React 19 & Node Version Updates**: Updated peer dependencies to support React 19 and newer Node versions
- **Emotion CSS Upgrade**: Updated from Emotion v10 to v11, requiring updates to styling dependencies
- **API Simplification**: Removed redundant props and consolidated type definitions across multiple components

The migration primarily affects prop interfaces and type exports. Most runtime behavior remains backward-compatible, but TypeScript consumers will need to update type imports and remove deprecated props.

### Breaking Changes Overview

| Component               | Breaking Change                                                                                                         | Impact                                                                                                        |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| [Accordion](#accordion) | Refactored to use React Context; removed `align` prop from `AccordionItem` and `AccordionHeader`                        | Alignment now controlled only at parent `Accordion` level; components must be used within `Accordion` wrapper |
| [Menu](#menu)           | Changed `placement` prop (removed `auto-start`, `auto-end`), changed `offset` prop shape, and deprecated `Menu.Submenu` | Requires prop value updates; use nested `Menu` components instead of `Menu.Submenu`                           |
| [Popover](#popover)     | Changed `placement` prop (removed `auto-start`, `auto-end`) and `offset` prop shape                                     | Requires prop value updates                                                                                   |
| [Skeleton](#skeleton)   | Removed `SkeletonDisplayTextProps` and `SkeletonBodyTextProps` types                                                    | TypeScript type imports need updating                                                                         |
| [Tooltip](#tooltip)     | Changed `placement` prop (removed `auto-start`, `auto-end`)                                                             | Requires prop value updates                                                                                   |

### Component-Specific Migrations

#### Accordion

The Accordion component has been refactored to use React Context for internal state management. The `align` prop has been removed from `AccordionItem` and `AccordionHeader` and is now configured only on the parent `Accordion` component. Additionally, `AccordionItem` and `AccordionHeader` must now be used within an `Accordion` wrapper—they can no longer be used as standalone components.

**📖 [Full Accordion Migration Guide](./packages/components/accordion/MIGRATION.md)**

#### Menu

- Removed `auto-start` and `auto-end` from `placement` prop
- Changed `offset` prop from tuple `[number, number]` to `number | OffsetOptions` object
- **Deprecated `Menu.Submenu`** - Use nested `Menu` components instead; nesting is automatically detected via context

**📖 [Full Menu Migration Guide](./packages/components/menu/Migration.md)**

#### Popover

- Removed `auto-start` and `auto-end` from `placement` prop
- Changed `offset` prop from tuple `[number, number]` to `number | OffsetOptions` object

**📖 [Full Popover Migration Guide](./packages/components/popover/MIGTRATION.md)**

#### Skeleton

Consolidated duplicate type exports. Use `SkeletonTextProps` instead of `SkeletonDisplayTextProps` or `SkeletonBodyTextProps`.

**📖 [Full Skeleton Migration Guide](./packages/components/skeleton/MIGRATION.md)**

#### Tooltip

Removed `auto-start` and `auto-end` from `placement` prop values.

**📖 [Full Tooltip Migration Guide](./packages/components/tooltip/MIGRATION.md)**

---

### Quick Start Migration Checklist

- [ ] Update React and Node versions per package.json requirements
- [ ] Review and update Accordion implementations (remove item-level `align` props)
- [ ] Update Menu `placement` and `offset` props; replace `Menu.Submenu` with nested `Menu`
- [ ] Update Popover `placement` and `offset` props
- [ ] Replace deprecated Skeleton type imports with `SkeletonTextProps`
- [ ] Update Tooltip `placement` props
- [ ] Run TypeScript compiler to catch any remaining type errors
- [ ] Perform visual regression testing

For detailed migration steps, code examples, and FAQs, please refer to the individual component migration guides linked above.
