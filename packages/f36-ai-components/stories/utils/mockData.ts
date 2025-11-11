import * as icons from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
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
    onThreadClick: action('thread-1-click'),
    status: 'completed',
    group: 'recent',
  },
  {
    id: '2',
    title: 'Help with Spanish grammar',
    lastActivity: new Date('2024-11-08T09:15:00'),
    onThreadClick: action('thread-2-click'),
    status: 'in-progress',
    group: 'recent',
  },
  {
    id: '3',
    title: 'Translate technical documentation',
    lastActivity: new Date('2024-11-07T16:45:00'),
    onThreadClick: action('thread-3-click'),
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
      'Can you help me translate this marketing copy from English to Spanish? I want to make sure the tone stays professional but friendly.',
  },
  {
    authorRole: 'assistant',
    content: `I'd be happy to help you translate your marketing copy from English to Spanish while maintaining a professional yet friendly tone. Please share the text you'd like me to translate, and I'll ensure it captures the right nuance for your target audience.

Here are a few things I'll consider:
- **Cultural context** - Adapting expressions that work well in Spanish-speaking markets
- **Tone consistency** - Maintaining the balance between professionalism and friendliness
- **Marketing effectiveness** - Using persuasive language that resonates with Spanish speakers

Go ahead and paste your content!`,
  },
  {
    authorRole: 'user',
    content:
      "Here's the text: 'Transform your business with our cutting-edge solutions. Join thousands of satisfied customers who trust us to deliver results.'",
  },
  {
    authorRole: 'assistant',
    content: `Here's a professional yet friendly Spanish translation:

**'Transforma tu negocio con nuestras soluciones innovadoras. Únete a miles de clientes satisfechos que confían en nosotros para obtener resultados.'**

Key translation choices:
- 'Transforma' (transform) - direct and action-oriented
- 'soluciones innovadoras' (innovative solutions) - sounds more natural than 'de vanguardia'
- 'Únete' (join) - friendly and inviting
- 'confían en nosotros' (trust us) - builds credibility

This version maintains the professional tone while feeling warm and approachable in Spanish.`,
  },
];
