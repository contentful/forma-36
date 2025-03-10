import { Multiselect as OriginalMultiSelect } from './Multiselect';
import { HighlightedItem, MultiselectOption } from './MultiselectOption';
import { SelectAllOption } from './SelectAllOption';

type CompoundMultiselect = typeof OriginalMultiSelect & {
  HighlightedItem: typeof HighlightedItem;
  Option: typeof MultiselectOption;
  SelectAll: typeof SelectAllOption;
};

export const Multiselect = OriginalMultiSelect as CompoundMultiselect;
Multiselect.HighlightedItem = HighlightedItem;
Multiselect.Option = MultiselectOption;
Multiselect.SelectAll = SelectAllOption;
