import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import React, { createRef } from 'react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { AIChatMessageList } from './AIChatMessageList';

describe('AIChatMessageList', function () {
  beforeEach(() => {
    Element.prototype.scrollTo = vi.fn();
  });

  it('renders the component', () => {
    render(
      <AIChatMessageList>
        <div data-test-id="test-child">Test message</div>
      </AIChatMessageList>,
    );

    expect(screen.getByTestId('cf-ui-ai-chat-message-list')).toBeTruthy();
    expect(screen.getByTestId('test-child')).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <AIChatMessageList>
        <div>Test message</div>
      </AIChatMessageList>,
    );

    await expectNoA11yViolations(container);
  });

  it('applies custom className', () => {
    render(
      <AIChatMessageList className="custom-class">
        <div>Test message</div>
      </AIChatMessageList>,
    );

    const container = screen.getByTestId('cf-ui-ai-chat-message-list');
    expect(container).toHaveClass('custom-class');
  });

  it('applies custom testId', () => {
    render(
      <AIChatMessageList testId="custom-test-id">
        <div>Test message</div>
      </AIChatMessageList>,
    );

    expect(screen.getByTestId('custom-test-id')).toBeTruthy();
  });

  it('scrolls to bottom when scrollToBottom is called', async () => {
    const ref = createRef<HTMLDivElement & { scrollToBottom: () => void }>();

    render(
      <AIChatMessageList ref={ref}>
        <div style={{ height: '2000px' }}>Tall content</div>
      </AIChatMessageList>,
    );

    const scrollToMock = vi.fn();
    Element.prototype.scrollTo = scrollToMock;
    if (ref.current) {
      ref.current.scrollToBottom();
    }

    await new Promise<void>((resolve) => {
      requestAnimationFrame(() => {
        expect(scrollToMock).toHaveBeenCalledWith({
          top: expect.any(Number),
          behavior: 'smooth',
        });
        resolve();
      });
    });
  });

  it('accepts scrollBehavior prop with "none" option', () => {
    const { container } = render(
      <AIChatMessageList scrollBehavior={'none'}>
        <div>Test message</div>
      </AIChatMessageList>,
    );

    expect(container).toBeTruthy();
  });

  it('calls onScrollHeightChange when scroll height changes with default behavior', () => {
    const onScrollHeightChange = vi.fn(() => false);

    const { rerender } = render(
      <AIChatMessageList
        scrollBehavior={{
          onScrollHeightChange,
        }}
      >
        <div>Message 1</div>
      </AIChatMessageList>,
    );

    // Add more content to trigger scroll height change
    rerender(
      <AIChatMessageList
        scrollBehavior={{
          onScrollHeightChange,
        }}
      >
        <div>Message 1</div>
        <div>Message 2</div>
      </AIChatMessageList>,
    );

    expect(onScrollHeightChange).toHaveBeenCalled();
  });
});
