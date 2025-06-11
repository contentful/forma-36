import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Asset } from './Asset';

describe('with type=image', () => {
  it('renders the component as a preview', () => {
    const { container } = render(
      <Asset
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
        title="Everyone is welcome here"
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
        src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
        title="Everyone is welcome here"
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
      src="https://images.ctfassets.net/iq4lnigp6fgt/72KhxI84kw1SE9gP8gDp7R/c5fa24bdc295a318018aea0ca46e2de8/forma-36-storybook-asset.png?fit=fill&f=top_left&w=200&h=300"
      title="Everyone is welcome here"
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
