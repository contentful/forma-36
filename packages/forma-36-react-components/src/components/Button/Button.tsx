import React from 'react';
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
import Icon, { IconType } from '../Icon';
import TabFocusTrap from '../TabFocusTrap';
import Spinner from '../Spinner';

import styles from './Button.css';

export const buttonTypes = [
  'primary',
  'positive',
  'negative',
  'warning',
  'muted',
  'naked',
];

export interface ButtonProps {
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
  size?: 'small' | 'large';
  href?: string;
  style?: CSSProperties;
  className?: string;
  children?: React.ReactNode;
  isActive?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    icon,
    buttonType = 'primary',
    size,
    isFullWidth = false,
    onBlur,
    testId = 'cf-ui-button',
    onClick,
    loading = false,
    disabled = false,
    indicateDropdown = false,
    href,
    type = 'button',
    isActive,
    ...otherProps
  } = props;

  const classNames = cn(
    styles.Button,
    className,
    styles[`Button--${buttonType}`],
    {
      [styles['Button--disabled']]: disabled,
      [styles[`Button--${size}`]]: size,
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
      type={type}
      {...otherProps}
    >
      <TabFocusTrap className={styles['Button__inner-wrapper']}>
        {icon && (
          <Icon
            className={styles.Button__icon}
            size={size === 'small' ? 'tiny' : 'small'}
            icon={icon}
            color={iconColor}
          />
        )}
        {children && <span className={styles.Button__label}>{children}</span>}
        {indicateDropdown && (
          <Icon
            className={styles['Button__dropdown-icon']}
            icon="ArrowDown"
            color={iconColor}
          />
        )}
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
            size="small"
            color={
              buttonType === 'muted' ||
              buttonType === 'warning' ||
              buttonType === 'naked'
                ? 'default'
                : 'white'
            }
          />
        </CSSTransition>
      </TabFocusTrap>
    </Element>
  );
};

export default Button;
