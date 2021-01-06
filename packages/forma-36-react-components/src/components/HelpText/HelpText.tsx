import React from 'react';
import cn from 'classnames';

import styles from './HelpText.css';

export interface HelpTextProps {
  className?: string;
  testId?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export function HelpText({
  className,
  children,
  testId = 'cf-ui-help-text',
  ...otherProps
}: HelpTextProps): React.ReactElement {
  const classNames = cn(styles.HelpText, className);

  return (
    <p {...otherProps} className={classNames} data-test-id={testId}>
      {children}
    </p>
  );
}

export default HelpText;
