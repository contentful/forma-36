import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
} from '@contentful/f36-icon';
import { generateIconComponent } from '@contentful/f36-icon/src';

export const TextSuperscriptIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          d="M3.75 2.5c-.69 0-1.25.56-1.25 1.25v12.5c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25V3.75c0-.69-.56-1.25-1.25-1.25H3.75Zm10.901 3.126a.25.25 0 0 0-.255.149.625.625 0 1 1-1.146-.5 1.5 1.5 0 1 1 2.573 1.502L15 7.875h.5a.625.625 0 1 1 0 1.25h-1.75a.625.625 0 0 1-.5-1l1.574-2.1a.249.249 0 0 0-.073-.366.25.25 0 0 0-.1-.033Zm-2.21 1.566a.625.625 0 1 0-.883-.884L8.5 9.366 5.442 6.308a.625.625 0 1 0-.884.884l3.058 3.058-3.058 3.058a.625.625 0 0 0 .884.884L8.5 11.134l3.058 3.058a.625.625 0 1 0 .884-.884L9.384 10.25l3.058-3.058Z"
          fill="currentFill"
          fillRule="evenodd"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          d="M16.316 4.379a.625.625 0 0 0-.64.37.625.625 0 1 1-1.145-.5 1.876 1.876 0 1 1 3.217 1.878v.001L16.25 8.125h1.25a.625.625 0 1 1 0 1.25H15a.625.625 0 0 1-.5-1l2.248-2.998v-.001a.627.627 0 0 0-.432-.997ZM2.058 5.809a.625.625 0 0 1 .884 0L7.5 10.365l4.558-4.558a.625.625 0 1 1 .884.884L8.384 11.25l4.558 4.558a.625.625 0 1 1-.884.884L7.5 12.134l-4.558 4.558a.625.625 0 1 1-.884-.884l4.558-4.558-4.558-4.558a.625.625 0 0 1 0-.884Z"
          fill="currentFill"
        />
      ),
    }),
  },
});
