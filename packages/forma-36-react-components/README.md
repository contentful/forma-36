# Forma 36 React Components

A React component library for [Forma 36](https://f36.contentful.com/) design system created by [Contentful](https://www.contentful.com) and powered by [Storybook](https://storybook.js.org/) and (Next.js)[https://nextjs.org/].

## Table of contents

<!-- TOC -->

- [Forma 36 React Components](#f36-components)
  - [Table of contents](#table-of-contents)
  - [Installing package](#installing-package)
  - [Usage](#usage)
    - [Import desired component into your project](#import-desired-component-into-your-project)
    - [Import styles](#import-styles)
  - [Development](#development)
    - [Storybook](#storybook)
    - [Example component directory structure](#example-component-directory-structure)
    - [Code Style Guide](#code-style-guide)
    - [Component principles](#component-principles)
    - [Adding documentation for component](#adding-documentation-for-component)
  - [Testing](#testing)
    - [Run tests](#run-tests)
  - [Building](#building)
    - [Create a build of the library](#create-a-build-of-the-library)
  - [Commits](#commits)
  <!-- /TOC -->

## Installing package

```bash
yarn add @contentful/f36-components
```

Or

```bash
npm install @contentful/f36-components
```

## Usage

### Import desired component into your project

```js
import { Button } from '@contentful/f36-components';
```

## Development

For local development, in the root of the repo run `yarn` to install all dependencies and then `yarn build` to build all packages.
This package depends on several other Forma 36 packages so you will need to build all of them.

### Storybook

We use [Storybook](https://storybook.js.org/) to create a development environment for our component library. To start it locally run:

```bash
yarn storybook
```

When creating new component, before you start, please have a look at our [contribution model for Forma 36](https://f36.contentful.com/introduction/contributing).

### Example component directory structure

A component's directory should resemble the following:

```
/my-component
  /examples
  /src
    index.ts // A file for exporting your component
    MyComponent.tsx  // Your React component
    MyComponent.test.tsx // Component tests
    MyComponent.styles.ts // Component styles
  /stories
    # stories for storybook of each component inside the package
  README.mdx
  package.json
```

For more detailes you can have a look in document that describes [folder structure in details](https://github.com/contentful/forma-36/blob/main/docs/folder-structure.md).

> If you use `yarn generate` in the root of the repo, this structure will be created automatically for you

### Code Style Guide

[Our code style guide](https://github.com/contentful/forma-36/blob/main/docs/code-style-guide.md)

### Component principles

We follow a number of principles when creating our components:

1.  **A component is responsible for only its internal spacing**

Component should only be responsible for its own internal spacing - never external spacing. This means that we're flexible in where our components can be used without having to override margins.
The only outlier from this rule are [typography components](https://f36.contentful.com/components/display-text) - they can manage their own margins. To handle margins and layout you can use our core components, like:

- [Box](https://f36.contentful.com/components/box)
- [Flex](https://f36.contentful.com/components/flex)
- [Grid](https://f36.contentful.com/components/grid)
- [Stack](https://f36.contentful.com/components/stack)

### Adding documentation for component

We would like to make sure that every component contains a README file with recommendations and guidelines.
Make sure that your documentation for the component contains following parts:

1. A short summary of the component.
2. Import - provide example how to import component.
3. Examples - try to add couple of examples, both basic and more advanced, where component is used in the context with other components.
4. Props (API reference) - Overview of properties
5. Content guideliness - try to describe in best practices around content for your component
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
