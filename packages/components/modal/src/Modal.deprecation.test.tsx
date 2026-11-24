import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import React from 'react';
import { cleanup, render, waitFor } from '@testing-library/react';

import { Modal } from './';

// Remove after v7 (deprecated props are gone).
// Kept in its own file: warnDeprecated dedupes per module, so other tests
// rendering these props would skew the counts. Each test uses its own
// component/prop key, so order does not matter.

let warn: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  vi.stubEnv('NODE_ENV', 'development');
  warn = vi.spyOn(console, 'warn').mockImplementation(() => {});
});

// react-modal removes its portal node asynchronously (closeTimeoutMS) after unmount.
afterEach(async () => {
  vi.unstubAllEnvs();
  warn.mockRestore();
  cleanup();
  await waitFor(() => expect(document.body).toBeEmptyDOMElement());
});

it.each([
  ['title', { title: 'Title' }],
  ['subtitle', { subtitle: 'Subtitle' }],
  ['modalHeaderProps', { modalHeaderProps: { title: 'Title' } }],
])('warns once for the deprecated Modal `%s` prop', (prop, props) => {
  const modal = (
    <Modal isShown onClose={() => {}} {...props}>
      Content
    </Modal>
  );
  const { rerender } = render(modal);
  rerender(modal);

  expect(warn).toHaveBeenCalledTimes(1);
  expect(warn).toHaveBeenCalledWith(
    expect.stringMatching(
      new RegExp(`^\\[Modal\\] \`${prop}\` is deprecated.*MIGRATION\\.md$`),
    ),
  );
});

it('warns once for the deprecated Modal.Header `onClose` prop', () => {
  const modal = (
    <Modal isShown onClose={() => {}}>
      {() => <Modal.Header title="Title" onClose={() => {}} />}
    </Modal>
  );
  const { rerender } = render(modal);
  rerender(modal);

  expect(warn).toHaveBeenCalledTimes(1);
  expect(warn).toHaveBeenCalledWith(
    expect.stringMatching(/^\[ModalHeader\] `onClose` is deprecated/),
  );
});

it('does not warn for the header slot', () => {
  render(
    <Modal isShown onClose={() => {}} header={<Modal.Header title="Title" />}>
      Content
    </Modal>,
  );

  expect(warn).not.toHaveBeenCalled();
});
