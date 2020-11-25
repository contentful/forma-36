import * as React from 'react';

function SvgHorizontalRule(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M3.6 11.2h16.8v1.7H3.6z" />
    </svg>
  );
}

export default SvgHorizontalRule;
