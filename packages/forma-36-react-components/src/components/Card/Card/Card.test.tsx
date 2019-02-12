import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Card from './Card';

it('renders the component', () => {
  const output = shallow(<Card>Card</Card>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<Card extraClassNames="my-extra-class">Card</Card>);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Card>Card</Card>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('renders as a link if passed a href prop', () => {
  const output = shallow(<Card href="/">Card</Card>);

  expect(output).toMatchSnapshot();
});

it('has an "is-interactive" class if has an onClick prop', () => {
  const output = shallow(<Card href="/">Card</Card>);

  expect(output).toMatchSnapshot();
});

it('calls an onClick function', () => {
  const onClickFunc = jest.fn();
  const output = shallow(<Card onClick={onClickFunc}>Card</Card>);

  output.simulate('click');

  expect(output).toMatchSnapshot();
  expect(onClickFunc).toBeCalled();
});

it('can be selected', () => {
  const output = shallow(<Card selected>Card</Card>);

  expect(output).toMatchSnapshot();
});
