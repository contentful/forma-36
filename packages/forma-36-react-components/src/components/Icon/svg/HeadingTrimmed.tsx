import * as React from 'react';

function SvgHeadingTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 8.4 18" width="1em" height="1em" {...props}>
      <path d="M0 0h8.4v18H0V0z" fill="none" />
      <path d="M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8z" />
    </svg>
  );
}

export default SvgHeadingTrimmed;
