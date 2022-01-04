import React from 'react';
import { Flex, Paragraph } from '@contentful/f36-components';

export default function ParagraphSpacingExample() {
  return (
    <Flex flexDirection="column">
      <Paragraph marginBottom="none">I love Forma 36 design system.</Paragraph>
      <Paragraph marginBottom="spacingXl">
        I love Forma 36 design system.
      </Paragraph>
      <Paragraph marginTop="spacingS">I love Forma 36 design system.</Paragraph>
    </Flex>
  );
}
