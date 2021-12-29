import React from 'react';
import tokens from '@contentful/f36-tokens';
import { Box, Flex } from '@contentful/f36-components';

export default function BoxSpacingExample() {
  const SmallContainerBox = () => (
    <Box
      as="span"
      style={{
        display: 'block',
        width: '50px',
        height: '50px',
        backgroundColor: tokens.gray100,
      }}
    />
  );

  return (
    <Flex style={{ backgroundColor: tokens.gray300 }}>
      <Box
        padding="spacingXs"
        marginRight="spacingM"
        style={{
          backgroundColor: tokens.red500,
        }}
      >
        <SmallContainerBox />
      </Box>
      <Box
        padding="spacingXs"
        marginRight="spacingM"
        style={{
          backgroundColor: tokens.blue500,
        }}
      >
        <SmallContainerBox />
      </Box>
    </Flex>
  );
}
