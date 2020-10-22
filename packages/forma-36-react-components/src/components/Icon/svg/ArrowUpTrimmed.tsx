import * as React from 'react';

function SvgArrowUpTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10 24" width="1em" height="1em" {...props}>
      <path d="M0 14l5-5 5 5H0z" />
      <path d="M0 0h10v24H0V0z" fill="none" />
    </svg>
  );
}

export default SvgArrowUpTrimmed;
