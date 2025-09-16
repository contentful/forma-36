import React from 'react';
import type { StoryObj, Meta, StoryFn } from '@storybook/react-vite';

import { UsageCount, type UsageCountProps } from '../src/UsageCount';

export default {
  component: UsageCount,
  title: 'Components/UsageCount',
  parameters: {
    propTypes: [UsageCount['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
    variant: { control: { disable: true } },
    valueDescription: { control: { disable: true } },
    quota: { control: { disable: true } },
    periodType: {
      control: {
        options: ['month', 'year'],
        type: 'select',
      },
    },
    value: {
      control: {
        type: 'number',
      },
    },
    valueUnit: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<UsageCountProps>;

export const Default: StoryObj<UsageCountProps> = {
  render: (args) => {
    const { periodType, valueUnit, value, ...other } = args;
    return (
      <UsageCount
        {...other}
        variant="periodic"
        value={value || 150}
        valueUnit={valueUnit || 'GB'}
        periodType={periodType}
      />
    );
  },
};
