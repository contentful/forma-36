import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon-alpha';

export const EnvironmentIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          d="M11.875 3.75a.625.625 0 0 0-.442 1.067l1.46 1.46L9.87 9.376H3.75a.625.625 0 1 0 0 1.25h6.12c.336 0 .659-.136.894-.377l3.014-3.086 1.405 1.405a.625.625 0 0 0 1.067-.442v-3.75a.623.623 0 0 0-.625-.625h-3.75ZM15.864 11.298a.625.625 0 0 1 .386.577v3.75a.622.622 0 0 1-.625.625h-3.75a.625.625 0 0 1-.442-1.067l1.433-1.433-1.433-1.433a.625.625 0 1 1 .884-.884l1.433 1.433 1.433-1.433a.625.625 0 0 1 .681-.135Z"
          fill="currentFill"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          d="M11.875 3.75a.625.625 0 1 0 0 1.25h2.266L9.87 9.375H3.75a.625.625 0 1 0 0 1.25h6.12c.336 0 .659-.136.894-.377L15 5.91v2.215a.625.625 0 1 0 1.25 0v-3.75a.624.624 0 0 0-.186-.445l-.01-.01a.623.623 0 0 0-.429-.17h-3.75ZM15 11.875a.625.625 0 1 1 1.25 0v3.754a.623.623 0 0 1-.621.621h-3.754a.625.625 0 1 1 0-1.25h2.241l-2.683-2.683a.625.625 0 1 1 .884-.884L15 14.116v-2.241Z"
          fill="currentFill"
        />
      ),
    }),
  },
});
