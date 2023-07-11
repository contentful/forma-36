import React from 'react';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';

import { RelativeDateTime } from './RelativeDateTime';

// eslint-disable-next-line jest/no-mocks-import
import * as TestCases from '../__mocks__/dates';

describe('RelativeDateTime', function () {
  // Tests fail if the time is between 7am & 8am
  const today = dayjs('2021-11-03T08:19:05.729Z');
  const tomorrow = today.add(1, 'day');
  const yesterday = today.subtract(1, 'day');

  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(today.format()).getTime());
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
  it('renders', () => {
    const tree = render(<RelativeDateTime date={today.format()} />);

    expect(tree).toBeTruthy();
  });

  it('renders how much time the date will be relative to TODAY (date is BEFORE today)', () => {
    const { container } = render(
      <RelativeDateTime date={yesterday.format()} />,
    );

    expect(container.textContent).toBe('a day ago');
  });

  it('renders how much time the date will be relative to TODAY (date is AFTER today)', () => {
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
      const mocks = TestCases.dateIsToday(today);

      mocks.forEach(({ test, expected }) => {
        const { container } = render(
          <RelativeDateTime date={test} isRelativeToCurrentWeek />,
        );
        expect(container.textContent).toEqual(expected);
      });
    });

    it('returns "Yesterdy at ...", "Tomorrow at ...", etc. if the date is NOT today', () => {
      const mocks = TestCases.dateIsNotToday(today);

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
      const mocks = TestCases.dateIsToday(baseDate);

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
      const mocks = TestCases.dateIsNotToday(baseDate);

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
