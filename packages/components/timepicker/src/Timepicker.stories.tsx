import React from 'react';
import { action } from '@storybook/addon-actions';

import { Timepicker, TimepickerProps } from './Timepicker';

export default {
  title: 'Components/Timepicker',
  component: Timepicker,
  parameters: {
    propTypes: [Timepicker['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

type Args = TimepickerProps & {
  label?: string;
};

export const basic = ({ label, ...args }: Args) => <Timepicker {...args} />;

basic.args = {
  value: '',
  date: '',
  onChange: action,
};
