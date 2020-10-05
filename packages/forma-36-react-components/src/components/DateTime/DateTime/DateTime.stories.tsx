import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, date } from '@storybook/addon-knobs';

import DateTime from './DateTime';
import { DateTimeFormat } from '../dateUtils';

const formatOptions: DateTimeFormat[] = [
  'FULL',
  'DATE_ONLY',
  'TIME_ONLY',
  'WEEKDAY_DATE',
];

const defaultDate = new Date('2019-08-12T08:00:00Z');

storiesOf('Components/DateTime', module)
  .addParameters({
    propTypes: DateTime['__docgenInfo'],
    component: DateTime,
  })
  .add('default', () => (
    <DateTime
      date={defaultDate}
      format={select('format', formatOptions, 'FULL')}
      className={text('className', '')}
      testId={text('testId', '')}
    />
  ))
  .add('with weekday date format', () => (
    <DateTime
      date={new Date(date('date', defaultDate))}
      format="WEEKDAY_DATE"
    />
  ))
  .add('with date only format', () => (
    <DateTime date={new Date(date('date', defaultDate))} format="DATE_ONLY" />
  ))
  .add('with time only format', () => (
    <DateTime date={new Date(date('date', defaultDate))} format="TIME_ONLY" />
  ));
