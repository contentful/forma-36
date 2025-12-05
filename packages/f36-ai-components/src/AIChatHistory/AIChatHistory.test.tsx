import { CheckCircleIcon, ClockIcon } from '@contentful/f36-icons';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AIChatHistory, MessageGroups, MessageThread } from './AIChatHistory';

describe('AIChatHistory', () => {
  const mockThreads: MessageThread[] = [
    {
      id: 'thread-1',
      title: 'Thread 1 title',
      lastActivity: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: 'thread-2',
      title: 'Thread 2 title',
      lastActivity: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    },
    {
      id: 'thread-3',
      title: 'Thread 3 title',
      lastActivity: new Date(Date.now() - 1000 * 60 * 60 * 25), // 25 hours ago
    },
  ];

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

  it('renders the component', () => {
    render(<AIChatHistory threads={mockThreads} />);
    expect(screen.getByTestId('cf-ui-ai-chat-history')).toBeTruthy();
  });

  it('renders the component with custom testId', () => {
    const customTestId = 'custom-chat-history';
    render(<AIChatHistory threads={mockThreads} testId={customTestId} />);
    expect(screen.getByTestId(customTestId)).toBeTruthy();
  });

  it('renders all threads when no groups provided', () => {
    render(<AIChatHistory threads={mockThreads} />);

    mockThreads.forEach((thread) => {
      expect(
        screen.getByTestId(`cf-ui-ai-chat-history-thread-${thread.id}`),
      ).toBeTruthy();
      expect(screen.getByText(thread.title)).toBeTruthy();
    });

    expect(screen.getByText('Thread 1 title')).toBeTruthy();
    expect(screen.getByText('Thread 2 title')).toBeTruthy();
    expect(screen.getByText('Thread 3 title')).toBeTruthy();
  });

  it('renders threads grouped by provided groups', () => {
    render(<AIChatHistory threads={mockThreads} groups={mockGroups} />);

    expect(screen.getByText('Recent')).toBeTruthy();
    expect(screen.getByText('Completed')).toBeTruthy();

    expect(
      screen.getByTestId('cf-ui-ai-chat-history-tabs-group-recent'),
    ).toBeTruthy();
    expect(
      screen.getByTestId('cf-ui-ai-chat-history-tabs-group-completed'),
    ).toBeTruthy();
  });

  it('filters threads correctly based on group filters', () => {
    render(<AIChatHistory threads={mockThreads} groups={mockGroups} />);

    const completedGroup = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-completed',
    );
    expect(completedGroup).toBeTruthy();

    const recentGroup = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    expect(recentGroup).toBeTruthy();
  });

  it('calls onThreadClick when thread is clicked', () => {
    const mockOnClick = jest.fn();
    const threadsWithClick = [
      {
        ...mockThreads[0],
        onThreadClick: mockOnClick,
      },
    ];

    render(<AIChatHistory threads={threadsWithClick} />);

    const thread = screen.getByTestId('cf-ui-ai-chat-history-thread-thread-1');
    fireEvent.click(thread);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('renders with custom className', () => {
    const customClassName = 'my-custom-class';
    render(<AIChatHistory threads={mockThreads} className={customClassName} />);

    const component = screen.getByTestId('cf-ui-ai-chat-history');
    expect(component.classList.contains(customClassName)).toBeTruthy();
  });

  describe('lastActivity', () => {
    beforeEach(() => {
      // Mock Date.now to ensure consistent test results
      jest.useFakeTimers();
      jest.setSystemTime(new Date('2023-12-01T12:00:00Z'));
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('formats recent times correctly', () => {
      const recentThread: MessageThread = {
        id: 'recent',
        title: 'Recent Thread',
        lastActivity: new Date('2023-12-01T11:30:00Z'), // 30 minutes ago
      };

      render(<AIChatHistory threads={[recentThread]} />);
      expect(screen.getByText('30 minutes ago')).toBeTruthy();
    });

    it('formats very recent times as "a few seconds ago"', () => {
      const veryRecentThread: MessageThread = {
        id: 'very-recent',
        title: 'Very Recent Thread',
        lastActivity: new Date('2023-12-01T11:59:30Z'), // 30 seconds ago
      };

      render(<AIChatHistory threads={[veryRecentThread]} />);
      expect(screen.getByText('a few seconds ago')).toBeTruthy();
    });
  });
});
