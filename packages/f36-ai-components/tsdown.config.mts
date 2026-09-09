import { defineConfig } from 'tsdown';
// @ts-expect-error tsdown has no issue with the file extension
import sharedConfig from '../../tsdown.config.mts';

export default defineConfig({
  ...sharedConfig,
  entry: {
    index: 'src/index.ts',
    aipill: 'src/AiPill/index.ts',
  },
});
