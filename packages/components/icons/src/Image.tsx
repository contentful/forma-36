import React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Image = generateIcon({
  name: 'Image',
  viewBox: '0 0 24 24',
  path: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.5 0a.5.5 0 00-.5.5v23a.5.5 0 00.5.5h19a.5.5 0 00.5-.5v-17a.5.5 0 00-.146-.354l-6-6A.5.5 0 0013.5 0H.5zM1 23V1h12v5.5a.5.5 0 00.5.5H19v16H1zM18.293 6L14 1.707V6h4.293z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.053 10.503a.5.5 0 01.427.356l2.5 8.5a.5.5 0 01-.48.641h-10a.5.5 0 01-.447-.724l2.5-5a.5.5 0 01.8-.13l1.528 1.528 2.68-4.913a.5.5 0 01.492-.258zm-.192 1.796l-2.422 4.44a.5.5 0 01-.793.114l-1.509-1.509L5.309 19h8.523l-1.971-6.7zM6 8a1 1 0 100 2 1 1 0 000-2zM4 9a2 2 0 114 0 2 2 0 01-4 0z"
      />
    </>
  ),
});
