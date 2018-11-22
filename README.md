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
- [Contribution Guidelines](#contribution-guidelines)
  <!-- /TOC -->

## Packages

Forma 36 is a monorepo maintained using Lerna. Get started with Lerna by following this link: https://github.com/lerna/lerna

The monorepo is currently structured into the following packages:

```
packages
├── forma-36-website
└── forma-36-react-components
```

### Forma 36 Website (WIP)

This package includes the design system documentation which offers guidelines, best practices and examples.
See the README [here](./packages/forma-36-website/README.md)

### Forma 36 React Components

A React component library built with Storybook. See the README [here](./packages/forma-36-react-components/README.md)

### Adding packages

To add another package create a new directory in the packages folder. Make sure that the package name is prefixed with forma-36 (e.g. forma-36-css-utilities). Since we are using Lerna all package scripts are available from the root by running lerna run {script_name}

## Commiting changes & releasing a new Forma 36 version

Commit your changes using yarn commit (semantic commit message). Lerna will keep track of which packages have changed. It is set up in independent mode so you're able to release independent versions of the packages. We use semantic release which will generate the next version number and release notes. Dispatch a new version by running yarn semantic-release

_NOTE: It is important that every new package includes semantic-release and semantic-release-monorepo in the dev-dependency list so that semantic release will work from the root of the monorepo._

## Contribution Guidelines

Every package contains a readme file covering contribution guidelines and best practices.

- [Website Readme](./packages/forma-36-website/README.md)
- [React Component Library Readme](./packages/forma-36-react-components/README.md)
