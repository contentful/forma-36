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
      extraClassNames={text('Extra Class Names', '')}
      label={text('label', 'johannes.bugiel@contentful.com')}
    />
  ))
  .add('onDrag', () => (
    <Pill
      extraClassNames={text('Extra Class Names', '')}
      label={text('label', 'johannes.bugiel@contentful.com')}
      onDrag={action('onDrag')}
    />
  ))
  .add('onClose', () => (
    <Pill
      extraClassNames={text('Extra Class Names', '')}
      label={text('label', 'johannes.bugiel@contentful.com')}
      onClose={action('onClick')}
    />
  ));
