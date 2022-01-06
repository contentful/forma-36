import React from 'react';
import { Flex, Box } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function FlexAlignmentExample() {
  return (
    <Flex flexDirection="column" gap="spacingS" alignItems="center">
      <Box
        style={{
          backgroundColor: tokens.green500,
          height: '50px',
          width: '150px',
        }}
      />
      <Box
        style={{
          backgroundColor: tokens.blue500,
          height: '50px',
          width: '50px',
        }}
      />
      <Box
        style={{
          backgroundColor: tokens.red500,
          height: '50px',
          width: '250px',
        }}
      />
    </Flex>
  );
}
