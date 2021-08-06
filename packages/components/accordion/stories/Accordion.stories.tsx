import React, { useState } from 'react';
import { Flex } from '@contentful/f36-core';
import { SectionHeading, Text } from '@contentful/f36-typography';
import { Button } from '@contentful/f36-button';
import { Accordion, AccordionProps } from '../src/Accordion';
import { AccordionItem } from '../src/AccordionItem/AccordionItem';

export default {
  title: 'Components/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
  parameters: {
    propTypes: [Accordion['__docgenInfo'], AccordionItem['__docgenInfo']],
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
    <AccordionItem title={args['AccordionItem Title #1']}>
      <Text as="p">{args['AccordionItem Content #1']}</Text>
    </AccordionItem>
    <AccordionItem title={args['AccordionItem Title #2']}>
      <Text as="p">{args['AccordionItem Content #2']}</Text>
    </AccordionItem>
    <AccordionItem title={args['AccordionItem Title #3']}>
      <Text as="p">{args['AccordionItem Content #3']}</Text>
    </AccordionItem>
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
          <AccordionItem title={args['AccordionItem Title #1']}>
            <Text as="p">{args['AccordionItem Content #1']}</Text>
          </AccordionItem>
          <AccordionItem title={args['AccordionItem Title #2']}>
            <Text as="p">{args['AccordionItem Content #2']}</Text>
          </AccordionItem>
          <AccordionItem title={args['AccordionItem Title #3']}>
            <Text as="p">{args['AccordionItem Content #3']}</Text>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
    <Flex flexDirection="column">
      <SectionHeading marginBottom="spacingS">
        Accordion alignment end
      </SectionHeading>

      <Flex>
        <Accordion align="end">
          <AccordionItem title={args['AccordionItem Title #1']}>
            <Text as="p">{args['AccordionItem Content #1']}</Text>
          </AccordionItem>
          <AccordionItem title={args['AccordionItem Title #2']}>
            <Text as="p">{args['AccordionItem Content #2']}</Text>
          </AccordionItem>
          <AccordionItem title={args['AccordionItem Title #3']}>
            <Text as="p">{args['AccordionItem Content #3']}</Text>
          </AccordionItem>
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
          <AccordionItem title={args['AccordionItem Title #1']}>
            <Text as="p">{content}</Text>
          </AccordionItem>
        </Accordion>
      </Flex>
    </Flex>
  );
};

basic.args = {
  align: 'end',
  'AccordionItem Title #1': 'Accordion I',
  'AccordionItem Content #1': defaultText,
  'AccordionItem Title #2': 'Accordion II',
  'AccordionItem Content #2': defaultText,
  'AccordionItem Title #3': 'Accordion III',
  'AccordionItem Content #3': defaultText,
};
