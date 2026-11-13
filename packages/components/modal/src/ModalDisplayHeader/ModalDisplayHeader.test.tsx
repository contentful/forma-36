import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Modal } from '../CompoundModal';
import { ModalDisplayHeader } from './ModalDisplayHeader';

let user: UserEvent;
beforeEach(() => {
  user = userEvent.setup();
});

// Context logic (ids, onClose, closeIconLabel) is owned and tested by useModalHeader.

// react-modal removes its portal node asynchronously (closeTimeoutMS) after unmount.
afterEach(async () => {
  cleanup();
  await waitFor(() => expect(document.body).toBeEmptyDOMElement());
});

describe('markup', () => {
  it('renders the title as h2 and the subtitle as p inside an hgroup', () => {
    render(<ModalDisplayHeader title="Display title" subtitle="Sub" />);
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Display title',
    });
    const subtitle = screen.getByText('Sub');
    expect(subtitle.tagName).toBe('P');
    expect(heading.parentElement?.tagName).toBe('HGROUP');
    expect(heading.parentElement).toContainElement(subtitle);
  });
});

describe('inside a Modal', () => {
  it('labels the dialog and closes it via the Modal onClose', async () => {
    const onClose = vi.fn();
    render(
      <Modal isShown onClose={onClose}>
        {() => (
          <Modal.DisplayHeader
            title="Display title"
            subtitle="Display subtitle"
          />
        )}
      </Modal>,
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAccessibleName('Display title');
    expect(dialog).toHaveAccessibleDescription('Display subtitle');

    await user.click(screen.getByRole('button', { name: 'Close' }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});

describe('standalone (no Modal context)', () => {
  it('renders without close button and without a11y issues', async () => {
    const { container } = render(
      <ModalDisplayHeader title="Standalone" subtitle="Sub" />,
    );
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    await expectNoA11yViolations(container);
  });
});
