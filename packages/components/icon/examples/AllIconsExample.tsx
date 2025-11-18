import React from 'react';
import * as f36icons from '@contentful/f36-icons';
import { Grid, Flex, Text, Box } from '@contentful/f36-components';

export default function AllIconsExample() {
  const icons = Object.entries(f36icons).sort((a, b) =>
    a[0].localeCompare(b[0]),
  );

  return (
    <Box>
      <Grid columns="repeat(3, 1fr)">
        {icons.map(([name, IconComponent]) => {
          const Component = IconComponent;
          return (
            <Flex
              key={name}
              padding="spacingS"
              marginRight="spacingM"
              flexDirection="column"
              alignItems="flex-start"
            >
              <Flex marginRight="spacingS" gap="spacingXs">
                <Component key={name} size="medium" />
                <Text>{name}</Text>
              </Flex>
            </Flex>
          );
        })}
      </Grid>
    </Box>
  );
}
