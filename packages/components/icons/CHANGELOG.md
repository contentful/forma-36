# Change Log

## 5.7.0

### Minor Changes

- [#3219](https://github.com/contentful/forma-36/pull/3219) [`3ebf269`](https://github.com/contentful/forma-36/commit/3ebf269c33b3b638bbc27c0aca89fa823d9ad3a7) Thanks [@YvesRijckaert](https://github.com/YvesRijckaert)! - feat: add square split horizontal icon

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@5.7.0
  - @contentful/f36-icon@5.7.0

## 5.6.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@5.6.0
  - @contentful/f36-icon@5.6.0

## 5.5.0

### Minor Changes

- [#3181](https://github.com/contentful/forma-36/pull/3181) [`6063710`](https://github.com/contentful/forma-36/commit/6063710c9c73995d65478957fbc96868f68cfa86) Thanks [@andipaetzold](https://github.com/andipaetzold)! - Add `TrayArrowUpIcon`

- [#3181](https://github.com/contentful/forma-36/pull/3181) [`6063710`](https://github.com/contentful/forma-36/commit/6063710c9c73995d65478957fbc96868f68cfa86) Thanks [@andipaetzold](https://github.com/andipaetzold)! - Add `TrayArrowDownIcon`

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@5.5.0
  - @contentful/f36-icon@5.5.0

## 5.4.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@5.4.1
  - @contentful/f36-icon@5.4.1

## 5.4.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@5.4.0
  - @contentful/f36-icon@5.4.0

## 5.3.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@5.3.0
  - @contentful/f36-icon@5.3.0

## 5.2.0

### Minor Changes

- [#3174](https://github.com/contentful/forma-36/pull/3174) [`231660d`](https://github.com/contentful/forma-36/commit/231660d02a9e4f30bf9ad7fbbd2b69b591f3fc00) Thanks [@andipaetzold](https://github.com/andipaetzold)! - Add `GlobeXIcon`

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@5.2.0
  - @contentful/f36-icon@5.2.0

## 5.1.1

### Patch Changes

- [#3170](https://github.com/contentful/forma-36/pull/3170) [`6156a58`](https://github.com/contentful/forma-36/commit/6156a58a25edfd12edd158f95e41154b6a5a4663) Thanks [@denkristoffer](https://github.com/denkristoffer)! - fix(icons): pin phosphor to version with new names and working ESM build

- Updated dependencies []:
  - @contentful/f36-core@5.1.1
  - @contentful/f36-icon@5.1.1

## 5.1.0

### Minor Changes

- [#2828](https://github.com/contentful/forma-36/pull/2828) [`b0fabb2`](https://github.com/contentful/forma-36/commit/b0fabb257f5527943daeaceccea2259cd6004225) Thanks [@cf-remylenoir](https://github.com/cf-remylenoir)! - Bumping one minor version to prevent conflicts with the previously major release that happened by mistake 3 years ago.

### Patch Changes

- Updated dependencies [[`b0fabb2`](https://github.com/contentful/forma-36/commit/b0fabb257f5527943daeaceccea2259cd6004225)]:
  - @contentful/f36-icon@5.1.0
  - @contentful/f36-tokens@5.1.0
  - @contentful/f36-core@5.1.0

## 5.0.0

### Major Changes

- [#2828](https://github.com/contentful/forma-36/pull/2828) [`a2df764`](https://github.com/contentful/forma-36/commit/a2df764247f7439d5b1b4f3fa71e2b46597c2785) Thanks [@cf-remylenoir](https://github.com/cf-remylenoir)! - Notice: 5.0.0 is not to be installed

  3 years ago, some packages were bumped to 5.0.0 by mistake.

  Therefore, please rely on the next minor version 5.1.0 to avoid any issues.

- [#2828](https://github.com/contentful/forma-36/pull/2828) [`a2df764`](https://github.com/contentful/forma-36/commit/a2df764247f7439d5b1b4f3fa71e2b46597c2785) Thanks [@cf-remylenoir](https://github.com/cf-remylenoir)! - The `Icon` component has been significantly updated in version 5, introducing several breaking changes to its API. The available icon sizes have been streamlined to three options for greater consistency and ease of use. The `trimmed` and `variant` props have been removed to simplify the component. Instead, a new `color` prop has been added, allowing for more flexible icon styling. Additionally, an `isActive` prop is now available to indicate the active state of an icon.

  📖 Follow this [migration guide](https://github.com/contentful/forma-36/blob/main/MIGRATION.md#icon).

  ### Codemod

  A codemod is available to migrate your icons:

  ```bash
  npx @contentful/f36-codemod
  ```

### Patch Changes

- Updated dependencies [[`a2df764`](https://github.com/contentful/forma-36/commit/a2df764247f7439d5b1b4f3fa71e2b46597c2785), [`a2df764`](https://github.com/contentful/forma-36/commit/a2df764247f7439d5b1b4f3fa71e2b46597c2785)]:
  - @contentful/f36-core@5.0.0
  - @contentful/f36-icon@5.0.0
  - @contentful/f36-tokens@5.0.0

## 4.29.1

### Patch Changes

- [#3108](https://github.com/contentful/forma-36/pull/3108) [`03e8d12`](https://github.com/contentful/forma-36/commit/03e8d128132f451a13a39cbeb9e20f1c1acbd0de) Thanks [@Chaoste](https://github.com/Chaoste)! - Fixes the viewbox of the Subscript Icon to display the icon correctly.

- Updated dependencies []:
  - @contentful/f36-core@4.80.4
  - @contentful/f36-icon@4.80.4

## 4.29.0

### Minor Changes

- [#2819](https://github.com/contentful/forma-36/pull/2819) [`bbc543f61`](https://github.com/contentful/forma-36/commit/bbc543f6119848dc493b6246960cd3d9f90629bf) Thanks [@ethan-ozelius-contentful](https://github.com/ethan-ozelius-contentful)! - add paintbrush icon

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@4.67.3
  - @contentful/f36-icon@4.67.3

## 4.28.2

### Patch Changes

- [#2729](https://github.com/contentful/forma-36/pull/2729) [`84bdcf9a6`](https://github.com/contentful/forma-36/commit/84bdcf9a6f73a5ab3e3f159d2e29e77dec632e61) Thanks [@denkristoffer](https://github.com/denkristoffer)! - Un-deprecate icons that will be migrated by codemod in the future

## 4.28.1

### Patch Changes

- [#2724](https://github.com/contentful/forma-36/pull/2724) [`51691ade3`](https://github.com/contentful/forma-36/commit/51691ade3c47e117ad30eb1c722c56363c702c45) Thanks [@denkristoffer](https://github.com/denkristoffer)! - Deprecate icons that will be removed in a future breaking change

- Updated dependencies []:
  - @contentful/f36-core@4.65.0
  - @contentful/f36-icon@4.65.0

## 4.28.0

### Minor Changes

- [#2706](https://github.com/contentful/forma-36/pull/2706) [`64511b6e9`](https://github.com/contentful/forma-36/commit/64511b6e9c6538c35632d1844122b3ab7c50023c) Thanks [@Lelith](https://github.com/Lelith)! - Deprecate trimmed icon variations

### Patch Changes

- Updated dependencies [[`64511b6e9`](https://github.com/contentful/forma-36/commit/64511b6e9c6538c35632d1844122b3ab7c50023c)]:
  - @contentful/f36-icon@4.63.0
  - @contentful/f36-core@4.63.0

## 4.27.0

### Minor Changes

- [#2544](https://github.com/contentful/forma-36/pull/2544) [`98b41ae0c`](https://github.com/contentful/forma-36/commit/98b41ae0ccef054d4c2482c51b60d4a492c95f33) Thanks [@stephanLeece](https://github.com/stephanLeece)! - - Add new premium variant to Note, TextLink, Icon
  - Add new Diamond Icon, used as default icon for Note with premium variant

### Patch Changes

- Updated dependencies [[`98b41ae0c`](https://github.com/contentful/forma-36/commit/98b41ae0ccef054d4c2482c51b60d4a492c95f33)]:
  - @contentful/f36-icon@4.48.0
  - @contentful/f36-core@4.48.0

## 4.26.0

### Minor Changes

- [#2534](https://github.com/contentful/forma-36/pull/2534) [`8f80ae1dd`](https://github.com/contentful/forma-36/commit/8f80ae1dd4cc7958fd638790a36a1d563d64f197) Thanks [@marcolink](https://github.com/marcolink)! - Add appearance icon

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-core@4.47.2
  - @contentful/f36-icon@4.47.2

## 4.25.0

### Minor Changes

- [#2427](https://github.com/contentful/forma-36/pull/2427) [`c7255a88`](https://github.com/contentful/forma-36/commit/c7255a88696dc99addc596cc62a2f00ab1575793) Thanks [@denkristoffer](https://github.com/denkristoffer)! - feat(environment): update icon
  feat(environment-alias): update icon
  feat(sort-ascending): new icon
  feat(sort-descending): new icon
  feat(sort): new icon

## 4.24.0

### Minor Changes

- [#2391](https://github.com/contentful/forma-36/pull/2391) [`53fe79bf`](https://github.com/contentful/forma-36/commit/53fe79bf69b5eb36d304f29f6426ebab91764cbb) Thanks [@marcolink](https://github.com/marcolink)! - add ArrowDownward Icon

## 4.23.2

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.23.2
  - @contentful/f36-core@4.23.2

## 4.23.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.23.1
  - @contentful/f36-core@4.23.1

## 4.23.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.23.0
  - @contentful/f36-core@4.23.0

## 4.22.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.22.0
  - @contentful/f36-core@4.22.0

## 4.21.8

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.8
  - @contentful/f36-core@4.21.8

## 4.21.7

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.7
  - @contentful/f36-core@4.21.7

## 4.21.6

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.6
  - @contentful/f36-core@4.21.6

## 4.21.5

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.5
  - @contentful/f36-core@4.21.5

## 4.21.4

### Patch Changes

- [#2314](https://github.com/contentful/forma-36/pull/2314) [`66973fd9`](https://github.com/contentful/forma-36/commit/66973fd9f4612f648795b494f312d21d8baa3e56) Thanks [@denkristoffer](https://github.com/denkristoffer)! - fix: specify react-dom as peer dependency

- Updated dependencies [[`66973fd9`](https://github.com/contentful/forma-36/commit/66973fd9f4612f648795b494f312d21d8baa3e56)]:
  - @contentful/f36-core@4.21.4
  - @contentful/f36-icon@4.21.4

## 4.21.3

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.3
  - @contentful/f36-core@4.21.3

## 4.21.2

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.2
  - @contentful/f36-core@4.21.2

## 4.21.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.1
  - @contentful/f36-core@4.21.1

## 4.21.0

### Minor Changes

- [#2272](https://github.com/contentful/forma-36/pull/2272) [`499f1a84`](https://github.com/contentful/forma-36/commit/499f1a844d890cd8c7f81373aba466b6de01558b) Thanks [@ChidinmaOrajiaku](https://github.com/ChidinmaOrajiaku)! - New Entry and Page Icons

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.21.0
  - @contentful/f36-core@4.21.0

## 4.20.9

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.9
  - @contentful/f36-core@4.20.9

## 4.20.8

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.8
  - @contentful/f36-core@4.20.8

## 4.20.7

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.7
  - @contentful/f36-core@4.20.7

## 4.20.6

### Patch Changes

- [#2233](https://github.com/contentful/forma-36/pull/2233) [`05bdd10f`](https://github.com/contentful/forma-36/commit/05bdd10f5ea6fae41cacb0f4fd3db0bdd65422e9) Thanks [@crissto](https://github.com/crissto)! - Add ToggleIcon

- Updated dependencies []:
  - @contentful/f36-icon@4.20.6
  - @contentful/f36-core@4.20.6

## 4.20.5

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.5
  - @contentful/f36-core@4.20.5

## 4.20.4

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.4
  - @contentful/f36-core@4.20.4

## 4.20.3

### Patch Changes

- Updated dependencies [[`d3c27ab8`](https://github.com/contentful/forma-36/commit/d3c27ab830ec9c2cc096e8be33da496c2dc284ea)]:
  - @contentful/f36-core@4.20.3
  - @contentful/f36-icon@4.20.3

## 4.20.2

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.2
  - @contentful/f36-core@4.20.2

## 4.20.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.1
  - @contentful/f36-core@4.20.1

## 4.20.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.20.0
  - @contentful/f36-core@4.20.0

## 4.19.2

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.19.2
  - @contentful/f36-core@4.19.2

## 4.19.1

### Patch Changes

- [#2209](https://github.com/contentful/forma-36/pull/2209) [`42f0c321`](https://github.com/contentful/forma-36/commit/42f0c3218965137191842f492fe5dbf4bd10784c) Thanks [@denkristoffer](https://github.com/denkristoffer)! - build: build ESM to JS file - legacy output
  fix(notification): use type imports
- Updated dependencies [[`42f0c321`](https://github.com/contentful/forma-36/commit/42f0c3218965137191842f492fe5dbf4bd10784c)]:
  - @contentful/f36-icon@4.19.1
  - @contentful/f36-core@4.19.1

## 4.19.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.19.0
  - @contentful/f36-core@4.19.0

## 4.18.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.18.0
  - @contentful/f36-core@4.18.0

## 4.17.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.17.0
  - @contentful/f36-core@4.17.0

## 4.16.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.16.0
  - @contentful/f36-core@4.16.0

## 4.15.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.15.1
  - @contentful/f36-core@4.15.1

## 4.15.0

### Patch Changes

- Updated dependencies [[`647c849e`](https://github.com/contentful/forma-36/commit/647c849e30891f65be401e95d2ae45b5a715da36)]:
  - @contentful/f36-icon@4.15.0
  - @contentful/f36-core@4.15.0

## 4.14.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.14.0
  - @contentful/f36-core@4.14.0

## 4.13.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.13.0
  - @contentful/f36-core@4.13.0

## 4.12.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.12.0
  - @contentful/f36-core@4.12.0

## 4.11.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.11.0
  - @contentful/f36-core@4.11.0

## 4.11.0-beta.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.11.0-beta.0
  - @contentful/f36-core@4.11.0-beta.0

## 4.10.5

### Patch Changes

- [#2005](https://github.com/contentful/forma-36/pull/2005) [`32cac8e8`](https://github.com/contentful/forma-36/commit/32cac8e8bdeedfe29b36bc6025eec11607c93da8) Thanks [@denkristoffer](https://github.com/denkristoffer)! - feat: Datepicker component

- Updated dependencies [[`32cac8e8`](https://github.com/contentful/forma-36/commit/32cac8e8bdeedfe29b36bc6025eec11607c93da8)]:
  - @contentful/f36-icon@4.10.5
  - @contentful/f36-core@4.10.5

## 4.10.4

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.10.4
  - @contentful/f36-core@4.10.4

## 4.10.3

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.10.3
  - @contentful/f36-core@4.10.3

## 4.10.2

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.10.2
  - @contentful/f36-core@4.10.2

## 4.10.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.10.1
  - @contentful/f36-core@4.10.1

## 4.10.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.10.0
  - @contentful/f36-core@4.10.0

## 4.9.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.9.0
  - @contentful/f36-core@4.9.0

## 4.8.2

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.8.2
  - @contentful/f36-core@4.8.2

## 4.8.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.8.1
  - @contentful/f36-core@4.8.1

## 4.8.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.8.0
  - @contentful/f36-core@4.8.0

## 4.7.0

### Patch Changes

- Updated dependencies [[`e50b8945`](https://github.com/contentful/forma-36/commit/e50b8945faef7323187e1bd9a2a9cbfcbae2e405)]:
  - @contentful/f36-core@4.7.0
  - @contentful/f36-icon@4.7.0

## 4.6.2

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.6.2
  - @contentful/f36-core@4.6.2

## 4.6.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.6.1
  - @contentful/f36-core@4.6.1

## 4.6.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.6.0
  - @contentful/f36-core@4.6.0

## 4.5.0

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.5.0
  - @contentful/f36-core@4.5.0

## 4.4.1

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.4.1
  - @contentful/f36-core@4.4.1

## 4.4.0

### Patch Changes

- Updated dependencies [[`a9459709`](https://github.com/contentful/forma-36/commit/a945970959bc7e9478bec822bb775a513c6aa0fe)]:
  - @contentful/f36-core@4.4.0
  - @contentful/f36-icon@4.4.0

## 4.3.11

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.3.11
  - @contentful/f36-core@4.3.11

## 4.3.10

### Patch Changes

- Updated dependencies []:
  - @contentful/f36-icon@4.3.10
  - @contentful/f36-core@4.3.10

## 4.3.9

### Patch Changes

- [#1953](https://github.com/contentful/forma-36/pull/1953) [`df985087`](https://github.com/contentful/forma-36/commit/df98508780f63754e29df09d4f6239bdc84982a8) Thanks [@massao](https://github.com/massao)! - bump packages versions to have consistent versioning

- Updated dependencies [[`df985087`](https://github.com/contentful/forma-36/commit/df98508780f63754e29df09d4f6239bdc84982a8)]:
  - @contentful/f36-icon@4.3.9
  - @contentful/f36-core@4.3.9

## [4.1.5](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.1.4...@contentful/f36-icons@4.1.5) (2022-03-14)

**Note:** Version bump only for package @contentful/f36-icons

## [4.1.4](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.1.3...@contentful/f36-icons@4.1.4) (2022-03-10)

**Note:** Version bump only for package @contentful/f36-icons

## [4.1.3](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.1.2...@contentful/f36-icons@4.1.3) (2022-03-09)

**Note:** Version bump only for package @contentful/f36-icons

## [4.1.2](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.1.1...@contentful/f36-icons@4.1.2) (2022-03-03)

### Bug Fixes

- migrate links from master to main ([#1923](https://github.com/contentful/forma-36/issues/1923)) ([607301d](https://github.com/contentful/forma-36/commit/607301d57a2e83190d2aa298120ddb8493e8c429))

## [4.1.1](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.1.0...@contentful/f36-icons@4.1.1) (2022-02-17)

**Note:** Version bump only for package @contentful/f36-icons

# [4.1.0](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.0.4...@contentful/f36-icons@4.1.0) (2022-02-09)

### Features

- add new icon - arrow forward ([#1867](https://github.com/contentful/forma-36/issues/1867)) ([cc36893](https://github.com/contentful/forma-36/commit/cc368932b8271f7fefcd194cf35d88f7fae90383))

## [4.0.4](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.0.3...@contentful/f36-icons@4.0.4) (2022-02-07)

### Bug Fixes

- add preview off icon ([#1866](https://github.com/contentful/forma-36/issues/1866)) ([d88a518](https://github.com/contentful/forma-36/commit/d88a518a44e5e1a10fe3a695e4e0824e472632dc))

## [4.0.3](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.0.2...@contentful/f36-icons@4.0.3) (2022-01-31)

**Note:** Version bump only for package @contentful/f36-icons

## [4.0.2](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.0.1...@contentful/f36-icons@4.0.2) (2022-01-31)

**Note:** Version bump only for package @contentful/f36-icons

## [4.0.1](https://github.com/contentful/forma-36/compare/@contentful/f36-icons@4.0.0...@contentful/f36-icons@4.0.1) (2022-01-11)

**Note:** Version bump only for package @contentful/f36-icons
