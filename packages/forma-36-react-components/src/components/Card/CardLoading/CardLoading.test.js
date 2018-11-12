import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import CardLoading from './CardLoading';

it('renders the component', () => {
  const output = shallow(<CardLoading>CardLoading</CardLoading>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <CardLoading extraClassNames="my-extra-class">CardLoading</CardLoading>,
  );

  expect(output).toMatchSnapshot();
});

it('renders a loading spinner when passed a "loading" prop', () => {
  const output = mount(<CardLoading isLoading>Asset Card</CardLoading>);

  expect(output.find('Spinner').length).toEqual(1);

  expect(output).toMatchSnapshot();
});

it('does not render a loading spinner when not passed a "loading" prop', () => {
  const output = mount(<CardLoading>Asset Card</CardLoading>);

  expect(output.find('Spinner').length).toEqual(0);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<CardLoading>CardLoading</CardLoading>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
