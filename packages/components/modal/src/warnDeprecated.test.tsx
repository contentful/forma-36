import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';

import { Modal, ModalConfirm } from './';

const deprecationWarnings = (warn: ReturnType<typeof vi.spyOn>) =>
  warn.mock.calls
    .map(([message]) => String(message).match(/`([^`]+)` is deprecated/)?.[1])
    .filter(Boolean);

// Order matters: warnings are deduplicated per module and session, so the
// "does not warn" test must run before any deprecation warning has been printed.
describe('deprecation warnings', () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    vi.stubEnv('NODE_ENV', 'development');
    warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(async () => {
    vi.unstubAllEnvs();
    warn.mockRestore();
    cleanup();
    await waitFor(() => expect(document.body).toBeEmptyDOMElement());
  });

  it('does not warn for the slot API or ModalConfirm', () => {
    render(
      <>
        <Modal
          isShown
          onClose={() => {}}
          header={<Modal.Header title="Title" />}
        >
          Body
        </Modal>
        <ModalConfirm isShown onCancel={() => {}} onConfirm={() => {}}>
          Body
        </ModalConfirm>
      </>,
    );

    expect(deprecationWarnings(warn)).toEqual([]);
  });

  it('warns once per deprecated prop', () => {
    const props = { isShown: true, onClose: () => {} };
    const { rerender } = render(
      <Modal {...props} title="Title" subtitle="Subtitle" modalHeaderProps={{}}>
        Body
      </Modal>,
    );
    rerender(
      <Modal {...props} title="Title" subtitle="Subtitle" modalHeaderProps={{}}>
        Body
      </Modal>,
    );
    cleanup();
    render(
      <Modal {...props}>
        {() => <Modal.Header title="Title" onClose={() => {}} />}
      </Modal>,
    );

    expect(deprecationWarnings(warn)).toEqual([
      'title',
      'subtitle',
      'modalHeaderProps',
      'Modal.Header onClose',
    ]);
  });
});
