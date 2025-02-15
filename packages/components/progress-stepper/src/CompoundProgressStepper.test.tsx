import React from 'react';
import { render, screen } from '@testing-library/react';
import { ProgressStepper } from './CompoundProgressStepper';
import { axe } from 'jest-axe';

describe('CompoundProgressStepper', function () {
  it('renders basic content when only required props are passed', () => {
    render(
      <ProgressStepper ariaLabel="Basic progress stepper">
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
      <ProgressStepper ariaLabel="Basic progress stepper">
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>,
    );

    const steps = document.querySelectorAll('li');

    expect(steps).toHaveLength(2);
  });

  it('renders correct numbers when stepStyle is number', () => {
    render(
      <ProgressStepper ariaLabel="Basic progress stepper" activeStep={1}>
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
      <ProgressStepper
        ariaLabel="Basic progress stepper"
        stepStyle="icon"
        activeStep={1}
      >
        <ProgressStepper.Step state="complete" />
        <ProgressStepper.Step state="error" />
        <ProgressStepper.Step state="warning" />
      </ProgressStepper>,
    );

    const icons = screen.getAllByTestId('cf-ui-icon');

    expect(icons).toHaveLength(3);
  });

  it('has no a11y issues', async () => {
    const { container } = render(
      <ProgressStepper ariaLabel="Basic progress stepper" activeStep={1}>
        <ProgressStepper.Step />
        <ProgressStepper.Step />
        <ProgressStepper.Step />
      </ProgressStepper>,
    );
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('renders clickable steps', () => {
    render(
      <ProgressStepper
        ariaLabel="Clickable progress stepper"
        onClick={() => {}}
        activeStep={1}
      >
        <ProgressStepper.Step state="complete" />
        <ProgressStepper.Step state="error" />
        <ProgressStepper.Step state="warning" />
      </ProgressStepper>,
    );

    const links = screen.queryAllByRole('button');

    expect(links).toHaveLength(3);
  });

  it('renders only a set of steps as clickable', () => {
    render(
      <ProgressStepper ariaLabel="Clickable progress stepper" activeStep={1}>
        <ProgressStepper.Step state="complete" onClick={() => {}} />
        <ProgressStepper.Step state="error" />
        <ProgressStepper.Step state="warning" />
      </ProgressStepper>,
    );

    const links = screen.queryAllByRole('button');

    expect(links).toHaveLength(1);
  });
});
