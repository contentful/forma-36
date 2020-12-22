import React from 'react';
import cn from 'classnames';

import Heading from '../Typography/Heading';
import IconButton from '../IconButton';
import styles from './Workbench.css';

export interface WorkbenchHeaderProps {
  title?: React.ReactElement | string;
  description?: React.ReactElement | string;
  icon?: React.ReactElement;
  actions?: React.ReactElement;
  onBack?: Function;
  className?: string;
  testId?: string;
}

export function WorkbenchHeader(props: WorkbenchHeaderProps) {
  return (
    <div
      className={cn(styles['Workbench__header'], props.className)}
      data-test-id={props.testId}
    >
      {props.onBack ? (
        <div className={styles['Workbench__header-back']}>
          <IconButton
            onClick={() => {
              if (typeof props.onBack === 'function') {
                props.onBack();
              }
            }}
            testId="workbench-back-btn"
            className={styles['Workbench__header-back-button']}
            label="Back"
            buttonType="muted"
            iconProps={{
              size: 'large',
              icon: 'ChevronLeft',
            }}
          />
        </div>
      ) : null}
      {props.icon ? (
        <div className={styles['Workbench__header-icon']}>{props.icon}</div>
      ) : null}
      {props.title && (
        <div
          data-test-id="workbench-title"
          className={styles['Workbench__header-title']}
        >
          {typeof props.title === 'string' ? (
            <Heading className={styles['Workbench__header-title__heading']}>
              {props.title}
            </Heading>
          ) : (
            props.title
          )}
        </div>
      )}
      {props.description && (
        <div
          data-test-id="workbench-description"
          className={styles['Workbench__header-description']}
        >
          {typeof props.description === 'string' ? (
            <span className={styles['Workbench__header-description__text']}>
              {props.description}
            </span>
          ) : (
            props.description
          )}
        </div>
      )}
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

WorkbenchHeader.displayName = 'Workbench.Header';

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

export function Workbench({
  className,
  children,
  testId,
  ...otherProps
}: WorkbenchProps): React.ReactElement {
  const childrenArray = React.Children.toArray(children);
  const header: React.ReactNode[] = [];
  const other: React.ReactNode[] = [];
  childrenArray.forEach(
    // eslint-disable-next-line
    (item: any) => {
      if (item && item.type && item.type.displayName === 'Workbench.Header') {
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

Workbench.defaultProps = {
  testId: 'cf-ui-workbench',
};

Workbench.Header = WorkbenchHeader;
Workbench.Content = WorkbenchContent;
Workbench.Sidebar = WorkbenchSidebar;

export default Workbench;
