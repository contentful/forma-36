import React from 'react';
import { Flex, DisplayText, Paragraph } from '@contentful/f36-components';

export default function DisplayTextCompositionExample() {
  return (
    <Flex flexDirection="column" alignItems="center">
      <DisplayText>
        Nice one!{' '}
        <span role="img" aria-label="Shopping bag">
          🛍
        </span>
      </DisplayText>
      <Paragraph>You successfully purchased the Medium space.</Paragraph>
    </Flex>
  );
}
