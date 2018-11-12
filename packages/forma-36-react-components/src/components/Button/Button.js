import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { CSSTransition } from 'react-transition-group';
import styles from './Button.css';
import Icon from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap';
import Spinner from '../Spinner';

class Button extends React.Component {
  static propTypes = {
    extraClassNames: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.string,
    indicateDropdown: PropTypes.bool,
    onClick: PropTypes.func,
    isFullWidth: PropTypes.bool,
    onBlur: PropTypes.func,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    testId: PropTypes.string,
    buttonType: PropTypes.oneOf([
      'primary',
      'positive',
      'negative',
      'muted',
      'naked',
    ]),
    size: PropTypes.oneOf(['small', 'large']),
    href: PropTypes.string,
  };

  static defaultProps = {
    extraClassNames: undefined,
    icon: undefined,
    children: undefined,
    loading: false,
    isFullWidth: false,
    indicateDropdown: false,
    onClick: undefined,
    onBlur: undefined,
    disabled: false,
    testId: 'cf-ui-button',
    buttonType: 'primary',
    size: undefined,
    href: undefined,
  };

  render() {
    const {
      extraClassNames,
      children,
      icon,
      buttonType,
      size,
      isFullWidth,
      onBlur,
      testId,
      onClick,
      loading,
      disabled,
      indicateDropdown,
      href,
      ...otherProps
    } = this.props;

    const classNames = cn(
      styles.Button,
      extraClassNames,
      styles[`Button--${buttonType}`],
      {
        [styles['Button--disabled']]: disabled,
        [styles[`Button--${size}`]]: size,
        [styles['Button--full-width']]: isFullWidth,
      },
    );

    const iconColor =
      buttonType === 'muted' || buttonType === 'naked' ? 'secondary' : 'white';

    const Element = href ? 'a' : 'button';

    return (
      <Element
        onBlur={e => {
          if (onBlur && !disabled) {
            onBlur(e);
          }
        }}
        onClick={e => {
          if (onClick && !disabled && !loading) {
            onClick(e);
          }
        }}
        data-test-id={testId}
        className={classNames}
        disabled={disabled}
        href={!disabled ? href : null}
        {...otherProps}
      >
        <TabFocusTrap extraClassNames={styles['Button__inner-wrapper']}>
          {icon && (
            <Icon
              extraClassNames={styles.Button__icon}
              size={size === 'small' ? 'tiny' : 'small'}
              icon={icon}
              color={iconColor}
            />
          )}
          {children && <span className={styles.Button__label}>{children}</span>}
          {indicateDropdown && (
            <Icon
              extraClassNames={styles['Button__dropdown-icon']}
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
              extraClassNames={styles.Button__spinner}
              size="small"
              color={
                buttonType === 'muted' || buttonType === 'naked'
                  ? 'default'
                  : 'white'
              }
            />
          </CSSTransition>
        </TabFocusTrap>
      </Element>
    );
  }
}

export default Button;
