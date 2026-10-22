import { mergeConfig } from 'vitest/config';
import baseConfig from './vitest.config.mts';

export default mergeConfig(baseConfig, {
  // The audited examples live in the website package, whose tsconfig keeps JSX as-is
  // ("jsx": "preserve") for Next.js, so compile it here instead.
  oxc: { jsx: { runtime: 'automatic' } },
  test: {
    include: ['scripts/test/dragDropA11yAudit.test.tsx'],
  },
});
