import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import Portal from './Portal';
import type { PortalProps } from './Portal';

export default {
  title: 'Utilities/Portal',
  component: Portal,
  parameters: {
    propTypes: [Portal['__docgenInfo']],
  },
  argTypes: {
    children: { control: { type: 'text' } },
    container: { control: { disable: true } },
  },
} as Meta;

export const Default: Story<PortalProps> = (args) => <Portal {...args} />;

Default.args = { children: <>Portal child content</> };
