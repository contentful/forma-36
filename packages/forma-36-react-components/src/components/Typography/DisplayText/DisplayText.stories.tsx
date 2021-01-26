import React from 'react';
import DisplayText, { DisplayTextProps } from './DisplayText';

export default {
  title: 'Components/Typography/DisplayText',
  component: DisplayText,
  parameters: {
    propTypes: [DisplayText['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

interface Args extends DisplayTextProps {
  displayText: string;
}

export const Basic = ({ displayText, ...args }: Args) => (
  <DisplayText {...args}>{displayText}</DisplayText>
);

Basic.args = {
  element: 'h4',
  size: 'default',
  displayText: 'Display text',
};
