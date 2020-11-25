import * as React from 'react';

function SvgCycleTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 16 24"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit={1.414}
      width="1em"
      height="1em"
      {...props}
    >
      <path
        d="M8 4V1L4 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46A7.93 7.93 0 0016 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L1.24 7.74A7.93 7.93 0 000 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"
        fillRule="nonzero"
      />
    </svg>
  );
}

export default SvgCycleTrimmed;
