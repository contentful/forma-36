import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { ValidationMessage } from '../src';

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
} as Meta<typeof ValidationMessage>;

type Story = StoryObj<typeof ValidationMessage>;

export const Default: Story = {
  args: {
    children: 'Validation message',
  },
  render: (args) => <ValidationMessage {...args} />,
};
