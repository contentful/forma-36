import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { ButtonGroup } from '../src/ButtonGroup';
import type { ButtonGroupProps } from '../src/ButtonGroup';

export default {
  component: ButtonGroup,
  parameters: {
    propTypes: ButtonGroup['__docgenInfo'],
  },
  title: 'Components/ButtonGroup',
} as Meta;

export const Default: Story<ButtonGroupProps> = (args) => {
  return <ButtonGroup {...args}>ButtonGroup</ButtonGroup>;
};
