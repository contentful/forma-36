import React, { Component } from 'react';
import cn from 'classnames';
import Heading from '../Typography/Heading';

const styles = require('./Workbench.css');

interface WorkbenchHeaderProps {
  title?: string;
  icon?: React.ReactElement;
  actions?: React.ReactElement;
  className?: string;
  testId?: string;
}

export function WorkbenchHeader(props: WorkbenchHeaderProps) {
  return (
    <div
      className={cn(styles['Workbench__header'], props.className)}
      data-test-id={props.testId}
    >
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

WorkbenchHeader.defaultProps = {
  testId: 'cf-ui-workbench-header',
};

WorkbenchHeader.displayName = 'WorkbenchHeader';

interface WorkbenchSidebarProps {
  children: React.ReactNode;
  className?: string;
  position?: 'left' | 'right';
  testId?: string;
}

export function WorkbenchSidebar(props: WorkbenchSidebarProps) {
  return (
    <div
      data-test-id={`${props.testId}${
        props.position ? `-${props.position}` : ''
      }`}
      className={cn(
        styles['Workbench__sidebar'],
        {
          [styles['Workbench__sidebar--right']]: props.position === 'right',
          [styles['Workbench__sidebar--left']]: props.position === 'left',
        },
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}

WorkbenchSidebar.defaultProps = {
  testId: 'cf-ui-workbench-sidebar',
};

interface WorkbenchContentProps {
  children: React.ReactNode;
  type?: 'default' | 'text' | 'full';
  className?: string;
  testId?: string;
}

export function WorkbenchContent(props: WorkbenchContentProps) {
  return (
    <div
      className={cn(styles['Workbench__content'], props.className)}
      data-test-id={props.testId}
    >
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
  );
}

WorkbenchContent.defaultProps = {
  type: 'default',
  testId: 'cf-ui-workbench-content',
};

export interface WorkbenchProps {
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
}

const defaultProps: Partial<WorkbenchProps> = {
  testId: 'cf-ui-workbench',
};

export class Workbench extends Component<WorkbenchProps> {
  static defaultProps = defaultProps;

  static Header = WorkbenchHeader;
  static Content = WorkbenchContent;
  static Sidebar = WorkbenchSidebar;

  render() {
    const { className, children, testId, ...otherProps } = this.props;

    const childrenArray = React.Children.toArray(children);
    const header: React.ReactNode[] = [];
    const other: React.ReactNode[] = [];
    childrenArray.forEach(
      // eslint-disable-next-line
      (item: any) => {
        if (item && item.type && item.type.displayName === 'WorkbenchHeader') {
          header.push(item);
        } else {
          other.push(item);
        }
      },
    );

    const classNames = cn(styles.Workbench, className);

    return (
      <div {...otherProps} className={classNames} data-test-id={testId}>
        {header}
        <div className={styles['Workbench__content-wrapper']}>{other}</div>
      </div>
    );
  }
}

export default Workbench;
