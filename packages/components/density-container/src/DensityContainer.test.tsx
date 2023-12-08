import React from 'react';
import { render } from '@testing-library/react';
import { DensityContainer } from './DensityContainer';
import { axe } from '@/scripts/test/axeHelper';

describe('DensityContainer', function () {
  it('renders the component', () => {
    const { getByText } = render(
      <DensityContainer density="low">Density container</DensityContainer>,
    );

    expect(getByText('Density container')).toBeTruthy();
  });

  it('renders the component with the appropriate density - low', () => {
    const { getByTestId } = render(
      <DensityContainer density="low" className="my-extra-class">
        Density container
      </DensityContainer>,
    );

    expect(getByTestId('cf-ui-density-container--low')).toBeTruthy();
  });

  it('renders the component with the appropriate density - high', () => {
    const { getByTestId } = render(
      <DensityContainer density="high" className="my-extra-class">
        Density container
      </DensityContainer>,
    );

    expect(getByTestId('cf-ui-density-container--high')).toBeTruthy();
  });

  it('renders the component with an additional class name', () => {
    const { container } = render(
      <DensityContainer density="low" className="my-extra-class">
        Density container
      </DensityContainer>,
    );

    expect(container.firstChild).toHaveClass('my-extra-class');
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <DensityContainer density="low">Density container</DensityContainer>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });
});
