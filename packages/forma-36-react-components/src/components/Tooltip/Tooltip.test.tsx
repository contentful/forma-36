import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Tooltip from './Tooltip';

it('renders the component', () => {
  const output = shallow(
    <Tooltip content="Tooltip content">
      <span>hi</span>
    </Tooltip>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Tooltip content="Tooltip content" className="extra-class-name">
      <span>hi</span>
    </Tooltip>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a target wrapper classname', () => {
  const output = shallow(
    <Tooltip
      content="Tooltip content"
      targetWrapperClassName="target-wrapper-class-name"
    >
      <span>hi</span>
    </Tooltip>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a place attribute', () => {
  const output = shallow(
    <Tooltip content="Tooltip content" place="left">
      <span>hi</span>
    </Tooltip>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a id attribute', () => {
  const output = shallow(
    <Tooltip id="Tooltip">
      <span>hi</span>
    </Tooltip>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as span with a id attribute', () => {
  const output = shallow(
    <Tooltip containerElement="span">
      <span>hi</span>
    </Tooltip>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Tooltip id="Tooltip">
      <span>hi</span>
    </Tooltip>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
