import * as React from 'react';

function SvgEnvironment(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16.1 12" {...props}>
      <path d="M16.1,7.5l-1.7,1.7l-2.2-2.1l-1,1l2.2,2.2L11.6,12h4.5V7.5z M16.1,4.5V0h-4.5l1.7,1.7L9.8,5.2H4.1v1.5h6.3l4-4L16.1,4.5z" />
    </svg>
  );
}

export default SvgEnvironment;
