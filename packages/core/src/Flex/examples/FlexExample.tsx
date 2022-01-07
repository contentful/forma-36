import React from 'react';
import { Flex, Box } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function FlexExample() {
  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Box
        style={{
          width: '60px',
          height: '60px',
          color: tokens.colorWhite,
          backgroundColor: tokens.green500,
        }}
      />
      <Box
        style={{
          width: '60px',
          height: '60px',
          color: tokens.colorWhite,
          backgroundColor: tokens.red500,
        }}
      />
      <Box
        style={{
          width: '60px',
          height: '60px',
          color: tokens.colorWhite,
          backgroundColor: tokens.blue500,
        }}
      />
    </Flex>
  );
}
