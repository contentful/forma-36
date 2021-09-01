import { FormControl as OriginalFormControl } from './FormControl';
import { FormLabel } from '../form-label';

type CompoundFormControl = typeof OriginalFormControl & {
  Label: typeof FormLabel;
};

export const FormControl = OriginalFormControl as CompoundFormControl;
FormControl.Label = FormLabel;
