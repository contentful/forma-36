import * as icons from '@contentful/f36-icons';
import React from 'react';

export interface MockThread {
  id: string;
  title: string;
  lastActivity: Date;
  onThreadClick: () => void;
  status: 'completed' | 'in-progress';
  group: 'recent' | 'older';
}

export interface MockHistoryGroup {
  id: string;
  label: string;
  icon: React.ReactElement;
  filter: (thread: MockThread) => boolean;
}

export const mockThreads: MockThread[] = [
  {
    id: '1',
    title: 'Translate marketing copy',
    lastActivity: new Date('2024-11-09T14:30:00'),
    onThreadClick: () => {},
    status: 'completed',
    group: 'recent',
  },
  {
    id: '2',
    title: 'Help with Spanish grammar',
    lastActivity: new Date('2024-11-08T09:15:00'),
    onThreadClick: () => {},
    status: 'in-progress',
    group: 'recent',
  },
  {
    id: '3',
    title: 'Translate technical documentation',
    lastActivity: new Date('2024-11-07T16:45:00'),
    onThreadClick: () => {},
    status: 'completed',
    group: 'older',
  },
];

export const mockHistoryGroups: MockHistoryGroup[] = [
  {
    id: 'recent',
    label: 'Recent',
    icon: React.createElement(icons.ClockIcon),
    filter: (thread) => thread.group === 'recent',
  },
  {
    id: 'older',
    label: 'Older',
    icon: React.createElement(icons.FileIcon),
    filter: (thread) => thread.group === 'older',
  },
];

export interface MockChatMessage {
  authorRole: 'user' | 'assistant';
  content: string;
}

export const mockChatMessages: MockChatMessage[] = [
  {
    authorRole: 'user',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    authorRole: 'assistant',
    content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Laboris nisi ut aliquip ex ea commodo consequat!`,
  },
  {
    authorRole: 'user',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    authorRole: 'assistant',
    content: `Sunt in culpa qui officia deserunt mollit anim id est laborum:

**Lorem ipsum dolor sit amet, consectetur adipiscing elit**, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
  },
  {
    authorRole: 'user',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    authorRole: 'assistant',
    content: 'Donec magna quam, aliquet eget?',
  },
  {
    authorRole: 'user',
    content: 'EG!',
  },
];
