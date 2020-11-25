import * as React from 'react';

function SvgTextTrimmed(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 14.2 18" width="1em" height="1em" {...props}>
      <defs>
        <path id="TextTrimmed_svg__a" d="M0 0h14.2v18H0z" />
      </defs>
      <clipPath id="TextTrimmed_svg__b">
        <use xlinkHref="#TextTrimmed_svg__a" overflow="visible" />
      </clipPath>
      <path
        d="M0 3v2.2h3.8v9H6v-9h3.8V3H0zm14.2 3.8H7.5V9h2.2v5.2H12V9h2.2V6.8z"
        clipPath="url(#TextTrimmed_svg__b)"
      />
    </svg>
  );
}

export default SvgTextTrimmed;
