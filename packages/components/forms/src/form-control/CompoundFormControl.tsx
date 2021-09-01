import { FormControl as OriginalFormControl } from './FormControl';
import { FormLabel } from '../form-label';
import { ValidationMessage } from '../validation-message';
import { HelpText } from '../help-text';

type CompoundFormControl = typeof OriginalFormControl & {
  Label: typeof FormLabel;
  ValidationMessage: typeof ValidationMessage;
  HelpText: typeof HelpText;
};

export const FormControl = OriginalFormControl as CompoundFormControl;
FormControl.Label = FormLabel;
FormControl.ValidationMessage = ValidationMessage;
FormControl.HelpText = HelpText;
