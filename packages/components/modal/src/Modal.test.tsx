import { expect, it, vi } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

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
  await expectNoA11yViolations(container);
});

it('should focus Close button', async () => {
  const onAfterOpen = vi.fn();
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
  const onAfterOpen = vi.fn();

  const Test = () => {
    const ref = React.useRef<HTMLButtonElement | null>(null);
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
  const onAfterOpen = vi.fn();

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
