import React from 'react';
import { Flex, DisplayText } from '@contentful/f36-components';

export default function DisplayTextMarginsExample() {
  return (
    <Flex flexDirection="column">
      <DisplayText size="large" marginBottom="spacing4Xl">
        Pages
      </DisplayText>
      <DisplayText marginLeft="spacingM">Select space</DisplayText>
    </Flex>
  );
}
