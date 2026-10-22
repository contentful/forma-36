import { expect, it, vi } from 'vitest';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { ModalConfirm } from './ModalConfirm';

vi.mock('react-modal', () => ({
  default: function ReactModalMock({
    children,
    aria,
  }: {
    children: React.ReactNode;
    aria?: { labelledby?: string; label?: string };
  }) {
    return (
      <div
        className="react-modal"
        role="dialog"
        aria-labelledby={aria?.labelledby}
        aria-label={aria?.label}
      >
        {children}
      </div>
    );
  },
}));

it('has no a11y issues', async () => {
  const { baseElement } = render(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>,
  );
  await expectNoA11yViolations(baseElement);
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

it('names the dialog by its title', () => {
  render(
    <ModalConfirm
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
      title="Delete"
    >
      ModalConfirm
    </ModalConfirm>,
  );

  expect(screen.getByRole('dialog', { name: 'Delete' })).toBeTruthy();
});

it('does not link aria-labelledby to an empty title', () => {
  render(
    // @ts-expect-error aria.label is required for an empty title; testing the runtime fallback
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}} title="">
      ModalConfirm
    </ModalConfirm>,
  );

  expect(screen.getByRole('dialog').hasAttribute('aria-labelledby')).toBe(
    false,
  );
});

it('names the dialog with aria.label when the title is empty', () => {
  render(
    <ModalConfirm
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
      title=""
      aria={{ label: 'Confirm deletion' }}
    >
      ModalConfirm
    </ModalConfirm>,
  );

  expect(screen.getByRole('dialog', { name: 'Confirm deletion' })).toBeTruthy();
});
