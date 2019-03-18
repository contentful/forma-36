import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Spinner from './Spinner';

it('renders the component', () => {
  const output = shallow(<Spinner />);

  expect(output).toMatchSnapshot();
});

it('renders the component with the size "small"', () => {
  const output = shallow(<Spinner size="small" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with the size "large"', () => {
  const output = shallow(<Spinner size="large" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with a custom size', () => {
  const output = shallow(<Spinner customSize={42} />);

  expect(output.find('svg').get(0).props.style).toEqual({
    height: '42px',
    width: '42px',
  });
  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<Spinner className="my-extra-class" />);

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Spinner />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
