import * as React from 'react';

function SvgFilter(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default SvgFilter;
