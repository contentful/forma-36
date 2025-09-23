import React from 'react';
import { render } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { axe } from 'jest-axe';

import { Checkbox } from './Checkbox';

describe('Checkbox', function () {
  it('renders the component', () => {
    const { getByLabelText } = render(
      <Checkbox id="checkbox">label text</Checkbox>,
    );

    const checkbox = getByLabelText('label text');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.id).toBe('checkbox');
  });

  it('calls the onchange handler', async () => {
    const handleChange = jest.fn();
    const user = userEvent.setup();

    const { getByLabelText } = render(
      <Checkbox id="checkbox" onChange={handleChange}>
        label text
      </Checkbox>,
    );

    await user.click(getByLabelText('label text'));

    expect(handleChange).toHaveBeenCalled();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Checkbox id="checkbox">label text</Checkbox>);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
