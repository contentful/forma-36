import React from 'react';
import { Flex } from '@contentful/f36-components';
import tokens from '@contentful/f36-tokens';

export default function FlexExample() {
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
    <Flex justifyContent="space-between" alignItems="center">
      <ColorBox backgroundColor={tokens.green500}>Green</ColorBox>
      <ColorBox backgroundColor={tokens.red500}>Red</ColorBox>
      <ColorBox backgroundColor={tokens.blue500}>Blue</ColorBox>
    </Flex>
  );
}
