import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { UsageCount, type UsageCountProps } from '../src/UsageCount';

export default {
  component: UsageCount,
  title: 'Components/UsageCount',
} as Meta;

export const Entitlements: Story<UsageCountProps> = () => {
  return (
    <UsageCount variant="entitlement" value={150} valueUnit="GB" quota={200} />
  );
};
