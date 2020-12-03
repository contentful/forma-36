import React from 'react';

import Accordion, { AccordionProps } from './Accordion';
import AccordionItem from './AccordionItem';
import Typography from '../Typography/Typography';
import Paragraph from '../Typography/Paragraph';
import notes from './README.mdx';

export default {
  title: '(alpha)/Accordion',
  component: Accordion,
  subcomponents: { AccordionItem },
  parameters: {
    propTypes: [Accordion['__docgenInfo'], AccordionItem['__docgenInfo']],
    notes,
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
