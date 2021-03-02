import React from 'react';
import { render } from '@testing-library/react';

import { axe } from '../../utils/axeHelper';
import { Modal } from './Modal';

jest.mock(
  'react-modal',
  () =>
    // eslint-disable-next-line
    function ReactModalMock({ children }: { children: React.ReactNode }) {
      return <div className="react-modal">{children}</div>;
    },
);

it('renders the component', () => {
  const { container } = render(
    <Modal title="Title" isShown onClose={() => {}}>
      Content
    </Modal>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Modal
      title="Modal window with no a11y issues :) "
      isShown
      onClose={() => {}}
    >
      Content
    </Modal>,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders the component without title', () => {
  const { container } = render(
    <Modal isShown onClose={() => {}}>
      Content
    </Modal>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('can override header and content properties', () => {
  const { container } = render(
    <Modal
      title="Hello!"
      isShown
      onClose={() => {}}
      modalHeaderProps={{
        isNotWrapped: true,
        className: 'additional-header-class',
      }}
      modalContentProps={{
        className: 'additional-content-class',
      }}
    >
      Content
    </Modal>,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('can be controlled', () => {
  const { container } = render(
    <Modal isShown onClose={() => {}}>
      {({ onClose }: { onClose: Function }) => (
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
  expect(container.firstChild).toMatchSnapshot();
});
