import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Radio } from './Radio';

describe('Radio', function () {
  it('renders the component', () => {
    const { getByRole } = render(<Radio label="radio-button" />);

    expect(getByRole('radio')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Radio label="radio-button" className="my-extra-class" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Radio label="radio-button" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
