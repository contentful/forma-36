import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import ValidationMessage from './ValidationMessage';

it('renders the component with all required props', () => {
  const output = shallow(
    <ValidationMessage>This field is required</ValidationMessage>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <ValidationMessage extraClassNames="my-extra-class">
      This field is required
    </ValidationMessage>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <ValidationMessage>This field is required</ValidationMessage>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
