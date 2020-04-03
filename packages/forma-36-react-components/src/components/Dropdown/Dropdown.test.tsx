import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import Dropdown from './Dropdown';
import Button from '../Button';
import DropdownListItem from './DropdownListItem';
import DropdownList from './DropdownList';

it('renders the component', () => {
  const output = shallow(
    <Dropdown toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Dropdown toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as open', () => {
  const output = shallow(
    <Dropdown isOpen toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );

  expect(output).toMatchSnapshot();
});

it('toggleElement dispactions onClick event', () => {
  const onClickFunc = jest.fn();

  const output = shallow(
    <Dropdown toggleElement={<Button onClick={onClickFunc}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  );

  output.find('Button').simulate('click');
  expect(onClickFunc).toHaveBeenCalled();
});

it('renders the component with a submenu', () => {
  const output = shallow(
    <Dropdown isOpen toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
        <Dropdown isOpen submenuToggleLabel="Submenu">
          <DropdownListItem>entry</DropdownListItem>
        </Dropdown>
        ,
      </DropdownList>
    </Dropdown>,
  );

  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = mount(
    <Dropdown toggleElement={<Button onClick={() => {}}>Toggle</Button>}>
      <DropdownList>
        <DropdownListItem>entry</DropdownListItem>
      </DropdownList>
    </Dropdown>,
  ).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
