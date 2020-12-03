import React from 'react';

import DateTime, { DateTimeProps } from './DateTime';
import notes from '../README.mdx';

const exampleDate = '2020-08-13T13:45:56.0123Z';

export default {
  title: 'Components/DateTime/DateTime',
  component: DateTime,
  parameters: {
    propTypes: DateTime['__docgenInfo'],
    notes,
  },
  argTypes: {
    date: { control: { type: 'date' } },
    format: {
      control: {
        type: 'select',
        options: ['FULL', 'DATE_ONLY', 'TIME_ONLY', 'WEEKDAY_DATE'],
      },
    },
    className: { control: { type: 'text' } },
    testId: { control: { type: 'text' } },
  },
};

const DateTimeStory = (args: DateTimeProps) => <DateTime {...args} />;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const basic: any = DateTimeStory.bind({});
basic.args = {
  date: exampleDate,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withOtherFormats: any = DateTimeStory.bind({});
withOtherFormats.args = {
  date: exampleDate,
  format: 'DATE_ONLY',
};
