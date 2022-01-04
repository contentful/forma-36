import dayjs from 'dayjs';

export const dateIsToday = (date) => [
  {
    test: dayjs(date).subtract(1, 'minute').format(),
    expected: 'a minute ago',
  },
  {
    test: dayjs(date).subtract(50, 'minute').format(),
    expected: 'an hour ago',
  },
];

export const dateIsNotToday = (date) => {
  const mockOneDayAgo = dayjs(date).subtract(1, 'day');
  const mockTwoDaysAgo = dayjs(date).subtract(2, 'day');
  const mockNextDay = dayjs(date).add(1, 'day');
  const mockInTwoDays = dayjs(date).add(2, 'day');
  const mockLastMonth = dayjs(date).subtract(1, 'month');
  const mockNextMonth = dayjs(date).add(1, 'month');

  return [
    {
      test: mockLastMonth.format(),
      expected: `${mockLastMonth.format('DD MMM YYYY')}`,
    },
    {
      test: mockTwoDaysAgo.format(),
      expected: `Last ${mockTwoDaysAgo.format(
        'dddd',
      )} at ${mockTwoDaysAgo.format('h:mm A')}`,
    },
    {
      test: mockOneDayAgo.format(),
      expected: `Yesterday at ${mockOneDayAgo.format('h:mm A')}`,
    },
    {
      test: mockNextDay.format(),
      expected: `Tomorrow at ${mockNextDay.format('h:mm A')}`,
    },
    {
      test: mockInTwoDays.format(),
      expected: `${mockInTwoDays.format('dddd')} at ${mockInTwoDays.format(
        'h:mm A',
      )}`,
    },
    {
      test: mockNextMonth.format(),
      expected: `${mockNextMonth.format('DD MMM YYYY')}`,
    },
  ];
};
