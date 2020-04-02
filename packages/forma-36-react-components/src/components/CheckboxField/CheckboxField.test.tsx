import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import CheckboxField from './CheckboxField';

it('renders the component', () => {
  const output = shallow(
    <CheckboxField id="checkbox" labelText="label text" />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <CheckboxField id="checkbox" labelText="label text" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
