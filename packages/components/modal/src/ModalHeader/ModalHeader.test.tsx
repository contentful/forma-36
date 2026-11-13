import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';

import { Modal } from '../CompoundModal';

let user: UserEvent;
beforeEach(() => {
  user = userEvent.setup();
});

// react-modal removes its portal node asynchronously (closeTimeoutMS) after unmount.
afterEach(async () => {
  cleanup();
  await waitFor(() => expect(document.body).toBeEmptyDOMElement());
});

it('requires a title on the public ModalHeader', () => {
  // @ts-expect-error title is required when rendering the header directly
  render(<Modal.Header />);
});

// `onClose` on the header is deprecated but must keep working (non-breaking).
it('calls its own deprecated onClose instead of the Modal one', async () => {
  const own = vi.fn();
  const modalOnClose = vi.fn();
  render(
    <Modal isShown onClose={modalOnClose}>
      {() => <Modal.Header title="Title" onClose={own} />}
    </Modal>,
  );
  await user.click(screen.getByRole('button', { name: 'Close' }));
  expect(own).toHaveBeenCalledTimes(1);
  expect(modalOnClose).not.toHaveBeenCalled();
});
