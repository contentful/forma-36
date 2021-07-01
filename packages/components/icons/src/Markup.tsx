import * as React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Markup = generateIcon({
  name: 'Markup',
  viewBox: '0 0 24 24',
  path: (
    <g
      fill="none"
      stroke="#000"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
    >
      <path d="M20.688 23.492h-17v-23h11l6 6v17z" />
      <path d="M14.688.492v6h6M14.688 10.492l4 4-4 4M9.688 10.492l-4 4 4 4" />
    </g>
  ),
});
