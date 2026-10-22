import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Modal } from './';

it('has no a11y issues', async () => {
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
    expect(screen.getByText('Modal subtitle')).toHaveAttribute('id', 'my-sub');
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

  it('does not set describedby or a subtitle id without subtitle', () => {
    render(
      <Modal isShown onClose={() => {}}>
        {() => <Modal.Header title="Custom title" />}
      </Modal>,
    );
    expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-describedby');
  });

  it('uses titleId and subtitleId passed to the header', () => {
    render(
      <Modal isShown onClose={() => {}}>
        {() => (
          <Modal.Header
            title="Custom title"
            subtitle="Custom subtitle"
            titleId="my-title"
            subtitleId="my-subtitle"
          />
        )}
      </Modal>,
    );
    expect(screen.getByText('Custom title')).toHaveAttribute('id', 'my-title');
    expect(screen.getByText('Custom subtitle')).toHaveAttribute(
      'id',
      'my-subtitle',
    );
    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('aria-labelledby', 'my-title');
    expect(dialog).toHaveAttribute('aria-describedby', 'my-subtitle');
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
});
