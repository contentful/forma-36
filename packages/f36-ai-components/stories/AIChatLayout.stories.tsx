import type { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';

import {
  AIChatLayout,
  type AIChatLayoutProps,
} from '../src/AIChatLayout/AIChatLayout';

export default {
  component: AIChatLayout,
  title: 'Components/AIChatLayout',
} as Meta;

export const Default: Story<AIChatLayoutProps> = (args) => {
  return <AIChatLayout {...args}>AIChatLayout</AIChatLayout>;
};
