## Change Log

## 4.26.1

### Patch Changes

- [#3048](https://github.com/contentful/forma-36/pull/3048) [`8ccbf20`](https://github.com/contentful/forma-36/commit/8ccbf2015fee4fc9406829d44d329c103abe2654) Thanks [@Lelith](https://github.com/Lelith)! - Enable localisation of the Multiselect component by offering new optional properties

## 4.26.0

### Minor Changes

- [#3006](https://github.com/contentful/forma-36/pull/3006) [`1863076`](https://github.com/contentful/forma-36/commit/1863076fbddc367438f32370a47a71c7a92e4613) Thanks [@denkristoffer](https://github.com/denkristoffer)! - feat(multiselect): allow passing React children instead of string labels to options

## 4.25.1

### Patch Changes

- [#2997](https://github.com/contentful/forma-36/pull/2997) [`8948dee`](https://github.com/contentful/forma-36/commit/8948dee68888e5a1a4d792018c163abfdb76395c) Thanks [@Lelith](https://github.com/Lelith)! - Unifies the applied styles of the following Components: Autocomplete, Menu, Multiselect, Navlist.

  Exposes a new utility styling function `getMenuItemStyles({isActive?:boolean, isDisabled?: boolean })`

- Updated dependencies [[`8948dee`](https://github.com/contentful/forma-36/commit/8948dee68888e5a1a4d792018c163abfdb76395c)]:
  - @contentful/f36-core@4.78.0
  - @contentful/f36-button@4.78.0
  - @contentful/f36-forms@4.78.0
  - @contentful/f36-popover@4.78.0
  - @contentful/f36-skeleton@4.78.0
  - @contentful/f36-tooltip@4.78.0
  - @contentful/f36-typography@4.78.0

## 4.25.0

### Minor Changes

- [#2928](https://github.com/contentful/forma-36/pull/2928) [`5c9c55a`](https://github.com/contentful/forma-36/commit/5c9c55afdae7e79c097abd31d9dba4798aa11f02) Thanks [@andipaetzold](https://github.com/andipaetzold)! - improve option label highlighting by trimming the search value

### Patch Changes

- [#2928](https://github.com/contentful/forma-36/pull/2928) [`5c9c55a`](https://github.com/contentful/forma-36/commit/5c9c55afdae7e79c097abd31d9dba4798aa11f02) Thanks [@andipaetzold](https://github.com/andipaetzold)! - show option label if there is no match with the search value

## 4.24.0

### Minor Changes

- [#2816](https://github.com/contentful/forma-36/pull/2816) [`772238d7c`](https://github.com/contentful/forma-36/commit/772238d7cbc63eb1cd2dfe39ed8b0103ce011110) Thanks [@massao](https://github.com/massao)! - feat: add clear selection button to multiselect

- [#2816](https://github.com/contentful/forma-36/pull/2816) [`772238d7c`](https://github.com/contentful/forma-36/commit/772238d7cbc63eb1cd2dfe39ed8b0103ce011110) Thanks [@massao](https://github.com/massao)! - Adds a new property to show a shortcut link to clear the current selection. The link only is visible when there is more than one option selected.

## 4.23.1

### Patch Changes

- [#2676](https://github.com/contentful/forma-36/pull/2676) [`f1e694256`](https://github.com/contentful/forma-36/commit/f1e6942565a0bd2c305d6ea9e5947ba018d34543) Thanks [@Lelith](https://github.com/Lelith)! - Allows now setting an individual itemId for the SelectAllOption component which is a divert from MultiselectOption

## 4.23.0

### Minor Changes

- [#2677](https://github.com/contentful/forma-36/pull/2677) [`3d39f21a7`](https://github.com/contentful/forma-36/commit/3d39f21a765bb7e867d57a43126ec2a8ada1ac44) Thanks [@jfctfl](https://github.com/jfctfl)! - MultiSelect now forwards `popoverProps.onClose` providing a listener to the popover closing

## 4.22.0

### Minor Changes

- [#2654](https://github.com/contentful/forma-36/pull/2654) [`ffb59cd7a`](https://github.com/contentful/forma-36/commit/ffb59cd7ad22121fa6f861c083b2dd59655128a4) Thanks [@Lelith](https://github.com/Lelith)! - - Deprecates some props that are now accepted as sub-component props searchProps
  - Separates the search input from the multiselect component as its own sub-component for easier to read and maintain code
  - Adds new property resetSearchRef as part of sub-component props

## 4.21.0

### Minor Changes

- [#2596](https://github.com/contentful/forma-36/pull/2596) [`7b1063fad`](https://github.com/contentful/forma-36/commit/7b1063fada1eb9ddca2a00b4239a5d4fd2180b3b) Thanks [@YvesRijckaert](https://github.com/YvesRijckaert)! - fix(Multiselect): scrolling issue

## 4.20.13

### Patch Changes

- [#2587](https://github.com/contentful/forma-36/pull/2587) [`aff991c3d`](https://github.com/contentful/forma-36/commit/aff991c3dffaf16ea1f05b1c7303db19ce307a33) Thanks [@wojtekmaj](https://github.com/wojtekmaj)! - fix: add react-dom peer dependency

- Updated dependencies [[`aff991c3d`](https://github.com/contentful/forma-36/commit/aff991c3dffaf16ea1f05b1c7303db19ce307a33)]:
  - @contentful/f36-popover@4.52.2
  - @contentful/f36-typography@4.52.2
  - @contentful/f36-button@4.52.2
  - @contentful/f36-core@4.52.2
  - @contentful/f36-forms@4.52.2
  - @contentful/f36-skeleton@4.52.2

## 4.20.12

### Patch Changes

- [#2563](https://github.com/contentful/forma-36/pull/2563) [`bd32c9271`](https://github.com/contentful/forma-36/commit/bd32c92718319873a7b91c2958a835f70117b114) Thanks [@maxcheremisin](https://github.com/maxcheremisin)! - Multiselect: apply style refresh to multiselect

## 4.20.11

### Patch Changes

- [#2359](https://github.com/contentful/forma-36/pull/2359) [`a6df3dc2`](https://github.com/contentful/forma-36/commit/a6df3dc21f2d9713517e3b837f1f9b54c1c52b30) Thanks [@Lelith](https://github.com/Lelith)! - Fix for multiselect example in documentation

## 4.20.10

### Patch Changes

- [#2358](https://github.com/contentful/forma-36/pull/2358) [`c054c2f0`](https://github.com/contentful/forma-36/commit/c054c2f0ee5d9f2eeba68ac12d1700ed6a1ecb37) Thanks [@Lelith](https://github.com/Lelith)! - Extend the Multiselect Component with a Select All possibility
