import * as React from 'react';

function SvgFilterTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13.5 18" width="1em" height="1em" {...props}>
      <path d="M5.2 13.5h3V12h-3v1.5zM0 4.5V6h13.5V4.5H0zm2.2 5.3h9V8.2h-9v1.6z" />
      <path d="M0 0h13.5v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgFilterTrimmed;
