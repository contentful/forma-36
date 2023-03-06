import React from 'react';
import { Flex, Caption } from '@contentful/f36-components';

export default function CaptionExample() {
  return (
    <Flex flexDirection="column">
      <Caption fontWeight="fontWeightMedium">Status</Caption>
      <Caption>Published</Caption>
    </Flex>
  );
}
