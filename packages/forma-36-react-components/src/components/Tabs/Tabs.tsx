import React from 'react';
import cn from 'classnames';
import type { CSSProperties } from 'react';

import styles from './Tabs.css';

export interface TabsProps {
  role?: 'navigation' | 'tablist';
  style?: CSSProperties;
  className?: string;
  withDivider?: boolean;
  children?: React.ReactNode;
  testId?: string;
}

export function Tabs({
  className,
  children,
  testId = 'cf-ui-tabs',
  role = 'tablist',
  withDivider = false,
  style,
}: TabsProps): React.ReactElement {
  const classNames = cn(
    styles.Tabs,
    { [styles['Tabs__with-divider']]: withDivider },
    className,
  );

  const elementProps = {
    'data-test-id': testId,
    className: classNames,
    style,
  };

  if (role === 'navigation') {
    return (
      <nav {...elementProps} role="navigation">
        {children}
      </nav>
    );
  }

  return (
    <div {...elementProps} role="tablist">
      {children}
    </div>
  );
}

export default Tabs;
