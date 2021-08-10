import React from 'react';
import type { Meta, Story } from '@storybook/react/types-6-0';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { DropdownList, DropdownListItem } from '@contentful/f36-components';

import { InlineEntryCard } from '../src';
import type { InlineEntryCardProps } from '../src';

export default {
  argTypes: {
    as: { control: { disable: true } },
    className: { control: { disable: true } },
    style: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
  component: InlineEntryCard,
  parameters: {
    propTypes: InlineEntryCard['__docgenInfo'],
  },
  title: 'Components/Card/InlineEntryCard',
} as Meta;

export const Default: Story<InlineEntryCardProps> = (args) => {
  return (
    <Text>
      Fusce a odio pharetra, porta justo vel, maximus ex. In pellentesque a orci
      et pretium. Praesent libero lorem, gravida eu pulvinar id, eleifend a
      sapien. &nbsp;
      <InlineEntryCard {...args} />
      &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
      Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
      euismod purus eleifend id. Fusce a odio pharetra, porta justo vel, maximus
      ex. In pellentesque a orci et pretium. Praesent libero lorem, gravida eu
      pulvinar id, eleifend a sapien. &nbsp;
      <InlineEntryCard {...args} />
      &nbsp; Nulla a ultrices nulla, vel blandit sapien. Etiam eget massa dui.
      Fusce id nisl quam. Integer nec mi arcu. Nullam lacinia est lectus, a
      euismod purus eleifend id.
    </Text>
  );
};

Default.args = {
  actions: (
    <DropdownList>
      <DropdownListItem>Copy</DropdownListItem>
      <DropdownListItem>Delete</DropdownListItem>
    </DropdownList>
  ),
  status: 'published',
  title: 'Closer',
};

export const Overview: Story<InlineEntryCardProps> = () => {
  return (
    <>
      <Flex flexWrap="wrap">
        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Inline
          </SectionHeading>

          <InlineEntryCard status="published" title="Forma 36" />
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Hover
          </SectionHeading>

          <InlineEntryCard isHovered status="archived" title="Forma 36" />
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Focus
          </SectionHeading>
          <InlineEntryCard
            actions={
              <DropdownList>
                <DropdownListItem>Copy</DropdownListItem>
                <DropdownListItem>Delete</DropdownListItem>
              </DropdownList>
            }
            isFocused
            status="changed"
            title="Forma 36"
          />
        </Flex>

        <Flex
          flexDirection="column"
          marginBottom="spacingM"
          marginRight="spacingM"
        >
          <SectionHeading as="h3" marginBottom="spacingS">
            Selected
          </SectionHeading>

          <InlineEntryCard isSelected status="deleted" title="Forma 36" />
        </Flex>
      </Flex>
    </>
  );
};
