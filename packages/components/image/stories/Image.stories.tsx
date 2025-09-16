import React from 'react';
import type { StoryFn, Meta } from '@storybook/react-vite';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { Image, type ImageProps } from '../src/Image';

export default {
  component: Image,
  title: 'Components/Image',
} as Meta;

export const Overview: StoryFn<ImageProps> = () => {
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
            src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=100&h=100"
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
