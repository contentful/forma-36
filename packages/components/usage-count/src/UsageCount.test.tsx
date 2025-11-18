import React from 'react';
import { render, screen } from '@testing-library/react';
import { UsageCount } from './UsageCount';
import { axe } from 'jest-axe';

describe('UsageCount', function () {
  it('renders consumption component', () => {
    render(
      <UsageCount
        variant="consumption"
        value={150}
        valueDescription="consumption units per year"
      />,
    );

    expect(screen.getByTestId('cf-ui-usage-count')).toBeTruthy();
  });

  it('renders periodic component', () => {
    render(
      <UsageCount
        variant="periodic"
        value={150}
        valueUnit="GB"
        periodType="year"
      />,
    );

    expect(screen.getByTestId('cf-ui-usage-count')).toBeTruthy();
  });
  it('renders entitlement component', () => {
    render(
      <UsageCount
        variant="entitlement"
        value={150}
        valueUnit="GB"
        quota={100}
        includedLabel="included"
      />,
    );

    expect(screen.getByTestId('cf-ui-usage-count')).toBeTruthy();
  });
  it('has no a11y issues with consumption variant', async () => {
    const { container } = render(
      <UsageCount
        variant="consumption"
        value={150}
        valueDescription="consumption units per year"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues with periodic variant', async () => {
    const { container } = render(
      <UsageCount
        variant="periodic"
        value={150}
        valueUnit="GB"
        periodType="year"
      />,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
