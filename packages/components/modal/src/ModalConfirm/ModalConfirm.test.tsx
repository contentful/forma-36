import { expect, it, vi } from 'vitest';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { ModalConfirm } from './ModalConfirm';

it('has no a11y issues', async () => {
  const { container } = render(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>,
  );
  await expectNoA11yViolations(container);
});

it('renders a `x` icon to close/dismiss the modal', async () => {
  const closeButtonSpy = vi.fn();

  render(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={closeButtonSpy}>
      ModalConfirm
    </ModalConfirm>,
  );

  const closeButton = screen.getByRole('button', { name: /Close/i });
  fireEvent.click(closeButton);

  expect(closeButtonSpy).toHaveBeenCalledTimes(1);
});

it('should derive accessible name automatically from title element', async () => {
  render(
    <ModalConfirm
      title="Modal title"
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
    >
      ModalConfirm
    </ModalConfirm>,
  );
  const titleId = screen.getByText('Modal title').getAttribute('id');
  expect(screen.getByRole('dialog')).toHaveAttribute(
    'aria-labelledby',
    titleId,
  );
  expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-label');
});

it('should derive accessible description automatically from subtitle element', async () => {
  render(
    <ModalConfirm
      title="Modal title"
      modalHeaderProps={{ subtitle: 'Modal subtitle' }}
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
    >
      ModalConfirm
    </ModalConfirm>,
  );
  const subtitleId = screen.getByText('Modal subtitle').getAttribute('id');
  expect(screen.getByRole('dialog')).toHaveAttribute(
    'aria-describedby',
    subtitleId,
  );
  expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-label');
});
