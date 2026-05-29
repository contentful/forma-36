import { CheckCircleIcon, ClockIcon } from '@contentful/f36-icons';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MessageGroups } from '../AIChatHistory';
import { AIChatHistoryTabs } from './AIChatHistoryTabs';

describe('AIChatHistoryTabs', () => {
  const mockOnTabClick = jest.fn();

  const mockGroups: MessageGroups = [
    {
      id: 'recent',
      label: 'Recent',
      icon: <ClockIcon />,
      filter: (thread) => {
        const now = new Date();
        const threadDate = thread.lastActivity || new Date(0);
        const diffInHours =
          (now.getTime() - threadDate.getTime()) / (1000 * 60 * 60);
        return diffInHours < 24;
      },
    },
    {
      id: 'completed',
      label: 'Completed',
      icon: <CheckCircleIcon />,
      filter: (thread) => thread.title.includes('CSS'),
    },
  ];

  beforeEach(() => {
    mockOnTabClick.mockClear();
  });

  it('renders all group tabs', () => {
    render(
      <AIChatHistoryTabs groups={mockGroups} onTabClick={mockOnTabClick} />,
    );

    expect(screen.getByText('Recent')).toBeTruthy();
    expect(screen.getByText('Completed')).toBeTruthy();
  });

  it('calls onTabClick when tab is clicked', () => {
    render(
      <AIChatHistoryTabs groups={mockGroups} onTabClick={mockOnTabClick} />,
    );

    const recentTab = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    fireEvent.click(recentTab);

    expect(mockOnTabClick).toHaveBeenCalledWith('recent');
  });

  it('applies active state correctly', () => {
    render(
      <AIChatHistoryTabs
        groups={mockGroups}
        activeGroupId="recent"
        onTabClick={mockOnTabClick}
      />,
    );

    const recentTab = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    const completedTab = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-completed',
    );

    expect(recentTab).toHaveAttribute('aria-selected', 'true');
    expect(completedTab).toHaveAttribute('aria-selected', 'false');
  });

  it('defaults to active state when no activeGroupId is provided', () => {
    render(
      <AIChatHistoryTabs groups={mockGroups} onTabClick={mockOnTabClick} />,
    );

    const recentTab = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    expect(recentTab).toHaveAttribute('aria-selected', 'true');
  });
});
