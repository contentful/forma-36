import * as React from 'react';

function SvgMenuTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <rect x="4" y="11" width="16" height="2" rx="1" />
    </svg>
  );
}

export default SvgMenuTrimmed;
