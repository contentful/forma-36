import React from 'react';
import { render, screen } from '@testing-library/react';
import { axe } from 'jest-axe';
import { LayoutHeaderInner } from './LayoutHeaderInner';

describe('LayoutHeaderInner', () => {
  it('renders the component', () => {
    render(<LayoutHeaderInner title="Header" />);

    expect(screen.getByText('Header')).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<LayoutHeaderInner title="Header" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('has no a11y issues with back button and breadcrumbs', async () => {
    const { container } = render(
      <LayoutHeaderInner
        title="Header"
        withBackButton
        backButtonProps={{ onClick: jest.fn() }}
        breadcrumbs={[{ content: 'Breadcrumb', url: '#' }]}
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('renders with custom className', () => {
    const additionalClassName = 'my-extra-class';
    render(
      <LayoutHeaderInner title="Header" className={additionalClassName} />,
    );

    expect(
      screen
        .getByTestId('cf-ui-header')
        .classList.contains(additionalClassName),
    ).toBeTruthy();
  });
});
