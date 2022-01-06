import React, { useState } from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { Accordion, AccordionProps } from '../src';

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
};

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

export const basic = ({ align, ...args }: AccordionProps) => (
  <Accordion align={align}>
    <Accordion.Item title={args['Accordion.Item Title #1']}>
      <Text as="p">{args['Accordion.Item Content #1']}</Text>
    </Accordion.Item>
    <Accordion.Item title={args['Accordion.Item Title #2']}>
      <Text as="p">{args['Accordion.Item Content #2']}</Text>
    </Accordion.Item>
    <Accordion.Item title={args['Accordion.Item Title #3']}>
      <Text as="p">{args['Accordion.Item Content #3']}</Text>
    </Accordion.Item>
  </Accordion>
);

export const overview = ({ align, ...args }: AccordionProps) => (
  <>
    <Flex flexDirection="column" marginBottom="spacingM" fullWidth>
      <SectionHeading marginBottom="spacingS">
        Accordion alignment start
      </SectionHeading>

      <Flex>
        <Accordion align="start">
          <Accordion.Item title={args['Accordion.Item Title #1']}>
            <Text as="p">{args['Accordion.Item Content #1']}</Text>
          </Accordion.Item>
          <Accordion.Item title={args['Accordion.Item Title #2']}>
            <Text as="p">{args['Accordion.Item Content #2']}</Text>
          </Accordion.Item>
          <Accordion.Item title={args['Accordion.Item Title #3']}>
            <Text as="p">{args['Accordion.Item Content #3']}</Text>
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
          <Accordion.Item title={args['Accordion.Item Title #1']}>
            <Text as="p">{args['Accordion.Item Content #1']}</Text>
          </Accordion.Item>
          <Accordion.Item title={args['Accordion.Item Title #2']}>
            <Text as="p">{args['Accordion.Item Content #2']}</Text>
          </Accordion.Item>
          <Accordion.Item title={args['Accordion.Item Title #3']}>
            <Text as="p">{args['Accordion.Item Content #3']}</Text>
          </Accordion.Item>
        </Accordion>
      </Flex>
    </Flex>
  </>
);

export const DynamicContent = ({ align, ...args }: AccordionProps) => {
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
          <Accordion.Item title={args['Accordion.Item Title #1']}>
            <Text as="p">{content}</Text>
          </Accordion.Item>
        </Accordion>
      </Flex>
    </Flex>
  );
};

basic.args = {
  align: 'end',
  'Accordion.Item Title #1': 'Accordion I',
  'Accordion.Item Content #1': defaultText,
  'Accordion.Item Title #2': 'Accordion II',
  'Accordion.Item Content #2': defaultText,
  'Accordion.Item Title #3': 'Accordion III',
  'Accordion.Item Content #3': defaultText,
};
