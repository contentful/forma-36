import React, { HTMLProps } from 'react';
import type {
  CSSProperties,
  FocusEvent,
  MouseEvent as ReactMouseEvent,
  FocusEventHandler,
  MouseEventHandler,
  ElementType,
} from 'react';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';

import { Icon, IconType } from '../Icon';
import { TabFocusTrap } from '../TabFocusTrap';
import { Spinner } from '../Spinner';
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
  icon?: IconType;
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
            icon={icon}
            color={iconColor}
          />
        )}
        {children && <span className={styles.Button__label}>{children}</span>}
        <CSSTransition
          in={loading}
          timeout={1000}
          classNames={{
            enter: styles['Button--spinner--enter'],
            enterActive: styles['Button--spinner-active'],
            exit: styles['Button--spinner--exit'],
            exitActive: styles['Button--spinner-exit-active'],
          }}
          mountOnEnter
          unmountOnExit
        >
          <Spinner
            className={styles.Button__spinner}
            customSize={12}
            color={
              buttonType === 'muted' ||
              buttonType === 'warning' ||
              buttonType === 'naked'
                ? 'default'
                : 'white'
            }
          />
        </CSSTransition>
        {indicateDropdown && (
          <Icon
            className={styles['Button__dropdown-icon']}
            icon="ChevronDown"
            color={iconColor}
          />
        )}
      </TabFocusTrap>
    </Element>
  );
};
