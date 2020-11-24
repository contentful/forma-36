import * as React from 'react';

function SvgVideo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
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
    </svg>
  );
}

export default SvgVideo;
