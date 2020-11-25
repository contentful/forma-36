import * as React from 'react';

function SvgLogout(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M5 4a1 1 0 00-1 1v14a1 1 0 001 1h4a1 1 0 110 2H5a3 3 0 01-3-3V5a3 3 0 013-3h4a1 1 0 010 2H5zM15.293 6.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L19.586 12l-4.293-4.293a1 1 0 010-1.414z"
      />
      <path
        clipRule="evenodd"
        d="M8 12a1 1 0 011-1h12a1 1 0 110 2H9a1 1 0 01-1-1z"
      />
    </svg>
  );
}

export default SvgLogout;
