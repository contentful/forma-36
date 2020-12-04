import * as React from 'react';

function SvgDoubleArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M 7 14 L 12 20 L 17 14 Z" />
      <path d="M 6.989 9.951 L 11.989 4 L 16.989 9.951 Z" />
      <path d="M 0 0 L 24 0 L 24 24 L 0 24 Z" fill="none" />
    </svg>
  );
}

export default SvgDoubleArrow;
