import * as React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Video = generateIcon({
  name: 'Video',
  viewBox: '0 0 24 24',
  path: (
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <path d="M20.5 23.5h-17V.5h11l6 6z" />
      <path d="M14.5.5v6h6M8.5 8.5l8 5-8 5z" />
    </g>
  ),
});
