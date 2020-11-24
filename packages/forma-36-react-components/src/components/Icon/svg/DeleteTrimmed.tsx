import * as React from 'react';

function SvgDeleteTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" viewBox="0 0 14 24" height="1em" {...props}>
      <path d="M1 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H1v12zM14 4h-3.5l-1-1h-5l-1 1H0v2h14V4z" />
      <path fill="none" d="M-5 0h24v24H-5V0z" />
    </svg>
  );
}

export default SvgDeleteTrimmed;
