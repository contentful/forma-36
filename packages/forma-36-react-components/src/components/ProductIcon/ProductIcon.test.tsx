import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import ProductIcon from './ProductIcon';
import { productIconName } from './constants';

it('renders the component', () => {
  const { container } = render(<ProductIcon icon={'Home'} />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <ProductIcon icon={'Home'} className="my-extra-class" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders a large icon', () => {
  const { container } = render(<ProductIcon icon={'Home'} size="large" />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "positive" icon', () => {
  const { container } = render(
    <ProductIcon icon={'Home'} size="large" color="positive" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders as a "white" icon', () => {
  const { container } = render(
    <ProductIcon icon={'Home'} size="large" color="white" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

Object.keys(productIconName).forEach((icon) => {
  it(`${icon} has no a11y issues`, async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { container } = render(<ProductIcon icon={icon as any} />);

    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
