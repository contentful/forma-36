import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { FormLabel } from '../src';
import type { FormLabelInternalProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: FormLabel,
  parameters: {
    propTypes: FormLabel['__docgenInfo'],
  },
  title: 'Form Elements/FormLabel',
} as Meta;

export const Default: Story<FormLabelInternalProps> = (args) => {
  return <FormLabel {...args} />;
};

Default.args = {
  requiredText: 'required',
  children: 'Input label',
};
