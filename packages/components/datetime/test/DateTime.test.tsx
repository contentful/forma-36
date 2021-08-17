import React from 'react';
import { render } from '@testing-library/react';
import { DateTime } from '../src/DateTime';

describe('DateTime', function () {
  const mockDate = '2021-08-17T15:45';

  it('renders', () => {
    const today = new Date();
    const tree = render(<DateTime date={today} />);

    expect(tree).toBeTruthy();
  });

  it('renders a date in "ddd, DD MMM YYYY [at] h:mm A" format when "full" is passed as format', () => {
    const { container } = render(<DateTime date={mockDate} format="full" />);

    expect(container.textContent).toBe('Tue, 17 Aug 2021 at 3:45 PM');
  });

  it('renders a date in "DD MMM YYYY" format when "day" is passed as format', () => {
    const { container } = render(<DateTime date={mockDate} format="day" />);

    expect(container.textContent).toBe('17 Aug 2021');
  });

  it('renders a date in "ddd, DD MMM" format when "weekday" is passed as format', () => {
    const { container } = render(<DateTime date={mockDate} format="weekday" />);

    expect(container.textContent).toBe('Tue, 17 Aug');
  });

  it('renders a date in "h:mm A" format when "time" is passed as format', () => {
    const { container } = render(<DateTime date={mockDate} format="time" />);

    expect(container.textContent).toBe('3:45 PM');
  });

  it('renders normally when new Date() is passed as the date prop', () => {
    const date = new Date(mockDate);
    const { container } = render(<DateTime date={date} />);

    expect(container.textContent).toBe('Tue, 17 Aug 2021 at 3:45 PM');
  });

  it('renders normally when Unix Epoch(in milliseconds) is passed as the date prop', () => {
    const date = 1629240300000;
    const { container } = render(<DateTime date={date} />);

    expect(container.textContent).toBe('Tue, 17 Aug 2021 at 3:45 PM');
  });
});
