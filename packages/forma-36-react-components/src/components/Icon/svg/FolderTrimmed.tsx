import * as React from 'react';

function SvgFolderTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 15 18" width="1em" height="1em" {...props}>
      <path d="M6 3H1.5C.7 3 0 3.7 0 4.5v9c0 .8.7 1.5 1.5 1.5h12c.8 0 1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5h-6L6 3z" />
      <path d="M0 0h15v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgFolderTrimmed;
