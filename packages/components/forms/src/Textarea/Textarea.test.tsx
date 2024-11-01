import React from 'react';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

import { Textarea } from './Textarea';

describe('Textarea', function () {
  const labelText = 'My textarea';

  it('renders the component', () => {
    const { container } = render(
      <Textarea id="textarea" aria-label={labelText} />,
    );

    const textarea = container.querySelector('textarea');
    expect(textarea).toBeVisible();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <Textarea
        id="textarea"
        className="my-extra-class"
        aria-label={labelText}
      />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <Textarea id="textarea" aria-label={labelText} />,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
