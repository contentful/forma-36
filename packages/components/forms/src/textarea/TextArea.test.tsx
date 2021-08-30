import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { TextArea } from './TextArea';

describe('TextArea', function () {
  const labelText = 'My textarea';

  it('renders the component', () => {
    const { container } = render(<TextArea id="textarea" label={labelText} />);

    const textarea = container.querySelector('textarea');
    expect(textarea).toBeVisible();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <TextArea id="textarea" className="my-extra-class" label={labelText} />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<TextArea id="textarea" label={labelText} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
