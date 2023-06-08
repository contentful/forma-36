import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { Image, type ImageProps } from '../src/Image';

export default {
  component: Image,
  title: 'Components/Image',
} as Meta;

export const Overview: Story<ImageProps> = () => {
  return (
    <>
      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Basic
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <Image
            alt=""
            height="100px"
            width="100px"
            src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=100&h=100"
          />
        </Flex>
      </Flex>

      <Flex flexDirection="column" marginBottom="spacingL">
        <SectionHeading as="h3" marginBottom="spacingS">
          Without a src
        </SectionHeading>

        <Flex flexDirection="row" marginBottom="spacingM">
          <Image alt="" height="100px" width="100px" />
        </Flex>
      </Flex>
    </>
  );
};
