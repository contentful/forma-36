import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Heading from './Heading';

it('renders the component', () => {
  const output = shallow(<Heading>Heading</Heading>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Heading extraClassNames="my-extra-class">Heading</Heading>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component h3', () => {
  const output = shallow(<Heading element="h3">Heading</Heading>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Heading>Heading</Heading>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
