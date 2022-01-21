import * as React from 'react';
import f36icons from '@contentful/f36-icons';
import { Grid, Flex, Text } from '@contentful/f36-components';

export default function AllIconsExample() {
  return (
    <Grid columns="repeat(3, 1fr)">
      {Object.entries(f36icons).map(([name, icon]) => {
        const Component = icon;

        return (
          <Flex
            key={name}
            padding="spacingS"
            marginRight="spacingM"
            alignItems="center"
            justifyContent="flex-start"
            flexGrow={0}
          >
            <Flex marginRight="spacingS">
              <Component key={name} size="medium" />
            </Flex>
            <Text>{name}</Text>
          </Flex>
        );
      })}
    </Grid>
  );
}
