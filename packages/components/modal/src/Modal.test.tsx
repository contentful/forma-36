import { describe, expect, it, vi } from 'vitest';
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

describe('should not derive accessible description automatically', () => {
  it('when aria.labelledby is passed', async () => {
    render(
      <Modal
        title="Modal title"
        subtitle="Modal subtitle"
        aria={{ labelledby: 'custom-title-id' }}
        isShown
        onClose={() => {}}
      >
        Content
      </Modal>,
    );

    expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-describedby');
  });

  it('when aria.label is passed', async () => {
    render(
      <Modal
        title="Modal title"
        subtitle="Modal subtitle"
        aria={{ label: 'Custom modal title' }}
        isShown
        onClose={() => {}}
      >
        Content
      </Modal>,
    );

    expect(screen.getByRole('dialog')).not.toHaveAttribute('aria-describedby');
  });
});
