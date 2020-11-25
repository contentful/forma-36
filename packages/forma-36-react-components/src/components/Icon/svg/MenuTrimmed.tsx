import * as React from 'react';

function SvgMenuTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13.5 18" width="1em" height="1em" {...props}>
      <path d="M0 0h13.5v18H0V0z" fill="none" />
      <path d="M0 13.5h13.5V12H0v1.5zm0-3.7h13.5V8.2H0v1.6zm0-5.3V6h13.5V4.5H0z" />
    </svg>
  );
}

export default SvgMenuTrimmed;
