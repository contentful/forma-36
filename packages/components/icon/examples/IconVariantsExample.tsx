import * as React from 'react';
import { CalendarIcon } from '@contentful/f36-icons-v4';
import { Stack, Flex, Text } from '@contentful/f36-components';

export default function IconVariantsExample() {
  return (
    <Stack>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarIcon variant="primary" />
        </Flex>{' '}
        <Text>Primary</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarIcon variant="positive" />
        </Flex>{' '}
        <Text>Positive</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarIcon variant="negative" />
        </Flex>{' '}
        <Text>Negative</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarIcon variant="warning" />
        </Flex>{' '}
        <Text>Warning</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarIcon variant="secondary" />
        </Flex>{' '}
        <Text>Secondary</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarIcon variant="muted" />
        </Flex>{' '}
        <Text>Muted</Text>
      </Flex>
      <Flex
        style={{ backgroundColor: '#8091a5' }}
        alignItems="center"
        padding="spacingS"
      >
        <Flex marginRight="spacingS">
          <CalendarIcon variant="white" />
        </Flex>{' '}
        <Text>White</Text>
      </Flex>
    </Stack>
  );
}
