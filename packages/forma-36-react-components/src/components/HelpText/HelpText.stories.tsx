import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import HelpText from './HelpText';
import TextLink from '../TextLink';

storiesOf('Components|HelpText', module)
  .addParameters({
    propTypes: HelpText['__docgenInfo'],
  })
  .add('default', () => (
    <HelpText className={text('className', '')}>
      {text('Child Text', 'Lorem Ipsum dolor sit amet')}
    </HelpText>
  ))
  .add('with link', () => (
    <HelpText className={text('className', '')}>
      Some Text and then <TextLink> a link.</TextLink>
    </HelpText>
  ));
