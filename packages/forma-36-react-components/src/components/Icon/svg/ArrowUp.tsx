import * as React from 'react';

function SvgArrowUp(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M7 14l5-5 5 5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default SvgArrowUp;
