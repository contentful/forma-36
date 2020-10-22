import * as React from 'react';

function SvgMedia(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" {...props}>
      <path
        clipRule="evenodd"
        d="M0 2.5A.5.5 0 01.5 2h7a.5.5 0 01.5.5V4h15.5a.5.5 0 01.5.5v14a3.5 3.5 0 01-3.5 3.5H3c-1.658 0-3-1.343-3-3V2.5zM5.236 21H20.5a2.5 2.5 0 002.5-2.5V7H6v12c0 .768-.289 1.47-.764 2zM5.5 6H23V5H7.5a.5.5 0 01-.5-.5V3H1v16a1.999 1.999 0 104 0V6.5a.5.5 0 01.5-.5z"
      />
      <path
        clipRule="evenodd"
        d="M17.07 11.505a.5.5 0 01.385.288l2.5 5.5A.5.5 0 0119.5 18h-10a.5.5 0 01-.384-.82l2.5-3a.5.5 0 01.608-.127l1.65.825 2.746-3.203a.5.5 0 01.45-.17zm-.2 1.416l-2.49 2.904a.5.5 0 01-.604.122l-1.645-.823L10.568 17h8.156l-1.855-4.08zM11.5 10a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z"
      />
    </svg>
  );
}

export default SvgMedia;
