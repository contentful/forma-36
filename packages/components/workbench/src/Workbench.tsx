import React from 'react';
import { cx } from 'emotion';
import { Flex } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';
import { getWorkbenchStyles } from './Workbench.styles';

export interface WorkbenchProps extends CommonProps {
  children: React.ReactNode;
}

function _Workbench(
  { children, className, testId = 'cf-ui-workbench' }: WorkbenchProps,
  ref: React.Ref<HTMLDivElement>,
) {
  const styles = getWorkbenchStyles();

  const header: React.ReactNode[] = [];
  const content: React.ReactNode[] = [];

  React.Children.forEach(
    children,
    // eslint-disable-next-line
    (child: any) => {
      if (child.type?.displayName === 'WorkbenchHeader') {
        header.push(child);
      } else {
        content.push(child);
      }
    },
  );

  return (
    <div
      data-test-id={testId}
      ref={ref}
      className={cx(styles.workbench, className)}
    >
      {header}
      <Flex className={styles.contentWrapper}>{content}</Flex>
    </div>
  );
}

/**
 * The Workbench assembles the outer app shell which defines regions to structure content and interactions
 */
export const Workbench = React.forwardRef(_Workbench);
