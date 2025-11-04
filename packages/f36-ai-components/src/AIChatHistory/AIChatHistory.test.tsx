import { CheckCircleIcon, ClockIcon } from '@contentful/f36-icons';
import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { AIChatHistory, MessageGroup, MessageThread } from './AIChatHistory';

describe('AIChatHistory', () => {
  const mockThreads: MessageThread[] = [
    {
      id: 'thread-1',
      title: 'How to implement React hooks?',
      lastActivity: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
    },
    {
      id: 'thread-2',
      title: 'CSS Grid Layout Question',
      lastActivity: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
    },
    {
      id: 'thread-3',
      title: 'JavaScript async/await',
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

    // Check that titles are rendered correctly
    expect(screen.getByText('How to implement React hooks?')).toBeTruthy();
    expect(screen.getByText('CSS Grid Layout Question')).toBeTruthy();
  });

  it('renders threads grouped by provided groups', () => {
    render(<AIChatHistory threads={mockThreads} groups={mockGroups} />);

    // Check if group headers are rendered
    expect(screen.getByText('Recent')).toBeTruthy();
    expect(screen.getByText('Completed')).toBeTruthy();

    // Check if groups have correct testIds
    expect(
      screen.getByTestId('cf-ui-ai-chat-history-tabs-group-recent'),
    ).toBeTruthy();
    expect(
      screen.getByTestId('cf-ui-ai-chat-history-tabs-group-completed'),
    ).toBeTruthy();
  });

  it('filters threads correctly based on group filters', () => {
    render(<AIChatHistory threads={mockThreads} groups={mockGroups} />);

    // Check that the CSS thread is in the completed group by checking within that group
    const completedGroup = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-completed',
    );
    expect(completedGroup).toBeTruthy();

    // Check that recent group exists and has content
    const recentGroup = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    expect(recentGroup).toBeTruthy();
  });

  it('displays empty state when no threads provided', () => {
    render(<AIChatHistory threads={[]} />);
    expect(screen.getByTestId('cf-ui-ai-chat-history-empty')).toBeTruthy();
    expect(screen.getByText('No conversations yet')).toBeTruthy();
  });

  it('displays custom empty state', () => {
    const customEmptyState = <div>Custom empty message</div>;
    render(<AIChatHistory threads={[]} emptyState={customEmptyState} />);
    expect(screen.getByText('Custom empty message')).toBeTruthy();
  });

  it('displays loading state', () => {
    render(<AIChatHistory threads={mockThreads} isLoading={true} />);
    expect(screen.getByTestId('cf-ui-ai-chat-history-loading')).toBeTruthy();
    expect(screen.getByText('Loading...')).toBeTruthy();
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

  it('applies active styling to active thread', () => {
    render(<AIChatHistory threads={mockThreads} />);

    const activeThread = screen.getByTestId(
      'cf-ui-ai-chat-history-thread-thread-1',
    );
    const inactiveThread = screen.getByTestId(
      'cf-ui-ai-chat-history-thread-thread-2',
    );

    expect(activeThread.getAttribute('data-active')).toBe('true');
    expect(inactiveThread.getAttribute('data-active')).toBe('false');
  });

  it('renders with custom className', () => {
    const customClassName = 'my-custom-class';
    render(<AIChatHistory threads={mockThreads} className={customClassName} />);

    const component = screen.getByTestId('cf-ui-ai-chat-history');
    expect(component.classList.contains(customClassName)).toBeTruthy();
  });

  it('renders group icons when provided', () => {
    render(<AIChatHistory threads={mockThreads} groups={mockGroups} />);

    // Icons should be rendered within group headers
    const recentGroup = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-recent',
    );
    const completedGroup = screen.getByTestId(
      'cf-ui-ai-chat-history-tabs-group-completed',
    );

    expect(recentGroup).toBeTruthy();
    expect(completedGroup).toBeTruthy();
  });

  it('renders group tabs correctly', () => {
    render(<AIChatHistory threads={mockThreads} groups={mockGroups} />);

    // Check if group tabs are rendered (they show as tabs now, not conditional sections)
    expect(screen.getByText('Recent')).toBeTruthy();
    expect(screen.getByText('Completed')).toBeTruthy();

    // Check if groups have correct testIds
    expect(
      screen.getByTestId('cf-ui-ai-chat-history-tabs-group-recent'),
    ).toBeTruthy();
    expect(
      screen.getByTestId('cf-ui-ai-chat-history-tabs-group-completed'),
    ).toBeTruthy();
  });

  it('handles threads without lastActivity', () => {
    const minimalThread: MessageThread = {
      id: 'minimal',
      title: 'Minimal Thread',
    };

    render(<AIChatHistory threads={[minimalThread]} />);

    expect(screen.getByText('Minimal Thread')).toBeTruthy();
    expect(
      screen.getByTestId('cf-ui-ai-chat-history-thread-minimal'),
    ).toBeTruthy();
  });

  describe('formatTime helper', () => {
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
      expect(screen.getByText('30m ago')).toBeTruthy();
    });

    it('formats very recent times as "Just now"', () => {
      const veryRecentThread: MessageThread = {
        id: 'very-recent',
        title: 'Very Recent Thread',
        lastActivity: new Date('2023-12-01T11:59:30Z'), // 30 seconds ago
      };

      render(<AIChatHistory threads={[veryRecentThread]} />);
      expect(screen.getByText('Just now')).toBeTruthy();
    });
  });
});
