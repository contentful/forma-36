import React from 'react';
import { render } from '@testing-library/react';
import { CalendarIcon } from '@contentful/f36-icons';
import { axe } from '@/scripts/test/axeHelper';

import { AssetCard } from './AssetCard';

it('renders the component without actions', () => {
  const { container } = render(
    <AssetCard
      src="https://via.placeholder.com/200x300"
      title="picture of a cat"
    />,
  );
  const dropdown = container.querySelector('[data-test-id="cf-ui-dropdown"]');

  expect(dropdown).not.toBeTruthy();
});

it('has no a11y issues', async () => {
  const { container } = render(
    <AssetCard
      src="https://via.placeholder.com/200x300"
      title="picture of a cat"
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

it('renders a component with a status icon', async () => {
  const { container } = render(
    <AssetCard
      src="https://via.placeholder.com/200x300"
      title="picture of a cat"
      statusIcon={CalendarIcon}
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
