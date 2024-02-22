import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const EmbeddedLineIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          d="M5.625 2.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-8.75ZM1.875 10c0-.345.28-.625.625-.625h15a.625.625 0 1 1 0 1.25h-15A.625.625 0 0 1 1.875 10ZM5.625 12.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-8.75Z"
          fill="currentFill"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentFill">
          <path d="M4.375 3.75c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-8.75c-.69 0-1.25-.56-1.25-1.25v-2.5Zm10 0h-8.75v2.5h8.75v-2.5Z" />
          <path d="M1.875 10c0-.345.28-.625.625-.625h15a.625.625 0 1 1 0 1.25h-15A.625.625 0 0 1 1.875 10Z" />
          <path d="M5.625 12.5c-.69 0-1.25.56-1.25 1.25v2.5c0 .69.56 1.25 1.25 1.25h8.75c.69 0 1.25-.56 1.25-1.25v-2.5c0-.69-.56-1.25-1.25-1.25h-8.75Zm0 1.25h8.75v2.5h-8.75v-2.5Z" />
        </g>
      ),
    }),
  },
});
