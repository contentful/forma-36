import React from 'react';
import { Stack, Spinner, Flex, Text, Button } from '@contentful/f36-components';

export default function SpinnerWithTextExample() {
  return (
    <Stack flexDirection="column">
      <Flex>
        <Text marginRight="spacingXs">Loading</Text>
        <Spinner />
      </Flex>
      <Button isLoading isDisabled>
        Submitting
      </Button>
    </Stack>
  );
}
