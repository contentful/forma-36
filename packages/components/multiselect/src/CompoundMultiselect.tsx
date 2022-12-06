import { Multiselect as OriginalMultiSelect } from './Multiselect';
import { MultiselectOption } from './MultiselectOption';
import { SelectAllOption } from './SelectAllOption';

type CompoundMultiselect = typeof OriginalMultiSelect & {
  Option: typeof MultiselectOption;
  SelectAll: typeof SelectAllOption;
};

export const Multiselect = OriginalMultiSelect as CompoundMultiselect;
Multiselect.Option = MultiselectOption;
Multiselect.SelectAll = SelectAllOption;
