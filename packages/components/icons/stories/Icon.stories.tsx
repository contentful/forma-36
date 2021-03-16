import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Icon } from '../src/Icon';
import type { IconProps } from '../src/Icon';

export default {
  component: Icon,
  parameters: {
    propTypes: Icon['__docgenInfo'],
  },
  title: 'Components/Icon',
} as Meta;

export const Default: Story<IconProps> = (args) => {
  return <Icon {...args}>Icon</Icon>;
};
