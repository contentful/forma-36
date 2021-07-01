import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Pill } from '../src/Pill';
import type { PillProps } from '../src/Pill';

export default {
  component: Pill,
  parameters: {
    propTypes: Pill['__docgenInfo'],
  },
  title: 'Components/Pill',
} as Meta;

export const Default: Story<PillProps> = (args) => {
  return <Pill {...args}>Pill</Pill>;
};
