import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { BaseCheckboxGroup } from './BaseCheckboxGroup';
import { BaseCheckbox } from './BaseCheckbox';

describe('BaseCheckboxGroup', () => {
  const options = [
    { label: 'Alpha', value: 'alpha' },
    { label: 'Beta', value: 'beta' },
    { label: 'Gamma', value: 'gamma' },
  ];

  it('renders group and its checkboxes', () => {
    render(
      <BaseCheckboxGroup name="letters" type="checkbox">
        {options.map((o) => (
          <BaseCheckbox key={o.value} value={o.value}>
            {o.label}
          </BaseCheckbox>
        ))}
      </BaseCheckboxGroup>,
    );

    expect(screen.getByRole('group')).toBeInTheDocument();
    options.forEach((o) => {
      expect(
        screen.getByRole('checkbox', { name: o.label }),
      ).toBeInTheDocument();
    });
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <BaseCheckboxGroup name="letters" type="checkbox" value={['alpha']}>
        {options.map((o) => (
          <BaseCheckbox key={o.value} value={o.value}>
            {o.label}
          </BaseCheckbox>
        ))}
      </BaseCheckboxGroup>,
    );
    await expectNoA11yViolations(container);
  });
});
