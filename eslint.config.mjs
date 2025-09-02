// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import * as emotion from '@emotion/eslint-plugin'
import {fixupPluginRules} from '@eslint/compat'
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [{
  ignores: [
    "node_modules/**",
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:you-dont-need-lodash-underscore/compatible',
  ],
  plugins: {
    '@emotion': fixupPluginRules(emotion),
  },
  env: {
    jest: true,
    browser: true,
    node: true,
  },
  settings: {
    'import/extensions': ['.js', '.ts', '.tsx'],
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': 'warn',
    'react/prop-types': 'off',
    'react/prefer-stateless-function': ['off', { ignorePureComponents: true }],
    'react/jsx-filename-extension': ['off', { extensions: ['.js', '.tsx'] }],
    'react/forbid-prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/sort-comp': 'off',
    'react/jsx-wrap-multilines': 'off',
    'function-paren-newline': 'off',
    'react/button-has-type': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-no-bind': ['error', { allowArrowFunctions: true }],
    'react/no-access-state-in-setstate': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-children-prop': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/no-for-in-array': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/no-empty-function': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'import/named': 'error',
    'import/no-default-export': 'error',
    'import/no-extraneous-dependencies': 'error',
    'react/jsx-handler-names': 'error',
    'rulesdir/emotion-in-function': 'error',
  },
  overrides: [
  // allow specific rules in example files so there are no eslint-disable comments in code playgrounds
  {
    files: ['**/examples/**/*'],
    rules: {
      'jsx-a11y/no-autofocus': 'off',
    },
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
      'import/no-default-export': 'off',
      'react/jsx-handler-names': 'off',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    env: {
      node: true,
      browser: true,
    },
  },
  {
    files: [
      '**/forma-36-react-components/tools/**/*',
      '**/packages/components/**/*',
      '**/packages/**/examples/**',
    ],
    rules: {
      'import/no-default-export': 'off',
    },
  },
  {
    // Overides estraneous-dependencies for places where it's expected.
    // e.g. Example files, test files, and codemod fixtures
    files: [
      '**/*.stories.*',
      '**/*.test.*',
      '**/examples/**',
      '**/packages/**/__testfixtures__/**',
    ],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    // Example files and codemods are allowed to log to console
    files: ['**/examples/**', '**/packages/forma-36-codemod/**/*'],
    rules: {
      'no-console': 'off',
    },
  },
],
}, ...storybook.configs["flat/recommended"]];

export default eslintConfig;
