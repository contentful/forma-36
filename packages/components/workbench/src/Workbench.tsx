import React from 'react';
import { cx } from 'emotion';
import { CommonProps, Flex } from '@contentful/f36-core';
import { getWorkbenchStyles } from './Workbench.styles';

import { WorkbenchHeader } from './WorkbenchHeader';
import { WorkbenchContent } from './WorkbenchContent';
import { WorkbenchSidebar } from './WorkbenchSidebar';

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

  React.Children.map(
    children,
    // eslint-disable-next-line
    (child: any) => {
      if (child.type?.name === 'WorkbenchHeader') {
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

const ForwardRefWorkbench = React.forwardRef(_Workbench);

type CompoundWorkbench = typeof ForwardRefWorkbench & {
  Header?: typeof WorkbenchHeader;
  Content?: typeof WorkbenchContent;
  Sidebar?: typeof WorkbenchSidebar;
};

/**
 * The Workbench assembles the outer app shell which defines regions to structure content and interactions
 */
export const Workbench: CompoundWorkbench = ForwardRefWorkbench;
Workbench.Header = WorkbenchHeader;
Workbench.Content = WorkbenchContent;
Workbench.Sidebar = WorkbenchSidebar;
