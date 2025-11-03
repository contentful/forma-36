import { CheckCircleIcon, ClockIcon } from '@contentful/f36-icons';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { MessageGroup, MessageThread } from '../AIChatHistory';
import { AIChatHistoryTabs } from './AIChatHistoryTabs';

describe('AIChatHistoryTabs', () => {
  const mockOnTabClick = jest.fn();

  const mockThreads: MessageThread[] = [
    {
      id: 'thread-1',
      title: 'React Question',
      lastActivity: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: 'thread-2',
      title: 'CSS Grid Question',
      lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 25), // 25 hours ago
    },
  ];

  const mockGroups: MessageGroup[] = [
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
      <AIChatHistoryTabs
        groups={mockGroups}
        threads={mockThreads}
        onTabClick={mockOnTabClick}
      />,
    );

    expect(screen.getByText('Recent')).toBeTruthy();
    expect(screen.getByText('Completed')).toBeTruthy();
  });

  it('renders group icons when provided', () => {
    render(
      <AIChatHistoryTabs
        groups={mockGroups}
        threads={mockThreads}
        onTabClick={mockOnTabClick}
      />,
    );

    // Check that icons are rendered (they are SVG elements)
    const recentTab = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    const completedTab = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-completed',
    );

    expect(recentTab.querySelector('svg')).toBeTruthy();
    expect(completedTab.querySelector('svg')).toBeTruthy();
  });

  it('calls onTabClick when tab is clicked', () => {
    render(
      <AIChatHistoryTabs
        groups={mockGroups}
        threads={mockThreads}
        onTabClick={mockOnTabClick}
      />,
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
        threads={mockThreads}
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

    expect(recentTab).toHaveAttribute('data-active', 'true');
    expect(completedTab).toHaveAttribute('data-active', 'false');
  });

  it('handles groups without icons', () => {
    const groupsWithoutIcons: MessageGroup[] = [
      {
        id: 'simple',
        label: 'Simple Group',
        filter: () => true,
      },
    ];

    render(
      <AIChatHistoryTabs
        groups={groupsWithoutIcons}
        threads={mockThreads}
        onTabClick={mockOnTabClick}
      />,
    );

    expect(screen.getByText('Simple Group')).toBeTruthy();
    const tab = screen.getByTestId('cf-ui-ai-chat-history-tabs-group-simple');
    expect(tab.querySelector('svg')).toBeNull();
  });

  it('defaults to active state when no activeGroupId is provided', () => {
    render(
      <AIChatHistoryTabs
        groups={mockGroups}
        threads={mockThreads}
        onTabClick={mockOnTabClick}
      />,
    );

    // Recent group should be active because it has matching threads
    const recentTab = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    expect(recentTab).toHaveAttribute('data-active', 'true');
  });
});
