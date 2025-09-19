import React from 'react';
import type { StoryObj, Meta } from '@storybook/react-vite';

import { HelpText } from '../src';
import type { HelpTextInternalProps } from '../src/HelpText/HelpText';

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

export const Default: StoryObj<HelpTextInternalProps> = {
  render: (args) => {
    return <HelpText {...args} />;
  },

  args: {
    children: 'Lorem Ipsum dolor sit amet',
  },
};
