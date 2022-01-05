import { Select as OriginalSelect } from './Select';
import { Option } from './SelectOption';

type CompoundSelect = typeof OriginalSelect & {
  Option: typeof Option;
};

export const Select = OriginalSelect as CompoundSelect;
Select.Option = Option;
