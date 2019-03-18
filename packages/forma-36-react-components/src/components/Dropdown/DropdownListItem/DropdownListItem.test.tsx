import React from 'react';
import { shallow, mount } from 'enzyme';
import DropdownListItem from './DropdownListItem';

it('renders the component', () => {
  const output = shallow(<DropdownListItem>DropdownMenuItem</DropdownListItem>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <DropdownListItem className="my-extra-class">
      <DropdownListItem>Entry</DropdownListItem>
    </DropdownListItem>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as active', () => {
  const output = shallow(<DropdownListItem isActive>entry</DropdownListItem>);

  expect(output).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const output = shallow(<DropdownListItem isDisabled>entry</DropdownListItem>);

  expect(output).toMatchSnapshot();
});

it('calls onClick', () => {
  const mockOnClick = jest.fn();
  const dropDownItem = mount(
    <DropdownListItem onClick={mockOnClick}>entry</DropdownListItem>,
  );
  const button = dropDownItem.find('button');
  button.simulate('click');
  expect(mockOnClick).toHaveBeenCalled();
});

it('does not call onClick on a disabled menu item', () => {
  const mockOnClick = jest.fn();
  const dropDownItem = mount(
    <DropdownListItem isDisabled onClick={mockOnClick}>
      entry
    </DropdownListItem>,
  );
  const button = dropDownItem.find('button');
  button.simulate('click');
  expect(mockOnClick).not.toHaveBeenCalled();
});
