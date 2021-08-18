import React from 'react';
import { render } from '@testing-library/react';
import dayjs from 'dayjs';
import { set as mockDateSet, reset as mockDateReset } from 'mockdate';

import { RelativeDateTime } from '../src/RelativeDateTime';

describe('RelativeDateTime', function () {
  const mockDate = '2021-08-17T15:45:00Z';
  const today = dayjs();
  const tomorrow = today.add(1, 'day');
  const yesterday = today.subtract(1, 'day');

  beforeEach(() => {
    mockDateSet(new Date(mockDate));
  });

  afterEach(() => {
    mockDateReset();
  });

  it('renders', () => {
    const tree = render(<RelativeDateTime date={mockDate} />);

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

  it('renders in how much time the date will be relative to the baseDate (baseDate is BEFORE the date)', () => {
    const { container } = render(
      <RelativeDateTime date={today.format()} baseDate={yesterday.format()} />,
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
