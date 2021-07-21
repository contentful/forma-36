import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';

import { DragHandle } from '../src/';
import type { DragHandleInternalProps } from '../src/';

export default {
  component: DragHandle,
  parameters: {
    propTypes: DragHandle['__docgenInfo'],
  },
  title: 'Components/DragHandle',
} as Meta;

export const Default: Story<DragHandleInternalProps> = (args) => {
  return <DragHandle {...args}>DragHandle</DragHandle>;
};

export const Overview: Story = () => {
  return (
    <>
      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Default
          </SectionHeading>

          <DragHandle label="Reorder entry" />
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <DragHandle isHovered label="Reorder entry" />
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Focus
          </SectionHeading>
          <DragHandle isFocused label="Reorder entry" />
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Drag active
          </SectionHeading>

          <DragHandle isActive label="Reorder entry" />
        </Flex>
      </Flex>
    </>
  );
};
