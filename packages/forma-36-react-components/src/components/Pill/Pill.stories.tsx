import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';

import Pill from './Pill';

storiesOf('Components|Pill', module)
  .addParameters({
    propTypes: Pill['__docgenInfo'],
  })
  .add('default', () => (
    <Pill
      className={text('className', '')}
      label={text('label', 'johannes.bugiel@contentful.com')}
    />
  ))
  .add('onDrag', () => (
    <Pill
      className={text('className', '')}
      label={text('label', 'johannes.bugiel@contentful.com')}
      onDrag={action('onDrag')}
    />
  ))
  .add('onClose', () => (
    <Pill
      className={text('className', '')}
      label={text('label', 'johannes.bugiel@contentful.com')}
      onClose={action('onClick')}
    />
  ));
