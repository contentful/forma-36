import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const ReleaseIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path d="M3 6h14l-1.5-3h-11L3 6Z" opacity=".2" />
          <path d="M3.816 2.845a.625.625 0 0 1 .559-.345h11.25c.237 0 .453.134.559.345l1.25 2.5a.625.625 0 0 1 .066.28V16.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25V5.625c0-.097.023-.193.066-.28l1.25-2.5Zm.945.905L3.75 5.773V16.25h12.5V5.773L15.239 3.75H4.76Z" />
          <path d="M2.5 5.625c0-.345.28-.625.625-.625h13.75a.625.625 0 1 1 0 1.25H3.125a.625.625 0 0 1-.625-.625ZM14.375 14.375c0 .345-.28.625-.625.625h-2.5a.625.625 0 1 1 0-1.25h2.5c.345 0 .625.28.625.625Z" />
        </g>
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path d="M3.816 2.845a.625.625 0 0 1 .559-.345h11.25c.237 0 .453.134.559.345l1.25 2.5a.625.625 0 0 1 .066.28V16.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25V5.625c0-.097.023-.193.066-.28l1.25-2.5Zm.945.905L3.75 5.773V16.25h12.5V5.773L15.239 3.75H4.76Z" />
          <path d="M2.5 5.625c0-.345.28-.625.625-.625h13.75a.625.625 0 1 1 0 1.25H3.125a.625.625 0 0 1-.625-.625ZM14.375 14.375c0 .345-.28.625-.625.625h-2.5a.625.625 0 1 1 0-1.25h2.5c.345 0 .625.28.625.625Z" />
        </g>
      ),
    }),
  },
});
