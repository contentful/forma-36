import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withInfo } from '@storybook/addon-info';

import HelpText from './HelpText';
import TextLink from '../TextLink';

storiesOf('Components|HelpText', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withInfo()(() => (
      <HelpText extraClassNames={text('Extra Class Names', '')}>
        {text('Child Text', 'Lorem Ipsum dolor sit amet')}
      </HelpText>
    )),
  )
  .add(
    'with link',
    withInfo()(() => (
      <HelpText extraClassNames={text('Extra Class Names', '')}>
        Some Text and then <TextLink> a link.</TextLink>
      </HelpText>
    )),
  );
