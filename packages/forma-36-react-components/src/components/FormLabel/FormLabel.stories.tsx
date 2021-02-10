import React from 'react';
import FormLabel, { FormLabelProps } from './FormLabel';

export default {
  title: 'Form Elements/FormLabel',
  component: FormLabel,
  parameters: {
    propTypes: [FormLabel['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

interface Args extends FormLabelProps {
  formLabelText: string;
}

export const Basic = ({ formLabelText, ...args }: Args) => (
  <FormLabel {...args}>{formLabelText}</FormLabel>
);

Basic.args = {
  requiredText: 'requiredText',
  htmlFor: 'someInput',
  formLabelText: 'Input label',
};
