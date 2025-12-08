// Flat config rewrite: remove legacy extends/env/overrides, explicitly compose plugin configs
import js from '@eslint/js';
import * as ts from 'typescript-eslint';
import storybook from 'eslint-plugin-storybook';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import jest from 'eslint-plugin-jest';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';
import * as emotion from '@emotion/eslint-plugin';
import { fixupPluginRules } from '@eslint/compat';

export default [
  {
    ignores: [
      'node_modules/**',
      '**/out/**',
      '**/dist-storybook/**',
      '**/dist/**',
      'dist/**',
      '**/esm/**',
      '**/build/**',
      '*.css.d.ts',
      'public/**',
      '.cache/**',
      'tsup.config.ts',
      '**/__testfixtures__',
      '**/.next/**',
      '**/.turbo/**',
      '**/chunks/**',
    ],
  },
  js.configs.recommended,
  ...ts.configs.recommended,
  ...storybook.configs['flat/recommended'],
  jsxA11y.flatConfigs.recommended,
  jest.configs['flat/recommended'],
  jest.configs['flat/style'],
  {
    plugins: {
      '@emotion': fixupPluginRules(emotion),
      react,
      'react-hooks': reactHooks,
      import: importPlugin,
      jest,
    },
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
    settings: {
      react: { version: 'detect' },
      'import/extensions': ['.js', '.ts', '.tsx'],
    },
    rules: {
      'no-console': 'warn',
      'react/prop-types': 'off',
      'react/prefer-stateless-function': [
        'off',
        { ignorePureComponents: true },
      ],
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
      'react/react-in-jsx-scope': 'off',
      'react/no-children-prop': 'off',
      'react/jsx-handler-names': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { vars: 'all', args: 'after-used', ignoreRestSiblings: true },
      ],
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-empty-function': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'import/named': 'error',
      'import/no-default-export': 'error',
      'import/no-extraneous-dependencies': 'error',
    },
  },
  // allow specific rules in example files so there are no eslint-disable comments in code playgrounds
  {
    files: ['**/examples/**/*'],
    rules: { 'jsx-a11y/no-autofocus': 'off', 'no-console': 'off' },
  },
  // Typed rules needing full TypeScript program (source only, avoids dist/ declarations)
  {
    files: ['**/packages/**/src/**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: ts.parser,
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      '@typescript-eslint/no-for-in-array': 'error',
    },
  },
  // story files can default export
  {
    files: ['**/*.stories.*'],
    rules: {
      '@typescript-eslint/no-object-literal-type-assertion': 'off',
      'import/no-default-export': 'off',
      'react/jsx-handler-names': 'off',
      // Allow looser prototyping inside Storybook stories
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  // JS-only files environment
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: { globals: { ...globals.node, ...globals.browser } },
  },
  // turn off default export rule for component packages examples/tools
  {
    files: [
      '**/forma-36-react-components/tools/**/*',
      '**/packages/components/**/*',
      '**/packages/**/examples/**',
    ],
    rules: { 'import/no-default-export': 'off' },
  },
  // places where extraneous deps are allowed
  {
    files: [
      '**/*.stories.*',
      '**/*.test.*',
      '**/examples/**',
      '**/packages/**/__testfixtures__/**',
    ],
    rules: { 'import/no-extraneous-dependencies': 'off' },
  },
  // codemods allowed to console
  {
    files: ['**/packages/forma-36-codemod/**/*'],
    rules: { 'no-console': 'off' },
  },
];
