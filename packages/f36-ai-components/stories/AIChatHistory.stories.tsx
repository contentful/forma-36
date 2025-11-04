import {
  CheckIcon,
  ColumnsIcon,
  EyeIcon,
  LightningIcon,
  WarningIcon,
} from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  AIChatHistory,
  MessageGroup,
  MessageThread,
} from '../src/AIChatHistory/AIChatHistory';
import { getStyles } from '../src/AIChatHistory/AIChatHistoryThread/AIChatHistoryThread.styles';
import { cx } from 'emotion';

// Sample data for stories
interface MockThreadData {
  title: string;
  group: 'paused' | 'processing' | 'done';
  timeOffset: number;
  status?: 'review' | 'error';
}

const mockThreadsData: MockThreadData[] = [
  {
    title: 'Localize Content Models for Japan',
    group: 'paused',
    timeOffset: 3 * 60 * 1000, // 3 minutes ago,
    status: 'review',
  },
  {
    title: 'Tailor Content Models for the Japanese Audience',
    group: 'processing',
    timeOffset: 3 * 60 * 1000, // 3 minutes ago
  },
  {
    title: 'Customize Content Models for Japanese Users',
    group: 'done',
    timeOffset: 3 * 60 * 1000, // 3 minutes ago
  },
  {
    title: "Translate 'About Us' for Japanese market",
    group: 'paused',
    timeOffset: 7 * 60 * 1000, // 7 minutes ago
  },
  {
    title: 'Adapt About Us for the Japanese Market',
    group: 'processing',
    timeOffset: 7 * 60 * 1000, // 7 minutes ago
  },
  {
    title: 'Revise About Us for Japanese Consumers',
    group: 'done',
    timeOffset: 7 * 60 * 1000, // 7 minutes ago
  },
  {
    title: 'Optimize SEO keywords for Japan',
    group: 'paused',
    timeOffset: 58 * 60 * 1000, // 58 minutes ago
    status: 'review',
  },
  {
    title: 'Enhance SEO Keywords for the Japanese Market',
    group: 'processing',
    timeOffset: 58 * 60 * 1000, // 58 minutes ago
  },
  {
    title: 'Optimize SEO Keywords for the Japanese Audience',
    group: 'done',
    timeOffset: 58 * 60 * 1000, // 58 minutes ago
  },
  {
    title: 'Adapt Contact page for Japan',
    group: 'paused',
    timeOffset: 20 * 60 * 60 * 1000, // 20 hours ago
  },
  {
    title: 'Modify Contact Page for Japanese Users',
    group: 'processing',
    timeOffset: 20 * 60 * 60 * 1000, // 20 hours ago
  },
  {
    title: 'Revamp Contact Page for Japanese Visitors',
    group: 'done',
    timeOffset: 20 * 60 * 60 * 1000, // 20 hours ago
  },
  {
    title: 'Revise FAQ content for Japan',
    group: 'paused',
    timeOffset: 4 * 24 * 60 * 60 * 1000, // 4 days ago
    status: 'error',
  },
  {
    title: 'Revise FAQ content for Japan 2',
    group: 'paused',
    timeOffset: 4 * 24 * 60 * 60 * 1000, // 4 days ago
    status: 'error',
  },
  {
    title: 'Update FAQ Section for Japanese Customers',
    group: 'processing',
    timeOffset: 4 * 24 * 60 * 60 * 1000, // 4 days ago
  },
  {
    title: 'Refresh FAQ Section for Japanese Clients',
    group: 'done',
    timeOffset: 4 * 24 * 60 * 60 * 1000, // 4 days ago
  },
  {
    title: 'Create Japanese metadata',
    group: 'paused',
    timeOffset: 28 * 24 * 60 * 60 * 1000, // 28 days ago
    status: 'review',
  },
  {
    title: 'Develop Metadata for the Japanese Audience',
    group: 'processing',
    timeOffset: 28 * 24 * 60 * 60 * 1000, // 28 days ago
  },
  {
    title: 'Create Metadata for the Japanese Audience',
    group: 'done',
    timeOffset: 28 * 24 * 60 * 60 * 1000, // 28 days ago
  },
];

const createMockThreads = (): MessageThread[] => {
  const styles = getStyles();

  return Array.from(mockThreadsData, (mockData, index) => {
    // Map status to appropriate icon
    let statusIcon = null;

    switch (mockData.status) {
      case 'error':
        statusIcon = (
          <WarningIcon
            key={`warning-${index}`}
            className={cx(styles.statusIcon, styles.warningIcon)}
          />
        );
        break;
      case 'review':
        statusIcon = (
          <EyeIcon key={`eye-${index}`} className={styles.statusIcon} />
        );
        break;
      default:
        statusIcon = null;
        break;
    }

    return {
      id: `thread-${index + 1}`,
      title: mockData.title,
      lastActivity: new Date(Date.now() - mockData.timeOffset),
      onThreadClick: action(`${mockData.title} clicked`),
      statusIcon,
      status: mockData.status,
      group: mockData.group,
    };
  });
};

const statusGroups: MessageGroup[] = [
  {
    id: 'paused',
    label: 'Paused',
    icon: <ColumnsIcon />,
    filter: (thread) => thread.group === 'paused',
  },
  {
    id: 'processing',
    label: 'Processing',
    icon: <LightningIcon />,
    filter: (thread) => thread.group === 'processing',
  },
  {
    id: 'done',
    label: 'Done',
    icon: <CheckIcon />,
    filter: (thread) => thread.group === 'done',
  },
];

export default {
  title: 'Components/AIChatHistory',
  component: AIChatHistory,
  argTypes: {
    threads: {
      description: 'Array of message threads to display',
    },
    groups: {
      description: 'Optional groups to organize threads',
    },
    maxHeight: {
      description: 'Maximum height of the scrollable area',
      control: { type: 'text' },
    },
    isLoading: {
      description: 'Loading state',
      control: { type: 'boolean' },
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'Displays a scrollable list of message threads, optionally grouped by status. Supports filtering threads into groups with custom labels and icons.',
      },
    },
  },
};

export const Default = {
  args: {
    threads: createMockThreads(),
    groups: statusGroups,
    maxHeight: '400px',
  },
};

export const WithGroups = {
  args: {
    threads: createMockThreads(),
    groups: statusGroups,
    maxHeight: '600px',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Threads organized into groups with custom labels and icons. Groups are filtered dynamically based on thread properties. This shows the refined sidebar-style design with better spacing and typography.',
      },
    },
  },
};

export const EmptyState = {
  args: {
    threads: [],
  },
  parameters: {
    docs: {
      description: {
        story: 'Default empty state when no threads are available.',
      },
    },
  },
};

export const CustomEmptyState = {
  args: {
    threads: [],
    emptyState: (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h3>No conversations found</h3>
        <p>Start a new conversation to see it here.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom empty state with custom content.',
      },
    },
  },
};

export const Loading = {
  args: {
    threads: createMockThreads(),
    isLoading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state while threads are being fetched.',
      },
    },
  },
};

export const SingleGroup = {
  args: {
    threads: createMockThreads(),
    groups: [statusGroups[0]], // Only "Recent" group
  },
  parameters: {
    docs: {
      description: {
        story: 'Threads organized into a single group.',
      },
    },
  },
};

export const ScreenshotExample = {
  args: {
    threads: [
      {
        id: '1',
        title: 'Localize Content Models for Japan',
        lastActivity: new Date(Date.now() - 3 * 60 * 1000),
        statusIcon: <EyeIcon />,
        statusType: 'visible' as const,
        onThreadClick: action('Localize Content Models clicked'),
      },
      {
        id: '2',
        title: 'Translate About Us for Japanese market',
        lastActivity: new Date(Date.now() - 7 * 60 * 1000),
        isActive: true,
        onThreadClick: action('Translate About Us clicked'),
      },
      {
        id: '3',
        title: 'Optimize SEO keywords for Japan',
        lastActivity: new Date(Date.now() - 58 * 60 * 1000),
        statusIcon: <EyeIcon />,
        statusType: 'visible' as const,
        onThreadClick: action('Optimize SEO clicked'),
      },
      {
        id: '4',
        title: 'Adapt Contact page for Japan',
        lastActivity: new Date(Date.now() - 20 * 60 * 60 * 1000),
        onThreadClick: action('Adapt Contact clicked'),
      },
      {
        id: '5',
        title: 'Revise FAQ content for Japan',
        lastActivity: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        statusIcon: <WarningIcon />,
        statusType: 'warning' as const,
        onThreadClick: action('Revise FAQ clicked'),
      },
      {
        id: '6',
        title: 'Create Japanese metadata',
        lastActivity: new Date(Date.now() - 28 * 24 * 60 * 60 * 1000),
        statusIcon: <EyeIcon />,
        statusType: 'visible' as const,
        onThreadClick: action('Create metadata clicked'),
      },
    ],
    groups: statusGroups,
    maxHeight: '400px',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Exact reproduction of the provided screenshot with tab-style groups, status icons, and clean card design.',
      },
    },
  },
};

export const TabFiltering = {
  args: {
    threads: [
      // Processing threads (no status)
      {
        id: '1',
        title: 'Creating content model for Products',
        lastActivity: new Date(Date.now() - 3 * 60 * 1000),
        onThreadClick: action('Processing thread 1 clicked'),
      },
      {
        id: '2',
        title: 'Generating API documentation',
        lastActivity: new Date(Date.now() - 7 * 60 * 1000),
        isActive: true,
        onThreadClick: action('Processing thread 2 clicked'),
      },
      // Done threads (visible status)
      {
        id: '3',
        title: 'SEO optimization completed',
        lastActivity: new Date(Date.now() - 58 * 60 * 1000),
        statusIcon: <EyeIcon />,
        statusType: 'visible' as const,
        onThreadClick: action('Done thread 1 clicked'),
      },
      {
        id: '4',
        title: 'Translation workflow finished',
        lastActivity: new Date(Date.now() - 2 * 60 * 60 * 1000),
        statusIcon: <EyeIcon />,
        statusType: 'visible' as const,
        onThreadClick: action('Done thread 2 clicked'),
      },
      // Paused threads (warning status)
      {
        id: '5',
        title: 'Content review paused',
        lastActivity: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        statusIcon: <WarningIcon />,
        statusType: 'warning' as const,
        onThreadClick: action('Paused thread 1 clicked'),
      },
      {
        id: '6',
        title: 'Migration halted due to error',
        lastActivity: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        statusIcon: <WarningIcon />,
        statusType: 'warning' as const,
        onThreadClick: action('Paused thread 2 clicked'),
      },
    ],
    groups: statusGroups,
    maxHeight: '400px',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates tab filtering functionality. Click different tabs to see how threads are filtered: Processing (2 threads), Done (2 threads), Paused (2 threads).',
      },
    },
  },
};

export const SidebarStyle = {
  args: {
    threads: createMockThreads(),
    groups: statusGroups,
    maxHeight: '500px',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Clean sidebar-style design without borders, featuring rounded thread cards with subtle hover effects and refined typography hierarchy.',
      },
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div
        style={{
          width: '300px',
          height: '500px',
          backgroundColor: '#f7f9fc',
          padding: '16px',
          borderRadius: '8px',
        }}
      >
        <Story />
      </div>
    ),
  ],
};
