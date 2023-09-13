import { generateCombinedIcon } from '@contentful/f36-icon';
import { ImageSquareSmall } from './ImageSquareSmall';
import { ImageSquareMedium } from './ImageSquareMedium';

export const ImageSquare = generateCombinedIcon({
  sizes: {
    small: ImageSquareSmall,
    medium: ImageSquareMedium,
  },
});
