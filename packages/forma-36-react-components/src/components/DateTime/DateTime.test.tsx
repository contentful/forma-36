import React from 'react';
import { shallow } from 'enzyme';
import DateTime from './DateTime';

const exampleDate = new Date('2020-04-09T16:17:18.912Z');

describe('DateTime', () => {
  it('renders the component', () => {
    const output = shallow(
      <DateTime
        date={exampleDate}
        className="custom--className"
        testId="custom-testId"
      />,
    );

    expect(output).toMatchSnapshot();
  });

  it('allows for FULL formatting', () => {
    const output = shallow(<DateTime date={exampleDate} format="FULL" />);

    expect(output).toMatchSnapshot();
  });

  it('allows for WEEKDAY_DATE formatting', () => {
    const output = shallow(
      <DateTime date={exampleDate} format="WEEKDAY_DATE" />,
    );

    expect(output).toMatchSnapshot();
  });

  it('allows for DATE_ONLY formatting', () => {
    const output = shallow(<DateTime date={exampleDate} format="DATE_ONLY" />);

    expect(output).toMatchSnapshot();
  });

  it('allows for TIME_ONLY formatting', () => {
    const output = shallow(<DateTime date={exampleDate} format="TIME_ONLY" />);

    expect(output).toMatchSnapshot();
  });

  it('does not allow for an unknown format', () => {
    const format = 'NOT_REAL' as any;
    try {
      shallow(<DateTime date={exampleDate} format={format} />);
      throw new Error('should have failed');
    } catch (err) {
      expect(err.message).toEqual(`Unknown date format 'NOT_REAL'`);
    }
  });
});
