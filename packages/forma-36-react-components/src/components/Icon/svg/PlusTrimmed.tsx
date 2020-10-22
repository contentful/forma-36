import * as React from 'react';

function SvgPlusTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10.5 18" width="1em" height="1em" {...props}>
      <path d="M10.5 9.8H6v4.5H4.5V9.8H0V8.2h4.5V3.8H6v4.5h4.5v1.5z" />
      <path d="M0 0h10.5v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgPlusTrimmed;
