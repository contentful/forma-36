import React from 'react';
import { shallow } from 'enzyme';
import RelativeDate from './RelativeDate';

const baseDate = new Date('2020-04-10T15:00:00Z');
const exampleDate = new Date('2020-04-09T16:17:18.912Z');

it('renders the component', () => {
  const output = shallow(
    <RelativeDate
      date={exampleDate}
      baseDate={baseDate}
      className="custom--className"
      testId="custom-testId"
    />,
  );

  expect(output).toMatchSnapshot();
});
