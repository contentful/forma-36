import React from 'react';
import { render, screen } from '@testing-library/react';
import { expectNoA11yViolations } from '@/scripts/test/expectNoA11yViolations';
import { Header } from './Header';

describe('Header', () => {
  it('renders the component', () => {
    render(<Header title="Header" />);

    expect(screen.getByText('Header')).toBeTruthy();
  });

  it('has no a11y issues', async () => {
    const { container } = render(<Header title="Header" />);
    await expectNoA11yViolations(container);
  });

  it('has no a11y issues with back button and breadcrumbs', async () => {
    const { container } = render(
      <Header
        title="Header"
        withBackButton
        backButtonProps={{ onClick: vi.fn() }}
        breadcrumbs={[{ content: 'Breadcrumb', url: '#' }]}
      />,
    );
    await expectNoA11yViolations(container);
  });

  it('renders with custom className', () => {
    const additionalClassName = 'my-extra-class';
    render(<Header title="Header" className={additionalClassName} />);

    expect(
      screen
        .getByTestId('cf-ui-header')
        .classList.contains(additionalClassName),
    ).toBeTruthy();
  });
});
