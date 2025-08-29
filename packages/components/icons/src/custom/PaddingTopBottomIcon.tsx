import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const PaddingTopBottomIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path
            d="M17.5 3.125C17.5 3.47018 17.2202 3.75 16.875 3.75L3.125 3.75C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5L16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125Z"
            fill="currentColor"
          />
          <path
            d="M17.5 16.875C17.5 17.2202 17.2202 17.5 16.875 17.5L3.125 17.5C2.77982 17.5 2.5 17.2202 2.5 16.875C2.5 16.5298 2.77982 16.25 3.125 16.25L16.875 16.25C17.2202 16.25 17.5 16.5298 17.5 16.875Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.375 13.75C14.375 14.0952 14.0952 14.375 13.75 14.375H6.25C5.90482 14.375 5.625 14.0952 5.625 13.75L5.625 6.25C5.625 5.90482 5.90482 5.625 6.25 5.625L13.75 5.625C14.0952 5.625 14.375 5.90482 14.375 6.25V13.75ZM6.875 6.875V13.125H13.125V6.875H6.875Z"
            fill="currentColor"
          />
        </g>
      ),
    }),
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path
            opacity="0.2"
            d="M13.75 6.25L13.75 13.75L6.25 13.75L6.25 6.25L13.75 6.25Z"
            fill="#0059C8"
          />
          <path
            d="M17.5 3.125C17.5 3.47018 17.2202 3.75 16.875 3.75L3.125 3.75C2.77982 3.75 2.5 3.47018 2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5L16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125Z"
            fill="currentColor"
          />
          <path
            d="M17.5 16.875C17.5 17.2202 17.2202 17.5 16.875 17.5L3.125 17.5C2.77982 17.5 2.5 17.2202 2.5 16.875C2.5 16.5298 2.77982 16.25 3.125 16.25L16.875 16.25C17.2202 16.25 17.5 16.5298 17.5 16.875Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.375 13.75C14.375 14.0952 14.0952 14.375 13.75 14.375H6.25C5.90482 14.375 5.625 14.0952 5.625 13.75L5.625 6.25C5.625 5.90482 5.90482 5.625 6.25 5.625L13.75 5.625C14.0952 5.625 14.375 5.90482 14.375 6.25V13.75ZM6.875 6.875V13.125H13.125V6.875H6.875Z"
            fill="currentColor"
          />
        </g>
      ),
    }),
  },
});
