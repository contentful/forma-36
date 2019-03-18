import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Pill from './Pill';

it('renders the component', () => {
  const output = shallow(<Pill label="test" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(<Pill className="my-extra-class" label="test" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with a dragging handle', () => {
  const output = shallow(
    <Pill className="my-extra-class" label="test" onDrag={() => {}} />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a close button', () => {
  const output = shallow(
    <Pill className="my-extra-class" label="test" onClose={() => {}} />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a test id', () => {
  const output = shallow(
    <Pill className="my-extra-class" label="test" testId="test-id" />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<Pill label="test" />).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
