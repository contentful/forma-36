import React from 'react';
import { mount } from 'enzyme';
import { axe } from 'jest-axe';
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

it('can accept custom labels', () => {
  const output = mount(
    <ModalConfirm
      isShown
      intent="negative"
      confirmLabel="Yes, delete"
      cancelLabel="No, I changed my mind"
      onConfirm={() => {}}
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
