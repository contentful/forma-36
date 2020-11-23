import * as React from 'react';

function SvgArrowDown(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path d="M7 10l5 5 5-5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default SvgArrowDown;