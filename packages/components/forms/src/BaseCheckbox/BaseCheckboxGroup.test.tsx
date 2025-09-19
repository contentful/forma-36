import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { axe } from 'jest-axe';

// Adjust import paths if your exports differ
import { BaseCheckboxGroup } from './BaseCheckboxGroup';
import { BaseCheckbox } from './BaseCheckbox';

describe('BaseCheckboxGroup', () => {
  const options = [
    { label: 'Alpha', value: 'alpha' },
    { label: 'Beta', value: 'beta' },
    { label: 'Gamma', value: 'gamma' },
  ];

  test('renders group and its checkboxes', () => {
    render(
      <BaseCheckboxGroup name="letters" type="checkbox">
        {options.map((o) => (
          <BaseCheckbox key={o.value} value={o.value}>
            {o.label}
          </BaseCheckbox>
        ))}
      </BaseCheckboxGroup>,
    );

    expect(
      screen.getByRole('group', { name: /select letters/i }),
    ).toBeInTheDocument();
    options.forEach((o) => {
      expect(
        screen.getByRole('checkbox', { name: o.label }),
      ).toBeInTheDocument();
    });
  });

  test('calls onChange with updated values', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <BaseCheckboxGroup
        type="checkbox"
        name="letters"
        value={['alpha']}
        onChange={handleChange}
      >
        {options.map((o) => (
          <BaseCheckbox key={o.value} value={o.value}>
            {o.label}
          </BaseCheckbox>
        ))}
      </BaseCheckboxGroup>,
    );

    await user.click(screen.getByRole('checkbox', { name: 'Beta' }));
    expect(handleChange).toHaveBeenCalled();
    // Last call arg shape may differ; adapt assertion if API differs
    const lastCallArgs = handleChange.mock.lastCall[0];
    expect(lastCallArgs).toEqual(expect.arrayContaining(['alpha', 'beta']));
  });

  test('unchecking removes value', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    render(
      <BaseCheckboxGroup
        name="letters"
        type="checkbox"
        value={['alpha', 'beta']}
        onChange={handleChange}
      >
        {options.map((o) => (
          <BaseCheckbox key={o.value} value={o.value}>
            {o.label}
          </BaseCheckbox>
        ))}
      </BaseCheckboxGroup>,
    );

    await user.click(screen.getByRole('checkbox', { name: 'Beta' }));
    const lastCallArgs = handleChange.mock.lastCall[0];
    expect(lastCallArgs).toEqual(['alpha']);
  });

  test('has no a11y issues', async () => {
    const { container } = render(
      <BaseCheckboxGroup name="letters" type="checkbox" value={['alpha']}>
        {options.map((o) => (
          <BaseCheckbox key={o.value} value={o.value}>
            {o.label}
          </BaseCheckbox>
        ))}
      </BaseCheckboxGroup>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
