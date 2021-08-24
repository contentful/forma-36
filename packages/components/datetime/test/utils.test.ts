import dayjs from 'dayjs';

import { formatDateAndTime } from '../src/utils';

describe('formatDateAndTime', () => {
  const today = dayjs();

  it('returns a string with the "full" format if no format option is passed', () => {
    const expected = formatDateAndTime(today.format());

    expect(expected).toBe(today.format('ddd, DD MMM YYYY [at] h:mm A'));
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
