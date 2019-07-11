import React, { Component } from 'react';
import cn from 'classnames';
import Heading from '../Typography/Heading';

const styles = require('./Workbench.css');

interface WorkbenchHeaderProps {
  title?: string;
  icon?: React.ReactElement;
  actions?: React.ReactElement;
}

export function WorkbenchHeader(props: WorkbenchHeaderProps) {
  return (
    <div className={styles['Workbench__header']}>
      {props.icon ? (
        <div className={styles['Workbench__header-icon']}>{props.icon}</div>
      ) : null}
      {props.title ? (
        <Heading
          className={styles['Workbench__header-title']}
          testId="workbench-title"
        >
          {props.title}
        </Heading>
      ) : null}
      {props.actions ? (
        <div className={styles['Workbench__header-actions']}>
          {props.actions}
        </div>
      ) : null}
    </div>
  );
}

interface WorkbenchSidebarProps {
  children: React.ReactNode;
  position: 'left' | 'right';
}

export function WorkbenchSidebar(props: WorkbenchSidebarProps) {
  return (
    <div
      className={cn(styles['Workbench__sidebar'], {
        [styles['Workbench__sidebar--right']]: props.position === 'right',
        [styles['Workbench__sidebar--left']]: props.position === 'left',
      })}
    >
      {props.children}
    </div>
  );
}

interface WorkbenchContentProps {
  children: React.ReactNode;
  type: 'default' | 'text' | 'full';
  testId: string;
  leftSidebar?: React.ReactNode;
  rightSidebar?: React.ReactNode;
}

export function WorkbenchContent(props: WorkbenchContentProps) {
  return (
    <div
      className={styles['Workbench__content-wrapper']}
      data-test-id={props.testId}
    >
      {props.leftSidebar && (
        <WorkbenchSidebar position="left">{props.leftSidebar}</WorkbenchSidebar>
      )}
      <div className={styles['Workbench__content']}>
        <div
          className={cn(styles['Workbench__content-inner'], {
            [styles['Workbench__content-inner--default']]:
              props.type === 'default',
            [styles['Workbench__content-inner--text']]: props.type === 'text',
            [styles['Workbench__content-inner--full']]: props.type === 'full',
          })}
        >
          {props.children}
        </div>
      </div>
      {props.rightSidebar && (
        <WorkbenchSidebar position="right">
          {props.rightSidebar}
        </WorkbenchSidebar>
      )}
    </div>
  );
}

WorkbenchContent.defaultProps = {
  type: 'default',
  testId: 'cf-ui-workbench-content',
};

export type WorkbenchProps = {
  /**
   * Class names to be appended to the className prop of the component
   */
  className?: string;
  /**
   * Child nodes to be rendered in the component
   */
  children?: React.ReactNode;
  /**
   * An ID used for testing purposes applied as a data attribute (data-test-id)
   */
  testId?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-workbench',
};

export class Workbench extends Component<WorkbenchProps> {
  static defaultProps = defaultProps;

  static Header = WorkbenchHeader;
  static Content = WorkbenchContent;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const classNames = cn(styles.Workbench, className);

    return (
      <div {...otherProps} className={classNames} data-test-id={testId}>
        {children}
      </div>
    );
  }
}

export default Workbench;
