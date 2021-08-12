import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { ModalConfirm } from '../src/ModalConfirm/ModalConfirm';

jest.mock(
  'react-modal',
  () =>
    // eslint-disable-next-line
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
