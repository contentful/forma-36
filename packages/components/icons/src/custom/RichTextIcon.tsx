import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon-alpha';

export const RichTextIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <rect
            width="17.5"
            height="13.75"
            x="1.25"
            y="3.125"
            opacity=".2"
            rx="1"
          />
          <path
            fillRule="evenodd"
            d="M17.5 4.375h-15v11.25h15V4.375Zm-15-1.25c-.69 0-1.25.56-1.25 1.25v11.25c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25V4.375c0-.69-.56-1.25-1.25-1.25h-15Z"
          />
          <path d="M5 7.5c0-.345.28-.625.625-.625h2.5c.345 0 .625.28.625.625V10c0 .345-.28.625-.625.625h-2.5A.625.625 0 0 1 5 10V7.5Zm1.25.625v1.25H7.5v-1.25H6.25ZM10.625 10c0-.345.28-.625.625-.625h3.125a.625.625 0 1 1 0 1.25H11.25a.625.625 0 0 1-.625-.625ZM10.625 7.5c0-.345.28-.625.625-.625h3.125a.625.625 0 1 1 0 1.25H11.25a.625.625 0 0 1-.625-.625ZM5 12.5c0-.345.28-.625.625-.625h8.75a.625.625 0 1 1 0 1.25h-8.75A.625.625 0 0 1 5 12.5Z" />
        </g>
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentColor">
          <path
            d="M17.5 4.375h-15v11.25h15V4.375Zm-15-1.25c-.69 0-1.25.56-1.25 1.25v11.25c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25V4.375c0-.69-.56-1.25-1.25-1.25h-15Z"
            fillRule="evenodd"
          />
          <path d="M5 7.5c0-.345.28-.625.625-.625h2.5c.345 0 .625.28.625.625V10c0 .345-.28.625-.625.625h-2.5A.625.625 0 0 1 5 10V7.5Zm1.25.625v1.25H7.5v-1.25H6.25ZM10.625 10c0-.345.28-.625.625-.625h3.125a.625.625 0 1 1 0 1.25H11.25a.625.625 0 0 1-.625-.625ZM10.625 7.5c0-.345.28-.625.625-.625h3.125a.625.625 0 1 1 0 1.25H11.25a.625.625 0 0 1-.625-.625ZM5 12.5c0-.345.28-.625.625-.625h8.75a.625.625 0 1 1 0 1.25h-8.75A.625.625 0 0 1 5 12.5Z" />
        </g>
      ),
    }),
  },
});
