import * as React from 'react';

function SvgWarningTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16.5 18" width="1em" height="1em" {...props}>
      <path d="M0 0h16.5v18H0V0z" fill="none" />
      <path d="M0 15.8h16.5L8.2 1.5 0 15.8zm9-2.3H7.5V12H9v1.5zm0-3H7.5v-3H9v3z" />
    </svg>
  );
}

export default SvgWarningTrimmed;
