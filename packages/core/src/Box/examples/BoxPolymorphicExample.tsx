import React from 'react';
import { Box, Flex, TextLink, Button } from '@contentful/f36-components';

export default function BoxSpacingExample() {
  return (
    <Flex alignItems="center">
      <Box as="span" display="inline" marginRight="spacingL">
        I am span
      </Box>
      <Box
        as="a"
        display="inline"
        href="https://contentful.com"
        target="_blank"
        marginRight="spacingL"
      >
        I am native link
      </Box>
      <Box
        as={TextLink}
        display="inline"
        href="https://contentful.com"
        target="_blank"
        marginRight="spacingL"
      >
        I am link as TextLink component
      </Box>
      <Box as={Button} marginRight="spacingL">
        I am Button
      </Box>
    </Flex>
  );
}
