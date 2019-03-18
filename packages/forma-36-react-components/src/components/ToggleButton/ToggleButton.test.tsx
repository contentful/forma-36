import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import ToggleButton from './ToggleButton';

it('renders the component', () => {
  const output = shallow(<ToggleButton>Toggle</ToggleButton>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <ToggleButton className="my-extra-class">Toggle</ToggleButton>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component active', () => {
  const output = shallow(
    <ToggleButton className="my-extra-class" isActive>
      Toggle
    </ToggleButton>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component with icon', () => {
  const output = shallow(
    <ToggleButton className="my-extra-class" icon="Entry">
      Toggle
    </ToggleButton>,
  );

  expect(output).toMatchSnapshot();
});

it('should not dispatch onClick if disabled', () => {
  const mockOnToggle = jest.fn();

  const toggle = shallow(
    <ToggleButton className="my-extra-class" icon="Entry" isDisabled>
      Toggle
    </ToggleButton>,
  );

  toggle.simulate('click');
  expect(mockOnToggle).not.toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const output = mount(<ToggleButton>Toggle</ToggleButton>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});
