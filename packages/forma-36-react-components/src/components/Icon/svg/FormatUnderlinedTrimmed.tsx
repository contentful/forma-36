import * as React from 'react';

function SvgFormatUnderlinedTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14 24" width="1em" height="1em" {...props}>
      <path d="M0 0h14v24H0V0z" fill="none" />
      <path d="M7 17c3.3 0 6-2.7 6-6V3h-2.5v8c0 1.9-1.6 3.5-3.5 3.5S3.5 12.9 3.5 11V3H1v8c0 3.3 2.7 6 6 6zm-7 2v2h14v-2H0z" />
    </svg>
  );
}

export default SvgFormatUnderlinedTrimmed;
