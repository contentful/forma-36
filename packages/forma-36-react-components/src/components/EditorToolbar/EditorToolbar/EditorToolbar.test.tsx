import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import EditorToolbar from './EditorToolbar';

it('renders the component', () => {
  const output = shallow(<EditorToolbar>EditorToolbar</EditorToolbar>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <EditorToolbar className="my-extra-class">EditorToolbar</EditorToolbar>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<EditorToolbar>EditorToolbar</EditorToolbar>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
