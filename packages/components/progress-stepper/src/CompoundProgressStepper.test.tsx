import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressStepper } from './CompoundProgressStepper';

describe('CompoundProgressStepper', function () {
  it('renders basic content when only required props are passed', () => {
    render(
      <ProgressStepper>
        <ProgressStepper.Step />
      </ProgressStepper>,
    );

    const progressStepper = screen.getByTestId(
      'cf-ui-progress-stepper-horizontal-number',
    );
    const stepOne = screen.getByText('1');

    expect(progressStepper).toBeTruthy();
    expect(stepOne).toBeTruthy();
  });

  it('renders the correct amount of children', () => {
    render(
      <ProgressStepper>
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>,
    );

    const steps = document.querySelectorAll('li');

    expect(steps).toHaveLength(2);
  });

  it('renders correct numbers when stepStyle is number', () => {
    render(
      <ProgressStepper activeStep={1}>
        <ProgressStepper.Step />
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>,
    );

    const stepOne = screen.getByText('1');
    const stepTwo = screen.getByText('2');
    const stepThree = screen.getByText('3');
    const stepFour = screen.queryByText('4');

    expect(stepOne).toBeTruthy();
    expect(stepTwo).toBeTruthy();
    expect(stepThree).toBeTruthy();
    expect(stepFour).toBeFalsy();
  });

  it('renders icons for each step when stepStyle is icon', () => {
    render(
      <ProgressStepper stepStyle="icon" activeStep={1}>
        <ProgressStepper.Step variant="complete" />
        <ProgressStepper.Step variant="error" />
        <ProgressStepper.Step variant="warning" />
      </ProgressStepper>,
    );

    const icons = screen.getAllByTestId('cf-ui-icon');

    expect(icons).toHaveLength(3);
  });
});
