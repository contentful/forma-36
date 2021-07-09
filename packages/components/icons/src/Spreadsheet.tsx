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
        d="M0.5 0C0.223858 0 0 0.223858 0 0.5V23.5C0 23.7761 0.223858 24 0.5 24H19.5C19.7761 24 20 23.7761 20 23.5V6.5C20 6.36739 19.9473 6.24021 19.8536 6.14645L13.8536 0.146447C13.7598 0.0526784 13.6326 0 13.5 0H0.5ZM1 23V1H13V6.5C13 6.77614 13.2239 7 13.5 7H19V23H1ZM18.2929 6L14 1.70711V6H18.2929Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8.5C4 8.22386 4.22386 8 4.5 8H15.5C15.7761 8 16 8.22386 16 8.5V20.5C16 20.7761 15.7761 21 15.5 21H4.5C4.22386 21 4 20.7761 4 20.5V8.5ZM5 12H8V14H5V12ZM5 15H8V17H5V15ZM5 18H8V20H5V18ZM9 20H15V18H9V20ZM9 17H15V15H9V17ZM9 14H15V12H9V14ZM9 11H15V9H9V11ZM8 9H5V11H8V9Z"
      />
    </>
  ),
});
