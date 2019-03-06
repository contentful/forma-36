import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import HelpText from './HelpText';
import TextLink from '../TextLink';

storiesOf('Components|HelpText', module)
  .add('default', () => (
    <HelpText extraClassNames={text('Extra Class Names', '')}>
      {text('Child Text', 'Lorem Ipsum dolor sit amet')}
    </HelpText>
  ))
  .add('with link', () => (
    <HelpText extraClassNames={text('Extra Class Names', '')}>
      Some Text and then <TextLink> a link.</TextLink>
    </HelpText>
  ));
