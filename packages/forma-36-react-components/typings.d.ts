/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.md' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module 'react-animate-height' {
  // eslint-disable-next-line
  const value: any;
  export default value;
}

declare module '@storybook/addon-knobs' {
  export const select: any;
  export const text: any;
  export const boolean: any;
  export const number: any;
  export const color: any;
  export const object: any;
  export const array: any;
  export const button: any;
}

declare module '@storybook/addon-knobs/react' {
  export const text: any;
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
