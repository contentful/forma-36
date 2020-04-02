import React from 'react';
import { mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import Tooltip from './Tooltip';

it('does not render the component if no mouseover event on child', () => {
  const output = mount(
    <Tooltip content="Tooltip content">
      <span>Hover me</span>
    </Tooltip>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component', () => {
  const output = mount(
    <Tooltip content="Tooltip content">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  output.find('#test').simulate('mouseover');
  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = mount(
    <Tooltip content="Tooltip content" className="extra-class-name">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  output.find('#test').simulate('mouseover');
  expect(output).toMatchSnapshot();
});

it('renders the component with a target wrapper classname', () => {
  const output = mount(
    <Tooltip
      content="Tooltip content"
      targetWrapperClassName="target-wrapper-class-name"
    >
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  output.find('#test').simulate('mouseover');
  expect(output).toMatchSnapshot();
});

it('renders the component with a place attribute', () => {
  const output = mount(
    <Tooltip content="Tooltip content" place="left">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  output.find('#test').simulate('mouseover');
  expect(output).toMatchSnapshot();
});

it('renders the component with a id attribute', () => {
  const output = mount(
    <Tooltip id="Tooltip">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  output.find('#test').simulate('mouseover');
  expect(output).toMatchSnapshot();
});

it('renders the component as span with a id attribute', () => {
  const output = mount(
    <Tooltip containerElement="span">
      <span id="test">Hover me</span>
    </Tooltip>,
  );

  output.find('#test').simulate('mouseover');
  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Tooltip id="Tooltip">
      <span>Hover me</span>
    </Tooltip>,
  ).html();

  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
