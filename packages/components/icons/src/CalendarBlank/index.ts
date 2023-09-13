import { generateCombinedIcon } from '@contentful/f36-icon';
import { CalendarBlankSmall } from './CalendarBlankSmall';
import { CalendarBlankMedium } from './CalendarBlankMedium';

export const CalendarBlank = generateCombinedIcon({
  sizes: {
    small: CalendarBlankSmall,
    medium: CalendarBlankMedium,
  },
});
