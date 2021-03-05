import React from 'react';
import cn from 'classnames';

import styles from './Typography.css';

export interface TypographyProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  testId?: string;
}

const defaultConfiguration = {
  displayText: { spacing: 'l' },
  displayTextLarge: { spacing: 'xl' },
  heading: { spacing: 'm' },
  paragraph: { spacing: 'm' },
  sectionHeading: { spacing: 'l' },
  subheading: { spacing: 'm' },
};

export const TypographyContext = React.createContext({});

export function Typography({
  className,
  children,
  testId = 'cf-ui-text-container',
  ...otherProps
}: TypographyProps): React.ReactElement {
  const classNames = cn(styles.Typography, className);

  return (
    <TypographyContext.Provider value={defaultConfiguration}>
      <div {...otherProps} className={classNames} data-test-id={testId}>
        {children}
      </div>
    </TypographyContext.Provider>
  );
}
