import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const FallbackIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <g opacity=".2">
            <path d="M16.25 3H11.25V8H16.25V3Z" />
            <path d="M16.25 12H11.25V17H16.25V12Z" />
          </g>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.625 3.75C10.625 3.05964 11.1846 2.5 11.875 2.5H15.625C16.3154 2.5 16.875 3.05964 16.875 3.75V7.5C16.875 8.19036 16.3154 8.75 15.625 8.75H11.875C11.1846 8.75 10.625 8.19036 10.625 7.5V3.75ZM15.625 3.75H11.875V7.5H15.625V3.75ZM6.43306 3.30806C6.67714 3.06398 7.07286 3.06398 7.31694 3.30806L9.19194 5.18306C9.43602 5.42714 9.43602 5.82286 9.19194 6.06694L7.31694 7.94194C7.07286 8.18602 6.67714 8.18602 6.43306 7.94194C6.18898 7.69786 6.18898 7.30214 6.43306 7.05806L7.24112 6.25H4.375L4.375 14.375H8.75C9.09518 14.375 9.375 14.6548 9.375 15C9.375 15.3452 9.09518 15.625 8.75 15.625H4.375C4.04348 15.625 3.72554 15.4933 3.49112 15.2589C3.2567 15.0245 3.125 14.7065 3.125 14.375V6.25C3.125 5.91848 3.2567 5.60054 3.49112 5.36612C3.72554 5.1317 4.04348 5 4.375 5H7.24112L6.43306 4.19194C6.18898 3.94786 6.18898 3.55214 6.43306 3.30806ZM10.625 12.5C10.625 11.8096 11.1846 11.25 11.875 11.25H15.625C16.3154 11.25 16.875 11.8096 16.875 12.5V16.25C16.875 16.9404 16.3154 17.5 15.625 17.5H11.875C11.1846 17.5 10.625 16.9404 10.625 16.25V12.5ZM14.7411 12.5H11.875V15.3661L14.7411 12.5ZM15.625 13.3839L12.7589 16.25H15.625V13.3839Z"
          />
        </g>
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.625 3.75C10.625 3.05964 11.1846 2.5 11.875 2.5H15.625C16.3154 2.5 16.875 3.05964 16.875 3.75V7.5C16.875 8.19036 16.3154 8.75 15.625 8.75H11.875C11.1846 8.75 10.625 8.19036 10.625 7.5V3.75ZM15.625 3.75H11.875V7.5H15.625V3.75ZM6.43306 3.30806C6.67714 3.06398 7.07286 3.06398 7.31694 3.30806L9.19194 5.18306C9.43602 5.42714 9.43602 5.82286 9.19194 6.06694L7.31694 7.94194C7.07286 8.18602 6.67714 8.18602 6.43306 7.94194C6.18898 7.69786 6.18898 7.30214 6.43306 7.05806L7.24112 6.25H4.375L4.375 14.375H8.75C9.09518 14.375 9.375 14.6548 9.375 15C9.375 15.3452 9.09518 15.625 8.75 15.625H4.375C4.04348 15.625 3.72554 15.4933 3.49112 15.2589C3.2567 15.0245 3.125 14.7065 3.125 14.375V6.25C3.125 5.91848 3.2567 5.60054 3.49112 5.36612C3.72554 5.1317 4.04348 5 4.375 5H7.24112L6.43306 4.19194C6.18898 3.94786 6.18898 3.55214 6.43306 3.30806ZM10.625 12.5C10.625 11.8096 11.1846 11.25 11.875 11.25H15.625C16.3154 11.25 16.875 11.8096 16.875 12.5V16.25C16.875 16.9404 16.3154 17.5 15.625 17.5H11.875C11.1846 17.5 10.625 16.9404 10.625 16.25V12.5ZM14.7411 12.5H11.875V15.3661L14.7411 12.5ZM15.625 13.3839L12.7589 16.25H15.625V13.3839Z"
          fill="currentColor"
        />
      ),
    }),
  },
});