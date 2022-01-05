import React from 'react';
import { Flex, Heading, Paragraph } from '@contentful/f36-components';

export default function HeadingSpacingExample() {
  return (
    <Flex flexDirection="column">
      <Heading>Your media will hang here</Heading>
      <Paragraph>
        Media assets you upload will show up here. Start by uploading your first
        one.
      </Paragraph>
    </Flex>
  );
}
