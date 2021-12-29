import React from 'react';
import { Stack, Flex } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function HorizontalStackExample() {
  const ColorBox = ({ backgroundColor, children }) => (
    <Flex
      justifyContent="center"
      alignItems="center"
      style={{
        width: '60px',
        height: '60px',
        color: tokens.colorWhite,
        backgroundColor,
      }}
    >
      {children}
    </Flex>
  );

  return (
    <Stack>
      <ColorBox backgroundColor={tokens.green500}>Green</ColorBox>
      <ColorBox backgroundColor={tokens.red500}>Red</ColorBox>
      <ColorBox backgroundColor={tokens.blue500}>Blue</ColorBox>
    </Stack>
  );
}
