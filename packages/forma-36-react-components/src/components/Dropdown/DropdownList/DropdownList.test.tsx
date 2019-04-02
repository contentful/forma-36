import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import DropdownList from './DropdownList';
import DropdownListItem from '../DropdownListItem/DropdownListItem';

it('renders the component', () => {
  const output = shallow(
    <DropdownList>
      <DropdownListItem>List Item</DropdownListItem>
    </DropdownList>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <DropdownList className="my-extra-class">
      <DropdownListItem>List Item</DropdownListItem>
    </DropdownList>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with a border attribute', () => {
  const output = shallow(
    <DropdownList border="top">
      <DropdownListItem>List Item</DropdownListItem>
    </DropdownList>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <DropdownList>
      <DropdownListItem>entry</DropdownListItem>
    </DropdownList>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
