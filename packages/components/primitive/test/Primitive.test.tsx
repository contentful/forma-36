import React from 'react';
import { render, screen } from '@testing-library/react';

import { Primitive } from '../src/';

it('renders the component as a div', () => {
  const { container } = render(<Primitive />);

  expect(container.firstChild).toMatchSnapshot();
});

describe('`as` prop', () => {
  it('takes a string', () => {
    const { container } = render(<Primitive as="p" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('takes an element', () => {
    const { container } = render(<Primitive as={() => <p />} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

it('takes a `testId` prop', () => {
  const { container } = render(<Primitive testId="cf-ui-primitive" />);

  expect(container.firstChild).toMatchSnapshot();
  screen.getByTestId('cf-ui-primitive');
});

it('takes a `className` prop', () => {
  const { container } = render(<Primitive className="css" />);

  expect(container.firstChild).toMatchSnapshot();
});
