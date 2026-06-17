import { defineConfig, type Options } from 'tsup';
import sharedConfig from '../../tsup.config';

const base = sharedConfig as Options;

export default defineConfig({
  ...base,
  entry: {
    index: 'src/index.ts',
    aipill: 'src/AiPill/index.ts',
  },
  external: [...(base.external ?? []), '@tiptap/*'],
});
