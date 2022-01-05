import React from 'react';
import { Subheading, Flex } from '@contentful/f36-components';

export default function SubheadingTruncatedExample() {
  return (
    <Flex style={{ maxWidth: '200px' }}>
      <Subheading isTruncated>
        I love Forma 36 design system, I love Forma 36 design system, I love
        Forma 36 design system
      </Subheading>
    </Flex>
  );
}
