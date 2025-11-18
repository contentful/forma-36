import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

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
    valueDescription: { control: { type: 'text' } },
    quota: { control: { disable: true } },
    periodType: { control: { disable: true } },
    value: {
      control: {
        type: 'number',
      },
    },
    valueUnit: { control: { disable: true } },
  },
} as Meta<UsageCountProps>;

export const Consumption: StoryObj<UsageCountProps> = {
  render: (args) => {
    const { valueDescription, value } = args;
    return (
      <UsageCount
        variant="consumption"
        value={value || 150}
        valueDescription={valueDescription || 'consumption units per year'}
      />
    );
  },
};
