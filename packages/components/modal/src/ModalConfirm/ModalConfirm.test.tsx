import { expect, it, vi } from 'vitest';
import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { ModalConfirm } from './ModalConfirm';

vi.mock('react-modal', () => ({
  default: function ReactModalMock({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <div className="react-modal">{children}</div>;
  },
}));

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
