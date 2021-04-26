import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Button } from '../src/Button';
import type { ButtonProps } from '../src/Button';

export default {
  component: Button,
  parameters: {
    propTypes: Button['__docgenInfo'],
  },
  title: 'Components/Button',
} as Meta;

export const Default: Story<ButtonProps> = (args) => {
  return <Button {...args}>Button</Button>;
};
