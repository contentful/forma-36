import * as React from 'react';
import { generateIcon } from '@contentful/f36-icon';

export const Spreadsheet = generateIcon({
  name: 'Spreadsheet',
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
        d="M4 8.5a.5.5 0 01.5-.5h11a.5.5 0 01.5.5v12a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-12zM5 12h3v2H5v-2zm0 3h3v2H5v-2zm0 3h3v2H5v-2zm4 2h6v-2H9v2zm0-3h6v-2H9v2zm0-3h6v-2H9v2zm0-3h6V9H9v2zM8 9H5v2h3V9z"
      />
    </>
  ),
});
