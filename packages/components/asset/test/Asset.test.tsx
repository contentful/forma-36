import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Asset } from '../src/Asset';

describe('with type=image', () => {
  it('renders the component as a preview', () => {
    const { container } = render(
      <Asset
        src="https://via.placeholder.com/200x300"
        title="Image of a cat"
        className="extra-class-name"
        type="image"
      />,
    );

    const image = container.querySelector('img');
    expect(image).toBeTruthy();
  });

  it('renders the component as a standard asset with status=archived', () => {
    const { container } = render(
      <Asset
        src="https://via.placeholder.com/200x300"
        title="Image of a cat"
        className="extra-class-name"
        type="image"
        status="archived"
      />,
    );

    const image = container.querySelector('img');
    expect(image).not.toBeTruthy();
  });
});

it('has no a11y issues', async () => {
  const { container } = render(
    <Asset
      src="https://via.placeholder.com/200x300"
      title="picture of a cat"
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
