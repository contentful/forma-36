import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Modal from './Modal';

jest.mock(
  'react-modal',
  () =>
    // eslint-disable-next-line
    function ReactModalMock({ children }) {
      return <div className="react-modal">{children}</div>;
    },
);

it('renders the component', () => {
  const output = shallow(
    <Modal title="Title" isShown onClose={() => {}}>
      Content
    </Modal>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Modal
      title="Modal window with no a11y issues :) "
      isShown
      onClose={() => {}}
    >
      Content
    </Modal>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('renders the component without title', () => {
  const output = shallow(
    <Modal isShown onClose={() => {}}>
      Content
    </Modal>,
  );

  expect(output).toMatchSnapshot();
});

it('can be controlled', () => {
  const output = shallow(
    <Modal isShown onClose={() => {}}>
      {({ onClose }) => (
        <React.Fragment>
          <Modal.Header title="Hello" onClose={onClose} />
          <Modal.Content>Content</Modal.Content>
          <Modal.Controls>
            <button type="button">Click on me</button>
          </Modal.Controls>
        </React.Fragment>
      )}
    </Modal>,
  );
  expect(output).toMatchSnapshot();
});
