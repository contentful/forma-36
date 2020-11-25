import * as React from 'react';

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M8 0a1 1 0 011 1v1h6V1a1 1 0 112 0v1h2.778A3.222 3.222 0 0123 5.222v15.556A3.222 3.222 0 0119.778 24H4.222A3.222 3.222 0 011 20.778V5.222A3.222 3.222 0 014.222 2H7V1a1 1 0 011-1zM7 4H4.222C3.547 4 3 4.547 3 5.222V9h18V5.222C21 4.547 20.453 4 19.778 4H17v1a1 1 0 11-2 0V4H9v1a1 1 0 01-2 0V4zm14 7H3v9.778C3 21.453 3.547 22 4.222 22h15.556c.675 0 1.222-.547 1.222-1.222V11z" />
    </svg>
  );
}

export default SvgCalendar;
