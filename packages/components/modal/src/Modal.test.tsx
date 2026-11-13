import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import React from 'react';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent, { type UserEvent } from '@testing-library/user-event';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Modal } from './';

let user: UserEvent;
beforeEach(() => {
  user = userEvent.setup();
});

// react-modal removes its portal node asynchronously (closeTimeoutMS) after unmount.
// Wait until it's gone so no timer outlives the jsdom environment.
afterEach(async () => {
  cleanup();
  await waitFor(() => expect(document.body).toBeEmptyDOMElement());
});

describe('accessibility', () => {
  it('has no a11y issues with legacy title', async () => {
    const { baseElement } = render(
      <Modal
        title="Modal window with no a11y issues :) "
        isShown
        onClose={() => {}}
      >
        Content
      </Modal>,
    );
    // baseElement, as the modal renders in a portal outside of the container
    await expectNoA11yViolations(baseElement);
  });

  it('has no a11y issues with header slot and controls slot', async () => {
    const { baseElement } = render(
      <Modal
        header={
          <Modal.Header title="Custom title" subtitle="Custom subtitle" />
        }
        controls={
          <Modal.Controls>
            <button type="button">Confirm</button>
          </Modal.Controls>
        }
        isShown
        onClose={() => {}}
      >
        Content
      </Modal>,
    );
    // baseElement, as the modal renders in a portal outside of the container
    await expectNoA11yViolations(baseElement);
  });

  it('has no a11y issues withouth header and specific aria label', async () => {
    const { baseElement } = render(
      <Modal
        aria={{ label: 'Dialog without Heading' }}
        isShown
        onClose={() => {}}
      >
        Content
      </Modal>,
    );
    expect(screen.getByRole('button', { name: 'Close' })).toBeInTheDocument();
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    // baseElement, as the modal renders in a portal outside of the container
    await expectNoA11yViolations(baseElement);
  });

  describe('should derive accessible name', () => {
    it('automatically from title element', async () => {
      render(
        <Modal title="Modal title" isShown onClose={() => {}}>
          Content
        </Modal>,
      );
      const titleId = screen.getByText('Modal title').getAttribute('id');
      expect(screen.getByRole('dialog')).toHaveAttribute(
        'aria-labelledby',
        titleId,
      );
      expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-label');
    });

    it('from custom titleId and subtitleId when passed', async () => {
      const { baseElement } = render(
        <Modal
          title="Modal title"
          subtitle="Modal subtitle"
          modalHeaderProps={{ titleId: 'my-title', subtitleId: 'my-sub' }}
          isShown
          onClose={() => {}}
        >
          Content
        </Modal>,
      );
      expect(screen.getByText('Modal title')).toHaveAttribute('id', 'my-title');
      expect(screen.getByText('Modal subtitle')).toHaveAttribute(
        'id',
        'my-sub',
      );
      expect(screen.getByRole('dialog')).toHaveAttribute(
        'aria-labelledby',
        'my-title',
      );
      expect(screen.getByRole('dialog')).toHaveAttribute(
        'aria-describedby',
        'my-sub',
      );
      // baseElement, as the modal renders in a portal outside of the container
      await expectNoA11yViolations(baseElement);
    });

    it('from aria.labelledby when passed', async () => {
      render(
        <Modal
          title="Modal title"
          aria={{ labelledby: 'title-id' }}
          isShown
          onClose={() => {}}
        >
          {() => <h2 id="title-id">Modal title</h2>}
        </Modal>,
      );
      expect(screen.getByRole('dialog')).toHaveAttribute(
        'aria-labelledby',
        'title-id',
      );
      expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-label');
    });

    it('from aria.label when passed', async () => {
      render(
        <Modal
          title="Modal title"
          aria={{ label: 'Accessible name' }}
          isShown
          onClose={() => {}}
        >
          Content
        </Modal>,
      );
      expect(screen.getByRole('dialog')).toHaveAttribute(
        'aria-label',
        'Accessible name',
      );
      expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-labelledby');
    });
  });

  describe('should derive accessible description', () => {
    it('automatically from subtitle element', async () => {
      render(
        <Modal
          title="Modal title"
          subtitle="Modal subtitle"
          isShown
          onClose={() => {}}
        >
          Content
        </Modal>,
      );
      const subtitleId = screen.getByText('Modal subtitle').getAttribute('id');
      expect(screen.getByRole('dialog')).toHaveAttribute(
        'aria-describedby',
        subtitleId,
      );
      expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-label');
    });

    it('from aria.describedby when passed', async () => {
      render(
        <Modal
          title="Modal title"
          subtitle="Modal subtitle"
          aria={{ describedby: 'subtitle-id' }}
          isShown
          onClose={() => {}}
        >
          {() => <h2 id="subtitle-id">Modal title</h2>}
        </Modal>,
      );
      expect(screen.getByRole('dialog')).toHaveAttribute(
        'aria-describedby',
        'subtitle-id',
      );
    });
  });
});

describe('focus behaviour', () => {
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
});

describe('With custom ModalHeader', () => {
  it('Should link the aria attributes from a custom modal header', async () => {
    const { baseElement } = render(
      <Modal isShown onClose={() => {}}>
        {() => <Modal.Header title="Custom title" subtitle="Custom subtitle" />}
      </Modal>,
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute(
      'aria-labelledby',
      screen.getByText('Custom title').getAttribute('id'),
    );
    expect(dialog).toHaveAttribute(
      'aria-describedby',
      screen.getByText('Custom subtitle').getAttribute('id'),
    );
    await expectNoA11yViolations(baseElement);
  });

  it('prefers an explicit aria-label over the generated aria-labelledby', () => {
    render(
      <Modal isShown onClose={() => {}} aria={{ label: 'Explicit label' }}>
        {() => <Modal.Header title="Custom title" />}
      </Modal>,
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-label', 'Explicit label');
    expect(dialog).not.toHaveAttribute('aria-labelledby');
  });

  it('renders ModalHeader outside of a Modal without throwing', async () => {
    const { container } = render(<Modal.Header title="Standalone" />);
    expect(screen.getByText('Standalone')).toHaveAttribute('id');
    await expectNoA11yViolations(container);
  });

  it('requires a title on the public ModalHeader', () => {
    // @ts-expect-error title is required when rendering the header directly
    render(<Modal.Header />);
  });
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

  it('links aria-labelledby and aria-describedby to the slot header', () => {
    renderSlots({});
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute(
      'aria-labelledby',
      screen.getByText('Slot title').getAttribute('id'),
    );
    expect(dialog).toHaveAttribute(
      'aria-describedby',
      screen.getByText('Slot subtitle').getAttribute('id'),
    );
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
