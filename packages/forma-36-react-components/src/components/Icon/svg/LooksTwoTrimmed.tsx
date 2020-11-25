import * as React from 'react';

function SvgLooksTwoTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 24" width="1em" height="1em" {...props}>
      <path d="M0 0h18v24H0V0z" fill="none" />
      <path d="M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 8c0 1.1-.9 2-2 2H8v2h4v2H6v-4c0-1.1.9-2 2-2h2V9H6V7h4c1.1 0 2 .9 2 2v2z" />
    </svg>
  );
}

export default SvgLooksTwoTrimmed;
