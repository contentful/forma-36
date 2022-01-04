import React from 'react';
import { Heading, Flex } from '@contentful/f36-components';

export default function HeadingExample() {
  return (
    <Flex style={{ maxWidth: '200px' }}>
      <Heading isTruncated>
        I love Forma 36 design system, I love Forma 36 design system, I love
        Forma 36 design system
      </Heading>
    </Flex>
  );
}
