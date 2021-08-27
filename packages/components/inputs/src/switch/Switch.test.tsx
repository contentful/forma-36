import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { Switch } from './Switch';

describe('Switch', function () {
  it('renders the component', () => {
    const { getByRole } = render(<Switch label="switch" />);

    expect(getByRole('switch')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Switch label="switch" className="my-extra-class" />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Switch label="switch" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
