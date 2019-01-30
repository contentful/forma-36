import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import RadioButtonField from './RadioButtonField';

it('renders the component', () => {
  const output = shallow(
    <RadioButtonField
      id="radio-button"
      inputProps={{ labelText: 'radio button field' }}
      labelText="radio button field"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <RadioButtonField
      id="radio-button"
      extraClassNames="my-extra-class"
      labelText="radio button field"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <RadioButtonField id="radio-button" labelText="radio button field" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
