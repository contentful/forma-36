import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const PaddingLeftRightIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Default]: generateIconComponent({
      path: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M3.125 2.5C3.47018 2.5 3.75 2.77982 3.75 3.125V16.875C3.75 17.2202 3.47018 17.5 3.125 17.5C2.77982 17.5 2.5 17.2202 2.5 16.875V3.125C2.5 2.77982 2.77982 2.5 3.125 2.5Z"
            fill="currentColor"
          />
          <path
            d="M16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125V16.875C17.5 17.2202 17.2202 17.5 16.875 17.5C16.5298 17.5 16.25 17.2202 16.25 16.875V3.125C16.25 2.77982 16.5298 2.5 16.875 2.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.75 5.625C14.0952 5.625 14.375 5.90482 14.375 6.25V13.75C14.375 14.0952 14.0952 14.375 13.75 14.375H6.25C5.90482 14.375 5.625 14.0952 5.625 13.75V6.25C5.625 5.90482 5.90482 5.625 6.25 5.625H13.75ZM6.875 13.125H13.125V6.875H6.875V13.125Z"
            fill="currentColor"
          />
        </svg>
      ),
    }),
    [IconVariant.Active]: generateIconComponent({
      path: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <rect
            opacity="0.2"
            x="6.25"
            y="6.25"
            width="7.5"
            height="7.5"
            fill="currentColor"
          />
          <path
            d="M3.125 2.5C3.47018 2.5 3.75 2.77982 3.75 3.125V16.875C3.75 17.2202 3.47018 17.5 3.125 17.5C2.77982 17.5 2.5 17.2202 2.5 16.875V3.125C2.5 2.77982 2.77982 2.5 3.125 2.5Z"
            fill="currentColor"
          />
          <path
            d="M16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125V16.875C17.5 17.2202 17.2202 17.5 16.875 17.5C16.5298 17.5 16.25 17.2202 16.25 16.875V3.125C16.25 2.77982 16.5298 2.5 16.875 2.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.75 5.625C14.0952 5.625 14.375 5.90482 14.375 6.25V13.75C14.375 14.0952 14.0952 14.375 13.75 14.375H6.25C5.90482 14.375 5.625 14.0952 5.625 13.75V6.25C5.625 5.90482 5.90482 5.625 6.25 5.625H13.75ZM6.875 13.125H13.125V6.875H6.875V13.125Z"
            fill="currentColor"
          />
        </svg>
      ),
    }),
  },
});
