import React from 'react';
import {
  CopyButton,
  TextInput,
  Flex,
  Paragraph,
} from '@contentful/f36-components';

export default function CopyButtonWithInputExample() {
  const value = 'myContentTypeId';
  return (
    <Flex flexDirection="column">
      <Paragraph>
        Use this ID to retrieve everything related to this content type via the
        API.
      </Paragraph>
      <TextInput.Group>
        <TextInput isDisabled isReadOnly value={value} />
        <CopyButton
          value={value}
          tooltipProps={{ placement: 'right', usePortal: true }}
        />
      </TextInput.Group>
    </Flex>
  );
}
