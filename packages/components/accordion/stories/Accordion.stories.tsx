import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { Accordion } from '../src';

type Story = StoryObj<typeof Accordion>;

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem: Accordion.Item },
  parameters: {
    propTypes: [Accordion['__docgenInfo'], Accordion.Item['__docgenInfo']],
  },
  argTypes: {
    align: { control: { type: 'select', options: ['start', 'end'] } },
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} as Meta<typeof Accordion>;

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

export const basic: Story = {
  args: {
    align: 'end',
  },
  render: ({ align }) => (
    <Accordion align={align}>
      <Accordion.Item title="Accordion #1">
        <Text as="p">{defaultText}</Text>
      </Accordion.Item>
      <Accordion.Item title="Accordion #2">
        <Text as="p">{defaultText}</Text>
      </Accordion.Item>
      <Accordion.Item title="Accordion #3">
        <Text as="p">{defaultText}</Text>
      </Accordion.Item>
    </Accordion>
  ),
};

export const overview: Story = {
  render: () => (
    <>
      <Flex flexDirection="column" marginBottom="spacingM" fullWidth>
        <SectionHeading marginBottom="spacingS">
          Accordion alignment start
        </SectionHeading>

        <Flex>
          <Accordion align="start">
            <Accordion.Item title="Accordion #1">
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title="Accordion #2">
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title="Accordion #3">
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
          </Accordion>
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <SectionHeading marginBottom="spacingS">
          Accordion alignment end
        </SectionHeading>

        <Flex>
          <Accordion align="end">
            <Accordion.Item title="Accordion #1">
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title="Accordion #2">
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title="Accordion #3">
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
          </Accordion>
        </Flex>
      </Flex>
    </>
  ),
};

export const DynamicContent: Story = {
  render: ({ align }) => {
    const [content, updateContent] = useState(defaultText);

    const addContent = () => {
      updateContent(content + defaultText);
    };

    return (
      <Flex flexDirection="column" fullWidth>
        <Flex marginBottom="spacingS">
          <Button onClick={addContent}>Add content</Button>
        </Flex>
        <Flex>
          <Accordion align={align}>
            <Accordion.Item title="Accordion #1">
              <Text as="p">{content}</Text>
            </Accordion.Item>
          </Accordion>
        </Flex>
      </Flex>
    );
  },
};

export const Controlled: Story = {
  render: ({ align }) => {
    const [accordionState, setAccordionState] = useState({
      1: true,
      2: false,
      3: false,
    });

    const handleExpand = (itemIndex: number) => () => {
      setAccordionState((state) => ({ ...state, [itemIndex]: true }));
    };

    const handleCollapse = (itemIndex: number) => () => {
      setAccordionState((state) => ({ ...state, [itemIndex]: false }));
    };

    return (
      <Accordion align={align}>
        <Accordion.Item
          title="Accordion #1"
          isExpanded={accordionState[1]}
          onExpand={handleExpand(1)}
          onCollapse={handleCollapse(1)}
        >
          <Text as="p">{defaultText}</Text>
        </Accordion.Item>
        <Accordion.Item
          title="Accordion #2"
          isExpanded={accordionState[2]}
          onExpand={handleExpand(2)}
          onCollapse={handleCollapse(2)}
        >
          <Text as="p">{defaultText}</Text>
        </Accordion.Item>
        <Accordion.Item
          title="Accordion #3"
          isExpanded={accordionState[3]}
          onExpand={handleExpand(3)}
          onCollapse={handleCollapse(3)}
        >
          <Text as="p">{defaultText}</Text>
        </Accordion.Item>
      </Accordion>
    );
  },
};
