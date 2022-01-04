import React from 'react';
import { Paragraph, Flex } from '@contentful/f36-components';

export default function ParagraphTruncatedExample() {
  return (
    <Flex style={{ maxWidth: '200px' }}>
      <Paragraph isTruncated>
        I love Forma 36 design system, I love Forma 36 design system, I love
        Forma 36 design system
      </Paragraph>
    </Flex>
  );
}
