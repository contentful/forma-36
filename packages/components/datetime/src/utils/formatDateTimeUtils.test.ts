import dayjs, { extend } from 'dayjs';
import utcPlugin from 'dayjs/plugin/utc.js';
extend(utcPlugin);

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

    expect(expected).toBe(
      dayjs(today).utc().format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
    );
  });

  it('returns a string with "YYYY-MM-DD" format when "day" is passed', () => {
    const expected = formatMachineReadableDateTime(today, 'day');

    expect(expected).toBe(dayjs(today).utc().format('YYYY-MM-DD'));
  });

  it('returns a string with "MM-DD" format when "weekday" is passed', () => {
    const expected = formatMachineReadableDateTime(today, 'weekday');

    expect(expected).toBe(dayjs(today).utc().format('MM-DD'));
  });

  it('returns a string with "HH:mm:ss.SSS" format when "time" is passed', () => {
    const expected = formatMachineReadableDateTime(today, 'time');

    expect(expected).toBe(dayjs(today).utc().format('HH:mm:ss.SSS'));
  });
});
