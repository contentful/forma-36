import { UsageCard as OriginalUsageCard } from './UsageCard';
import { UsageCardHeader } from './UsageCardHeader/UsageCardHeader';
import { UsageCardDescription } from './UsageCardDescription';

type CompoundUsageCard = typeof OriginalUsageCard & {
  Header: typeof UsageCardHeader;
  Description: typeof UsageCardDescription;
};

export const UsageCard = OriginalUsageCard as CompoundUsageCard;
UsageCard.Header = UsageCardHeader;
UsageCard.Description = UsageCardDescription;
