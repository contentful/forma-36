import * as React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Spreadsheet = generateIcon({
  name: 'Spreadsheet',
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
      <path d="M14.5.5v6h6M6.5 8.5h11v12h-11zM6.5 11.5h11M6.5 14.5h11M6.5 17.5h11M10.5 8.5v12" />
    </g>
  ),
});
