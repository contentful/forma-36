import * as React from 'react';

function SvgLooksOneTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 18 24" width="1em" height="1em" {...props}>
      <path d="M0 0h18v24H0V0z" fill="none" />
      <path d="M16 3H2C.9 3 0 3.9 0 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H9V9H7V7h4v10z" />
    </svg>
  );
}

export default SvgLooksOneTrimmed;
