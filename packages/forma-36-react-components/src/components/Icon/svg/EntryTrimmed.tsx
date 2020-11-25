import * as React from 'react';

function SvgEntryTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 24" width="1em" height="1em" {...props}>
      <path d="M0 0h16v24H0V0z" fill="none" />
      <path d="M4 16h8v2H4zM4 12h8v2H4z" />
      <path d="M10 2H2C.9 2 0 2.9 0 4v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H2V4h7v5h5v11z" />
    </svg>
  );
}

export default SvgEntryTrimmed;
