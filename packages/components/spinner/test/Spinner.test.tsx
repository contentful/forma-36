import React from 'react';
import { render, screen } from '@testing-library/react';

import { axe } from '../../../../scripts/test/axeHelper';
import { Spinner } from '../src/';

describe('Spinner', function () {
  it('renders the component', () => {
    const { container } = render(<Spinner />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with the size "small"', () => {
    const { container } = render(<Spinner size="small" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with the size "large"', () => {
    const { container } = render(<Spinner size="large" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with a custom size', () => {
    const { container } = render(<Spinner customSize={42} />);

    expect(screen.getByTestId('cf-ui-spinner')).toHaveStyle({
      height: '42px',
      width: '42px',
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(<Spinner className="my-extra-class" />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Spinner />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
