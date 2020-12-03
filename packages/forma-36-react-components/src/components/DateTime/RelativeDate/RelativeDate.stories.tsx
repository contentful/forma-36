import React from 'react';

import RelativeDate, { RelativeDateProps } from './RelativeDate';
import notes from '../README.mdx';

const THREE_MINUTES = 3 * 60 * 1000;

export default {
  title: 'Components/DateTime/RelativeDate',
  component: RelativeDate,
  parameters: {
    propTypes: RelativeDate['__docgenInfo'],
    notes,
  },
  argTypes: {
    date: { control: { type: 'date' } },
    baseDate: { control: { type: 'date', disabled: true } },
    className: { control: { type: 'text' } },
    testId: { control: { type: 'text' } },
  },
};

const RelativeDateStory = (args: RelativeDateProps) => (
  <RelativeDate {...args} />
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const basic: any = RelativeDateStory.bind({});
basic.args = {
  date: Date.now() - THREE_MINUTES,
  baseDate: undefined,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const withBaseDate: any = RelativeDateStory.bind({});
withBaseDate.args = {
  date: Date.now() - THREE_MINUTES,
  baseDate: Date.now() + THREE_MINUTES,
};
