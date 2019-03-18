import React from 'react';
import { mount } from 'enzyme';
import { axe } from 'jest-axe';
import Subheading from './Subheading';

it('renders the component', () => {
  const output = mount(<Subheading>Subheading</Subheading>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = mount(
    <Subheading className="my-extra-class">Subheading</Subheading>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = mount(<Subheading element="h3">Subheading</Subheading>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Subheading>Subheading</Subheading>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
