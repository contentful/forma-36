import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import RadioButton from './RadioButton';

it('renders the component', () => {
  const output = shallow(<RadioButton labelText="radio-button" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <RadioButton labelText="radio-button" className="my-extra-class" />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<RadioButton labelText="radio-button" />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
