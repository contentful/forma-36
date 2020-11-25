import * as React from 'react';

function SvgThumbUpTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16.5 18" width="1em" height="1em" {...props}>
      <path d="M0 0h16.5v18H0V0z" fill="none" />
      <path d="M0 15.8h3v-9H0v9zm16.5-8.3c0-.8-.7-1.5-1.5-1.5h-4.7l.7-3.4v-.2c0-.3-.1-.6-.3-.8L9.9.8l-5 4.9c-.2.3-.4.6-.4 1.1v7.5c0 .8.7 1.5 1.5 1.5h6.8c.6 0 1.2-.4 1.4-.9l2.3-5.3c.1-.2.1-.4.1-.5V7.5h-.1z" />
    </svg>
  );
}

export default SvgThumbUpTrimmed;
