import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';

import { HelpText } from '../src';
import type { HelpTextInternalProps } from '../src/help-text-changed/HelpText';

export default {
  title: 'Form Elements/HelpText',
  component: HelpText,
  parameters: {
    propTypes: [HelpText['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Default: Story<HelpTextInternalProps> = (args) => {
  return <HelpText {...args} />;
};

Default.args = {
  children: 'Lorem Ipsum dolor sit amet',
};
