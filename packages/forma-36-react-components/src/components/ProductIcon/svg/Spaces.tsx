import * as React from 'react';

function SvgSpaces(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="1em" height="1em" {...props}>
      <path d="M19.174 22.09H4.591c-1.417 0-2.5-1.3-2.5-3V2.59c0-.3.167-.5.417-.5H8.34c.25 0 .417.2.417.5v1.5h10.416c.25 0 .417.2.417.5v1.5h2.083c.25 0 .417.2.417.5v12c0 1.9-1.333 3.5-2.917 3.5zm-12.75-1h12.75c1.167 0 2.084-1.1 2.084-2.5V7.09H7.09v12c0 .8-.25 1.5-.667 2zm-3.5-18v16c0 1.1.75 2 1.667 2s1.667-.9 1.667-2V6.59c0-.3.166-.5.416-.5h12.084v-1H8.34c-.25 0-.417-.2-.417-.5v-1.5h-5z" />
    </svg>
  );
}

export default SvgSpaces;
