import { FormControl as OriginalFormControl } from './FormControl';
import { FormLabel } from '../FormLabel-1';
import { ValidationMessage } from '../ValidationMessage-1';
import { HelpText } from '../HelpText-1';
import { Counter } from '../Counter-1';

type CompoundFormControl = typeof OriginalFormControl & {
  Label: typeof FormLabel;
  ValidationMessage: typeof ValidationMessage;
  HelpText: typeof HelpText;
  Counter: typeof Counter;
};

export const FormControl = OriginalFormControl as CompoundFormControl;
FormControl.Label = FormLabel;
FormControl.ValidationMessage = ValidationMessage;
FormControl.HelpText = HelpText;
FormControl.Counter = Counter;
