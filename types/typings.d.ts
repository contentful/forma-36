/* eslint-disable import/no-default-export */
/// <reference types="@emotion/react/types/css-prop" />

declare module '*.mdx' {
  let MDXComponent: (props: any) => JSX.Element;
  export default MDXComponent;
}

declare module '*.md' {
  const value: string;
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
