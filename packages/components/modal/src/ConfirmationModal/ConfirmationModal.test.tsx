import { beforeEach, expect, it, vi } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { ConfirmationModal, ModalConfirm } from './ConfirmationModal';

let user: UserEvent;
beforeEach(() => {
  user = userEvent.setup();
});

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
    <ConfirmationModal isShown onConfirm={() => {}} onCancel={() => {}}>
      ConfirmationModal
    </ConfirmationModal>,
  );
  await expectNoA11yViolations(baseElement);
});

it('renders a `x` icon to close/dismiss the modal', async () => {
  const closeButtonSpy = vi.fn();

  render(
    <ConfirmationModal isShown onConfirm={() => {}} onCancel={closeButtonSpy}>
      ConfirmationModal
    </ConfirmationModal>,
  );

  const closeButton = screen.getByRole('button', { name: /Close/i });
  await user.click(closeButton);

  expect(closeButtonSpy).toHaveBeenCalledTimes(1);
});

it('names the dialog by its title', () => {
  render(
    <ConfirmationModal
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
      title="Delete"
    >
      ConfirmationModal
    </ConfirmationModal>,
  );

  expect(screen.getByRole('dialog', { name: 'Delete' })).toBeTruthy();
});

it('does not link aria-labelledby to an empty title', () => {
  render(
    // @ts-expect-error aria.label is required for an empty title; testing the runtime fallback
    <ConfirmationModal
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
      title=""
    >
      ConfirmationModal
    </ConfirmationModal>,
  );

  expect(screen.getByRole('dialog').hasAttribute('aria-labelledby')).toBe(
    false,
  );
});

it('names the dialog with aria.label when the title is empty', () => {
  render(
    <ConfirmationModal
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
      title=""
      aria={{ label: 'Confirm deletion' }}
    >
      ConfirmationModal
    </ConfirmationModal>,
  );

  expect(screen.getByRole('dialog', { name: 'Confirm deletion' })).toBeTruthy();
});

it('keeps the deprecated ModalConfirm alias working and warns once', () => {
  vi.stubEnv('NODE_ENV', 'development');
  const warn = vi.spyOn(console, 'warn').mockImplementation(() => {});

  const modal = (
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>
  );
  const { rerender } = render(modal);
  rerender(modal);

  expect(screen.getByRole('dialog', { name: 'Are you sure?' })).toBeTruthy();
  expect(warn).toHaveBeenCalledTimes(1);
  expect(String(warn.mock.calls[0][0])).toContain(
    '`ModalConfirm` is deprecated',
  );

  warn.mockRestore();
  vi.unstubAllEnvs();
});
