import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Label } from '../src';
import type { LabelInternalProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: Label,
  parameters: {
    propTypes: Label['__docgenInfo'],
  },
  title: 'Form Elements/Label',
} as Meta;

export const Default: Story<LabelInternalProps> = (args) => {
  return <Label {...args} />;
};

Default.args = {
  requiredText: 'required',
  children: 'Input label',
};
