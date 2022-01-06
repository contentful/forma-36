import React from 'react';
import { Flex, Box } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function FlexJustificationExample() {
  return (
    <Flex
      flexDirection="row"
      gap="spacingS"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        style={{
          backgroundColor: tokens.green500,
          height: '20px',
          width: '150px',
        }}
      />
      <Box
        style={{
          backgroundColor: tokens.blue500,
          height: '30px',
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
