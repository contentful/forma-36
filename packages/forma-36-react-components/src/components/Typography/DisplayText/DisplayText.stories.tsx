import React from 'react';
import { DisplayText, DisplayTextProps } from './DisplayText';

import { Flex } from '@contentful/f36-layout';
import { Paragraph } from '../Paragraph/Paragraph';

export default {
  title: 'Typography/DisplayText',
  component: DisplayText,
  parameters: {
    propTypes: [DisplayText['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
};

interface Args extends DisplayTextProps {
  displayText: string;
}

export const Basic = ({ displayText, ...args }: Args) => (
  <DisplayText {...args}>{displayText}</DisplayText>
);

Basic.args = {
  displayText: 'Display text',
};

export const Overview = ({ displayText, ...args }: Args) => (
  <>
    <Flex alignItems="center" marginBottom="spacingL">
      <Flex marginRight="spacingS">
        <Paragraph>48</Paragraph>
      </Flex>
      <DisplayText {...args} size="huge">
        {displayText}
      </DisplayText>
    </Flex>

    <Flex alignItems="center" marginBottom="spacingL">
      <Flex marginRight="spacingS">
        <Paragraph>36</Paragraph>
      </Flex>
      <DisplayText {...args} size="large">
        {displayText}
      </DisplayText>
    </Flex>

    <Flex alignItems="center">
      <Flex marginRight="spacingS">
        <Paragraph>28</Paragraph>
      </Flex>
      <DisplayText {...args} size="default">
        {displayText}
      </DisplayText>
    </Flex>
  </>
);

Overview.args = {
  displayText: 'Display text',
};
