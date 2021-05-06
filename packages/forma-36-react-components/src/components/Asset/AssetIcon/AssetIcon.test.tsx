import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { AssetIcon } from './AssetIcon';

it('renders the component', () => {
  const { container } = render(<AssetIcon />);

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <AssetIcon type="presentation" className="extra-class-name" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with type pdf', () => {
  const { container } = render(
    <AssetIcon className="extra-class-name" type="pdf" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('has no a11y issues', async () => {
  const { container } = render(<AssetIcon type="presentation" />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
