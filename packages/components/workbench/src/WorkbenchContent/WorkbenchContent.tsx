import React from 'react';
import { cx } from 'emotion';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

import { getWorkbenchContentStyles } from './WorkbenchContent.styles';

export interface WorkbenchContentOwnProps extends CommonProps {
  children: React.ReactNode;
  /**
   * This props define the max-width of the content container
   * The default value is "default" which translates to `max-width: 1200px` in the browser
   * */
  type?: 'default' | 'text' | 'full';
}

export type WorkbenchContentProps = PropsWithHTMLElement<
  WorkbenchContentOwnProps,
  'main'
>;

export function WorkbenchContent({
  children,
  className,
  type = 'default',
  testId = 'cf-ui-workbench-content',
  ...otherProps
}: WorkbenchContentProps) {
  const styles = getWorkbenchContentStyles(type);

  return (
    <main
      data-test-id={testId}
      {...otherProps}
      className={cx(styles.workbenchContent, className)}
    >
      <div className={styles.innerContent}>{children}</div>
    </main>
  );
}

WorkbenchContent.displayName = 'WorkbenchContent';
