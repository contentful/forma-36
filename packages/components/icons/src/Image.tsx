import React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Image = generateIcon({
  name: 'Image',
  viewBox: '0 0 24 24',
  path: (
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <path d="M19.5 23.5H.5V.5h13l6 6z" />
      <path d="M13.5.5v6h6M13 11l-3 5.5-2-2-2.5 5h10z" />
      <circle cx={7} cy={9} r={1.5} />
    </g>
  ),
});
