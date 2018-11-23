<img src="./forma-icon.png" width="150">

# Forma 36 Design System by Contentful

![build status](https://travis-ci.com/contentful/forma-36.svg?token=9ZgfZHVDFAy8E7oFpbGM&branch=master)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This is the monorepo for the Forma 36 design system by Contentful.

<!-- TOC -->

- [Packages](#packages)
  - [Forma 36 Website (WIP)](#forma-36-website)
    - [Website Readme](./packages/forma-36-website/README.md)
  - [Forma 36 React Components](#forma-36-react-components)
    - [React Component Library Readme](./packages/forma-36-react-components/README.md)
  - [Adding packages](#adding-packages)
- [Commiting changes & releasing a new version](#commiting-changes-&-releasing-a-new-forma-36-version)
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
- [`forma-36-react-components`](https://github.com/contentful/forma-36/tree/master/packages/form-36-react-components)
  - A React component library built with Storybook. See the README [here](./packages/forma-36-react-components/README.md)

### Adding packages

To add another package create a new directory in the packages folder. Make sure that the package name is prefixed with forma-36 (e.g. forma-36-css-utilities). Since we are using Lerna all package scripts are available from the root by running lerna run {script_name}

## Commiting changes & releasing a new Forma 36 version

Commit your changes using yarn commit (semantic commit message). Lerna will keep track of which packages have changed. It is set up in independent mode so you're able to release independent versions of the packages. We use semantic release which will generate the next version number and release notes. Dispatch a new version by running yarn semantic-release

_NOTE: It is important that every new package includes semantic-release and semantic-release-monorepo in the dev-dependency list so that semantic release will work from the root of the monorepo._

## Get involved

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?maxAge=31557600)](http://makeapullrequest.com)

We appreciate any help on our repositories. For more details about how to
contribute to a package, see the README of the corresponding package.

## Reach out to us

### You have questions about how to use this library?

- Reach out to our community forum: [![Contentful Community Forum](https://img.shields.io/badge/-Join%20Community%20Forum-3AB2E6.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1OSI+CiAgPHBhdGggZmlsbD0iI0Y4RTQxOCIgZD0iTTE4IDQxYTE2IDE2IDAgMCAxIDAtMjMgNiA2IDAgMCAwLTktOSAyOSAyOSAwIDAgMCAwIDQxIDYgNiAwIDEgMCA5LTkiIG1hc2s9InVybCgjYikiLz4KICA8cGF0aCBmaWxsPSIjNTZBRUQyIiBkPSJNMTggMThhMTYgMTYgMCAwIDEgMjMgMCA2IDYgMCAxIDAgOS05QTI5IDI5IDAgMCAwIDkgOWE2IDYgMCAwIDAgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0UwNTM0RSIgZD0iTTQxIDQxYTE2IDE2IDAgMCAxLTIzIDAgNiA2IDAgMSAwLTkgOSAyOSAyOSAwIDAgMCA0MSAwIDYgNiAwIDAgMC05LTkiLz4KICA8cGF0aCBmaWxsPSIjMUQ3OEE0IiBkPSJNMTggMThhNiA2IDAgMSAxLTktOSA2IDYgMCAwIDEgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0JFNDMzQiIgZD0iTTE4IDUwYTYgNiAwIDEgMS05LTkgNiA2IDAgMCAxIDkgOSIvPgo8L3N2Zz4K&maxAge=31557600)](https://support.contentful.com/)
- Jump into our community slack channel: [![Contentful Community Slack](https://img.shields.io/badge/-Join%20Community%20Slack-2AB27B.svg?logo=slack&maxAge=31557600)](https://www.contentful.com/slack/)

### You found a bug or want to propose a feature?

- File an issue here on GitHub: [![File an issue](https://img.shields.io/badge/-Create%20Issue-6cc644.svg?logo=github&maxAge=31557600)](https://github.com/contentful/forma-36/issues/new). Make sure to remove any credential from your code before sharing it.

### You need to share confidential information or have other questions?

- File a support ticket at our Contentful Customer Support: [![File support ticket](https://img.shields.io/badge/-Submit%20Support%20Ticket-3AB2E6.svg?logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MiA1OSI+CiAgPHBhdGggZmlsbD0iI0Y4RTQxOCIgZD0iTTE4IDQxYTE2IDE2IDAgMCAxIDAtMjMgNiA2IDAgMCAwLTktOSAyOSAyOSAwIDAgMCAwIDQxIDYgNiAwIDEgMCA5LTkiIG1hc2s9InVybCgjYikiLz4KICA8cGF0aCBmaWxsPSIjNTZBRUQyIiBkPSJNMTggMThhMTYgMTYgMCAwIDEgMjMgMCA2IDYgMCAxIDAgOS05QTI5IDI5IDAgMCAwIDkgOWE2IDYgMCAwIDAgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0UwNTM0RSIgZD0iTTQxIDQxYTE2IDE2IDAgMCAxLTIzIDAgNiA2IDAgMSAwLTkgOSAyOSAyOSAwIDAgMCA0MSAwIDYgNiAwIDAgMC05LTkiLz4KICA8cGF0aCBmaWxsPSIjMUQ3OEE0IiBkPSJNMTggMThhNiA2IDAgMSAxLTktOSA2IDYgMCAwIDEgOSA5Ii8+CiAgPHBhdGggZmlsbD0iI0JFNDMzQiIgZD0iTTE4IDUwYTYgNiAwIDEgMS05LTkgNiA2IDAgMCAxIDkgOSIvPgo8L3N2Zz4K&maxAge=31557600)](https://www.contentful.com/support/)

## License

This repository is published under the [MIT](LICENSE.md) license.

## Code of Conduct

We want to provide a safe, inclusive, welcoming, and harassment-free space and experience for all participants, regardless of gender identity and expression, sexual orientation, disability, physical appearance, socioeconomic status, body size, ethnicity, nationality, level of experience, age, religion (or lack thereof), or other identity markers.

[Read our full Code of Conduct](https://github.com/contentful-developer-relations/community-code-of-conduct).
