import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
} from '@contentful/f36-icon';
import { generateIconComponent } from '@contentful/f36-icon';

export const EmbeddedBlockIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          d="M4.375 3.125c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625ZM4.375 16.875c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625ZM3.125 6.875c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h13.75c.69 0 1.25-.56 1.25-1.25v-3.75c0-.69-.56-1.25-1.25-1.25H3.125Z"
          fill="currentFill"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentFill">
          <path d="M4.375 3.125c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625ZM4.375 16.875c0-.345.28-.625.625-.625h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625Z" />
          <path d="M3.125 6.875c-.69 0-1.25.56-1.25 1.25v3.75c0 .69.56 1.25 1.25 1.25h13.75c.69 0 1.25-.56 1.25-1.25v-3.75c0-.69-.56-1.25-1.25-1.25H3.125Zm0 1.25h13.75v3.75H3.125v-3.75Z" />
        </g>
      ),
    }),
  },
});
