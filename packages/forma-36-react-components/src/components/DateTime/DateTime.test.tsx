import React from 'react';
import { render } from '@testing-library/react';

import { DateTime } from './DateTime';

const exampleDate = new Date('2020-04-09T16:17:18.912Z');

describe('DateTime', () => {
  it('renders the component', () => {
    const { container } = render(
      <DateTime
        date={exampleDate}
        className="custom--className"
        testId="custom-testId"
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows for FULL formatting', () => {
    const { container } = render(<DateTime date={exampleDate} format="FULL" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows for WEEKDAY_DATE formatting', () => {
    const { container } = render(
      <DateTime date={exampleDate} format="WEEKDAY_DATE" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows for DATE_ONLY formatting', () => {
    const { container } = render(
      <DateTime date={exampleDate} format="DATE_ONLY" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('allows for TIME_ONLY formatting', () => {
    const { container } = render(
      <DateTime date={exampleDate} format="TIME_ONLY" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });

  it('does not allow for an unknown format', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const format = 'NOT_REAL' as any;

    expect(() => {
      render(<DateTime date={exampleDate} format={format} />);
    }).toThrow(`Unknown date format 'NOT_REAL'`);
  });
});
