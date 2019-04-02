# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.10.5...@contentful/forma-36-react-components@3.0.0) (2019-04-02)


### Bug Fixes

* Add missing testId props ([ec08098](https://github.com/contentful/forma-36/commit/ec08098))
* Fixed labelText being optional property ([a5f6489](https://github.com/contentful/forma-36/commit/a5f6489))
* **EntryCard:** status prop is optional ([a1624f3](https://github.com/contentful/forma-36/commit/a1624f3))
* **ModalConfirm:** Hide confirm/cancel buttons ([9340659](https://github.com/contentful/forma-36/commit/9340659))
* **Option:** add testId property ([f66fb5c](https://github.com/contentful/forma-36/commit/f66fb5c))


### Code Refactoring

* **InlineReferenceCard:** Rename component to InlineEntryCard ([faa3ad8](https://github.com/contentful/forma-36/commit/faa3ad8))
* **ReferenceCard:** Rename ReferenceCard to EntryCard ([42497e1](https://github.com/contentful/forma-36/commit/42497e1))


### Features

* Add possibility to override Modal.Header and Modal.Content props ([be7edcd](https://github.com/contentful/forma-36/commit/be7edcd))
* Removed statically exported constants in Note and Modal components ([b0790e0](https://github.com/contentful/forma-36/commit/b0790e0))
* Rename extraClassNames to className for all components ([c91a1b1](https://github.com/contentful/forma-36/commit/c91a1b1))
* **CardActions:** Add CardActions component ([1ac4f97](https://github.com/contentful/forma-36/commit/1ac4f97))
* **DropdownListItem:** Add href prop ([ea698f9](https://github.com/contentful/forma-36/commit/ea698f9))
* **ReferenceCard:** Use dropdown for card actions ([6b6717b](https://github.com/contentful/forma-36/commit/6b6717b))


### BREAKING CHANGES

* **InlineReferenceCard:** InlineReferenceCard has now been renamed to InlineEntryCard
* **ReferenceCard:** ReferenceCard has now been renamed to EntryCard
* **ReferenceCard:** actions are now passed to the ReferenceCard component by passing a DropdownList
with DropdownListItems to the component via the dropdownListElements prop. The dropdownListItemNodes prop has been renamed to dropdownListElements - this accepts lists, not list items, allowing consumers to build dropdown with multiple lists
* Removed isNotWrapped property. Use modalHeaderProps instead.
* Modal.Sizes, Modal.Positions and Note.Type are not longer exported





## [2.10.5](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.10.4...@contentful/forma-36-react-components@2.10.5) (2019-04-02)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.10.4](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.10.3...@contentful/forma-36-react-components@2.10.4) (2019-03-27)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.10.3](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.10.2...@contentful/forma-36-react-components@2.10.3) (2019-03-25)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.10.2](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.10.1...@contentful/forma-36-react-components@2.10.2) (2019-03-25)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.10.1](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.10.0...@contentful/forma-36-react-components@2.10.1) (2019-03-18)


### Bug Fixes

* **Notification:** Fixes non-closable notifications ([a5a1b4e](https://github.com/contentful/forma-36/commit/a5a1b4e))





# [2.10.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.14...@contentful/forma-36-react-components@2.10.0) (2019-03-18)


### Bug Fixes

* **Icon:** Add ‘warning’ type to props ([befef0b](https://github.com/contentful/forma-36/commit/befef0b))


### Features

* Convert all components to strict Typescript ([6a20853](https://github.com/contentful/forma-36/commit/6a20853))





## [2.9.14](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.13...@contentful/forma-36-react-components@2.9.14) (2019-03-15)


### Bug Fixes

* **AssetCard:** Close dropdown after onClick ([e885254](https://github.com/contentful/forma-36/commit/e885254))





## [2.9.13](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.12...@contentful/forma-36-react-components@2.9.13) (2019-03-14)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.12](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.11...@contentful/forma-36-react-components@2.9.12) (2019-03-13)


### Bug Fixes

* **Modal:** Add option for modal title wrapping ([9e52cdc](https://github.com/contentful/forma-36/commit/9e52cdc))
* **ModalHeader:** Create TS definition for CSS ([f6f0731](https://github.com/contentful/forma-36/commit/f6f0731))





## [2.9.11](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.10...@contentful/forma-36-react-components@2.9.11) (2019-03-13)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.10](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.9...@contentful/forma-36-react-components@2.9.10) (2019-03-12)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.9](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.8...@contentful/forma-36-react-components@2.9.9) (2019-03-12)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.8](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.7...@contentful/forma-36-react-components@2.9.8) (2019-03-07)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.7](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.6...@contentful/forma-36-react-components@2.9.7) (2019-03-07)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.6](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.5...@contentful/forma-36-react-components@2.9.6) (2019-03-06)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.5](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.4...@contentful/forma-36-react-components@2.9.5) (2019-03-05)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.9.4](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.3...@contentful/forma-36-react-components@2.9.4) (2019-03-05)


### Bug Fixes

* **Tooltip:** fixed problem with SSR and Tooltip component ([170fdb7](https://github.com/contentful/forma-36/commit/170fdb7))
* Fixed styles tree-shaking problem in Webpack 4 ([97b54ff](https://github.com/contentful/forma-36/commit/97b54ff))





## [2.9.3](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.2...@contentful/forma-36-react-components@2.9.3) (2019-03-04)


### Bug Fixes

* **imports:** Fixed incorrect exports for esm build ([8d07e67](https://github.com/contentful/forma-36/commit/8d07e67)), closes [#117](https://github.com/contentful/forma-36/issues/117)





## [2.9.2](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.1...@contentful/forma-36-react-components@2.9.2) (2019-03-02)


### Bug Fixes

* Add missing aria attribute to ToggleButton ([67a671c](https://github.com/contentful/forma-36/commit/67a671c))





## [2.9.1](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.9.0...@contentful/forma-36-react-components@2.9.1) (2019-03-01)

**Note:** Version bump only for package @contentful/forma-36-react-components





# [2.9.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.8.3...@contentful/forma-36-react-components@2.9.0) (2019-03-01)


### Features

* Added esm build for tree-shaking imports ([a20572b](https://github.com/contentful/forma-36/commit/a20572b))





## [2.8.3](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.8.2...@contentful/forma-36-react-components@2.8.3) (2019-02-28)


### Bug Fixes

* **ExtendDependency:** Bump version to 3.0.2 ([24efe0e](https://github.com/contentful/forma-36/commit/24efe0e))





## [2.8.2](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.8.1...@contentful/forma-36-react-components@2.8.2) (2019-02-28)


### Bug Fixes

* **tokens:** Fixed missing transition token ([95002e7](https://github.com/contentful/forma-36/commit/95002e7))





## [2.8.1](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.8.0...@contentful/forma-36-react-components@2.8.1) (2019-02-28)


### Bug Fixes

* **Dropdown:** Marking optional props ([6cb139c](https://github.com/contentful/forma-36/commit/6cb139c))
* **Dropdown:** Optimize event listener binding ([63c05c7](https://github.com/contentful/forma-36/commit/63c05c7))





# [2.8.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.7.0...@contentful/forma-36-react-components@2.8.0) (2019-02-28)


### Features

* **Notification:** Added "warning" intent to Notifications system ([5c9b355](https://github.com/contentful/forma-36/commit/5c9b355))





# [2.7.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.6.2...@contentful/forma-36-react-components@2.7.0) (2019-02-26)


### Bug Fixes

* **Notification:** Fixed exception when showing notifications ([fb91b06](https://github.com/contentful/forma-36/commit/fb91b06))


### Features

* **Storybook:** Include FCSS styles in Storybook ([576fb02](https://github.com/contentful/forma-36/commit/576fb02))
* **TypographyContainer:** Add TypographyContainer ([e791e48](https://github.com/contentful/forma-36/commit/e791e48))





## [2.6.2](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.6.1...@contentful/forma-36-react-components@2.6.2) (2019-02-25)


### Bug Fixes

* **Tooltip:** Use position fixed for positioning of Tooltip ([a51523e](https://github.com/contentful/forma-36/commit/a51523e))





## [2.6.1](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.6.0...@contentful/forma-36-react-components@2.6.1) (2019-02-22)

**Note:** Version bump only for package @contentful/forma-36-react-components





# [2.6.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.5.0...@contentful/forma-36-react-components@2.6.0) (2019-02-22)


### Features

* **LineChart:** LineChart removed from Forma36 ([8e9b74c](https://github.com/contentful/forma-36/commit/8e9b74c))





# [2.5.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.4.1...@contentful/forma-36-react-components@2.5.0) (2019-02-20)


### Bug Fixes

* **eslint:** Ignore generated css.d.ts files ([923b040](https://github.com/contentful/forma-36/commit/923b040))
* **Prettier:** ignore css.d.ts files ([44200a2](https://github.com/contentful/forma-36/commit/44200a2))
* **Test:** Rename test ([f0b17f6](https://github.com/contentful/forma-36/commit/f0b17f6))
* **TextInput:** Fix broken tests ([e4fec29](https://github.com/contentful/forma-36/commit/e4fec29))
* **TextInput:** Show props in Storybook ([28d42a8](https://github.com/contentful/forma-36/commit/28d42a8))
* **TypeScript:** use actual TextInput types ([d0271e9](https://github.com/contentful/forma-36/commit/d0271e9))


### Features

* **TextInput:** Add inputRef property ([a85bd0b](https://github.com/contentful/forma-36/commit/a85bd0b))
* **TextInput:** Add inputRef property ([3145fc9](https://github.com/contentful/forma-36/commit/3145fc9))





## [2.4.1](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.4.0...@contentful/forma-36-react-components@2.4.1) (2019-02-19)


### Bug Fixes

* **Typings:** Fix index.d.ts exports ([38cc51b](https://github.com/contentful/forma-36/commit/38cc51b))





# [2.4.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.14...@contentful/forma-36-react-components@2.4.0) (2019-02-18)


### Features

* **Tabs:** Created Tabs component ([53789e6](https://github.com/contentful/forma-36/commit/53789e6))





## [2.3.14](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.13...@contentful/forma-36-react-components@2.3.14) (2019-02-18)


### Bug Fixes

* **Notification:** Fixed notification methods returning undefined ([c8630cc](https://github.com/contentful/forma-36/commit/c8630cc))





## [2.3.13](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.12...@contentful/forma-36-react-components@2.3.13) (2019-02-14)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.12](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.11...@contentful/forma-36-react-components@2.3.12) (2019-02-14)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.11](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.10...@contentful/forma-36-react-components@2.3.11) (2019-02-13)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.10](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.9...@contentful/forma-36-react-components@2.3.10) (2019-02-13)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.9](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.8...@contentful/forma-36-react-components@2.3.9) (2019-02-13)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.8](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.7...@contentful/forma-36-react-components@2.3.8) (2019-02-13)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.7](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.6...@contentful/forma-36-react-components@2.3.7) (2019-02-12)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.6](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.5...@contentful/forma-36-react-components@2.3.6) (2019-02-12)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.5](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.4...@contentful/forma-36-react-components@2.3.5) (2019-02-12)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.4](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.3...@contentful/forma-36-react-components@2.3.4) (2019-02-11)


### Bug Fixes

* **Select,Input:** Fixes a lack of background-color for Input and Select component ([#79](https://github.com/contentful/forma-36/issues/79)) ([6dc71e1](https://github.com/contentful/forma-36/commit/6dc71e1))





## [2.3.3](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.2...@contentful/forma-36-react-components@2.3.3) (2019-02-11)

**Note:** Version bump only for package @contentful/forma-36-react-components





## [2.3.2](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.1...@contentful/forma-36-react-components@2.3.2) (2019-02-08)


### Bug Fixes

* **Dependencies:** Generate new yarn.lock file ([3b9557d](https://github.com/contentful/forma-36/commit/3b9557d))
* **Note:** Fix note story to show withInfo button ([cf6f4ca](https://github.com/contentful/forma-36/commit/cf6f4ca))
* **Tokens:** Remove console.log ([a2b16de](https://github.com/contentful/forma-36/commit/a2b16de))
* **Yarn:** Fix yarn lockfile ([cfb3171](https://github.com/contentful/forma-36/commit/cfb3171))





## [2.3.1](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.3.0...@contentful/forma-36-react-components@2.3.1) (2019-02-06)


### Bug Fixes

* **Docs:** Removed mention of blueprints ([0c2b1f0](https://github.com/contentful/forma-36/commit/0c2b1f0))





# [2.3.0](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.2.1...@contentful/forma-36-react-components@2.3.0) (2019-02-04)


### Bug Fixes

* **Tokens:** Linting for Transition tokens ([7769803](https://github.com/contentful/forma-36/commit/7769803))
* **Tokens:** Remove unused packages ([40c3d31](https://github.com/contentful/forma-36/commit/40c3d31))


### Features

* **Tokens:** Use Tokens in  Storybook ([34097d9](https://github.com/contentful/forma-36/commit/34097d9))
* **Tokens:** Use Typography tokens in  Storybook ([0e5b979](https://github.com/contentful/forma-36/commit/0e5b979))





## [2.2.1](https://github.com/contentful/forma-36/compare/@contentful/forma-36-react-components@2.2.0...@contentful/forma-36-react-components@2.2.1) (2019-02-04)


### Bug Fixes

* **Dropdown Story:** Force reinitialization to apply dropdown position via knobs ([8dba738](https://github.com/contentful/forma-36/commit/8dba738))
