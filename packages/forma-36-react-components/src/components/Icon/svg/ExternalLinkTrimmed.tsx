import * as React from 'react';

function SvgExternalLinkTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 13.5 18" width="1em" height="1em" {...props}>
      <path d="M12 14.2H1.5V3.8h5.2V2.2H1.5C.7 2.2 0 2.9 0 3.8v10.5c0 .8.7 1.5 1.5 1.5H12c.8 0 1.5-.7 1.5-1.5V9H12v5.2zm-3.8-12v1.5h2.7l-7.4 7.4 1.1 1.1L12 4.8v2.7h1.5V2.2H8.2z" />
      <path d="M0 0h13.5v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgExternalLinkTrimmed;
