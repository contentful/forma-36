import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const MarginLeftRightIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.125 2.5C3.47018 2.5 3.75 2.77982 3.75 3.125L3.75 16.875C3.75 17.2202 3.47018 17.5 3.125 17.5C2.77982 17.5 2.5 17.2202 2.5 16.875L2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125L17.5 16.875C17.5 17.2202 17.2202 17.5 16.875 17.5C16.5298 17.5 16.25 17.2202 16.25 16.875L16.25 3.125C16.25 2.77982 16.5298 2.5 16.875 2.5Z"
            fill="currentColor"
          />
          <path
            d="M13.125 9.375C13.4702 9.375 13.75 9.65482 13.75 10C13.75 10.3452 13.4702 10.625 13.125 10.625H6.875C6.52982 10.625 6.25 10.3452 6.25 10C6.25 9.65482 6.52982 9.375 6.875 9.375H13.125Z"
            fill="currentColor"
          />
          <path d="M15 10L12.5 12.5V7.5L15 10Z" fill="currentColor" />
          <path d="M5 10L7.5 12.5V7.5L5 10Z" fill="currentColor" />
        </g>
      ),
    }),
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <rect
            opacity="0.2"
            x="3.125"
            y="2.5"
            width="13.75"
            height="15"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.125 2.5C3.47018 2.5 3.75 2.77982 3.75 3.125L3.75 16.875C3.75 17.2202 3.47018 17.5 3.125 17.5C2.77982 17.5 2.5 17.2202 2.5 16.875L2.5 3.125C2.5 2.77982 2.77982 2.5 3.125 2.5Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.875 2.5C17.2202 2.5 17.5 2.77982 17.5 3.125L17.5 16.875C17.5 17.2202 17.2202 17.5 16.875 17.5C16.5298 17.5 16.25 17.2202 16.25 16.875L16.25 3.125C16.25 2.77982 16.5298 2.5 16.875 2.5Z"
            fill="currentColor"
          />
          <path
            d="M13.125 9.375C13.4702 9.375 13.75 9.65482 13.75 10C13.75 10.3452 13.4702 10.625 13.125 10.625H6.875C6.52982 10.625 6.25 10.3452 6.25 10C6.25 9.65482 6.52982 9.375 6.875 9.375H13.125Z"
            fill="currentColor"
          />
          <path d="M15 10L12.5 12.5V7.5L15 10Z" fill="currentColor" />
          <path d="M5 10L7.5 12.5V7.5L5 10Z" fill="currentColor" />
        </g>
      ),
    }),
  },
});
