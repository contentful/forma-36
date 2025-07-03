import * as React from 'react';
import { CalendarBlankIcon } from '@contentful/f36-icons';
import { Stack, Flex, Text } from '@contentful/f36-components';

export default function IconSizesExample() {
  return (
    <Stack>
      <Flex alignItems="center">
        <CalendarBlankIcon size="tiny" /> <Text>Tiny</Text>
      </Flex>
      <Flex alignItems="center">
        <CalendarBlankIcon size="small" /> <Text>Small</Text>
      </Flex>
      <Flex alignItems="center">
        <CalendarBlankIcon size="medium" /> <Text>Medium</Text>
      </Flex>
    </Stack>
  );
}
