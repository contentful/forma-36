import { generateCombinedIcon } from '@contentful/f36-icon';
import { RichTextSmall } from './RichTextSmall';
import { RichTextMedium } from './RichTextMedium';

export const RichText = generateCombinedIcon({
  sizes: {
    small: RichTextSmall,
    medium: RichTextMedium,
  },
});
