import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import Accordion from './Accordion';
import AccordionItem from './AccordionItem';

storiesOf('(alpha))|Accordion', module)
  .addParameters({
    propTypes: Accordion['__docgenInfo'],
  })
  .add('default', () => (
    <Accordion className={text('className', '')}>
      <AccordionItem />
      <AccordionItem />
      <AccordionItem />
    </Accordion>
  ));
