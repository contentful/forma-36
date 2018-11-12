import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import EditorToolbarDivider from './EditorToolbarDivider';

it('renders the component', () => {
  const output = shallow(
    <EditorToolbarDivider>EditorToolbarDivider</EditorToolbarDivider>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <EditorToolbarDivider extraClassNames="my-extra-class">
      EditorToolbarDivider
    </EditorToolbarDivider>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <EditorToolbarDivider>EditorToolbarDivider</EditorToolbarDivider>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
