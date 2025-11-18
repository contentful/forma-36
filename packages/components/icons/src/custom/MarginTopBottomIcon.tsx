import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const MarginTopBottomIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path
            d="M16.875 16.25C17.2202 16.25 17.5 16.5298 17.5 16.875C17.5 17.2202 17.2202 17.5 16.875 17.5H3.125C2.77982 17.5 2.5 17.2202 2.5 16.875C2.5 16.5298 2.77982 16.25 3.125 16.25H16.875Z"
            fill="currentColor"
          />
          <path
            d="M12.5 7.5H10.625V12.5H12.5L10 15L7.5 12.5H9.375V7.5H7.5L10 5L12.5 7.5Z"
            fill="currentColor"
          />
          <path
            d="M16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125C17.5 3.47018 17.2202 3.75 16.875 3.75H3.125C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H16.875Z"
            fill="currentColor"
          />
        </g>
      ),
    }),
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <rect
            opacity="0.2"
            x="2.5"
            y="3.125"
            width="15"
            height="13.75"
            fill="currentColor"
          />
          <path
            d="M16.875 16.25C17.2202 16.25 17.5 16.5298 17.5 16.875C17.5 17.2202 17.2202 17.5 16.875 17.5H3.125C2.77982 17.5 2.5 17.2202 2.5 16.875C2.5 16.5298 2.77982 16.25 3.125 16.25H16.875Z"
            fill="currentColor"
          />
          <path
            d="M12.5 7.5H10.625V12.5H12.5L10 15L7.5 12.5H9.375V7.5H7.5L10 5L12.5 7.5Z"
            fill="currentColor"
          />
          <path
            d="M16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125C17.5 3.47018 17.2202 3.75 16.875 3.75H3.125C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5H16.875Z"
            fill="currentColor"
          />
        </g>
      ),
    }),
  },
});
