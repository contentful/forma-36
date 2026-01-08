import * as icons from '@contentful/f36-icons';
import { action } from '@storybook/addon-actions';
import React from 'react';
import {
  AIChatSuggestionPill,
  AIChatSuggestionPillProps,
} from '../src/AIChatSuggestionPill';

export default {
  title: 'Components/AIChat/AIChatSuggestionPill',
  component: AIChatSuggestionPill,
  argTypes: {
    text: { control: 'text' },
    isActive: { control: 'boolean' },
    icon: {
      type: 'string',
      control: 'select',
      options: ['', ...Object.keys(icons)],
      description: 'Icon to display in the pill',
    },
    onClick: { action: 'clicked' },
    className: { control: false },
    testId: { control: false },
  },
};

export const Default = (args: AIChatSuggestionPillProps & { icon: string }) => {
  const { icon, ...componentProps } = args;

  return (
    <AIChatSuggestionPill
      {...componentProps}
      icon={icon ? icons[icon] : undefined}
    />
  );
};

Default.args = {
  icon: 'UsersIcon',
  text: 'How many mobile visitors do we have?',
  isActive: false,
  onClick: action('Pill clicked'),
};
