import React from 'react';
import cn from 'classnames';
import type { ReactElement } from 'react';
import { Heading } from '@contentful/f36-typography';
import { ChevronLeft } from '@contentful/f36-icons';
import type { IconComponent } from '@contentful/f36-icon';

import { IconButton } from '../IconButton';
import styles from './Workbench.css';

export interface WorkbenchHeaderProps {
  title?: ReactElement | string;
  description?: ReactElement | string;
  icon?: IconComponent;
  actions?: ReactElement;
  onBack?: Function;
  className?: string;
  testId?: string;
}

export function WorkbenchHeader({
  actions,
  className,
  description,
  icon,
  onBack,
  testId = 'cf-ui-workbench-header',
  title,
}: WorkbenchHeaderProps) {
  const Icon = icon ?? null;

  return (
    <div
      className={cn(styles['Workbench__header'], className)}
      data-test-id={testId}
    >
      {onBack ? (
        <div className={styles['Workbench__header-back']}>
          <IconButton
            onClick={() => {
              if (typeof onBack === 'function') {
                onBack();
              }
            }}
            testId="workbench-back-btn"
            className={styles['Workbench__header-back-button']}
            label="Back"
            buttonType="muted"
            iconProps={{
              as: ChevronLeft,
              size: 'large',
            }}
          />
        </div>
      ) : null}
      {Icon ? (
        <div className={styles['Workbench__header-icon']}>{<Icon />}</div>
      ) : null}
      {title && (
        <div
          data-test-id="workbench-title"
          className={styles['Workbench__header-title']}
        >
          {typeof title === 'string' ? (
            <Heading className={styles['Workbench__header-title__heading']}>
              {title}
            </Heading>
          ) : (
            title
          )}
        </div>
      )}
      {description && (
        <div
          data-test-id="workbench-description"
          className={styles['Workbench__header-description']}
        >
          {typeof description === 'string' ? (
            <span className={styles['Workbench__header-description__text']}>
              {description}
            </span>
          ) : (
            description
          )}
        </div>
      )}
      {actions ? (
        <div className={styles['Workbench__header-actions']}>{actions}</div>
      ) : null}
    </div>
  );
}

WorkbenchHeader.displayName = 'Workbench.Header';

export interface WorkbenchSidebarProps {
  children: React.ReactNode;
  className?: string;
  position?: 'left' | 'right';
  testId?: string;
}

export function WorkbenchSidebar({
  children,
  className,
  position,
  testId = 'cf-ui-workbench-sidebar',
}: WorkbenchSidebarProps) {
  return (
    <div
      data-test-id={`${testId}${position ? `-${position}` : ''}`}
      className={cn(
        styles['Workbench__sidebar'],
        {
          [styles['Workbench__sidebar--right']]: position === 'right',
          [styles['Workbench__sidebar--left']]: position === 'left',
        },
        className,
      )}
    >
      {children}
    </div>
  );
}

export interface WorkbenchContentProps {
  children: React.ReactNode;
  type?: 'default' | 'text' | 'full';
  className?: string;
  testId?: string;
}

export function WorkbenchContent({
  children,
  className,
  testId = 'cf-ui-workbench-content',
  type = 'default',
}: WorkbenchContentProps) {
  return (
    <div
      className={cn(styles['Workbench__content'], className)}
      data-test-id={testId}
    >
      <div
        className={cn(styles['Workbench__content-inner'], {
          [styles['Workbench__content-inner--default']]: type === 'default',
          [styles['Workbench__content-inner--text']]: type === 'text',
          [styles['Workbench__content-inner--full']]: type === 'full',
        })}
      >
        {children}
      </div>
    </div>
  );
}

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
  testId = 'cf-ui-workbench',
  ...otherProps
}: WorkbenchProps): ReactElement {
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

Workbench.Header = WorkbenchHeader;
Workbench.Content = WorkbenchContent;
Workbench.Sidebar = WorkbenchSidebar;
