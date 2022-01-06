import React from 'react';
import { Stack, Box } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function HorizontalStackExample() {
  return (
    <Stack>
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
    </Stack>
  );
}
