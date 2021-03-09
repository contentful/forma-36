import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../../utils/axeHelper';
import { ModalConfirm } from './ModalConfirm';
import '@contentful/forma-36-fcss/dist/styles.css';

jest.mock(
  'react-modal',
  () =>
    // eslint-disable-next-line
    function ReactModalMock({ children }: { children: React.ReactNode }) {
      return <div className="react-modal">{children}</div>;
    },
);

jest.mock('../../Button', () => ({
  Button: () => {
    return null;
  },
}));

it('renders the component', () => {
  const { container } = render(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with override header, content and controls', () => {
  const { container } = render(
    <ModalConfirm
      isShown
      onConfirm={() => {}}
      onCancel={() => {}}
      modalHeaderProps={{
        isNotWrapped: true,
        className: 'additional header class',
      }}
      modalContentProps={{
        className: 'additional content class',
      }}
      modalControlsProps={{
        className: 'additional controls class',
      }}
      data-testid="modal-confirm"
    >
      ModalConfirm
    </ModalConfirm>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('can accept custom labels', () => {
  const { container } = render(
    <ModalConfirm
      isShown
      intent="negative"
      confirmLabel="Yes, delete"
      secondaryLabel="Disable, instead"
      cancelLabel="No, I changed my mind"
      onConfirm={() => {}}
      onSecondary={() => {}}
      onCancel={() => {}}
    >
      ModalConfirm
    </ModalConfirm>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
