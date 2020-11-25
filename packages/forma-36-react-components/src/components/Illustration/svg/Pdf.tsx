import * as React from 'react';

function SvgPdf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <path d="M15.5.5v6h6" />
        <path d="M21.5 23.5h-19V.5h13l6 6z" />
        <path d="M11.5 18.5v-5h1c1.152 0 2 1.068 2 2.5s-.848 2.5-2 2.5h-1zM16.5 18.5v-5H19M16.5 15.5H18M6.5 18.499V13.5h1.25a1.25 1.25 0 110 2.5H6.5" />
      </g>
    </svg>
  );
}

export default SvgPdf;
