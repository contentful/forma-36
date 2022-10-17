# Forma 36 Tokens

The design tokens for Forma 36, available as JSON, CSS, and SCSS.

These tokens are a key part of our design system and power [`f36-components`](https://github.com/contentful/forma-36/tree/main/packages/components).

## Library usage

### Install the package to your project

```bash
yarn add @contentful/f36-tokens
```

Or for NPM

```bash
npm i @contentful/f36-tokens
```

### Import into your project

#### JS

```js
import F36Tokens from '@contentful/f36-tokens';
```

#### CSS

```css
@import '@contentful/f36-tokens/dist/css/index.css';
```

#### JSON

```js
import tokens from '@contentful/f36-tokens/dist/json/transitions/transition-easings';
```

## Development

For local development run `npm i` from the root of this repo to install all dependencies and run `npm run-script build` from the root of this repo to build all packages.

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
npm run-script build
```

Running the build script will populate the `dist` directory with separately built JSON, CSS and JS file with TS typings.

This script populates the dist folder with all tokens as JSON, CSS and JS. For CSS builds, an index file is included for ease of importing.
