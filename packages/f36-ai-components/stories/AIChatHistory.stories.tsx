import { Tooltip } from '@contentful/f36-components';
import {
  CheckCircleIcon,
  CheckIcon,
  ClockIcon,
  ColumnsIcon,
  EyeIcon,
  LightningIcon,
  WarningIcon,
} from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import { cx } from 'emotion';
import React from 'react';
import {
  AIChatHistory,
  MessageThread,
} from '../src/AIChatHistory/AIChatHistory';
import { getStyles } from '../src/AIChatHistory/AIChatHistoryThread/AIChatHistoryThread.styles';

interface MockThreadData {
  title: string;
  group: 'paused' | 'processing' | 'done';
  timeOffset: number;
  status?: 'review' | 'error';
}

const mockThreadsData: MockThreadData[] = [
  {
    title:
      'Localize Content Models for Japan Localize Content Models for Japan',
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
          <Tooltip
            content="The agent failed. Provide more input to continue."
            placement="top"
          >
            <WarningIcon
              key={`warning-${index}`}
              className={cx(styles.statusIcon, styles.warningStatusIcon)}
            />
          </Tooltip>
        );
        break;
      case 'review':
        statusIcon = (
          <Tooltip
            content="The agent needs your review or input to proceed."
            placement="top"
          >
            <EyeIcon key={`eye-${index}`} className={styles.statusIcon} />
          </Tooltip>
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

export default {
  title: 'Components/AIChat/AIChatHistory',
  component: AIChatHistory,
  argTypes: {
    threads: { control: { disable: true } },
    groups: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

const render = (args) => (
  <AIChatHistory {...args} style={{ width: '330px', height: '380px' }} />
);

export const Default = (args) => render(args);

Default.args = {
  threads: createMockThreads(),
  groups: [
    {
      id: 'paused',
      label: 'Paused',
      icon: <ColumnsIcon />,
      filter: (thread: MessageThread) => thread.group === 'paused',
    },
    {
      id: 'processing',
      label: 'Processing',
      icon: <LightningIcon />,
      filter: (thread: MessageThread) => thread.group === 'processing',
    },
    {
      id: 'done',
      label: 'Done',
      icon: <CheckIcon />,
      filter: (thread: MessageThread) => thread.group === 'done',
    },
  ],
};

export const TwoGroups = (args) => render(args);

TwoGroups.args = {
  threads: createMockThreads(),
  groups: [
    {
      id: 'processing',
      label: 'Recent',
      icon: <ClockIcon />,
      filter: (thread: MessageThread) =>
        thread.group === 'processing' || thread.group === 'paused',
    },
    {
      id: 'done',
      label: 'Finished',
      icon: <CheckCircleIcon />,
      filter: (thread: MessageThread) => thread.group === 'done',
    },
  ],
};

TwoGroups.parameters = {
  docs: {
    description: {
      story: 'Threads organized into two groups.',
    },
  },
};

export const NoGroups = (args) => render(args);

NoGroups.args = {
  threads: createMockThreads(),
};

NoGroups.parameters = {
  docs: {
    description: {
      story: 'Threads without any groups.',
    },
  },
};

export const EmptyWithGroups = (args) => render(args);

EmptyWithGroups.args = {
  threads: [],
  groups: [
    {
      id: 'paused',
      label: 'Paused',
      icon: <ColumnsIcon />,
      filter: (thread: MessageThread) => thread.group === 'paused',
    },
    {
      id: 'processing',
      label: 'Processing',
      icon: <LightningIcon />,
      filter: (thread: MessageThread) => thread.group === 'processing',
    },
    {
      id: 'done',
      label: 'Done',
      icon: <CheckIcon />,
      filter: (thread: MessageThread) => thread.group === 'done',
    },
  ],
};

EmptyWithGroups.parameters = {
  docs: {
    description: {
      story:
        'Empty state shown when no threads are available for the selected group filter.',
    },
  },
};

export const EmptyWithoutGroups = (args) => render(args);

EmptyWithoutGroups.args = {
  threads: [],
};

EmptyWithoutGroups.parameters = {
  docs: {
    description: {
      story: 'Empty state shown when no threads are available.',
    },
  },
};
