import * as React from 'react';
import { GearSixIcon } from '@contentful/f36-icons';
import { Stack, Flex } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function IconSizesExample() {
  return (
    <Stack>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon isActive />
        <GearSixIcon isActive color={tokens.colorPrimary} />
        <GearSixIcon isActive color={tokens.colorPositive} />
      </Flex>
    </Stack>
  );
}
