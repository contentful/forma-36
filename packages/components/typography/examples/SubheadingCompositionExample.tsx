import React from 'react';
import {
  Flex,
  Subheading,
  Paragraph,
  TextInput,
} from '@contentful/f36-components';

export default function SubheadingSpacingExample() {
  return (
    <Flex flexDirection="column">
      <Subheading>Content type ID</Subheading>
      <Paragraph>
        Use this ID to retrieve everything related to this content type via the
        API.
      </Paragraph>
      <TextInput />
    </Flex>
  );
}
