import React from 'react';
import { Flex, DisplayText } from '@contentful/f36-components';

export default function DisplayTextExample() {
  return (
    <Flex flexDirection="column">
      <DisplayText size="large">Pages</DisplayText>
      <DisplayText>Select space</DisplayText>
    </Flex>
  );
}
