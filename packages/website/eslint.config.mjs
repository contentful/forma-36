import nextPlugin from '@next/eslint-plugin-next';
import rootConfig from '../../eslint.config.mjs';

// Compose root rules, Next.js recommended rules, and website-specific overrides.
// eslint-disable-next-line import/no-default-export
export default [
  ...rootConfig,
  nextPlugin.configs.recommended,
  {
    settings: { next: { rootDir: 'packages/website/' } },
    rules: {
      'rulesdir/emotion-in-function': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
    },
  },
  {
    files: ['pages/**/*', 'content/**/*'],
    rules: { 'import/no-default-export': 'off' },
  },
  {
    files: ['next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
