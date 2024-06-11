import React from 'react';
import { render, screen } from '@testing-library/react';
import { Stepper } from './CompoundStepper';

describe('CompoundStepper', function () {
  it('renders basic content when only required props are passed', () => {
    render(
      <Stepper>
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>,
    );

    const stepOne = screen.getByText('1');
    const stepTwo = screen.getByText('2');

    expect(stepOne).toBeTruthy();
    expect(stepTwo).toBeTruthy();
  });

  it('renders the correct amount of children', () => {
    render(
      <Stepper>
        <Stepper.Step />
        <Stepper.Step />
      </Stepper>,
    );

    const steps = document.querySelectorAll('span');

    expect(steps).toHaveLength(2);
  });
});
