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

interface Args extends HelpTextProps {
  helpText: string;
}
export const Default = ({ helpText, ...args }: Args) => (
  <HelpText {...args}>{helpText}</HelpText>
);

Default.args = {
  helpText: 'Lorem Ipsum dolor sit amet',
};
