import { Multiselect as OriginalMultiSelect } from './Multiselect';
import { MultiselectOption } from './MultiselectOption';

type CompoundMultiselect = typeof OriginalMultiSelect & {
  Option: typeof MultiselectOption;
};

export const Multiselect = OriginalMultiSelect as CompoundMultiselect;
Multiselect.Option = MultiselectOption;
