import { ProgressStepper as OriginalProgressStepper } from './ProgressStepper';
import { Step } from './Step';

type CompoundProgressStepper = typeof OriginalProgressStepper & {
  Step: typeof Step;
};

export const ProgressStepper =
  OriginalProgressStepper as CompoundProgressStepper;
ProgressStepper.Step = Step;
