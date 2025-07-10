import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

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

export const Default: Story<UsageCountProps> = ({
  periodType,
  valueUnit,
  value,
}) => {
  return (
    <UsageCount
      variant="periodic"
      value={value || 150}
      valueUnit={valueUnit || 'GB'}
      periodType={periodType}
    />
  );
};
