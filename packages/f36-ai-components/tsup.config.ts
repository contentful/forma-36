import { defineConfig } from 'tsup';
import sharedConfig from '../../tsup.config';

export default defineConfig((options) => {
  const base =
    typeof sharedConfig === 'function' ? sharedConfig(options) : sharedConfig;

  return {
    ...base,
    entry: {
      index: 'src/index.ts',
      aipill: 'src/AiPill/index.ts',
    },
    external: [...(base.external ?? []), '@tiptap/*'],
  };
});
