import * as React from 'react';

function SvgHorizontalRuleTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12.6 18" width="1em" height="1em" {...props}>
      <path d="M0 0h12.6v18H0V0z" fill="none" />
      <path d="M0 8.4h12.6v1.3H0z" />
    </svg>
  );
}

export default SvgHorizontalRuleTrimmed;
