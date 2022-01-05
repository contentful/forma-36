import { FormControl as OriginalFormControl } from './FormControl';
import { FormLabel } from '../form-label-changed';
import { ValidationMessage } from '../validation-message-changed';
import { HelpText } from '../help-text-changed';
import { Counter } from '../counter-changed';

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
