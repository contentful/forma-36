import { Stepper as OriginalStepper } from './Stepper';
import { Step } from './Step';

type CompoundStepper = typeof OriginalStepper & {
  Step: typeof Step;
};

export const Stepper = OriginalStepper as CompoundStepper;
Stepper.Step = Step;
