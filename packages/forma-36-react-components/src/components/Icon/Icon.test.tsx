import React from 'react';
import { shallow, mount } from 'enzyme';
import { axe } from 'jest-axe';
import Icon from './Icon';
import { iconName } from './constants';

it('renders the component', () => {
  const output = shallow(<Icon icon={'ArrowDown'} />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <Icon icon={'ArrowDown'} className="my-extra-class" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders a large icon', () => {
  const output = shallow(<Icon icon={'ArrowDown'} size="large" />);

  expect(output).toMatchSnapshot();
});

it('renders as a "primary" icon', () => {
  const output = shallow(
    <Icon icon={'ArrowDown'} size="large" color="primary" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "positive" icon', () => {
  const output = shallow(
    <Icon icon={'ArrowDown'} size="large" color="positive" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "negative" icon', () => {
  const output = shallow(
    <Icon icon={'ArrowDown'} size="large" color="negative" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "warning" icon', () => {
  const output = shallow(
    <Icon
      icon={iconName[Object.keys(iconName)[0]]}
      size="large"
      color="warning"
    />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "secondary" icon', () => {
  const output = shallow(
    <Icon icon={'ArrowDown'} size="large" color="secondary" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "muted" icon', () => {
  const output = shallow(
    <Icon icon={'ArrowDown'} size="large" color="muted" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "white" icon', () => {
  const output = shallow(
    <Icon icon={'ArrowDown'} size="large" color="white" />,
  );

  expect(output).toMatchSnapshot();
});

Object.keys(iconName).forEach(icon => {
  it(`${icon} has no a11y issues`, async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = mount(<Icon icon={icon as any} />).html();

    const results = await axe(output);

    expect(results).toHaveNoViolations();
  });
});
