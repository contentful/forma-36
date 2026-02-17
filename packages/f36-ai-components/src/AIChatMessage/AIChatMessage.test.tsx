import React from 'react';
import { render, screen } from '@testing-library/react';
import { AIChatMessage } from './AIChatMessage';
import { Box } from '@contentful/f36-core';

// Mocking react-markdown and its plugins as current jest version does not support ESM
jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: string }) => <div>{children}</div>,
}));
jest.mock('remark-gfm', () => ({
  __esModule: true,
  default: () => {},
}));
jest.mock('rehype-raw', () => ({
  __esModule: true,
  default: () => {},
}));

describe('AIChatMessage', () => {
  it('renders the component', () => {
    render(<AIChatMessage authorRole="user" content="hello world" />);
    // message is rendered
    expect(screen.getByTestId('cf-ui-ai-chat-message')).toBeTruthy();
    // optional content is not rendered
    expect(
      screen.queryByTestId('cf-ui-ai-chat-message-additional-content'),
    ).toBeNull();
    expect(screen.queryByTestId('cf-ui-ai-chat-message-actions')).toBeNull();
  });

  it('renders the component with an additional class name', () => {
    const additionalClassName = 'my-extra-class';
    render(
      <AIChatMessage
        authorRole="user"
        content="hello world"
        className={additionalClassName}
      />,
    );

    expect(
      screen
        .getByTestId('cf-ui-ai-chat-message')
        .classList.contains(additionalClassName),
    ).toBeTruthy();
  });

  it('renders the component with custom testId', () => {
    render(
      <AIChatMessage
        authorRole="user"
        content="hello world"
        testId="custom-test-id"
      />,
    );

    expect(screen.getByTestId('custom-test-id')).toBeTruthy();
  });

  it('renders the optional components', () => {
    render(
      <AIChatMessage
        authorRole="user"
        content="hello world"
        additionalContent={<Box>Additional Content</Box>}
        messageActionButtons={<Box>Action Buttons</Box>}
      />,
    );

    const additionalContent = screen.getByTestId(
      'cf-ui-ai-chat-message-additional-content',
    );
    expect(additionalContent.textContent).toContain('Additional Content');

    const actionButtons = screen.getByTestId('cf-ui-ai-chat-message-actions');
    expect(actionButtons.textContent).toContain('Action Buttons');
  });
});
