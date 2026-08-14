import { describe, expect, it } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

import { Radio } from './Radio';

describe('Radio', function () {
  it('renders the component', () => {
    const { getByRole } = render(<Radio>radio-button</Radio>);

    expect(getByRole('radio')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Radio className="my-extra-class">radio-button</Radio>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Radio>radio-button</Radio>);
    await expectNoA11yViolations(container);
  });
});
