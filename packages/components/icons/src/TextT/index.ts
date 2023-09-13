import { generateCombinedIcon } from '@contentful/f36-icon';
import { TextTSmall } from './TextTSmall';
import { TextTMedium } from './TextTMedium';

export const TextT = generateCombinedIcon({
  sizes: {
    small: TextTSmall,
    medium: TextTMedium,
  },
});
