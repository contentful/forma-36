import * as React from 'react';

function SvgChatBubbleTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 15 18" width="1em" height="1em" {...props}>
      <path d="M13.5 1.5h-12C.7 1.5 0 2.2 0 3v13.5l3-3h10.5c.8 0 1.5-.7 1.5-1.5V3c0-.8-.7-1.5-1.5-1.5z" />
      <path d="M0 0h15v18H0V0z" fill="none" />
    </svg>
  );
}

export default SvgChatBubbleTrimmed;
