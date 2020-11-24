import * as React from 'react';

function SvgInfoCircleTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 15 18" width="1em" height="1em" {...props}>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M7.5 1.5C3.4 1.5 0 4.9 0 9s3.4 7.5 7.5 7.5S15 13.1 15 9s-3.4-7.5-7.5-7.5zm.7 11.3H6.8V8.2h1.5v4.6zm0-6H6.8V5.2h1.5v1.6z" />
    </svg>
  );
}

export default SvgInfoCircleTrimmed;
