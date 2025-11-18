import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Modal } from './Modal';

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

it('should focus Close button', async () => {
  const onAfterOpen = jest.fn();
  render(
    <Modal
      title="Modal with no initial focus element"
      isShown
      onClose={() => {}}
      onAfterOpen={onAfterOpen}
    >
      Content
    </Modal>,
  );

  await waitFor(() => expect(onAfterOpen).toHaveBeenCalledTimes(1));
  expect(screen.getByRole('button', { name: 'Close' })).toHaveFocus();
});

it('should focus initialFocusRef element', async () => {
  const onAfterOpen = jest.fn();

  const Test = () => {
    const ref = React.useRef();
    return (
      <Modal
        title="Modal with initialFocusRef"
        isShown
        onClose={() => {}}
        onAfterOpen={onAfterOpen}
        initialFocusRef={ref}
      >
        <button type="button" ref={ref}>
          Test button
        </button>
      </Modal>
    );
  };

  render(<Test />);

  await waitFor(() => expect(onAfterOpen).toHaveBeenCalledTimes(1));
  expect(screen.getByRole('button', { name: 'Test button' })).toHaveFocus();
});

it('should focus element with native autoFocus attribute', async () => {
  const onAfterOpen = jest.fn();

  render(
    <Modal
      title="Modal with native autoFocus attribute"
      isShown
      onClose={() => {}}
      onAfterOpen={onAfterOpen}
    >
      {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
      <button type="button" autoFocus>
        Test button
      </button>
    </Modal>,
  );

  await waitFor(() => expect(onAfterOpen).toHaveBeenCalledTimes(1));
  expect(screen.getByRole('button', { name: 'Test button' })).toHaveFocus();
});
