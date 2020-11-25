import * as React from 'react';

function SvgClockTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 24" width="1em" height="1em" {...props}>
      <path d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0zM10 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
      <path d="M10.5 5H9v6l5.25 3.15.75-1.23-4.5-2.67V5z" />
    </svg>
  );
}

export default SvgClockTrimmed;
