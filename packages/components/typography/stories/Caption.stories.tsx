import React from 'react';
import { Flex } from '@contentful/f36-core';

import { Caption, CaptionProps } from '../src/Caption/Caption';
import { Paragraph } from '../src/Paragraph/Paragraph';

export default {
  title: 'Typography/Caption',
  component: Caption,
  parameters: {
    propTypes: [Caption['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
  },
};

export const Basic = (props: CaptionProps<'span'>) => <Caption {...props} />;

Basic.args = {
  children: 'Caption',
};

export const Overview = (props: CaptionProps) => (
  <>
    <Flex alignItems="center" gap="spacingS">
      <Paragraph marginBottom="none">fontWeightNormal</Paragraph>
      <Caption {...props} fontWeight="fontWeightNormal" />
    </Flex>

    <Flex alignItems="center" gap="spacingS">
      <Paragraph marginBottom="none">fontWeightMedium</Paragraph>
      <Caption {...props} fontWeight="fontWeightMedium" />
    </Flex>
  </>
);

Overview.args = {
  children: 'Caption',
};
