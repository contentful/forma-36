import React from 'react';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import Typography from '../Typography/Typography';
import Paragraph from '../Typography/Paragraph';
import notes from './README.md';

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

export default {
  title: '(alpha)/Accordion',
  component: Accordion,
  parameters: {
    propTypes: [Accordion['__docgenInfo'], AccordionItem['__docgenInfo']],
    notes,
  },
};

interface StoryArgs {
  align: 'start' | 'end';
  [key: string]: string;
}

export const basic = ({ align, ...args }: StoryArgs) => (
  <Accordion align={align}>
    <AccordionItem title={args['AccordionItem Title #1']}>
      <Typography>
        <Paragraph>{args['AccordionItem Content #1']}</Paragraph>
      </Typography>
    </AccordionItem>
    <AccordionItem title={args['AccordionItem Title #2']}>
      <Typography>
        <Paragraph>{args['AccordionItem Content #2']}</Paragraph>
      </Typography>
    </AccordionItem>
    <AccordionItem title={args['AccordionItem Title #3']}>
      <Typography>
        <Paragraph>{args['AccordionItem Content #3']}</Paragraph>
      </Typography>
    </AccordionItem>
  </Accordion>
);
basic.args = {
  align: 'end',
  ['AccordionItem Title #1']: 'Accordion I',
  ['AccordionItem Content #1']: defaultText,
  ['AccordionItem Title #2']: 'Accordion II',
  ['AccordionItem Content #2']: defaultText,
  ['AccordionItem Title #3']: 'Accordion III',
  ['AccordionItem Content #3']: defaultText,
};
