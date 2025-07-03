import * as React from 'react';
import tokens from '@contentful/f36-tokens';
import { CalendarBlankIcon } from '@contentful/f36-icons';
import { Stack, Flex, Text } from '@contentful/f36-components';

export default function IconVariantsExample() {
  return (
    <Stack>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon color={tokens.colorPrimary} />
        </Flex>{' '}
        <Text>Primary</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon color={tokens.colorPositive} />
        </Flex>{' '}
        <Text>Positive</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon color={tokens.colorNegative} />
        </Flex>{' '}
        <Text>Negative</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon color={tokens.colorWarning} />
        </Flex>{' '}
        <Text>Warning</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon color={tokens.gray900} />
        </Flex>{' '}
        <Text>Secondary</Text>
      </Flex>
      <Flex alignItems="center">
        <Flex marginRight="spacingS">
          <CalendarBlankIcon color={tokens.gray600} />
        </Flex>{' '}
        <Text>Muted</Text>
      </Flex>
      <Flex
        style={{ backgroundColor: '#8091a5' }}
        alignItems="center"
        padding="spacingS"
      >
        <Flex marginRight="spacingS">
          <CalendarBlankIcon color={tokens.colorWhite} />
        </Flex>{' '}
        <Text>White</Text>
      </Flex>
    </Stack>
  );
}
