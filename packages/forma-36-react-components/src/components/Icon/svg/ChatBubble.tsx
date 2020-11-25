import * as React from 'react';

function SvgChatBubble(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" viewBox="0 0 24 24" width="1em" {...props}>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default SvgChatBubble;
