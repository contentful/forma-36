import React from 'react';
import { Flex, Subheading } from '@contentful/f36-components';

export default function SubheadingSpacingExample() {
  return (
    <Flex flexDirection="column">
      <Subheading marginBottom="none">
        I love Forma 36 design system.
      </Subheading>
      <Subheading marginBottom="spacingXl">
        I love Forma 36 design system.
      </Subheading>
      <Subheading marginTop="spacingS">
        I love Forma 36 design system.
      </Subheading>
    </Flex>
  );
}
