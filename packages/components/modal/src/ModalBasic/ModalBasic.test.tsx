import { afterEach, expect, it, vi } from 'vitest';
import React from 'react';
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Modal, ModalBasic } from '../';

afterEach(async () => {
  cleanup();
  await waitFor(() => expect(document.body).toBeEmptyDOMElement());
});

it('renders header, content and controls without a11y issues', async () => {
  const onClose = vi.fn();
  const { baseElement } = render(
    <ModalBasic
      isShown
      onClose={onClose}
      title="Basic title"
      subtitle="Basic subtitle"
      controls={
        <Modal.Controls>
          <button type="button">Confirm</button>
        </Modal.Controls>
      }
    >
      Content
    </ModalBasic>,
  );
  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveAttribute(
    'aria-labelledby',
    screen.getByText('Basic title').getAttribute('id'),
  );
  expect(dialog).toHaveAttribute(
    'aria-describedby',
    screen.getByText('Basic subtitle').getAttribute('id'),
  );
  expect(screen.getByTestId('cf-ui-modal-content')).toHaveTextContent(
    'Content',
  );
  expect(screen.getByTestId('cf-ui-modal-controls')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Close' }));
  expect(onClose).toHaveBeenCalledTimes(1);
  await expectNoA11yViolations(baseElement);
});
