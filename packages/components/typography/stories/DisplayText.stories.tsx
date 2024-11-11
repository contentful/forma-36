import React from 'react';
import { Flex } from '@contentful/f36-core';
import {
  DisplayText,
  DisplayTextInternalProps,
} from '../src/DisplayText/DisplayText';
import { Paragraph } from '../src/Paragraph/Paragraph';

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

export const Basic = (props: DisplayTextInternalProps) => (
  <DisplayText {...props} />
);

Basic.args = {
  children: 'Display text',
};

export const Overview = (props: DisplayTextInternalProps) => (
  <>
    <Flex alignItems="center">
      <Flex marginRight="spacingS">
        <Paragraph>36</Paragraph>
      </Flex>
      <DisplayText {...props} size="large" />
    </Flex>

    <Flex alignItems="center">
      <Flex marginRight="spacingS">
        <Paragraph>24</Paragraph>
      </Flex>
      <DisplayText {...props} size="default" />
    </Flex>
  </>
);

Overview.args = {
  children: 'Display text',
};
