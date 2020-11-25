import * as React from 'react';

function SvgHeading(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M14.8 5v5.5H9.2V5H6.4v14h2.8v-6.1h5.6V19h2.8V5z" />
    </svg>
  );
}

export default SvgHeading;
