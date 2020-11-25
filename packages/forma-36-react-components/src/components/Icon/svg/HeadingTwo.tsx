import * as React from 'react';

function SvgHeadingTwo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10.8 5v5.5H5.3V5H2.4v14h2.9v-6.1h5.5V19h2.9V5zM15.4 19v-1.7l3.3-3c.2-.2.4-.4.5-.6.1-.2.2-.4.2-.7 0-.3-.1-.6-.3-.7-.2-.2-.4-.3-.8-.3-.3 0-.6.1-.8.4-.2.2-.3.5-.4.9l-1.9-.3c0-.4.2-.8.4-1.2.2-.3.4-.6.7-.9.3-.2.6-.4 1-.5s.8-.2 1.2-.2c.4 0 .8.1 1.1.2.4.1.7.3 1 .5.3.2.5.5.7.8.2.3.3.7.3 1.2 0 .3 0 .6-.1.8-.1.2-.2.5-.3.7-.1.2-.3.4-.5.6-.2.2-.4.4-.6.5l-2 1.8h3.5V19h-6.2z" />
    </svg>
  );
}

export default SvgHeadingTwo;
