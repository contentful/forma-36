import { generateCombinedIcon } from '@contentful/f36-icon';
import { HashStraightSmall } from './HashStraightSmall';
import { HashStraightMedium } from './HashStraightMedium';

export const HashStraight = generateCombinedIcon({
  sizes: {
    small: HashStraightSmall,
    medium: HashStraightMedium,
  },
});
