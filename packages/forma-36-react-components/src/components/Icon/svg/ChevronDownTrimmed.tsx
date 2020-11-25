import * as React from 'react';

function SvgChevronDownTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 9 18" width="1em" height="1em" {...props}>
      <path d="M1.1 5.9l3.4 3.4 3.4-3.4 1.1 1-4.5 4.5L0 6.9l1.1-1z" />
      <path d="M0 0h9v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgChevronDownTrimmed;
