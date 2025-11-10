import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { Accordion, type AccordionProps } from '../src';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem: Accordion.Item },
  parameters: {
    propTypes: [Accordion['__docgenInfo'], Accordion.Item['__docgenInfo']],
  },
  argTypes: {
    align: { control: 'select', options: ['start', 'end'] },
    children: { control: { disable: true } },
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
  },
} satisfies Meta<typeof Accordion>;

type Story = StoryObj<AccordionProps>;

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

export const Basic: Story = {
  render: ({ align }: AccordionProps) => (
    <Accordion align={align}>
      <Accordion.Item title={args['Accordion.Item Title #1']}>
        <Text as="p">{args['Accordion.Item Content #1']}</Text>
      </Accordion.Item>
      <Accordion.Item title={'Accordion II'}>
        <Text as="p">{defaultText}</Text>
      </Accordion.Item>
      <Accordion.Item title={'Accordion III'}>
        <Text as="p">{defaultText}</Text>
      </Accordion.Item>
    </Accordion>
  ),
  args: {
    align: 'end',
  },
};

export const Overview: Story = {
  render: () => (
    <>
      <Flex flexDirection="column" marginBottom="spacingM" fullWidth>
        <SectionHeading marginBottom="spacingS">
          Accordion alignment start
        </SectionHeading>

        <Flex>
          <Accordion align="start">
            <Accordion.Item title={'Accordion Title'}>
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title={'Accordion Title'}>
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title={'Accordion Title'}>
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
            <Accordion.Item title={'Accordion Title'}>
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title={'Accordion Title'}>
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
            <Accordion.Item title={'Accordion Title'}>
              <Text as="p">{defaultText}</Text>
            </Accordion.Item>
          </Accordion>
        </Flex>
      </Flex>
    </>
  ),
};

export const DynamicContent = ({ align }: AccordionProps) => {
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
          <Accordion.Item title={'Accordion Title'}>
            <Text as="p">{content}</Text>
          </Accordion.Item>
        </Accordion>
      </Flex>
    </Flex>
  );
};

export const Controlled = ({ align }: AccordionProps) => {
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
        title={'Accordion Title'}
        isExpanded={accordionState[1]}
        onExpand={handleExpand(1)}
        onCollapse={handleCollapse(1)}
      >
        <Text as="p">{'Accordion Content #1'}</Text>
      </Accordion.Item>
      <Accordion.Item
        title={'Accordion Title'}
        isExpanded={accordionState[2]}
        onExpand={handleExpand(2)}
        onCollapse={handleCollapse(2)}
      >
        <Text as="p">{'Accordion Content #2'}</Text>
      </Accordion.Item>
      <Accordion.Item
        title={'Accordion Title'}
        isExpanded={accordionState[3]}
        onExpand={handleExpand(3)}
        onCollapse={handleCollapse(3)}
      >
        <Text as="p">{'Accordion Content #3'}</Text>
      </Accordion.Item>
    </Accordion>
  );
};
