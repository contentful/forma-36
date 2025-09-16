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
    quota: {
      control: {
        type: 'number',
      },
    },
    periodType: { control: { disable: true } },
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

export const Entitlements: StoryObj<UsageCountProps> = {
  render: (args) => {
    const { valueUnit, value, quota } = args;
    return (
      <UsageCount
        variant="entitlement"
        value={value || 150}
        valueUnit={valueUnit || 'GB'}
        quota={quota || 200}
      />
    );
  },
};
