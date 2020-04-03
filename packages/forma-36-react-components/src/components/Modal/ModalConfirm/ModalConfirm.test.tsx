import React from 'react';
import { mount } from 'enzyme';
import axe from '../../../utils/axeHelper';
import ModalConfirm from './ModalConfirm';

jest.mock(
  'react-modal',
  () =>
    // eslint-disable-next-line
    function ReactModalMock({ children }: { children: React.ReactNode }) {
      return <div className="react-modal">{children}</div>;
    },
);

jest.mock(
  '../../Button',
  () =>
    function Button() {
      return null;
    },
);

it('renders the component', () => {
  const output = mount(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>,
  );

  expect(output.find('[data-test-id="cf-ui-modal-confirm"]')).toMatchSnapshot();
});

it('renders the component with override header, content and controls', () => {
  const output = mount(
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
    >
      ModalConfirm
    </ModalConfirm>,
  );

  expect(output.find('[data-test-id="cf-ui-modal-confirm"]')).toMatchSnapshot();
});

it('can accept custom labels', () => {
  const output = mount(
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

  expect(output.find('[data-test-id="cf-ui-modal-confirm"]')).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <ModalConfirm isShown onConfirm={() => {}} onCancel={() => {}}>
      ModalConfirm
    </ModalConfirm>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
