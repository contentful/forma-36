import { mergeConfig } from 'vitest/config';
import baseConfig from './vitest.config.mts';

export default mergeConfig(baseConfig, {
  oxc: {
    jsx: {
      runtime: 'automatic',
    },
  },
  test: {
    include: ['scripts/test/dragDropA11yAudit.test.tsx'],
  },
});
