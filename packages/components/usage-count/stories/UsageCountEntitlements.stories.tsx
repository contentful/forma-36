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
    includedLabel: {
      control: {
        type: 'text',
      },
    },
    valueUnit: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<UsageCountProps>;

export const Entitlements: Story<UsageCountProps> = ({
  valueUnit,
  value,
  quota,
  includedLabel,
}) => {
  return (
    <UsageCount
      variant="entitlement"
      value={value || 150}
      valueUnit={valueUnit || 'GB'}
      quota={quota || 200}
      includedLabel={includedLabel}
    />
  );
};
