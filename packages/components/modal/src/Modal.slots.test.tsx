import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Modal } from './';

// header/controls slot API and close/dismiss behaviour.
// Name/description linking is owned by Modal.test.tsx (legacy contract).

let user: UserEvent;
beforeEach(() => {
  user = userEvent.setup();
});

// react-modal removes its portal node asynchronously (closeTimeoutMS) after unmount.
afterEach(async () => {
  cleanup();
  await waitFor(() => expect(document.body).toBeEmptyDOMElement());
});

describe('header and controls slots', () => {
  const renderSlots = (props: Partial<React.ComponentProps<typeof Modal>>) =>
    render(
      <Modal
        isShown
        onClose={() => {}}
        header={<Modal.Header title="Slot title" subtitle="Slot subtitle" />}
        controls={
          <Modal.Controls>
            <button type="button">Confirm</button>
          </Modal.Controls>
        }
        children="Content"
        {...props}
      />,
    );

  it('renders header and controls outside of the content', async () => {
    const { baseElement } = renderSlots({});
    const content = screen.getByTestId('cf-ui-modal-content');
    expect(content).toHaveTextContent('Content');
    expect(content).not.toContainElement(
      screen.getByTestId('cf-ui-modal-header'),
    );
    expect(content).not.toContainElement(
      screen.getByTestId('cf-ui-modal-controls'),
    );
    await expectNoA11yViolations(baseElement);
  });

  it('renders slots around function children', () => {
    renderSlots({ children: () => <p>Custom body</p> });
    expect(screen.getByText('Slot title')).toBeInTheDocument();
    expect(screen.getByText('Custom body')).toBeInTheDocument();
    expect(screen.getByTestId('cf-ui-modal-controls')).toBeInTheDocument();
    expect(screen.queryByTestId('cf-ui-modal-content')).not.toBeInTheDocument();
  });

  it('prefers the header slot over title', () => {
    renderSlots({ title: 'Legacy title' });
    expect(screen.queryByText('Legacy title')).not.toBeInTheDocument();
    expect(screen.getAllByTestId('cf-ui-modal-header')).toHaveLength(1);
  });

  it('wires the close button to the Modal onClose', async () => {
    const onClose = vi.fn();
    renderSlots({ onClose });
    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('closes on esc when dismissable', async () => {
    const onClose = vi.fn();
    renderSlots({ onClose });
    expect(screen.getByRole('dialog')).toHaveFocus();
    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('Close functionality', () => {
  it('shows a close button for Modal.Header as a child without onClose', () => {
    render(
      <Modal isShown onClose={() => {}}>
        {() => <Modal.Header title="Child header" />}
      </Modal>,
    );
    expect(screen.queryByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('shows a close button without given header or title', () => {
    render(
      <Modal isShown onClose={() => {}}>
        Modal Content
      </Modal>,
    );
    expect(screen.queryByRole('button', { name: 'Close' })).toBeInTheDocument();
  });

  it('has no close button and ignores esc and overlay click when not dismissable', async () => {
    const onClose = vi.fn();

    render(
      <Modal
        isShown
        onClose={onClose}
        isDismissable={false}
        controls={
          <Modal.Controls>
            <button type="button">Confirm</button>
          </Modal.Controls>
        }
        children="Content"
      />,
    );

    expect(
      screen.queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument();
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveFocus();
    await user.keyboard('{Escape}');
    await user.click(dialog.parentElement as HTMLElement);
    expect(onClose).not.toHaveBeenCalled();
  });
});
