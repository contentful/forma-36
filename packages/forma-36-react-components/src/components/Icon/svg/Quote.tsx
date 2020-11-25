import * as React from 'react';

function SvgQuote(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default SvgQuote;
