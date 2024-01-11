import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
} from '@contentful/f36-icon';
import { generateIconComponent } from '@contentful/f36-icon/src';

export const ReleaseIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          d="M3.816 2.845a.625.625 0 0 1 .559-.345h11.25c.237 0 .453.134.559.345l1.25 2.5a.625.625 0 0 1 .066.28V16.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25V5.625c0-.097.023-.193.066-.28l1.25-2.5Zm.559 2.78C4.375 5.28 4.655 5 5 5h10a.625.625 0 1 1 0 1.25H5a.625.625 0 0 1-.625-.625ZM13.75 15a.625.625 0 1 0 0-1.25h-2.5a.625.625 0 1 0 0 1.25h2.5Z"
          fill="currentFill"
          fillRule="evenodd"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          d="M3.816 2.845a.625.625 0 0 1 .559-.345h11.25c.237 0 .453.134.559.345l1.25 2.5a.625.625 0 0 1 .066.28V16.25a1.25 1.25 0 0 1-1.25 1.25H3.75a1.25 1.25 0 0 1-1.25-1.25V5.625c0-.097.023-.193.066-.28l1.25-2.5Zm.945.905L4.136 5h11.728l-.625-1.25H4.76Zm11.489 2.5H3.75v10h12.5v-10Zm-5.625 7.5c0-.345.28-.625.625-.625h2.5a.625.625 0 1 1 0 1.25h-2.5a.625.625 0 0 1-.625-.625Z"
          fill="currentFill"
        />
      ),
    }),
  },
});
