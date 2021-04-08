# Forma 36 React Components

A React component library for [Forma 36](https://f36.contentful.com/) design system created by [Contentful](https://www.contentful.com) and powered by [Storybook](https://storybook.js.org/).
You can access a Storybook website with the latest changes of the library [here](https://f36-storybook.contentful.com/)

## Table of contents

<!-- TOC -->

- [Table of contents](#table-of-contents)
- [Installing package](#installing-package)
- [Usage](#usage)
  - [Import desired component into your project](#import-desired-component-into-your-project)
  - [Import styles](#import-styles)
- [Development](#development)
  - [Storybook](#storybook)
  - [Example component directory structure](#example-component-directory-structure)
  - [Styling](#styling)
  - [Component principles](#component-principles)
  - [Adding documentation for component](#adding-documentation-for-component)
- [Testing](#testing)
  - [Run tests](#run-tests)
- [Building](#building)
  - [Create a build of the library](#create-a-build-of-the-library)
- [Commits](#commits)
- [Alpha components](#alpha-components)
<!-- /TOC -->

## Installing package

```bash
yarn add @contentful/forma-36-react-components
```

Or

```bash
npm install @contentful/forma-36-react-components
```

## Usage

### Import desired component into your project

```js
import { Input } from '@contentful/forma-36-react-components';
```

> For components in alpha stage, check the instructions in [Alpha components](#alpha-components)

### Import styles

```js
import '@contentful/forma-36-react-components/dist/styles.css';
```

## Development

For local development, in the root of the repo run `yarn` to install all dependencies and then `yarn build` to build all packages.
This package depends on several other Forma 36 packages so you will need to build all of them.

### Storybook

We use [Storybook](https://storybook.js.org/) to create a development environment for our component library. To start it locally run:

```bash
yarn storybook
```

To start working on your components in Storybook, you will need to create stories for them.
Look in the `src/components` directory for any `.stories.js` file. Storybook will automatically include any files with the `.stories.js` file extension.

Storybook is configured at [`scripts/.storybook/main.js`](./scripts/.storybook/main.js).

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

> If you use `yarn generate` in the root of the repo, this structure will be create automatically for you

### Styling

We are using [postcss-preset-env](https://preset-env.cssdb.org/) for styling our components. Using postcss-preset-env allows us to use the latest CSS syntax without having to wait for browser support. `tools/postcss.config.js` is used for adding plugins and configuration.

### Component principles

We follow a number of principles when creating our components:

1.  **A component is responsible for only its internal spacing**

We follow the principle that a component should only be responsible for its own internal spacing - never external spacing. This means that we're flexible in where our components can be used without having to override margins.

2.  **Use descriptive PropTypes**

We recommend the following naming convention for PropTypes to make them as clear as possible:

- Number - use a prefix or suffix to imply that the prop accepts a number. E.g. `numItems`, `itemCount`, `itemIndex`
- Boolean - use the prefix 'is'/'can'/'has'. E.g. `isVisible`, `canExpand`, `hasImage`
- Array - use a plural noun. E.g. `items`
- Object - use a noun. E.g. `item`
- Node - use the suffix 'Node'. E.g. `containerNode`
- Element - use the suffix 'Element'. E.g. `triggerElement`
- Event handler functions - use the prefix 'on'. E.g. `onOpen`, `onClick`

### Adding documentation for component

We would like to make sure that every component contains a README file with recommendations and guidelines. Using `yarn add-readme` it will generate a template README file for you for the component that you specify. Follow steps in the CLI to create new README.
Make sure that your documentation for the component contains following parts:

1. A short summary of the component.
2. Variations/types - try to provide the overview of the components variants.
3. Example of usage - try to add couple of examples, that includes import
4. Content recommendations - notes about best practices when it comes to the content used in the component, like message or title
5. Best practices - try to describe in couple of points when to use the component
6. Accessibility - If possible, we strongly recommend providing accessibility guidelines.

## Testing

We are using [Jest](https://facebook.github.io/jest/) and [Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to test our components.

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

## Alpha components

We provide a number of alpha components which are unsupported and subject to breaking changes without warning. In short - use alpha components at your own risk.

Alpha components are provided outside of the main component library bundle and can be used as follows:

```js
import { MyAlphaComponent } from '@contentful/forma-36-react-components/dist/alpha';
```
