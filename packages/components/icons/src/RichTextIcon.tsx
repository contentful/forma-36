import React from 'react';
import {
  IconVariant,
  generateComponentWithVariants,
  generateIconComponent,
} from '@contentful/f36-icon';

export const RichTextIcon = generateComponentWithVariants({
  variants: {
    [IconVariant.Active]: generateIconComponent({
      path: (
        <path
          d="M1.25 4.375c0-.69.56-1.25 1.25-1.25h15c.69 0 1.25.56 1.25 1.25v11.25c0 .69-.56 1.25-1.25 1.25h-15c-.69 0-1.25-.56-1.25-1.25V4.375ZM5 7.5c0-.345.28-.625.625-.625h2.5c.345 0 .625.28.625.625V10c0 .345-.28.625-.625.625h-2.5A.625.625 0 0 1 5 10V7.5Zm6.25 1.875a.625.625 0 1 0 0 1.25h3.125a.625.625 0 1 0 0-1.25H11.25ZM10.625 7.5c0-.345.28-.625.625-.625h3.125a.625.625 0 1 1 0 1.25H11.25a.625.625 0 0 1-.625-.625Zm-5 4.375a.625.625 0 1 0 0 1.25h8.75a.625.625 0 1 0 0-1.25h-8.75Z"
          fill="currentFill"
          fillRule="evenodd"
        />
      ),
    }),
    [IconVariant.Default]: generateIconComponent({
      path: (
        <g fill="currentFill" fillRule="evenodd">
          <path d="M5 7.5c0-.345.28-.625.625-.625h2.5c.345 0 .625.28.625.625V10c0 .345-.28.625-.625.625h-2.5A.625.625 0 0 1 5 10V7.5Zm1.25.625v1.25H7.5v-1.25H6.25Z" />
          <path d="M11.25 9.375a.625.625 0 1 0 0 1.25h3.125a.625.625 0 1 0 0-1.25H11.25ZM10.625 7.5c0-.345.28-.625.625-.625h3.125a.625.625 0 1 1 0 1.25H11.25a.625.625 0 0 1-.625-.625ZM5.625 11.875a.625.625 0 1 0 0 1.25h8.75a.625.625 0 1 0 0-1.25h-8.75Z" />
          <path d="M2.5 3.125c-.69 0-1.25.56-1.25 1.25v11.25c0 .69.56 1.25 1.25 1.25h15c.69 0 1.25-.56 1.25-1.25V4.375c0-.69-.56-1.25-1.25-1.25h-15Zm15 1.25h-15v11.25h15V4.375Z" />
        </g>
      ),
    }),
  },
});
