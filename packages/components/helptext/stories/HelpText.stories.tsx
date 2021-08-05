import React from 'react';
import type { Meta } from '@storybook/react/types-6-0';

import { HelpText } from '../src/HelpText';
import type { HelpTextProps } from '../src/HelpText';

export default {
  title: 'Components/HelpText',
  component: HelpText,
  parameters: {
    propTypes: [HelpText['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta;

export const Default = ({ ref, children, ...args }: HelpTextProps) => {
  return <HelpText {...args}>{children}</HelpText>;
};

Default.args = {
  children: 'Lorem Ipsum dolor sit amet',
};
