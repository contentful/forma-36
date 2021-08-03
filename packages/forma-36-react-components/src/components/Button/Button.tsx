import React from 'react';
import type {
  CSSProperties,
  FocusEvent,
  HTMLProps,
  MouseEvent as ReactMouseEvent,
  FocusEventHandler,
  MouseEventHandler,
  ElementType,
} from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import { TabFocusTrap } from '@contentful/f36-utils';
import { Icon } from '@contentful/f36-icon';
import { ChevronDown } from '@contentful/f36-icons';
import type { IconComponent } from '@contentful/f36-icon';
import { Spinner } from '@contentful/f36-spinner';

import styles from './Button.css';

type AnchorProps =
  | {
      href?: undefined;
      rel?: never;
      target?: never;
    }
  | {
      href: string;
      rel?: HTMLProps<HTMLAnchorElement>['rel'];
      target?: HTMLProps<HTMLAnchorElement>['target'];
    };

export type ButtonProps = {
  icon?: IconComponent;
  indicateDropdown?: boolean;
  onClick?: MouseEventHandler;
  isFullWidth?: boolean;
  onBlur?: FocusEventHandler;
  loading?: boolean;
  disabled?: boolean;
  testId?: string;
  buttonType?:
    | 'primary'
    | 'positive'
    | 'negative'
    | 'warning'
    | 'muted'
    | 'naked';
  type?: 'button' | 'submit' | 'reset';
  size?: 'small' | 'medium' | 'large';
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
} & AnchorProps;

/**
 *
 * @deprecated This component is deprecated, please use button from '@contentful/f36-button'
 */
export const Button = ({
  buttonType = 'primary',
  children,
  className,
  disabled = false,
  href,
  rel,
  target,
  icon,
  indicateDropdown = false,
  isActive,
  isFullWidth = false,
  loading = false,
  onBlur,
  onClick,
  size = 'medium',
  testId = 'cf-ui-button',
  type = 'button',
  ...otherProps
}: ButtonProps) => {
  const classNames = cn(
    styles.Button,
    className,
    styles[`Button--${buttonType}`],
    styles[`Button--${size}`],
    {
      [styles['Button--disabled']]: disabled,
      [styles['Button--full-width']]: isFullWidth,
      [styles['Button--is-active']]: isActive,
    },
  );

  const iconColor =
    buttonType === 'muted' || buttonType === 'warning' || buttonType === 'naked'
      ? 'secondary'
      : 'white';

  const Element: ElementType = href ? 'a' : 'button';

  return (
    <Element
      onBlur={(e: FocusEvent) => {
        e.persist();
        if (onBlur && !disabled) {
          onBlur(e);
        }
      }}
      onClick={(e: ReactMouseEvent) => {
        e.persist();
        if (onClick && !disabled && !loading) {
          onClick(e);
        }
      }}
      data-test-id={testId}
      className={classNames}
      disabled={disabled}
      href={!disabled ? href : undefined}
      rel={rel}
      target={target}
      type={type}
      {...otherProps}
    >
      <TabFocusTrap className={styles['Button__inner-wrapper']}>
        {icon && !loading && (
          <Icon
            className={styles.Button__icon}
            size={size === 'small' ? 'tiny' : 'small'}
            as={icon}
            variant={iconColor}
          />
        )}
        {children && <span className={styles.Button__label}>{children}</span>}
        <CSSTransition
          appear
          in={loading}
          timeout={1000}
          classNames={{
            appear: styles['Button--spinner--enter'],
            appearActive: styles['Button--spinner--enter-active'],
            exit: styles['Button--spinner--exit'],
            exitActive: styles['Button--spinner--exit-active'],
          }}
          mountOnEnter
          unmountOnExit
        >
          <div className={styles['Button--spinner-wrapper']}>
            <Spinner
              className={styles.Button__spinner}
              customSize={12}
              variant={
                buttonType === 'muted' ||
                buttonType === 'warning' ||
                buttonType === 'naked'
                  ? 'default'
                  : 'white'
              }
            />
          </div>
        </CSSTransition>
        {indicateDropdown && (
          <ChevronDown
            className={styles['Button__dropdown-icon']}
            variant={iconColor}
          />
        )}
      </TabFocusTrap>
    </Element>
  );
};
