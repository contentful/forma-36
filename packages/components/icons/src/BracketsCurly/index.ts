import { generateCombinedIcon } from '@contentful/f36-icon';
import { BracketsCurlySmall } from './BracketsCurlySmall';
import { BracketsCurlyMedium } from './BracketsCurlyMedium';

export const BracketsCurly = generateCombinedIcon({
  sizes: {
    small: BracketsCurlySmall,
    medium: BracketsCurlyMedium,
  },
});
