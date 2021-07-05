import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { ValidationMessage } from '../src/ValidationMessage';
import type { ValidationMessageProps } from '../src/ValidationMessage';

export default {
  title: 'Components/ValidationMessage',
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

export const Default: Story<ValidationMessageProps> = ({
  children,
  ...args
}) => <ValidationMessage {...args}>{children}</ValidationMessage>;

Default.args = {
  children: 'Validation message',
};
