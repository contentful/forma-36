import * as React from 'react';

function SvgChevronRightTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 5.6 18" width="1em" height="1em" {...props}>
      <path d="M1.1 4.5L0 5.6 3.4 9 0 12.4l1.1 1.1L5.6 9 1.1 4.5z" />
      <path d="M0 0h5.6v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgChevronRightTrimmed;
