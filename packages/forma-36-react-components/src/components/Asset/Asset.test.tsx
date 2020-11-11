import React from 'react';
import { render } from '@testing-library/react';

import axe from '../../utils/axeHelper';
import { Asset } from './Asset';

it('renders the component', () => {
  const { container } = render(
    <Asset src="https://placekitten.com/200/300" title="Image of a cat" />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with an additional class name', () => {
  const { container } = render(
    <Asset
      src="https://placekitten.com/200/300"
      title="Image of a cat"
      className="extra-class-name"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

it('renders the component with type pdf', () => {
  const { container } = render(
    <Asset
      src="https://placekitten.com/200/300"
      title="Image of a cat"
      className="extra-class-name"
      type="pdf"
    />,
  );

  expect(container.firstChild).toMatchSnapshot();
});

describe('with type=image', () => {
  it('renders the component as a preview', () => {
    const { container } = render(
      <Asset
        src="https://placekitten.com/200/300"
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
        src="https://placekitten.com/200/300"
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
    <Asset src="http://placekitten.com/200/300" title="picture of a cat" />,
  );
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});
