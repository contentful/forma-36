import * as React from 'react';

function SvgLinkTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 15 18" width="1em" height="1em" {...props}>
      <path d="M0 0h15v18H0V0z" fill="none" />
      <path d="M1.4 9c0-1.3 1-2.3 2.3-2.3h3V5.2h-3C1.7 5.2 0 6.9 0 9s1.7 3.8 3.8 3.8h3v-1.4h-3c-1.3-.1-2.4-1.1-2.4-2.4zm3.1.8h6V8.2h-6v1.6zm6.7-4.6h-3v1.4h3c1.3 0 2.3 1 2.3 2.3s-1 2.3-2.3 2.3h-3v1.4h3c2.1 0 3.8-1.7 3.8-3.8s-1.7-3.6-3.8-3.6z" />
    </svg>
  );
}

export default SvgLinkTrimmed;
