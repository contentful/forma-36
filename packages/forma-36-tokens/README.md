# Forma 36 Tokens

The design tokens for Forma 36, available as JSON, CSS, and SCSS.

These tokens are a key part of our design system and power both [`forma-36-react-components`](https://github.com/contentful/forma-36/tree/master/packages/form-36-react-components) and [`forma-36-fcss`](https://github.com/contentful/forma-36/tree/master/packages/form-36-fcss).

## Library usage

### Install the package to your project

```bash
yarn add @contentful/forma-36-tokens
```

Or for NPM

```bash
npm i @contentful/forma-36-tokens
```

### Import into your project

#### JS

```js
import F36Tokens from '@contentful/forma-36-tokens';
```

#### CSS

```css
@import '@contentful/forma-36-tokens/dist/css/index.css';
```

#### SCSS

```scss
@import '@contentful/forma-36-tokens/dist/scss/index.scss';
```

#### JSON

```js
import tokens from '@contentful/forma-36-tokens/dist/json/transitions/transition-easings';
```

## Development

For local development run `yarn` from the root of this repo to install all dependencies and build all packages.

All tokens are kept in the `src/tokens` directory and organised as so:

```
.
├── border-radius
│   ├── border-radius.js
├── box-shadows
│   ├── box-shadows.js
│   └── glows.js
├── colors
│   ├── colors-blue.js
│   ├── colors-contrast.js
│   ├── colors-coral.js
│   ├── colors-elements.js
│   ├── colors-green.js
│   ├── colors-ice.js
│   ├── colors-mint.js
│   ├── colors-orange.js
│   ├── colors-peach.js
│   ├── colors-red.js
│   ├── colors-semantic.js
│   ├── colors-text.js
│   └── colors-white.js
├── spacing.js
├── transitions
│   ├── transition-durations.js
│   └── transition-easings.js
├── typography
│   ├── font-base.js
│   ├── font-size.js
│   ├── font-stack.js
│   ├── font-weight.js
│   ├── letter-spacing.js
│   └── line-height.js
└── typography.js
```

### Creating a build

```bash
yarn build
```

Running the build script will populate the `dist` directory with separately built JSON, CSS, SCSS and JS file with TS typings.

This script populates the dist folder with all tokens as JSON, CSS, SCSS and JS. For CSS and SCSS builds, an index file is included for ease of importing.
