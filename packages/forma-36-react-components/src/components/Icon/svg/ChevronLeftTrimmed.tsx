import * as React from 'react';

function SvgChevronLeftTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 5.6 18" width="1em" height="1em" {...props}>
      <path d="M5.6 5.6L4.5 4.5 0 9l4.5 4.5 1.1-1.1L2.1 9l3.5-3.4z" />
      <path d="M0 0h5.6v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgChevronLeftTrimmed;
