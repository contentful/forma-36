<h1><img src="./forma-icon.svg" height="24"> Forma 36 - The Contentful Design System</h1>

![build status](https://travis-ci.com/contentful/forma-36.svg?token=9ZgfZHVDFAy8E7oFpbGM&branch=master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This is the monorepo for the Forma 36 design system by [Contentful](https://www.contentful.com).

<!-- TOC -->

- [Packages](#packages)
  - [Forma 36 React Components](./packages/forma-36-react-components/README.md)
  - [Forma 36 FCSS](./packages/forma-36-fcss/README.md)
  - [Forma 36 Tokens](./packages/forma-36-tokens/README.md)
  - [Forma 36 Website (WIP)](./packages/forma-36-website/README.md)
- [Adding packages](#adding-packages)
- [Development](#development)
- [Commits & releases](#commits--releases)
- [Testing changes locally](#testing-changes-locally)
- [Get Involved](#get-involved)
- [Reach out to us](#reach-out-to-us)
- [License](#license)
- [Code of conduct](#code-of-conduct)
  <!-- /TOC -->

## Packages

Forma 36 is a monorepo maintained using Lerna. Get started with Lerna by following this link: https://github.com/lerna/lerna

The monorepo is currently structured into the following packages:

- [`forma-36-website`](https://github.com/contentful/forma-36/tree/master/packages/forma-36-website)
  - This package includes the design system documentation which offers guidelines, best practices and examples.
    See the README [here](./packages/forma-36-website/README.md)
- [`forma-36-react-components`](https://github.com/contentful/forma-36/tree/master/packages/forma-36-react-components)
  - A React component library built with Storybook. See the README [here](./packages/forma-36-react-components/README.md)
- [`forma-36-fcss`](https://github.com/contentful/forma-36/tree/master/packages/forma-36-fcss)
  - CSS utility classes for spacing, typography, colors and transitions. See the README [here](./packages/forma-36-fcss/README.md)
- [`forma-36-tokens`](https://github.com/contentful/forma-36/tree/master/packages/forma-36-tokens)
  - Forma 36 design tokens. See the README [here](./packages/forma-36-tokens/README.md)

### Adding packages

To add another package create a new directory in the packages folder. Make sure that the package name is prefixed with forma-36 (e.g. forma-36-css-utilities). Since we are using Lerna all package scripts are available from the root by running lerna run {script_name}

## Development

For local development run `yarn` from the root of this repo to install all dependencies and build all packages.

## Commits & releases

Use `yarn commit`. This uses the [Commitzen](https://github.com/commitizen/cz-cli) CLI to create a conventional commit message based on your changes. CI is setup to release all new commits on the master branch.

## Testing changes locally

You can test changes to a package of this monorepo in your own project locally by taking the following steps:

1. Run `yarn build` in the desired package's directory to ensure your latest changes have been built
2. Run `yarn link` in the desired package's directory
3. Change to your local project's directory and run `yarn link NAME_OF_PACKAGE` to link to the local version of the package (e.g. `yarn link @contentful/forma-36-react-components`)

## Get involved

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=31557600)](http://makeapullrequest.com)

We appreciate any help on our repositories. For more details about how to
contribute to a package, see the README of the corresponding package.

## Reach out to us

### Maintainers

- [Johannes Bugiel](https://github.com/wichniowski)
- [Mike Mitchell](https://github.com/m10l)

You can also reach out using the Contentful community Slack. We've setup a channel [#forma36](https://contentful-community.slack.com/messages/CFXGTMB98) in which we announce latest changes and updates.

### You found a bug or want to propose a feature?

- File an issue here on GitHub: [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/contentful/forma-36/issues/new). Make sure to remove any credential from your code before sharing it.

## License

This repository is published under the [MIT](LICENSE.md) license.

## Code of Conduct

We want to provide a safe, inclusive, welcoming, and harassment-free space and experience for all participants, regardless of gender identity and expression, sexual orientation, disability, physical appearance, socioeconomic status, body size, ethnicity, nationality, level of experience, age, religion (or lack thereof), or other identity markers.

[Read our full Code of Conduct](https://github.com/contentful-developer-relations/community-code-of-conduct).
