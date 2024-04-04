import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Stack } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';

import { DragHandle } from '../src/';

export default {
  component: DragHandle,
  parameters: {
    propTypes: DragHandle['__docgenInfo'],
  },
  title: 'Components/DragHandle',
} as Meta<typeof DragHandle>;

type Story = StoryObj<typeof DragHandle>;

export const Default: Story = {};

export const Overview: Story = {
  render: () => {
    return (
      <>
        <Flex flexDirection="column" marginBottom="spacingL">
          <SectionHeading as="h3" marginBottom="spacingS">
            Variants
          </SectionHeading>

          <Stack
            flexDirection="row"
            marginBottom="spacingM"
            spacing="spacingXs"
          >
            <Flex
              flexDirection="column"
              marginBottom="spacingM"
              marginRight="spacingM"
            >
              <Text marginBottom="spacingS">Secondary</Text>

              <DragHandle label="Reorder entry" />
            </Flex>

            <Flex
              flexDirection="column"
              marginBottom="spacingM"
              marginRight="spacingM"
            >
              <Text marginBottom="spacingS">Transparent</Text>

              <DragHandle variant="transparent" label="Reorder entry" />
            </Flex>
          </Stack>
        </Flex>

        <Flex flexDirection="column" marginBottom="spacingL">
          <SectionHeading as="h3" marginBottom="spacingS">
            States
          </SectionHeading>

          <Stack
            flexDirection="row"
            marginBottom="spacingM"
            spacing="spacingXs"
          >
            <Flex
              flexDirection="column"
              marginBottom="spacingM"
              marginRight="spacingM"
            >
              <Text marginBottom="spacingS">Hover</Text>

              <DragHandle isHovered label="Reorder entry" />
            </Flex>

            <Flex
              flexDirection="column"
              marginBottom="spacingM"
              marginRight="spacingM"
            >
              <Text marginBottom="spacingS">Focus</Text>

              <DragHandle isFocused label="Reorder entry" />
            </Flex>

            <Flex
              flexDirection="column"
              marginBottom="spacingM"
              marginRight="spacingM"
            >
              <Text marginBottom="spacingS"> Drag active</Text>

              <DragHandle isActive label="Reorder entry" />
            </Flex>
          </Stack>
        </Flex>
      </>
    );
  },
};
