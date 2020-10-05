import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, date } from '@storybook/addon-knobs';

import RelativeDate from './RelativeDate';

const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1000;
const defaultDate = new Date(Date.now() - THREE_DAYS_MS);
const futureDate = new Date(Date.now() + THREE_DAYS_MS);

storiesOf('Components/RelativeDate', module)
  .addParameters({
    propTypes: RelativeDate['__docgenInfo'],
    component: RelativeDate,
  })
  .add('default', () => (
    <RelativeDate
      date={new Date(date('date', defaultDate))}
      testId={text('testId', '')}
      className={text('className', '')}
    />
  ))
  .add('with a day in the future', () => <RelativeDate date={futureDate} />)
  .add('with a different comparison date', () => (
    <RelativeDate
      date={new Date(date('date', defaultDate))}
      baseDate={new Date(date('baseDate', futureDate))}
    />
  ));
