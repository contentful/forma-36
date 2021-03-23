import React from 'react';
import type { CommonProps } from '@contentful/f36-core';

export interface TypographyProps extends CommonProps {
  children?: React.ReactNode;
}

export function Typography(props: TypographyProps) {
  React.useEffect(() => {
    console.warn(
      'Forma 36: Typography component is deprecated, you can safely remove it from the JSX.',
    );
  }, []);
  return <div {...props}>{props.children}</div>;
}
