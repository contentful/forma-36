import * as React from 'react';

function SvgPresentation(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="none" stroke="#000" strokeLinejoin="round" strokeMiterlimit={10}>
        <path d="M.5.5h22v3H.5z" />
        <path strokeLinecap="round" d="M.521 17.5h21.958" />
        <path d="M2.5 3.5h18v14h-18zM11.5 17.5v3" />
        <circle cx={11.5} cy={22} r={1.5} />
        <g strokeLinecap="round">
          <path d="M10.5 8.228l3.272 2.272-3.272 2.272z" />
          <circle cx={11.5} cy={10.5} r={5} />
        </g>
      </g>
    </svg>
  );
}

export default SvgPresentation;
