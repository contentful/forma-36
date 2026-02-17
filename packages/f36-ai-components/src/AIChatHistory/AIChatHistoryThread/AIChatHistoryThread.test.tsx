import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MessageThread } from '../AIChatHistory';
import { AIChatHistoryThread } from './AIChatHistoryThread';

describe('AIChatHistoryThread', () => {
  const mockOnClick = jest.fn();

  const mockThread: MessageThread = {
    id: 'test-thread',
    title: 'Test Thread Title',
    lastActivity: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    onThreadClick: mockOnClick,
  };

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders thread title correctly', () => {
    render(<AIChatHistoryThread thread={mockThread} />);

    expect(screen.getByText('Test Thread Title')).toBeTruthy();
  });

  it('renders last activity time when provided', () => {
    render(<AIChatHistoryThread thread={mockThread} />);

    expect(screen.getByText('30 minutes ago')).toBeTruthy();
  });

  it('calls onThreadClick when clicked', () => {
    render(<AIChatHistoryThread thread={mockThread} />);

    const threadElement = screen.getByTestId(
      'cf-ui-ai-chat-history-thread-test-thread',
    );
    fireEvent.click(threadElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders status icon when provided', () => {
    const threadWithIcon = {
      ...mockThread,
      statusIcon: <span data-testid="custom-icon">✓</span>,
    };

    render(<AIChatHistoryThread thread={threadWithIcon} />);

    expect(screen.getByText('✓')).toBeTruthy();
  });

  it('handles thread without lastActivity', () => {
    const threadWithoutActivity = {
      ...mockThread,
      lastActivity: undefined,
    };

    render(<AIChatHistoryThread thread={threadWithoutActivity} />);

    expect(screen.getByText('Test Thread Title')).toBeTruthy();
  });
});
