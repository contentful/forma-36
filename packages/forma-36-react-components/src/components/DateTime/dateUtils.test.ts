import dayjs from 'dayjs';
import * as dateUtils from './dateUtils';

// NOTE: all times will be "localized" to the TZ in test/config/globalSetup.js
describe('formatAbsoluteDateTime', () => {
  it('formats with the expected values', () => {
    const dateToExpected = [
      ['2020-02-29T09:31:46.345Z', '29 Feb 2020 at 1:31 am'],
      ['2020-04-22T07:00:01.000Z', '22 Apr 2020 at 12:00 am'],
      ['2021-01-01T07:59:56.999Z', '31 Dec 2020 at 11:59 pm'],
    ];

    dateToExpected.forEach(([str, expected]) => {
      const date = new Date(str);
      expect(dateUtils.formatDateTime(date)).toEqual(expected);
    });
  });
});

describe('formatWeekdayDate', () => {
  it('formats with the expected values', () => {
    const dateToExpected = [['2020-08-12T23:45:00.000Z', 'Wed, 12 Aug']];
    dateToExpected.forEach(([str, expected]) => {
      const date = new Date(str);
      expect(dateUtils.formatWeekdayDate(date)).toEqual(expected);
    });
  });
});

describe('formatRelativeDateTime', () => {
  it('formats with the expected values', () => {
    const baseDate = new Date('2020-04-15T17:00:00.000Z');
    const dateToExpected: [dayjs.Dayjs, string][] = [
      [dayjs(baseDate).subtract(25, 'second'), 'a few seconds ago'],
      [dayjs(baseDate).subtract(25, 'minute'), '25 minutes ago'],
      [dayjs(baseDate).subtract(60, 'minute'), 'an hour ago'],
      [dayjs(baseDate).subtract(1, 'day'), 'a day ago'],
      [dayjs(baseDate).subtract(13, 'day'), '13 days ago'],
      [dayjs(baseDate).subtract(3, 'month'), '3 months ago'],
      [dayjs(baseDate).subtract(12, 'month'), 'a year ago'],
      [dayjs(baseDate).subtract(2, 'year'), '2 years ago'],

      [dayjs(baseDate).add(25, 'second'), 'in a few seconds'],
      [dayjs(baseDate).add(25, 'minute'), 'in 25 minutes'],
      [dayjs(baseDate).add(60, 'minute'), 'in an hour'],
      [dayjs(baseDate).add(1, 'day'), 'in a day'],
      [dayjs(baseDate).add(13, 'day'), 'in 13 days'],
      [dayjs(baseDate).add(3, 'month'), 'in 3 months'],
      [dayjs(baseDate).add(12, 'month'), 'in a year'],
      [dayjs(baseDate).add(2, 'year'), 'in 2 years'],
    ];

    dateToExpected.forEach(([date, expected]: [dayjs.Dayjs, string]) => {
      expect(dateUtils.formatRelativeDateTime(date.toDate(), baseDate)).toEqual(
        expected,
      );
    });
  });
});
