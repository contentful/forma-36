import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { warnDeprecated } from './warnDeprecated';

// Warnings are deduplicated in a module-level Set that lives for the whole
// file, so every test uses its own component/prop pair.
describe('warnDeprecated', () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubEnv('NODE_ENV', 'development');
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllEnvs();
    warn.mockRestore();
  });

  it('warns once per component prop', () => {
    warnDeprecated({ component: 'Once', prop: 'size', hint: 'Use `scale`.' });
    warnDeprecated({ component: 'Once', prop: 'size', hint: 'Use `scale`.' });

    expect(warn).toHaveBeenCalledTimes(1);
    expect(warn).toHaveBeenCalledWith(
      '[Once] `size` is deprecated and will be removed in the next major version. Use `scale`.',
    );
  });

  it('warns separately for the same prop on another component', () => {
    warnDeprecated({ component: 'First', prop: 'size', hint: 'Use `scale`.' });
    warnDeprecated({ component: 'Second', prop: 'size', hint: 'Use `scale`.' });

    expect(warn).toHaveBeenCalledTimes(2);
  });

  it('names the component when the whole component is deprecated', () => {
    warnDeprecated({ component: 'OldName', hint: 'Use `NewName` instead.' });

    expect(warn).toHaveBeenCalledWith(
      '`OldName` is deprecated and will be removed in the next major version. Use `NewName` instead.',
    );
  });

  it('does not warn outside development', () => {
    vi.stubEnv('NODE_ENV', 'production');
    warnDeprecated({ component: 'Prod', prop: 'size', hint: 'Use `scale`.' });

    expect(warn).not.toHaveBeenCalled();
  });

  it('links the migration guide when given', () => {
    warnDeprecated({
      component: 'Guide',
      prop: 'size',
      hint: 'Use `scale`.',
      migrationGuide: 'https://example.com/migration',
    });

    expect(warn).toHaveBeenCalledWith(
      expect.stringMatching(
        /Use `scale`\. See: https:\/\/example\.com\/migration$/,
      ),
    );
  });
});
