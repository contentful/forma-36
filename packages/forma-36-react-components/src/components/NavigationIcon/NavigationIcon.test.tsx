import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import NavigationIcon from './NavigationIcon';
import { navigationIconName } from './constants';

it('renders the component', () => {
  const output = shallow(<NavigationIcon icon={'Home'} />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <NavigationIcon icon={'Home'} className="my-extra-class" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders a large icon', () => {
  const output = shallow(<NavigationIcon icon={'Home'} size="large" />);

  expect(output).toMatchSnapshot();
});

it('renders as a "positive" icon', () => {
  const output = shallow(
    <NavigationIcon icon={'Home'} size="large" color="positive" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "white" icon', () => {
  const output = shallow(
    <NavigationIcon icon={'Home'} size="large" color="white" />,
  );

  expect(output).toMatchSnapshot();
});

Object.keys(navigationIconName).forEach(icon => {
  it(`${icon} has no a11y issues`, async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = mount(<NavigationIcon icon={icon as any} />).html();

    const results = await axe(output);

    expect(results).toHaveNoViolations();
  });
});
