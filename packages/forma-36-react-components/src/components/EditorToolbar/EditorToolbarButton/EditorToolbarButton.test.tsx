import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import EditorToolbarButton from './EditorToolbarButton';

it('renders the component', () => {
  const output = shallow(<EditorToolbarButton icon="HeadingOne" label="H1" />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <EditorToolbarButton
      icon="HeadingOne"
      label="H1"
      className="my-extra-class"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a tooltip', () => {
  const output = shallow(
    <EditorToolbarButton icon="HeadingOne" label="H1" tooltip="H1" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as active', () => {
  const output = shallow(
    <EditorToolbarButton icon="HeadingOne" label="H1" tooltip="H1" isActive />,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const output = shallow(
    <EditorToolbarButton
      icon="HeadingOne"
      label="H1"
      tooltip="H1"
      isDisabled
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders with a dropdown indicator', () => {
  const output = shallow(
    <EditorToolbarButton
      icon="HeadingOne"
      label="H1"
      tooltip="H1"
      hasDropdown
    />,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <EditorToolbarButton icon="HeadingOne" label="H1" />,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
