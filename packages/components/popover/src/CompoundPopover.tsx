import { Popover as OriginalPopover } from './Popover';
import { PopoverContent } from './PopoverContent/PopoverContent';
import { PopoverTrigger } from './PopoverTrigger/PopoverTrigger';

type CompoundPopover = typeof OriginalPopover & {
  Content: typeof PopoverContent;
  Trigger: typeof PopoverTrigger;
};

export const Popover = OriginalPopover as CompoundPopover;
Popover.Content = PopoverContent;
Popover.Trigger = PopoverTrigger;
