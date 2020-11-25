import * as React from 'react';

function SvgLockTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 18" width="1em" height="1em" {...props}>
      <path d="M0 0h12v18H0V0z" fill="none" />
      <path d="M10.5 6h-.7V4.5C9.8 2.4 8.1.7 6 .7S2.2 2.4 2.2 4.5V6h-.7C.7 6 0 6.7 0 7.5V15c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5V7.5c0-.8-.7-1.5-1.5-1.5zM6 12.8c-.8 0-1.5-.7-1.5-1.5S5.2 9.8 6 9.8s1.5.7 1.5 1.5-.7 1.5-1.5 1.5zM8.3 6H3.7V4.5c0-1.3 1-2.3 2.3-2.3s2.3 1 2.3 2.3V6z" />
    </svg>
  );
}

export default SvgLockTrimmed;
