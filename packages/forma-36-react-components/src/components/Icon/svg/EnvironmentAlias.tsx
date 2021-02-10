import * as React from 'react';

function SvgEnvironmentAlias(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16.1 12" {...props}>
      <path d="M16.1,7.5l-1.7,1.7l-2.2-2.1l-1,1l2.2,2.2L11.6,12h4.5V7.5z M16.1,4.5V0h-4.5l1.7,1.7L9.8,5.2H4.1v1.5h6.3l4-4L16.1,4.5z" />
      <g>
        <path d="M6,12c-3.3,0-6-2.7-6-6s2.7-6,6-6c1.6,0,3.1,0.6,4.3,1.8L9.4,2.6C8.5,1.7,7.3,1.2,6,1.2C3.4,1.2,1.2,3.4,1.2,6 s2.1,4.8,4.8,4.8c1.3,0,2.5-0.5,3.4-1.4l0.9,0.9C9.1,11.4,7.6,12,6,12z" />
      </g>
    </svg>
  );
}

export default SvgEnvironmentAlias;
