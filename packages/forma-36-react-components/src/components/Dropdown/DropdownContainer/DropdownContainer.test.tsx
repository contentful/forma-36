import React from 'react';
import { shallow } from 'enzyme';
import DropdownContainer from './DropdownContainer';

it('renders the component', () => {
  const output = shallow(
    <DropdownContainer isOpen>DropdownContainer</DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <DropdownContainer className="extraClassName" isOpen>
      DropdownContainer
    </DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component as a submenu', () => {
  const output = shallow(
    <DropdownContainer className="extraClassName" isOpen submenu>
      DropdownContainer
    </DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = shallow(
    <DropdownContainer isOpen>DropdownContainer</DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});
