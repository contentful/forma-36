import { FormControl as OriginalFormControl } from './FormControl';
import { FormLabel } from '../form-label/FormLabel';
import { ValidationMessage } from '../ValidationMessage/ValidationMessage';
import { HelpText } from '../HelpText/HelpText';
import { Counter } from '../Counter/Counter';

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
