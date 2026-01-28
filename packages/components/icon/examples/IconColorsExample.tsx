import * as React from 'react';
import { GearSixIcon } from '@contentful/f36-icons';
import { Stack, Flex, Text } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';
import { css } from '@emotion/css';

export default function IconColorsExample() {
  return (
    <Stack>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon color={tokens.colorPrimary} /> <Text>Primary</Text>
      </Flex>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon color={tokens.colorPositive} /> <Text>Positive</Text>
      </Flex>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon color={tokens.colorNegative} /> <Text>Negative</Text>
      </Flex>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon color={tokens.colorWarning} /> <Text>Warning</Text>
      </Flex>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon color={tokens.purple600} /> <Text>Accent</Text>
      </Flex>
      <Flex alignItems="center" gap="spacingS" className={css({ backgroundColor: tokens.gray600, padding: tokens.spacingXs, borderRadius: tokens.borderRadiusSmall })}>
        <GearSixIcon color={tokens.colorWhite} /> <Text fontColor="colorWhite">White</Text>
      </Flex>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon color={tokens.gray600} /> <Text>Muted</Text>
      </Flex>
      <Flex alignItems="center" gap="spacingS">
        <GearSixIcon /> <Text>Default</Text>
      </Flex>
    </Stack>
  );
}
