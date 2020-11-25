import * as React from 'react';

function SvgListNumberedTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14.2 18" width="1em" height="1em" {...props}>
      <path d="M0 12.8h1.5v.4H.8v.8h.8v.4H0v.6h2.2v-3H0v.8zM.8 6h.8V3H0v.8h.8V6zM0 8.2h1.3L0 9.8v.7h2.2v-.7H.9l1.3-1.6v-.7H0v.7zm3.8-4.4v1.5h10.5V3.8H3.8zm0 10.4h10.5v-1.5H3.8v1.5zm0-4.4h10.5V8.2H3.8v1.6z" />
      <path d="M0 0h14.2v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgListNumberedTrimmed;
