import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Workbench } from '../src/Workbench';
import type { WorkbenchProps } from '../src/Workbench';

export default {
  component: Workbench,
  title: 'Components/Workbench',
} as Meta;

export const Default: Story<WorkbenchProps> = (args) => {
  return <Workbench {...args}>Workbench</Workbench>;
};
