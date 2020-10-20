import React from 'react';
import { shallow, mount } from 'enzyme';
import axe from '../../utils/axeHelper';
import ProductIcon from './ProductIcon';
import { productIconName } from './constants';

it('renders the component', () => {
  const output = shallow(<ProductIcon icon={'Home'} />);

  expect(output).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const output = shallow(
    <ProductIcon icon={'Home'} className="my-extra-class" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders a large icon', () => {
  const output = shallow(<ProductIcon icon={'Home'} size="large" />);

  expect(output).toMatchSnapshot();
});

it('renders as a "positive" icon', () => {
  const output = shallow(
    <ProductIcon icon={'Home'} size="large" color="positive" />,
  );

  expect(output).toMatchSnapshot();
});

it('renders as a "white" icon', () => {
  const output = shallow(
    <ProductIcon icon={'Home'} size="large" color="white" />,
  );

  expect(output).toMatchSnapshot();
});

Object.keys(productIconName).forEach(icon => {
  it(`${icon} has no a11y issues`, async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const output = mount(<ProductIcon icon={icon as any} />).html();

    const results = await axe(output);

    expect(results).toHaveNoViolations();
  });
});
