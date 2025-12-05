import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { UsageCount, type UsageCountProps } from '../src/UsageCount';

const meta = {
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
} satisfies Meta<typeof UsageCount>;

export default meta;
export const Entitlements = ({
  valueUnit,
  value,
  quota,
  includedLabel,
}: UsageCountProps) => {
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
