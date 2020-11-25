import * as React from 'react';

function SvgAssetTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 24" width="1em" height="1em" {...props}>
      <path d="M0 0h18v24H0V0z" fill="none" />
      <g>
        <path d="M16 5v14H2V5h14m0-2H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
        <path d="M11.1 11.9l-3 3.9L6 13.1 3 17h12l-3.9-5.1z" />
      </g>
    </svg>
  );
}

export default SvgAssetTrimmed;
