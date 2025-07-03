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
        <g fill="currentColor">
          <path
            d="M5 3.75c0-.345.28-.625.625-.625h8.75c.345 0 .625.28.625.625v2.5c0 .345-.28.625-.625.625h-8.75A.625.625 0 0 1 5 6.25v-2.5ZM5 13.75c0-.345.28-.625.625-.625h8.75c.345 0 .625.28.625.625v2.5c0 .345-.28.625-.625.625h-8.75A.625.625 0 0 1 5 16.25v-2.5Z"
            opacity=".2"
          />
          <path d="M1.875 10c0-.345.28-.625.625-.625h15a.625.625 0 1 1 0 1.25h-15A.625.625 0 0 1 1.875 10ZM4.375 3.75c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-8.75c-.69 0-1.25-.56-1.25-1.25v-2.5Zm10 0h-8.75v2.5h8.75v-2.5ZM4.375 13.75c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-8.75c-.69 0-1.25-.56-1.25-1.25v-2.5Zm10 0h-8.75v2.5h8.75v-2.5Z" />
        </g>
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          d="M1.875 10c0-.345.28-.625.625-.625h15a.625.625 0 1 1 0 1.25h-15A.625.625 0 0 1 1.875 10ZM4.375 3.75c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-8.75c-.69 0-1.25-.56-1.25-1.25v-2.5Zm10 0h-8.75v2.5h8.75v-2.5ZM4.375 13.75c0-.69.56-1.25 1.25-1.25h8.75c.69 0 1.25.56 1.25 1.25v2.5c0 .69-.56 1.25-1.25 1.25h-8.75c-.69 0-1.25-.56-1.25-1.25v-2.5Zm10 0h-8.75v2.5h8.75v-2.5Z"
          fill="currentColor"
        />
      ),
    }),
  },
});
