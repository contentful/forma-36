import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import CardDragHandle from './CardDragHandle';
import DropdownListItem from '../../Dropdown/DropdownListItem';
import DropdownList from '../../Dropdown/DropdownList';

it('renders the component', () => {
  const output = shallow(<CardDragHandle>CardDragHandle</CardDragHandle>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <CardDragHandle className="my-extra-class">CardDragHandle</CardDragHandle>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with isDragActive prop set to true', () => {
  const output = shallow(
    <CardDragHandle isDragActive>CardDragHandle</CardDragHandle>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(<CardDragHandle>CardDragHandle</CardDragHandle>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
