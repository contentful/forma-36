import { set as mockDateSet, reset as mockDateReset } from 'mockdate';
import dayjs from 'dayjs';

import {
  formatRelativeDateTime,
  formatRelativeToCurrentWeekDateTime,
} from '../src/utils';

describe('Relative datetime utility functions', function () {
  const today = dayjs();
  const tomorrow = today.add(1, 'day');
  const yesterday = today.subtract(1, 'day');

  beforeEach(() => {
    mockDateSet(new Date(today.format()));
  });

  afterEach(() => {
    mockDateReset();
  });

  describe('formatRelativeDateTime', function () {
    it('returns a string with how much time the date will be relative to TODAY (date is BEFORE today)', () => {
      const expected = formatRelativeDateTime(yesterday.format());
      expect(expected).toBe('a day ago');
    });

    it('returns a string with how much time the date will be relative to TODAY (date is AFTER today)', () => {
      const expected = formatRelativeDateTime(tomorrow.format());
      expect(expected).toBe('in a day');
    });
  });

  describe('formatRelativeToCurrentWeekDateTime', function () {
    describe('with TODAY as baseDate', () => {
      it('returns "... ago" notation if the date is today', () => {
        const mocks = [
          {
            test: today.subtract(1, 'minute').format(),
            expected: 'a minute ago',
          },
          {
            test: today.subtract(50, 'minute').format(),
            expected: 'an hour ago',
          },
        ];

        mocks.forEach(({ test, expected }) => {
          const formattedDate = formatRelativeToCurrentWeekDateTime(test);
          expect(formattedDate).toEqual(expected);
        });
      });

      it('returns "Yesterdy at ...", "Tomorrow at ...", etc. if the date is NOT today', () => {
        const mockTwoDaysAgo = dayjs(today).subtract(2, 'day');
        const mockInTwoDays = dayjs(today).add(2, 'day');
        const mockLastMonth = dayjs(today).subtract(1, 'month');
        const mockNextMonth = dayjs(today).add(1, 'month');

        const mocks = [
          {
            test: yesterday.format(),
            expected: `Yesterday at ${yesterday.format('h:mm A')}`,
          },
          {
            test: mockTwoDaysAgo.format(),
            expected: `Last ${mockTwoDaysAgo.format(
              'dddd',
            )} at ${mockTwoDaysAgo.format('h:mm A')}`,
          },
          {
            test: tomorrow.format(),
            expected: `Tomorrow at ${tomorrow.format('h:mm A')}`,
          },
          {
            test: mockInTwoDays.format(),
            expected: `${mockInTwoDays.format(
              'dddd',
            )} at ${mockInTwoDays.format('h:mm A')}`,
          },
          {
            test: mockLastMonth.format(),
            expected: `${mockLastMonth.format('DD MMM YYYY')}`,
          },
          {
            test: mockNextMonth.format(),
            expected: `${mockNextMonth.format('DD MMM YYYY')}`,
          },
        ];

        mocks.forEach(({ test, expected }) => {
          const formattedDate = formatRelativeToCurrentWeekDateTime(test);
          expect(formattedDate).toEqual(expected);
        });
      });
    });

    describe('with a different baseDate', () => {
      const baseDate = today.subtract(1, 'week');

      it('returns "... ago" notation if the date is in the same day as baseDate', () => {
        const mocks = [
          {
            test: dayjs(baseDate).subtract(1, 'minute').format(),
            expected: 'a minute ago',
          },
          {
            test: dayjs(baseDate).subtract(50, 'minute').format(),
            expected: 'an hour ago',
          },
        ];

        mocks.forEach(({ test, expected }) => {
          const formattedDate = formatRelativeToCurrentWeekDateTime(
            test,
            baseDate.format(),
          );
          expect(formattedDate).toEqual(expected);
        });
      });

      it('returns "Yesterdy at ...", "Tomorrow at ...", etc. if the date is NOT in the same day as baseDate', () => {
        const mockOneDayAgo = dayjs(baseDate).subtract(1, 'day');
        const mockTwoDaysAgo = dayjs(baseDate).subtract(2, 'day');
        const mockNextDay = dayjs(baseDate).add(1, 'day');
        const mockInTwoDays = dayjs(baseDate).add(2, 'day');
        const mockLastMonth = dayjs(baseDate).subtract(1, 'month');
        const mockNextMonth = dayjs(baseDate).add(1, 'month');

        const mocks = [
          {
            test: mockOneDayAgo.format(),
            expected: `Yesterday at ${mockOneDayAgo.format('h:mm A')}`,
          },
          {
            test: mockTwoDaysAgo.format(),
            expected: `Last ${mockTwoDaysAgo.format(
              'dddd',
            )} at ${mockTwoDaysAgo.format('h:mm A')}`,
          },
          {
            test: mockNextDay.format(),
            expected: `Tomorrow at ${mockNextDay.format('h:mm A')}`,
          },
          {
            test: mockInTwoDays.format(),
            expected: `${mockInTwoDays.format(
              'dddd',
            )} at ${mockInTwoDays.format('h:mm A')}`,
          },
          {
            test: mockLastMonth.format(),
            expected: `${mockLastMonth.format('DD MMM YYYY')}`,
          },
          {
            test: mockNextMonth.format(),
            expected: `${mockNextMonth.format('DD MMM YYYY')}`,
          },
        ];

        mocks.forEach(({ test, expected }) => {
          const formattedDate = formatRelativeToCurrentWeekDateTime(
            test,
            baseDate.format(),
          );
          expect(formattedDate).toEqual(expected);
        });
      });
    });
  });
});
