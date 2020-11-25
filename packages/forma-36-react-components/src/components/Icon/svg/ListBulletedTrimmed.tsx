import * as React from 'react';

function SvgListBulletedTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13.9 18" width="1em" height="1em" {...props}>
      <path d="M1.1 7.9C.5 7.9 0 8.4 0 9s.5 1.1 1.1 1.1S2.2 9.6 2.2 9s-.5-1.1-1.1-1.1zm0-4.5C.5 3.4 0 3.9 0 4.5s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm0 9c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1 1.1-.5 1.1-1.1-.5-1.1-1.1-1.1zm2.3 1.8h10.5v-1.5H3.4v1.5zm0-4.4h10.5V8.2H3.4v1.6zm0-6v1.5h10.5V3.8H3.4z" />
      <path d="M0 0h13.9v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgListBulletedTrimmed;
