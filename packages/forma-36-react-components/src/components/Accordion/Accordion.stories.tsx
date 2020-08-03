import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select } from '@storybook/addon-knobs';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';
import Typography from '../Typography/Typography';
import Paragraph from '../Typography/Paragraph';
import notes from './README.md';

const defaultText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat.`;

storiesOf('(alpha))|Accordion', module)
  .addParameters({
    propTypes: [Accordion['__docgenInfo'], AccordionItem['__docgenInfo']],
  })
  .add(
    'default',
    () => (
      <Accordion
        align={select('Align', ['start', 'end'], Accordion.defaultProps.align)}
      >
        <AccordionItem title={text('First accordion title', 'First accordion')}>
          <Typography>
            <Paragraph>
              {text('First accordion content', defaultText)}
            </Paragraph>
          </Typography>
        </AccordionItem>
        <AccordionItem
          title={text('Second accordion title', 'Second accordion')}
        >
          <Typography>
            <Paragraph>
              {text('Second accordion content', defaultText)}
            </Paragraph>
          </Typography>
        </AccordionItem>
        <AccordionItem title={text('Third accordion title', 'Third accordion')}>
          <Typography>
            <Paragraph>
              {text('Third accordion content', defaultText)}
            </Paragraph>
          </Typography>
        </AccordionItem>
      </Accordion>
    ),
    { notes },
  );
