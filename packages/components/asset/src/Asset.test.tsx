import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Asset } from './Asset';

describe('with type=image', () => {
  it('renders the component as a preview', () => {
    const { container } = render(
      <Asset
        src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
        src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
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
      src="https://images.ctfassets.net/iq4lnigp6fgt/2EEEk92Kiz6KxREsjBLPAN/810d5a21650d91abad12e95da4cd3beb/2021-06_Everyone_is_Welcome_here_1_.png?fit=fill&f=top_left&w=200&h=300"
      title="Everyone is welcome here"
    />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
