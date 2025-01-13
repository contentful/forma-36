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

  it('renders correct state when state provided', () => {
    render(<Step state="error" />);

    const step = screen.getAllByTestId('cf-ui-step-error');

    expect(step).toHaveLength(1);
  });

  it('renders label', () => {
    const labelText = 'Test label';
    render(<Step state="error" labelText={labelText} />);

    const label = screen.getByText(labelText);

    expect(label).toBeTruthy();
  });

  it('renders link when onClick provided', () => {
    render(<Step state="active" onClick={() => {}} />);

    const link = screen.getByRole('button');

    expect(link).toBeTruthy();
  });

  it('renders step without link when state is "disabled"', () => {
    render(<Step state="disabled" onClick={() => {}} />);

    const link = screen.queryByRole('button');

    expect(link).toBeNull();
  });
});
