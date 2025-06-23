import * as React from 'react';
import { CalendarBlankIcon } from '@contentful/f36-icons-alpha';
import { Stack, Flex, Text } from '@contentful/f36-components';

export default function IconVariantsExample() {
  return (
    <Stack>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon variant="primary" />
        </Flex>{' '}
        <Text>Primary</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon variant="positive" />
        </Flex>{' '}
        <Text>Positive</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon variant="negative" />
        </Flex>{' '}
        <Text>Negative</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon variant="warning" />
        </Flex>{' '}
        <Text>Warning</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon variant="secondary" />
        </Flex>{' '}
        <Text>Secondary</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon variant="muted" />
        </Flex>{' '}
        <Text>Muted</Text>
      </Flex>
      <Flex
        style={{ backgroundColor: '#8091a5' }}
        alignItems="center"
        padding="spacingS"
      >
        <Flex marginRight="spacingS">
          <CalendarBlankIcon variant="white" />
        </Flex>{' '}
        <Text>White</Text>
      </Flex>
    </Stack>
  );
}
