import * as React from 'react';

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="1em" height="1em" {...props}>
      <path d="M15.3738 5.29289C15.7643 5.68342 15.7643 6.31658 15.3738 6.70711L10.0809 12L15.3738 17.2929C15.7643 17.6834 15.7643 18.3166 15.3738 18.7071C14.9833 19.0976 14.3501 19.0976 13.9596 18.7071L7.95956 12.7071C7.56904 12.3166 7.56904 11.6834 7.95956 11.2929L13.9596 5.29289C14.3501 4.90237 14.9833 4.90237 15.3738 5.29289Z" />
    </svg>
  );
}

export default SvgChevronLeft;
