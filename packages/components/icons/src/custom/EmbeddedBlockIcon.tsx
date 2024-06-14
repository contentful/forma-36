import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const EmbeddedBlockIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <rect width="15" height="5" x="2.5" y="7.5" opacity=".2" rx=".5" />
          <path d="M4.375 3.125c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625ZM4.375 16.875c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625ZM1.875 8.125c0-.69.56-1.25 1.25-1.25h13.75c.69 0 1.25.56 1.25 1.25v3.75c0 .69-.56 1.25-1.25 1.25H3.125c-.69 0-1.25-.56-1.25-1.25v-3.75Zm15 0H3.125v3.75h13.75v-3.75Z" />
        </g>
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path d="M4.375 3.125c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625ZM4.375 16.875c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625Z" />
          <path d="M3.125 6.875c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h13.75c.69 0 1.25-.56 1.25-1.25v-3.75c0-.69-.56-1.25-1.25-1.25H3.125Zm0 1.25h13.75v3.75H3.125v-3.75Z" />
        </g>
      ),
    }),
  },
});
