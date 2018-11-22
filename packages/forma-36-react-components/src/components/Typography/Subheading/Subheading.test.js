import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Subheading from './Subheading';

it('renders the component', () => {
  const output = shallow(<Subheading>Subheading</Subheading>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Subheading extraClassNames="my-extra-class">Subheading</Subheading>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = shallow(<Subheading element="h3">Subheading</Subheading>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Subheading>Subheading</Subheading>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
