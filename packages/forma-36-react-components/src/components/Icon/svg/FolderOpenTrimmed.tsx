import * as React from 'react';

function SvgFolderOpenTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 15 18" width="1em" height="1em" {...props}>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M13.5 4.5h-6L6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5zm0 9h-12V6h12v7.5z" />
    </svg>
  );
}

export default SvgFolderOpenTrimmed;
