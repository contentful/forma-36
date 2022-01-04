import React from 'react';
import { Flex, DisplayText } from '@contentful/f36-components';

export default function DefaultTextExample() {
  return (
    <Flex flexDirection="column">
      <DisplayText size="huge">
        I love Forma 36 design system (huge)
      </DisplayText>
      <DisplayText size="large">
        I love Forma 36 design system (large)
      </DisplayText>
      <DisplayText>I love Forma 36 design system</DisplayText>
    </Flex>
  );
}
