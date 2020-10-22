import * as React from 'react';

function SvgAsset(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path fill="none" d="M0 0h24v24H0V0z" />
      <g>
        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        <path d="M14.14 11.86l-3 3.87L9 13.14 6 17h12l-3.86-5.14z" />
      </g>
    </svg>
  );
}

export default SvgAsset;
