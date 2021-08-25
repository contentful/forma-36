import { set as mockDateSet, reset as mockDateReset } from 'mockdate';
import dayjs from 'dayjs';

import {
  formatRelativeDateTime,
  formatRelativeToCurrentWeekDateTime,
} from '../src/utils';

// eslint-disable-next-line jest/no-mocks-import
import * as TestCases from './__mocks__/dates';

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
        const mocks = TestCases.dateIsToday(today);

        mocks.forEach(({ test, expected }) => {
          const formattedDate = formatRelativeToCurrentWeekDateTime(test);
          expect(formattedDate).toEqual(expected);
        });
      });

      it('returns "Yesterdy at ...", "Tomorrow at ...", etc. if the date is NOT today', () => {
        const mocks = TestCases.dateIsNotToday(today);

        mocks.forEach(({ test, expected }) => {
          const formattedDate = formatRelativeToCurrentWeekDateTime(test);
          expect(formattedDate).toEqual(expected);
        });
      });
    });

    describe('with a different baseDate', () => {
      const baseDate = today.subtract(1, 'week');

      it('returns "... ago" notation if the date is in the same day as baseDate', () => {
        const mocks = TestCases.dateIsToday(baseDate);

        mocks.forEach(({ test, expected }) => {
          const formattedDate = formatRelativeToCurrentWeekDateTime(
            test,
            baseDate.format(),
          );
          expect(formattedDate).toEqual(expected);
        });
      });

      it('returns "Yesterday at ...", "Tomorrow at ...", etc. if the date is NOT in the same day as baseDate', () => {
        const mocks = TestCases.dateIsNotToday(baseDate);

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
