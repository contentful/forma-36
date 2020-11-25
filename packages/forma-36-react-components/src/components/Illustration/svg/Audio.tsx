import * as React from 'react';

function SvgAudio(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g
        fill="none"
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      >
        <path d="M9 12.5H7.25a.75.75 0 00-.75.75v1.5c0 .414.336.75.75.75H9l3.5 3.5V9L9 12.5zM16 11c.834.688 1.5 1.835 1.5 3 0 1.163-.669 2.312-1.5 3M14 12.25c.562.409 1 1.001 1 1.75 0 .749-.438 1.341-1 1.75" />
        <path d="M21.5 23.5h-19V.5h13l6 6z" />
        <path d="M15.5.5v6h6" />
      </g>
    </svg>
  );
}

export default SvgAudio;
