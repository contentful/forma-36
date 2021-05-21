import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { Timepicker } from '../src/';
import type { TimepickerProps } from '../src/';

export default {
  title: 'Form Elements/Timepicker',
  component: Timepicker,
  parameters: {
    propTypes: [Timepicker['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Default: Story<TimepickerProps> = ({ ...args }) => (
  <Timepicker {...args} />
);

Default.args = { value: '10:40' };
