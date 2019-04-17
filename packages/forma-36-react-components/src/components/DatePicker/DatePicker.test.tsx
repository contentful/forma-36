import React from 'react';
import { shallow } from 'enzyme';
import DatePicker from './DatePicker';

it('renders the component', () => {
  const output = shallow(<DatePicker>DatePicker</DatePicker>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <DatePicker className="my-extra-class">DatePicker</DatePicker>,
  );

  expect(output).toMatchSnapshot();
});
