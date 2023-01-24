// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck -- disable checking since we cant cast the Promise return type
import React, { useEffect, useState } from 'react';
import { CopyButton, Flex, Paragraph } from '@contentful/f36-components';

export default function CopyButtonWithPromiseExample() {
  const [value, setValue] = useState();
  const [isLoading, setIsLoading] = useState(false);

  // In your application this could be any async function returning a string to
  // copy to the clipboard
  const asyncValue = async () =>
    new Promise((resolve) =>
      setTimeout(resolve, 5000, 'A value that you will have to wait for'),
    );

  useEffect(() => {
    const loadValue = async () => {
      setIsLoading(true);
      const resolvedValue = await asyncValue();
      setValue(resolvedValue);
      setIsLoading(false);
    };

    loadValue();
  }, []);

  const hasValue = typeof value !== 'undefined';

  return (
    <Flex flexDirection="column" gap="spacingM">
      <Flex alignItems="center" flexDirection="column">
        <Paragraph>
          This CopyButton can copy the value returned from the asynchronous call
          after it&rsquo;s done loading
        </Paragraph>
        <CopyButton
          isDisabled={!hasValue}
          isLoading={isLoading}
          value={hasValue ? value : ''}
        />
      </Flex>
    </Flex>
  );
}
