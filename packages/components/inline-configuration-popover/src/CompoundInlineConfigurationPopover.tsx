import { InlineConfigurationPopover as OriginalInlineConfigurationPopover } from './InlineConfigurationPopover';
import { InlineConfigurationPopoverTrigger } from './InlineConfigurationPopoverTrigger/InlineConfigurationPopoverTrigger';
import { InlineConfigurationPopoverAnchor } from './InlineConfigurationPopoverAnchor/InlineConfigurationPopoverAnchor';
import { InlineConfigurationPopoverContent } from './InlineConfigurationPopoverContent/InlineConfigurationPopoverContent';
import { InlineConfigurationPopoverHeader } from './InlineConfigurationPopoverHeader/InlineConfigurationPopoverHeader';
import { InlineConfigurationPopoverBody } from './InlineConfigurationPopoverBody/InlineConfigurationPopoverBody';
import { InlineConfigurationPopoverFooter } from './InlineConfigurationPopoverFooter/InlineConfigurationPopoverFooter';

type CompoundInlineConfigurationPopover =
  typeof OriginalInlineConfigurationPopover & {
    Trigger: typeof InlineConfigurationPopoverTrigger;
    Anchor: typeof InlineConfigurationPopoverAnchor;
    Content: typeof InlineConfigurationPopoverContent;
    Header: typeof InlineConfigurationPopoverHeader;
    Body: typeof InlineConfigurationPopoverBody;
    Footer: typeof InlineConfigurationPopoverFooter;
  };

export const InlineConfigurationPopover =
  OriginalInlineConfigurationPopover as CompoundInlineConfigurationPopover;
InlineConfigurationPopover.Trigger = InlineConfigurationPopoverTrigger;
InlineConfigurationPopover.Anchor = InlineConfigurationPopoverAnchor;
InlineConfigurationPopover.Content = InlineConfigurationPopoverContent;
InlineConfigurationPopover.Header = InlineConfigurationPopoverHeader;
InlineConfigurationPopover.Body = InlineConfigurationPopoverBody;
InlineConfigurationPopover.Footer = InlineConfigurationPopoverFooter;
