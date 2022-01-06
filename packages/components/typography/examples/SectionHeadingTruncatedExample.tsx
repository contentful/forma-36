import React from 'react';
import { SectionHeading, Flex } from '@contentful/f36-components';

export default function SectionHeadingTruncatedExample() {
  return (
    <Flex style={{ maxWidth: '200px' }}>
      <SectionHeading isTruncated>
        I love Forma 36 design system, I love Forma 36 design system, I love
        Forma 36 design system
      </SectionHeading>
    </Flex>
  );
}
