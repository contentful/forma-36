import * as React from 'react';

function SvgCloseTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 24" width="1em" height="1em" {...props}>
      <path d="M14 6.4L12.6 5 7 10.6 1.4 5 0 6.4 5.6 12 0 17.6 1.4 19 7 13.4l5.6 5.6 1.4-1.4L8.4 12 14 6.4z" />
      <path d="M0 0h14v24H0V0z" fill="none" />
    </svg>
  );
}

export default SvgCloseTrimmed;
