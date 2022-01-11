import React from 'react';
import { Box, Flex } from '@contentful/f36-components';

export default function BoxSpacingExample() {
  return (
    <Flex alignItems="center">
      <Box as="span" display="inline" marginRight="spacingL">
        I am span
      </Box>
      <Box as="code" display="inline" marginRight="spacingL">
        I am code
      </Box>
    </Flex>
  );
}
