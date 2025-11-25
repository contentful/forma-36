import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import React from 'react';
import { AIChatMessageList } from './AIChatMessageList';

describe('AIChatMessageList', function () {
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

    const results = await axe(container);
    expect(results).toHaveNoViolations();
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
});
