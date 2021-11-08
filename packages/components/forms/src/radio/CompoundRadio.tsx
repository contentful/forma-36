import { Radio as OriginalRadio } from './Radio';
import { RadioGroup } from './RadioGroup';

type CompoundRadio = typeof OriginalRadio & {
  Group: typeof RadioGroup;
};

export const Radio = OriginalRadio as CompoundRadio;
Radio.Group = RadioGroup;
