import * as React from 'react';

function SvgUserProfile(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" width="1em" height="1em" {...props}>
      <path d="M0 6.5A.5.5 0 01.5 6h7a.5.5 0 010 1H1v15h22V7h-6.5a.5.5 0 010-1h7a.5.5 0 01.5.5v16a.5.5 0 01-.5.5H.5a.5.5 0 01-.5-.5v-16z" />
      <path d="M0 10.5a.5.5 0 01.5-.5h23a.5.5 0 010 1H.5a.5.5 0 01-.5-.5zM12 14.5a.5.5 0 01.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zM12 16.5a.5.5 0 01.5-.5h6a.5.5 0 010 1h-6a.5.5 0 01-.5-.5zM12 18.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM9 4a3 3 0 116 0v4.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V4zm3-2a2 2 0 00-2 2v4h4V4a2 2 0 00-2-2zM7 14a1 1 0 100 2 1 1 0 000-2zm-2 1a2 2 0 114 0 2 2 0 01-4 0z" />
      <path d="M5.04 19h3.92c-.19-1.198-1.057-2-1.96-2s-1.77.802-1.96 2zM4 19.5C4 17.656 5.261 16 7 16s3 1.656 3 3.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5z" />
    </svg>
  );
}

export default SvgUserProfile;
