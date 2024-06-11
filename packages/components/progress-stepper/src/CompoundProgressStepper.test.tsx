import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressStepper } from './CompoundProgressStepper';

describe('CompoundProgressStepper', function () {
  it('renders basic content when only required props are passed', () => {
    render(
      <ProgressStepper>
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>,
    );

    const stepOne = screen.getByText('1');
    const stepTwo = screen.getByText('2');

    expect(stepOne).toBeTruthy();
    expect(stepTwo).toBeTruthy();
  });

  it('renders the correct amount of children', () => {
    render(
      <ProgressStepper>
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>,
    );

    const steps = document.querySelectorAll('span');

    expect(steps).toHaveLength(2);
  });
});
