import React from 'react';
import { render } from '@testing-library/react';
import { axe } from '@/scripts/test/axeHelper';

import { SwitchField } from './SwitchField';

describe('SwitchField', function () {
  const labelText = 'switch field';
  it('renders the component', () => {
    const { getByLabelText, getByRole } = render(
      <SwitchField
        id="switch"
        inputProps={{ inputProps: { style: { color: 'red' } } }}
        label={labelText}
      />,
    );

    const input = getByLabelText(labelText);
    expect(input).toBeTruthy();
    expect(getByRole('switch')).toEqual(input);
    expect(input.getAttribute('type')).toEqual('checkbox');
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <SwitchField id="switch" className="my-extra-class" label={labelText} />,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(<SwitchField id="switch" label={labelText} />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
