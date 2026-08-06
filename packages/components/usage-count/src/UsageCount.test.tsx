import { describe, expect, it } from 'vitest';
import React from 'react';
import { render, screen } from '@testing-library/react';
import { UsageCount } from './UsageCount';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';

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

    await expectNoA11yViolations(container);
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

    await expectNoA11yViolations(container);
  });
});
