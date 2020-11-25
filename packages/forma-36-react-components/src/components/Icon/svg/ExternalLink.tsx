import * as React from 'react';

function SvgExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg height="1em" width="1em" viewBox="0 0 24 24" {...props}>
      <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

export default SvgExternalLink;
