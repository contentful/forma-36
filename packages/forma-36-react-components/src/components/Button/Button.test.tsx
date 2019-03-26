import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Button from './Button';

it('renders the component', () => {
  const output = shallow(<Button>Embed entry</Button>);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Button className="my-extra-class">Embed entry</Button>,
  );

  expect(output).toMatchSnapshot();
});

it('renders the component as disabled', () => {
  const output = shallow(<Button isDisabled>Embed entry</Button>);

  expect(output).toMatchSnapshot();
});

it('renders the component in loading state', () => {
  const output = shallow(<Button loading>Embed entry</Button>);

  expect(output).toMatchSnapshot();
});

it('renders the component as primary', () => {
  const output = shallow(<Button buttonType="primary">Embed entry</Button>);

  expect(output).toMatchSnapshot();
});

it('renders the component as naked', () => {
  const output = shallow(<Button buttonType="naked">Embed entry</Button>);

  expect(output).toMatchSnapshot();
});

it('renders the component with dropdown indicator', () => {
  const output = shallow(<Button indicateDropdown>Embed Entry</Button>);

  expect(output).toMatchSnapshot();
});

it('renders the component with icon', () => {
  const output = shallow(<Button icon="ChevronUp">Embed entry</Button>);

  expect(output).toMatchSnapshot();
});

it('renders the component full width', () => {
  const output = shallow(<Button isFullWidth>Embed entry</Button>);

  expect(output).toMatchSnapshot();
});

it('should not dispatch onClick if loading', () => {
  const mockOnClick = jest.fn();
  const button = shallow(
    <Button loading onClick={mockOnClick}>
      Embed entry
    </Button>,
  );

  button.simulate('click');
  expect(mockOnClick).not.toHaveBeenCalled();
});

it('should not dispatch onClick if disabled', () => {
  const mockOnClick = jest.fn();
  const button = shallow(
    <Button isDisabled onClick={mockOnClick}>
      Embed entry
    </Button>,
  );

  button.simulate('click');
  expect(mockOnClick).not.toHaveBeenCalled();
});

it('has no a11y issues', async () => {
  const output = mount(<Button>Embed entry</Button>).html();
  const results = await axe(output);

  expect(results).toHaveNoViolations();
});

it('renders the button as link', () => {
  const output = shallow(<Button href="/">Button link</Button>);

  expect(output).toMatchSnapshot();
});
