import dayjs, { extend } from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
import timezonePlugin from 'dayjs/plugin/timezone.js';
extend(utcPlugin);
extend(timezonePlugin);

import { formatDateAndTime, formatMachineReadableDateTime } from '.';

describe('formatDateAndTime', () => {
  const today = dayjs();

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(today.format()).getTime());
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  it('returns a string with the "full" format if no format option is passed', () => {
    const expected = formatDateAndTime(today.format());

    expect(expected).toBe(today.format('ddd, DD MMM YYYY [at] h:mm A'));
  });

  it('returns a string with the "fullWithSeconds" format if no format option is passed', () => {
    const expected = formatDateAndTime(today.format(), 'fullWithSeconds');

    expect(expected).toBe(today.format('ddd, DD MMM YYYY [at] h:mm:ss A'));
  });

  it('returns a string with the "day" format is passed', () => {
    const expected = formatDateAndTime(today.format(), 'day');

    expect(expected).toBe(today.format('DD MMM YYYY'));
  });

  it('returns a string with the "weekday" format is passed', () => {
    const expected = formatDateAndTime(today.format(), 'weekday');

    expect(expected).toBe(today.format('ddd, DD MMM'));
  });

  it('returns a string with the "time" format is passed', () => {
    const expected = formatDateAndTime(today.format(), 'time');

    expect(expected).toBe(today.format('h:mm A'));
  });

  it('returns normally when new Date() is passed as the first argument', () => {
    const expected = formatDateAndTime(new Date());

    expect(expected).toBe(today.format('ddd, DD MMM YYYY [at] h:mm A'));
  });

  it('returns normally when Unix Epoch(in milliseconds) is passed as the first argument', () => {
    const expected = formatDateAndTime(1629240300000);

    expect(expected).toBe('Tue, 17 Aug 2021 at 3:45 PM');
  });
});

describe('formatMachineReadableDateTime', () => {
  const today = new Date();

  it('returns a string with "YYYY-MM-DDTHH:mm:ss.SSS[Z]" format', () => {
    const expected = formatMachineReadableDateTime(today);

    expect(expected).toBe(dayjs(today).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'));
  });

  it('returns a string with "YYYY-MM-DD" format when "day" is passed', () => {
    const expected = formatMachineReadableDateTime(today, 'day');

    expect(expected).toBe(dayjs(today).format('YYYY-MM-DD'));
  });

  it('returns a string with "MM-DD" format when "weekday" is passed', () => {
    const expected = formatMachineReadableDateTime(today, 'weekday');

    expect(expected).toBe(dayjs(today).format('MM-DD'));
  });

  it('returns a string with "HH:mm:ss.SSS" format when "time" is passed', () => {
    const expected = formatMachineReadableDateTime(today, 'time');

    expect(expected).toBe(dayjs(today).format('HH:mm:ss.SSS'));
  });

  describe('when using a non-UTC timezone', () => {
    it('returns the day for the current timezone', () => {
      const time = '2024-02-19T01:30:00.000+01:00';
      // We test with the LA timezone (-7h/-8h) which means that for the current
      // client this appears to have happened on the previous day.
      // In UTC time and in the original used timezone, it would appear as the 19th.
      const expected = '2024-02-18';
      const actual = formatMachineReadableDateTime(time, 'day');
      expect(actual).toBe(expected);
    });
  });
});
