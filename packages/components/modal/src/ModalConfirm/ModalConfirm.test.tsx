import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { axe } from 'jest-axe';

import { ModalConfirm } from './ModalConfirm';

jest.mock(
  'react-modal',
  () =>
    function ReactModalMock({ children }: { children: React.ReactNode }) {
      return <div className="react-modal">{children}</div>;
    },
);

it('has no a11y issues', async () => {
  const { container } = render(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders a `x` icon to close/dismiss the modal', async () => {
  const closeButtonSpy = jest.fn();

  render(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={closeButtonSpy}>
      ModalConfirm
    </ModalConfirm>,
  );

  const closeButton = screen.getByRole('button', { name: /Close/i });
  fireEvent.click(closeButton);

  expect(closeButtonSpy).toHaveBeenCalledTimes(1);
});
