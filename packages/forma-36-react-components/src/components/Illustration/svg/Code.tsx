import * as React from 'react';

function SvgCode(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      width="1em"
      height="1em"
      {...props}
    >
      <g fill="none" stroke="#000">
        <path d="M21.7 23.5h-19V.5h13l6 6v17z" />
        <path d="M15.7.5v6h6" />
        <g strokeMiterlimit={4}>
          <path d="M10.776 9.095c-3.326 0 .475 4.274-3.326 5.225M10.776 19.544c-3.326 0 .475-4.274-3.326-5.225" />
          <g>
            <path d="M13.626 9.095c3.324 0-.475 4.274 3.324 5.225M13.626 19.544c3.324 0-.475-4.274 3.324-5.225" />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default SvgCode;
