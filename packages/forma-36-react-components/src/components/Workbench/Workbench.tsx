import React, { HTMLProps } from 'react';
import cn from 'classnames';
import { css } from 'emotion';
import type { ReactElement } from 'react';
import { Heading, Paragraph } from '@contentful/f36-typography';
import { ChevronLeftIcon } from '@contentful/f36-icons';
import type { IconComponent } from '@contentful/f36-icon';
import { Button } from '@contentful/f36-button';

import styles from './Workbench.css';
import tokens from '@contentful/f36-tokens';

export interface WorkbenchHeaderProps {
  title?: ReactElement | string;
  description?: ReactElement | string;
  icon?: IconComponent;
  actions?: ReactElement;
  onBack?: Function;
  className?: string;
  testId?: string;
}

const getBackButtonStyles = () => {
  return css({
    margin: 0,
    width: '50px',
    height: '69px',
    svg: {
      fill: tokens.gray400,
    },
    '&:hover, &:focus': {
      svg: {
        fill: tokens.gray500,
      },
    },
  });
};

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
    <header
      className={cn(styles['Workbench__header'], className)}
      data-test-id={testId}
    >
      {onBack ? (
        <div className={styles['Workbench__header-back']}>
          <Button
            variant="transparent"
            testId="workbench-back-btn"
            className={getBackButtonStyles()}
            onClick={() => {
              if (typeof onBack === 'function') {
                onBack();
              }
            }}
          >
            <ChevronLeftIcon aria-label="Back" size="large" />
          </Button>
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
            <Heading as="h1" marginBottom="none">
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
            <Paragraph marginBottom="none">{description}</Paragraph>
          ) : (
            description
          )}
        </div>
      )}
      {actions ? (
        <div className={styles['Workbench__header-actions']}>{actions}</div>
      ) : null}
    </header>
  );
}

WorkbenchHeader.displayName = 'Workbench.Header';

export interface WorkbenchSidebarProps extends HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  className?: string;
  position?: 'left' | 'right';
  testId?: string;
  labelText?: string;
}

export function WorkbenchSidebar({
  children,
  className,
  position,
  testId = 'cf-ui-workbench-sidebar',
  labelText = position === 'right' ? 'Primary sidebar' : 'Secondary sidebar',
  ...otherProps
}: WorkbenchSidebarProps) {
  return (
    <aside
      data-test-id={`${testId}${position ? `-${position}` : ''}`}
      className={cn(
        styles['Workbench__sidebar'],
        {
          [styles['Workbench__sidebar--right']]: position === 'right',
          [styles['Workbench__sidebar--left']]: position === 'left',
        },
        className,
      )}
      aria-label={labelText}
      {...otherProps}
    >
      {children}
    </aside>
  );
}

export interface WorkbenchContentProps extends HTMLProps<HTMLElement> {
  children?: React.ReactNode;
  type?: 'default' | 'text' | 'full';
  className?: string;
  testId?: string;
  labelText?: string;
}

export function WorkbenchContent({
  children,
  className,
  testId = 'cf-ui-workbench-content',
  type = 'default',
  labelText = 'Main content',
}: WorkbenchContentProps) {
  return (
    <main
      className={cn(styles['Workbench__content'], className)}
      data-test-id={testId}
      aria-label={labelText}
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
    </main>
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
