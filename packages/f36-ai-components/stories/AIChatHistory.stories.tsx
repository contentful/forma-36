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

// Sample data for stories
const createMockThreads = (count = 5): MessageThread[] => {
  const titles = [
    'Localize Content Models for Japan',
    'Translate About Us for Japanese market',
    'Optimize SEO keywords for Japan',
    'Adapt Contact page for Japan',
    'Revise FAQ content for Japan',
    'Create Japanese metadata',
    'Update product descriptions',
    'Localize pricing information',
    'Translate legal documents',
    'Adapt user interface text',
  ];

  const statusIcons = [
    <EyeIcon key="eye1" />,
    null,
    <EyeIcon key="eye2" />,
    null,
    <WarningIcon key="warning" />,
    <EyeIcon key="eye3" />,
  ];

  const statusTypes: ('visible' | 'warning' | 'success' | undefined)[] = [
    'visible',
    undefined,
    'visible',
    undefined,
    'warning',
    'visible',
  ];

  const timeOffsets = [
    3 * 60 * 1000, // 3 minutes
    7 * 60 * 1000, // 7 minutes
    58 * 60 * 1000, // 58 minutes
    20 * 60 * 60 * 1000, // 20 hours
    4 * 24 * 60 * 60 * 1000, // 4 days
    28 * 24 * 60 * 60 * 1000, // 28 days
  ];

  return Array.from({ length: count }, (_, index) => ({
    id: `thread-${index + 1}`,
    title: titles[index % titles.length],
    lastActivity: new Date(
      Date.now() -
        (timeOffsets[index % timeOffsets.length] ||
          Math.random() * 7 * 24 * 60 * 60 * 1000),
    ),
    isActive: index === 1, // Second thread is active (like in screenshot)
    onThreadClick: action(`Thread ${index + 1} clicked`),
    statusIcon: statusIcons[index % statusIcons.length],
    statusType: statusTypes[index % statusTypes.length],
  }));
};

const statusGroups: MessageGroup[] = [
  {
    id: 'paused',
    label: 'Paused',
    icon: <ColumnsIcon />,
    filter: (thread) => thread.statusType === 'warning', // Show warning status threads
  },
  {
    id: 'processing',
    label: 'Processing',
    icon: <LightningIcon />,
    filter: (thread) => !thread.statusType || thread.statusType === undefined, // Show threads without status
  },
  {
    id: 'done',
    label: 'Done',
    icon: <CheckIcon />,
    filter: (thread) =>
      thread.statusType === 'visible' || thread.statusType === 'success', // Show visible/success status threads
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
    threads: createMockThreads(6),
    groups: statusGroups,
    maxHeight: '400px',
  },
};

export const WithGroups = {
  args: {
    threads: createMockThreads(10),
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
    threads: createMockThreads(5),
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
    threads: createMockThreads(6),
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
    threads: createMockThreads(8),
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
