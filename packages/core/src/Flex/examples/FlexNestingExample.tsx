import React from 'react';
import { Flex, Box } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function FlexNestingExample() {
  return (
    <Flex flexDirection="column" gap="spacingS">
      <Box style={{ backgroundColor: tokens.green500, height: '50px' }} />
      <Flex flexDirection="row" gap="spacingS">
        <Box
          style={{
            width: '200px',
            backgroundColor: tokens.red500,
            height: '150px',
          }}
        />
        <Flex
          flexGrow={1}
          style={{ backgroundColor: tokens.blue500, height: '150px' }}
        />
      </Flex>
      <Box style={{ backgroundColor: tokens.orange500, height: '50px' }} />
    </Flex>
  );
}
