import React from 'react';
import { CopyButton, Flex, Paragraph } from '@contentful/f36-components';

export default function CopyButtonWithPromiseExample() {
  // In your application this could be any async function returning a string to
  // copy to the clipboard
  const asyncValue = async () =>
    new Promise((resolve) =>
      setTimeout(resolve, 5000, 'A value that you will have to wait for'),
    );

  return (
    <Flex flexDirection="column" gap="spacingM">
      <Flex alignItems="center" flexDirection="column">
        <Paragraph>
          This CopyButton will load the async data when you click it.
        </Paragraph>
        <CopyButton value={asyncValue} />
      </Flex>

      <Flex alignItems="center" flexDirection="column">
        <Paragraph>
          This CopyButton will preload the async data as soon as it renders.
        </Paragraph>
        <CopyButton value={asyncValue} preload />
      </Flex>
    </Flex>
  );
}
