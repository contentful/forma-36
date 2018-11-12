# UI Component Library

A React component library for Contentful, powered by [Storybook](https://storybook.js.org/).

## Table of contents

- [Library Usage](#library-usage)
  - [Install package from NPM](#install-package-from-npm)
  - [Import desired component into your project](#import-desired-component-into-your-project)
  - [Import styles](#import-styles)
- [Development](#development)
  - [Switch to the correct version of Node (using NVM)](#switch-to-the-correct-version-of-node-using-nvm)
  - [Install dependencies](#install-dependencies)
  - [Run Storybook](#run-storybook)
  - [Example component directory structure](#example-component-directory-structure)
  - [Styling](#styling)
  - [Adding a new component](#adding-a-new-component)
  - [Adding new Storybook documentation](#adding-new-storybook-documentation)
- [Testing](#testing)
  - [Run tests](#run-tests)
- [Building](#building)
  - [Create a build of the library](#create-a-build-of-the-library)
- [Commits](#commits)
- [PropTypes](#proptypes)

## Library Usage

### Install package from NPM

```bash
yarn add @contentful/ui-component-library
```

Or for NPM

```bash
npm i @contentful/ui-component-library
```

### Import desired component into your project

```js
import { Input } from '@contentful/ui-component-library';
```

### Import styles

```js
import '@contentful/ui-component-library/dist/styles.css';
```

## Development

### Switch to the correct version of Node (using NVM)

```bash
nvm use
```

### Install dependencies

```bash
yarn
```

or

```bash
npm i
```

### Run Storybook

[Storybook](https://storybook.js.org/) is a UI development environment we are using to power our component library. Using Storybook allows us to work on components in isolation.

```bash
yarn start
```

Using Storybook requires you to wrap your component in a story. Look in the `src/components` directory for an example `.stories.js` file. Storybook has been configured to automatically include any files with the `.stories.js` file extension.

Storybook is setup using its own Webpack configuration file located at [`tools/.storybook/webpack.config.js`](./tools/.storybook/webpack.config.js).

### Example component directory structure

A component's directory should resemble the following:

```
YourComponent
├── index.js                 // A file for exporting your component
├── YourComponent.js         // Your React component
├── YourComponent.css        // Component styles
├── YourComponent.stories.js // Storybook for the component
└── YourComponent.test.js.   // Component tests
```

### Styling

We are using [postcss-preset-env](https://preset-env.cssdb.org/) for styling our components. Using postcss-preset-env allows us to use the latest CSS syntax without having to wait for browser support. `tools/postcss.config.js` is used for adding plugins and configuration.

### Adding a new component

You can use [Plop](https://plopjs.com/) to scaffold new components. Run `yarn add-component` and follow the steps in the CLI to create a component. Using your input here, Plop will generate the relevant files and add the relevant imports/exports to the main `src/index.js` file required to make the component available when publishing the library.

Here is the example output of running the `yarn add-component` command:

```
? What is the name of your component? button
[SUCCESS] add /src/components/Button/Button.js
[SUCCESS] add /src/components/Button/Button.css
[SUCCESS] add /src/components/Button/Button.test.js
[SUCCESS] add /src/components/Button/Button.stories.js
[SUCCESS] modify /src/index.js
[SUCCESS] modify /src/index.js
```

### Adding new Storybook documentation

You can also use [Plop](https://plopjs.com/) to scaffold documentation sections in Storybook. Run `yarn add-documentation` and follow the steps in the CLI to create new documentation. Using your input here, Plop will generate the relevant files required to make the documentation show in Storybook.

Here is the example output of running the `yarn add-documentation` command:

```
? What is the title of your documentation? general
[SUCCESS] add /.storybook/docs/General/General.md
[SUCCESS] add /.storybook/docs/General/General.stories.js
```

## Testing

We are using [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/) to test our components.

Tests are kept next to their components and use the `.test.js` file extension.

### Run tests

```bash
yarn test
```

It is recommended to run tests in development with the optional `--watch` flag.

```bash
yarn test --watch
```

## Building

We are using a combination of [Webpack](https://webpack.js.org/) and [Babel](https://babeljs.io/) to create builds of our component library. We use Webpack with the `tools/webpack.production.config.js` config to build a stylesheet including all CSS used for our components using the ExtractTextPlugin. Babel is used for transpiling our React components into CommonJS modules. Babel and Webpack both output the build to the `dist` directory.

### Create a build of the library

```bash
yarn build
```

## Commits

This project uses the [Angular JS Commit Message Conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit), via semantic-release. See the semantic-release [Default Commit Message Format](https://github.com/semantic-release/semantic-release#default-commit-message-format) section for more details.

You can commit the changes by running

```bash
yarn commit
```

## PropTypes

We recommend the following naming convention for PropTypes:

- Array - use plural nouns. e.g. `items`
- Number - use a prefix or suffix to imply that the prop accepts a number. e.g. `numItems`, `itemCount`, `itemIndex`
- Boolean - use the prefix 'is'/'can'/'has'. e.g. `isVisible`, `canExpand`, `hasImage`
- Object - use a noun. e.g. `item`
- Node - use the prefix 'node'. e.g. `containerNode`
- Element - use the prefix 'element'. e.g. `triggerElement`
- Event handler functions - use the prefix 'on'. e.g. `onOpen`, `onClick`
