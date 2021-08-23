import React from 'react';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';
import { set as mockDateSet, reset as mockDateReset } from 'mockdate';

import { RelativeDateTime } from '../src/RelativeDateTime';

describe('RelativeDateTime', function () {
  const today = dayjs();
  const tomorrow = today.add(1, 'day');
  const yesterday = today.subtract(1, 'day');

  beforeEach(() => {
    mockDateSet(new Date(today.format()));
  });

  afterEach(() => {
    mockDateReset();
  });

  it('renders', () => {
    const tree = render(<RelativeDateTime date={today.format()} />);

    expect(tree).toBeTruthy();
  });

  it('renders in how much time the date will be relative to TODAY (date is BEFORE today)', () => {
    const { container } = render(
      <RelativeDateTime date={yesterday.format()} />,
    );

    expect(container.textContent).toBe('a day ago');
  });

  it('renders how long ago the date happened relative to TODAY (date is AFTER today)', () => {
    const { container } = render(<RelativeDateTime date={tomorrow.format()} />);

    expect(container.textContent).toBe('in a day');
  });

  describe('with baseDate', () => {
    it('renders in how much time the date will be relative to the baseDate (baseDate is BEFORE the date)', () => {
      const { container } = render(
        <RelativeDateTime
          date={today.format()}
          baseDate={yesterday.format()}
        />,
      );

      expect(container.textContent).toBe('in a day');
    });

    it('renders how long ago the date happened relative to the baseDate (baseDate is AFTER the date)', () => {
      const { container } = render(
        <RelativeDateTime date={today.format()} baseDate={tomorrow.format()} />,
      );

      expect(container.textContent).toBe('a day ago');
    });
  });

  describe('with relativeToCurrentWeek true', () => {
    it('returns "... ago" notation if the date is today', () => {
      const mocks = [
        {
          test: dayjs(today).subtract(1, 'minute').format(),
          expected: 'a minute ago',
        },
        {
          test: dayjs(today).subtract(50, 'minute').format(),
          expected: 'an hour ago',
        },
        {
          test: dayjs(today).subtract(3, 'hour').format(),
          expected: '3 hours ago',
        },
      ];

      mocks.forEach(({ test, expected }) => {
        const { container } = render(
          <RelativeDateTime date={test} isRelativeToCurrentWeek />,
        );
        expect(container.textContent).toEqual(expected);
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
          expected: `${mockInTwoDays.format('dddd')} at ${mockInTwoDays.format(
            'h:mm A',
          )}`,
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
        const { container } = render(
          <RelativeDateTime date={test} isRelativeToCurrentWeek />,
        );
        expect(container.textContent).toEqual(expected);
      });
    });
  });

  describe('with relativeToCurrentWeek true and different baseDate', () => {
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
        {
          test: dayjs(baseDate).subtract(3, 'hour').format(),
          expected: '3 hours ago',
        },
      ];

      mocks.forEach(({ test, expected }) => {
        const { container } = render(
          <RelativeDateTime
            date={test}
            baseDate={baseDate.format()}
            isRelativeToCurrentWeek
          />,
        );
        expect(container.textContent).toEqual(expected);
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
          expected: `${mockInTwoDays.format('dddd')} at ${mockInTwoDays.format(
            'h:mm A',
          )}`,
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
        const { container } = render(
          <RelativeDateTime
            date={test}
            baseDate={baseDate.format()}
            isRelativeToCurrentWeek
          />,
        );
        expect(container.textContent).toEqual(expected);
      });
    });
  });
});
