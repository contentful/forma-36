import React from 'react';
import { Flex, DisplayText } from '@contentful/f36-components';

export default function DefaultTextMarginsExample() {
  return (
    <Flex flexDirection="column">
      <DisplayText size="huge" marginBottom="none">
        I love Forma 36 design system (huge)
      </DisplayText>
      <DisplayText size="large" marginBottom="spacing4Xl">
        I love Forma 36 design system (large)
      </DisplayText>
      <DisplayText marginLeft="spacingM">
        I love Forma 36 design system
      </DisplayText>
    </Flex>
  );
}
