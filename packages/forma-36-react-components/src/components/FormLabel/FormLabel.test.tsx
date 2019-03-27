import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import FormLabel from './FormLabel';

it('renders the component with all required props', () => {
  const output = shallow(<FormLabel htmlFor="someInput">Label Text</FormLabel>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <FormLabel htmlFor="someInput" className="my-extra-class">
      Label Text
    </FormLabel>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an required flag', () => {
  const output = shallow(
    <FormLabel htmlFor="someInput" required>
      Label Text
    </FormLabel>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with required text', () => {
  const output = shallow(
    <FormLabel htmlFor="someInput" requiredText="pflichtfeld" required>
      Label Text
    </FormLabel>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <FormLabel htmlFor="someInput">Label Text</FormLabel>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
