import { FormControl as OriginalFormControl } from './FormControl';
import { FormLabel } from '../FormLabel';
import { ValidationMessage } from '../ValidationMessage';
import { HelpText } from '../HelpText';
import { Counter } from '../Counter';

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
