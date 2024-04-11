import * as React from 'react';
import * as f36icons from '@contentful/f36-icons';
import {
  Grid,
  Flex,
  Text,
  Heading,
  Badge,
  Subheading,
  Box,
} from '@contentful/f36-components';

export default function AllIconsExample() {
  const [deprecatedIcons, availableIcons] = Object.entries(f36icons).reduce(
    (result, [name, icon]) => {
      result[name.includes('Trimmed') ? 0 : 1].push([name, icon]);
      return result;
    },
    [[], []],
  );

  return (
    <Box>
      <Grid columns="repeat(2, 1fr)">
        {availableIcons.map(([name, icon]) => {
          const Component = icon;
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
      <Heading as="h3" marginTop="spacingM" marginBottom="spacingS">
        Trimmed Variants <Badge variant="negative">deprecated</Badge>
      </Heading>
      <Subheading>
        Trimmed Icons will no longer be available in the next Iteration
      </Subheading>
      <Grid columns="repeat(2, 1fr)">
        {deprecatedIcons.map(([name, icon]) => {
          const Component = icon;
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
