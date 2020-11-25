import * as React from 'react';

function SvgMarkup(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none" stroke="#000">
        <path d="M20.688 23.492h-17v-23h11l6 6v17z" />
        <path d="M14.688.492v6h6M14.688 10.492l4 4-4 4M9.688 10.492l-4 4 4 4" />
      </g>
    </svg>
  );
}

export default SvgMarkup;
