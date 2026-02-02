import { Button, Paragraph } from '@contentful/f36-components';
import React from 'react';

import { action } from '@storybook/addon-actions';
import { AIChatReasoning } from '../src/AIChatReasoning/AIChatReasoning';

export default {
  component: AIChatReasoning,
  title: 'Components/AIChat/AIChatReasoning',
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

export const Default = (args) => {
  const { content, ...componentProps } = args;

  return (
    <div style={{ width: '350px' }}>
      <AIChatReasoning {...componentProps} onToggle={action('toggled')}>
        <Paragraph>{content}</Paragraph>
      </AIChatReasoning>
    </div>
  );
};

Default.args = {
  label: 'Processing...',
  content:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const DynamicChildren = () => {
  const [childrenItems, setChildrenItems] = React.useState<string[]>([]);

  const addChild = () => {
    const nextNumber = childrenItems.length + 1;
    setChildrenItems((prev) => [
      ...prev,
      `New processing message #${nextNumber}`,
    ]);
  };

  const clearChildren = () => {
    setChildrenItems([]);
  };

  return (
    <div
      style={{
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="primary" size="small" onClick={addChild}>
          Add Processing Step ({childrenItems.length + 1})
        </Button>
        <Button variant="secondary" size="small" onClick={clearChildren}>
          Clear Results
        </Button>
      </div>

      <AIChatReasoning label="AI Processing..." onToggle={action('toggled')}>
        {childrenItems.map((item, index) => (
          <Paragraph key={index} style={{ marginBottom: '8px' }}>
            {item}
          </Paragraph>
        ))}
      </AIChatReasoning>
    </div>
  );
};

DynamicChildren.parameters = {
  docs: {
    description: {
      story:
        'This story demonstrates how children can be added dynamically to the AIChatReasoning component. The component correctly recalculates its height as new content is added.',
    },
  },
};
