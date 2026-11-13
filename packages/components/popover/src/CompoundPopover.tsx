import { Popover as OriginalPopover } from './Popover';
import { PopoverContent } from './PopoverContent/PopoverContent';
import { PopoverTrigger } from './PopoverTrigger/PopoverTrigger';
import { PopoverTriggerButton } from './PopoverButton/PopoverTriggerButton';

type CompoundPopover = typeof OriginalPopover & {
  Content: typeof PopoverContent;
  Trigger: typeof PopoverTrigger;
  TriggerButton: typeof PopoverTriggerButton;
};

export const Popover = OriginalPopover as CompoundPopover;
Popover.Content = PopoverContent;
Popover.Trigger = PopoverTrigger;
Popover.TriggerButton = PopoverTriggerButton;
