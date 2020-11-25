import * as React from 'react';

function SvgEmbeddedEntryInline(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path d="M13.4 17H6.6c-.3 0-.6-.3-.6-.6v-2.8c0-.3.3-.6.6-.6h6.8c.3 0 .6.3.6.6v2.8c0 .3-.3.6-.6.6zM22.5 11h-21c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h20.9c.4 0 .6.2.6.5v.9c0 .4-.2.6-.5.6zM4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM12.6 21H1.4c-.2 0-.4-.2-.4-.4v-1.1c0-.3.2-.5.4-.5h11.1c.2 0 .4.2.4.4v1.1c.1.3-.1.5-.3.5zM15.6 6H1.4c-.2 0-.4-.2-.4-.4V4.4c0-.2.2-.4.4-.4h14.1c.3 0 .5.2.5.4v1.1c0 .3-.2.5-.4.5z" />
      <path d="M4.5 16h-3c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h3c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5zM19.5 16h-4c-.3 0-.5-.2-.5-.5v-1c0-.3.2-.5.5-.5h4c.3 0 .5.2.5.5v1c0 .3-.2.5-.5.5z" />
    </svg>
  );
}

export default SvgEmbeddedEntryInline;
