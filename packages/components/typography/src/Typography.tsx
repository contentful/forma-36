import React, { useEffect } from 'react';

export interface TypographyProps {
  children?: React.ReactNode;
}

/**
 * @deprecated
 */
export const Typography = (props: TypographyProps) => {
  useEffect(() => {
    console.warn(
      'Forma 36: Typography component is deprecated. You can safely remove it from your components.',
    );
  }, []);
  return <>{props.children}</>;
};

Typography.displayName = 'Typography';
