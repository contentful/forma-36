import * as React from 'react';
import { CalendarIcon } from '@contentful/f36-icons-v4';
import { Stack, Flex, Text } from '@contentful/f36-components';

export default function IconSizesExample() {
  return (
    <Stack>
      <Flex alignItems="center">
        <CalendarIcon size="tiny" /> <Text>Tiny</Text>
      </Flex>
      <Flex alignItems="center">
        <CalendarIcon size="small" /> <Text>Small</Text>
      </Flex>
      <Flex alignItems="center">
        <CalendarIcon size="medium" /> <Text>Medium</Text>
      </Flex>
      <Flex alignItems="center">
        <CalendarIcon size="large" /> <Text>Large</Text>
      </Flex>
      <Flex alignItems="center">
        <CalendarIcon size="xlarge" /> <Text>Extra large</Text>
      </Flex>
    </Stack>
  );
}
