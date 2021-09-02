import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { ValidationMessage } from '../src/validation-message';
import type { ValidationMessageInternalProps } from '../src/validation-message/ValidationMessage';

export default {
  title: 'Form Elements/ValidationMessage',
  component: ValidationMessage,
  parameters: {
    propTypes: [ValidationMessage['__docgenInfo']],
  },
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    display: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Default: Story<ValidationMessageInternalProps> = (args) => (
  <ValidationMessage {...args} />
);

Default.args = {
  children: 'Validation message',
};
