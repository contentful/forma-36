import React from 'react';
import { render, screen } from '@testing-library/react';
import { Step } from '.';

describe('Step', function () {
  it('renders default content when only required props provided', () => {
    render(<Step />);

    const steps = screen.getAllByTestId('cf-ui-step-incomplete');
    const icon = document.querySelectorAll('svg');
    const labelText = document.querySelectorAll('p');

    expect(steps).toHaveLength(1);
    expect(icon).toHaveLength(0);
    expect(labelText).toHaveLength(0);
  });

  it('renders correct variant when variant provided', () => {
    render(<Step variant="error" />);

    const step = screen.getAllByTestId('cf-ui-step-error');

    expect(step).toHaveLength(1);
  });

  it('renders label', () => {
    const labelText = 'Test label';
    render(<Step variant="error" labelText={labelText} />);

    const label = screen.getByText(labelText);

    expect(label).toBeTruthy();
  });
});
