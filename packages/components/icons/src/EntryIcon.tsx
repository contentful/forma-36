import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
} from '@contentful/f36-icon';
import { generateIconComponent } from '@contentful/f36-icon/src';

export const EntryIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          d="M8.125 2.5c-.69 0-1.25.56-1.25 1.25V7.5c0 .69.56 1.25 1.25 1.25h3.75c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25h-3.75ZM3.125 11.25c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h3.75c.69 0 1.25-.56 1.25-1.25V12.5c0-.69-.56-1.25-1.25-1.25h-3.75ZM13.125 11.25c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h3.75c.69 0 1.25-.56 1.25-1.25V12.5c0-.69-.56-1.25-1.25-1.25h-3.75Z"
          fill="currentFill"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          d="M6.875 3.75c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25V7.5c0 .69-.56 1.25-1.25 1.25h-3.75c-.69 0-1.25-.56-1.25-1.25V3.75Zm5 0h-3.75V7.5h3.75V3.75ZM1.875 12.5c0-.69.56-1.25 1.25-1.25h3.75c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25h-3.75c-.69 0-1.25-.56-1.25-1.25V12.5Zm5 0h-3.75v3.75h3.75V12.5ZM13.125 11.25c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h3.75c.69 0 1.25-.56 1.25-1.25V12.5c0-.69-.56-1.25-1.25-1.25h-3.75Zm0 1.25h3.75v3.75h-3.75V12.5Z"
          fill="currentFill"
        />
      ),
    }),
  },
});
