import React from 'react';
import {
  Flex,
  Box,
  Subheading,
  TextLink,
  Button,
} from '@contentful/f36-components';

export default function FlexRealWorldExample() {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Subheading marginBottom="none">User name</Subheading>
      <Flex alignItems="center">
        <Box marginRight="spacingM">
          <TextLink href="http://google.com">User profile</TextLink>
        </Box>
        <Button>Add user to the team</Button>
      </Flex>
    </Flex>
  );
}
