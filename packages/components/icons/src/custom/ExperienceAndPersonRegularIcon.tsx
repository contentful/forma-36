import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

const regularPath = (
  <g
    fill="none"
    stroke="currentColor"
    strokeWidth="1.13281"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6.875 2.5H13.125" />
    <path d="M11.8752 2.5V7.74531L13.1252 9.6875M9.53144 16.875H3.75019C3.63954 16.875 3.53087 16.8457 3.43527 16.79C3.33968 16.7343 3.26059 16.6542 3.20608 16.5579C3.15158 16.4616 3.12362 16.3525 3.12505 16.2419C3.12649 16.1312 3.15727 16.023 3.21426 15.9281L8.12519 7.74531V2.5" />
    <path d="M5.5957 11.96C6.6293 11.7662 9.45273 12.8131 9.45273 12.8131L10.3512 12.6568" />
    <path d="M14.375 15.625C15.4105 15.625 16.25 14.7855 16.25 13.75C16.25 12.7145 15.4105 11.875 14.375 11.875C13.3395 11.875 12.5 12.7145 12.5 13.75C12.5 14.7855 13.3395 15.625 14.375 15.625Z" />
    <path d="M11.875 17.5C12.1617 16.4219 13.1719 15.625 14.375 15.625C15.5781 15.625 16.5883 16.4219 16.875 17.5" />
  </g>
);

const activePath = (
  <>
    {regularPath}
    <path
      fill="currentColor"
      opacity=".2"
      d="M5.94238 12.4989C6.64144 12.3679 9.28952 12.6205 10.8936 12.8075C10.8124 13.1079 10.7695 13.4239 10.7695 13.7499C10.7695 14.2461 10.8695 14.7191 11.0508 15.1493C10.6247 15.6019 10.2907 16.1421 10.0771 16.7392C7.6654 16.6996 3.35651 16.7713 3.35352 16.7714L5.94238 12.4989Z"
    />
  </>
);

export const ExperienceAndPersonRegularIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: activePath,
    }),
    [IconVariant.Default]: generateIconComponent({
      path: regularPath,
    }),
  },
});
