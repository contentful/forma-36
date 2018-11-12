import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, object, text, number } from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import { withNotes } from '@storybook/addon-notes';

import LineChart from './LineChart';
import Notes from './Notes.md';

storiesOf('Components|LineChart', module)
  .addDecorator(
    host({
      align: 'center middle',
      cropMarks: false,
    }),
  )
  .add(
    'default',
    withNotes(Notes)(() => (
      <LineChart
        options={object('Configuration object', {
          xAxis: {
            data: [
              '2 Sep',
              '3 Sep',
              '4 Sep',
              '5 Sep',
              '6 Sep',
              '7 Sep',
              '8 Sep',
              '9 Sep',
              '10 Sep',
              '11 Sep',
              '12 Sep',
              '13 Sep',
              '14 Sep',
              '15 Sep',
              '16 Sep',
              '17 Sep',
              '18 Sep',
              '19 Sep',
              '20 Sep',
              '21 Sep',
              '22 Sep',
              '23 Sep',
              '24 Sep',
              '25 Sep',
              '26 Sep',
              '27 Sep',
              '28 Sep',
              '29 Sep',
              '30 Sep',
              '1 Oct',
            ],
          },
          series: {
            name: 'API requests',
            data: [
              74947,
              150871,
              224880,
              300624,
              377707,
              451408,
              526240,
              599919,
              673282,
              748357,
              822534,
              900837,
              901046,
              901046,
              901046,
              901363,
              901474,
            ],
            symbol: 'circle',
          },
        })}
        empty={boolean('Empty', false)}
        loading={boolean('Loading', false)}
        extraClassNames={text('Extra Class Names', '')}
        width={number('width', 800)}
        height={number('height', 600)}
      />
    )),
  );
