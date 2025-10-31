import { Paragraph } from '@contentful/f36-components';
import React from 'react';

import { AIChatReasoning } from '../src/AIChatReasoning/AIChatReasoning';
import { action } from '@storybook/addon-actions';

export default {
  component: AIChatReasoning,
  title: 'Components/AIChatReasoning',
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Custom label text to display',
    },
    content: {
      control: 'text',
      description: 'Content to be rendered inside the reasoning component',
    },
    isExpanded: {
      control: 'boolean',
      description: 'Whether the component is expanded',
    },
    children: { control: { disable: true } },
    onToggle: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
  },
};

export const Basic = (args) => {
  const { content, ...componentProps } = args;

  return (
    <div style={{ width: '350px' }}>
      <AIChatReasoning {...componentProps} onToggle={action('toggled')}>
        <Paragraph>{content}</Paragraph>
      </AIChatReasoning>
    </div>
  );
};

Basic.args = {
  label: 'Processing...',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
