import * as React from 'react';

function SvgQuoteTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 10.5 18" width="1em" height="1em" {...props}>
      <path d="M.8 12.8H3l1.5-3V5.2H0v4.5h2.2L.8 12.8zm6 0H9l1.5-3V5.2H6v4.5h2.2l-1.4 3.1z" />
      <path d="M0 0h10.5v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgQuoteTrimmed;
