import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { UsageCount, type UsageCountProps } from '../src/UsageCount';

export default {
  component: UsageCount,
  title: 'Components/UsageCount',
} as Meta;

export const Consumption: Story<UsageCountProps> = () => {
  return (
    <UsageCount
      variant={'consumption'}
      value={150}
      valueDescription="consumption units per year"
    ></UsageCount>
  );
};
