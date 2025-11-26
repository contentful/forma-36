import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import rootConfig from '../../eslint.config.mjs';

// Setup __dirname for FlatCompat
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({ baseDirectory: __dirname });

export default [
  ...rootConfig,
  // Pull in legacy Next.js
  ...compat.extends('plugin:@next/next/recommended'),

  // Website-specific TypeScript settings
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json', // Website's tsconfig
        tsconfigRootDir: __dirname,
      },
    },
  },

  //Website-specific rules
  {
    rules: {
      'rulesdir/emotion-in-function': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },

  //Overrides for pages and content
  {
    files: ['pages/**/*', 'content/**/*'],
    rules: {
      'import/no-default-export': 'off',
    },
  },
];
