import { mergeConfig } from 'vitest/config';
import baseConfig from './vitest.config.mts';

export default mergeConfig(baseConfig, {
  test: {
    include: ['scripts/test/dragDropA11yAudit.test.tsx'],
  },
});
