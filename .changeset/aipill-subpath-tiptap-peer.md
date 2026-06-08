---
"@contentful/f36-ai-components": minor
---

feat: expose AiPill via `/aipill` subpath and move tiptap to peer dependencies

- Adds `import { AiPill } from '@contentful/f36-ai-components/aipill'` so consumers can use AiPill without pulling in the AIChatInput tiptap stack.
- Moves all `@tiptap/*` packages from `dependencies` to `peerDependencies` (`^3.15.0`). Consumers using AIChatInput must install `@tiptap/core`, `@tiptap/react`, `@tiptap/pm`, `@tiptap/extension-document`, `@tiptap/extension-paragraph`, `@tiptap/extension-text`, `@tiptap/extension-mention`, `@tiptap/extensions`, and `@tiptap/suggestion` themselves. Fixes duplicate-instance issues like `export 'isNodeViewSelected' was not found in '@tiptap/core'`.
