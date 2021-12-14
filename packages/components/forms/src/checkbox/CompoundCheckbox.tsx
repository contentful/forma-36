import { Checkbox as OriginalCheckbox } from './Checkbox';
import { CheckboxGroup } from './CheckboxGroup';

type CompoundCheckbox = typeof OriginalCheckbox & {
  Group: typeof CheckboxGroup;
};

export const Checkbox = OriginalCheckbox as CompoundCheckbox;
Checkbox.Group = CheckboxGroup;
