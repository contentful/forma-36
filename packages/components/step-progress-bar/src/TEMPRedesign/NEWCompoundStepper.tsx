import { NEWStepper as OriginalStepper } from './NEWStepper';
import { NEWStep } from './NEWStep';

type CompoundStepper = typeof OriginalStepper & {
  NEWStep: typeof NEWStep;
};

export const NEWStepper = OriginalStepper as CompoundStepper;
NEWStepper.NEWStep = NEWStep;
