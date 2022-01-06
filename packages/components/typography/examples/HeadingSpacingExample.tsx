import React from 'react';
import { Flex, Heading } from '@contentful/f36-components';

export default function HeadingSpacingExample() {
  return (
    <Flex flexDirection="column">
      <Heading marginBottom="none">I love Forma 36 design system.</Heading>
      <Heading marginTop="spacingS">I love Forma 36 design system.</Heading>
    </Flex>
  );
}
