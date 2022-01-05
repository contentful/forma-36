import React from 'react';
import { Flex, SectionHeading } from '@contentful/f36-components';

export default function SectionHeadingSpacingExample() {
  return (
    <Flex flexDirection="column">
      <SectionHeading marginBottom="none">
        I love Forma 36 design system.
      </SectionHeading>
      <SectionHeading marginBottom="spacingXl">
        I love Forma 36 design system.
      </SectionHeading>
      <SectionHeading marginTop="spacingS">
        I love Forma 36 design system.
      </SectionHeading>
    </Flex>
  );
}
