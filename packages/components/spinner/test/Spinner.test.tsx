import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Spinner } from '../src/';

describe('Spinner', function () {
  it('renders the component', () => {
    const { getByTitle, container } = render(<Spinner />);

    const spinnerSvg = getByTitle('Loading…').parentElement;
    expect(container.firstChild).toContainElement(spinnerSvg);
    expect(container.firstChild).toHaveStyle({
      width: '20px',
    });
  });

  it('renders the component with the size "small"', () => {
    const { container } = render(<Spinner size="small" />);

    expect(container.firstChild).toHaveStyle({
      width: '14px',
    });
  });

  it('renders the component with the size "large"', () => {
    const { container } = render(<Spinner size="large" />);

    expect(container.firstChild).toHaveStyle({
      width: '36px',
    });
  });

  it('renders the component with a custom size', () => {
    const { container } = render(<Spinner customSize={42} />);

    expect(container.firstChild).toHaveStyle({
      height: '42px',
      width: '42px',
    });
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(<Spinner className="my-extra-class" />);

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Spinner />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
