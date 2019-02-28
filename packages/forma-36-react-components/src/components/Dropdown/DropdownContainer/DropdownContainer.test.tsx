import React from 'react';
import { shallow } from 'enzyme';
import DropdownContainer from './DropdownContainer';

it('renders the component', () => {
  const output = shallow(
    <DropdownContainer
      anchorDimensionsAndPositon={{ left: 0, top: 0, width: 100, height: 0 }}
    >
      DropdownContainer
    </DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <DropdownContainer
      anchorDimensionsAndPositon={{ left: 0, top: 0, width: 100, height: 0 }}
      extraClassNames="extraClassName"
    >
      DropdownContainer
    </DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});

it('renders the component as a submenu', () => {
  const output = shallow(
    <DropdownContainer
      anchorDimensionsAndPositon={{ left: 0, top: 0, width: 100, height: 0 }}
      extraClassNames="extraClassName"
      submenu
    >
      DropdownContainer
    </DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const output = shallow(
    <DropdownContainer
      anchorDimensionsAndPositon={{ left: 0, top: 0, width: 100, height: 0 }}
    >
      DropdownContainer
    </DropdownContainer>,
  );
  expect(output).toMatchSnapshot();
});
