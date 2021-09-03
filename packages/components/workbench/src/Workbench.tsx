import React from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { getWorkbenchStyles } from './Workbench.styles';

import { WorkbenchHeader } from './WorkbenchHeader';
import { WorkbenchContent } from './WorkbenchContent';

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
      {content}
    </div>
  );
}

const ForwardRefWorkbench = React.forwardRef(_Workbench);

type CompoundWorkbench = typeof ForwardRefWorkbench & {
  Header?: typeof WorkbenchHeader;
  Content?: typeof WorkbenchContent;
};

/**
 * TODO: Add description of component here.
 */
export const Workbench: CompoundWorkbench = ForwardRefWorkbench;
Workbench.Header = WorkbenchHeader;
Workbench.Content = WorkbenchContent;
