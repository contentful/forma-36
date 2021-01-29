declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module '*.md' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  import * as React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };

  const url: string;
  export default url;
}

declare module 'react-animate-height' {
  // eslint-disable-next-line
  const value: any;
  export default value;
}

declare module '@storybook/addon-actions' {
  export const action: any;
}

declare module 'react-modal' {
  const value: any;
  export default value;
}

declare module 'truncate' {
  const value: (value: string, chars: number, option: any) => string;
  export default value;
}

declare module '*.css' {
  const value: { [key: string]: string };
  export default value;
}
