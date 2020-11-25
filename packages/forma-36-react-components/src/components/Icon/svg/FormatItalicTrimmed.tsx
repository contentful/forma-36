import * as React from 'react';

function SvgFormatItalicTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 12 24" width="1em" height="1em" {...props}>
      <path d="M0 0h12v24H0V0z" fill="none" />
      <path d="M4 4v3h2.2l-3.4 8H0v3h8v-3H5.8l3.4-8H12V4H4z" />
    </svg>
  );
}

export default SvgFormatItalicTrimmed;
