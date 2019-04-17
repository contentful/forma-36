import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';

import DatePicker from './DatePicker';

storiesOf('Components|DatePicker', module)
  .addParameters({
    propTypes: DatePicker['__docgenInfo'],
  })
  .add('default', () => (
    <DatePicker className={text('className', '')}>DatePicker</DatePicker>
  ));
