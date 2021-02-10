import React from 'react';

import HelpText, { HelpTextProps } from './HelpText';
import TextLink from '../TextLink';

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
};

interface Args extends HelpTextProps {
  helpText: string;
}
export const Basic = ({ helpText, ...args }: Args) => (
  <HelpText {...args}>{helpText}</HelpText>
);

Basic.args = {
  helpText: 'Lorem Ipsum dolor sit amet',
};

export const WithLink = () => (
  <HelpText>
    Some Text and then <TextLink> a link.</TextLink>
  </HelpText>
);
