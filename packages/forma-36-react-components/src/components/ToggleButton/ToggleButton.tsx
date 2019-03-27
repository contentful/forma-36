import React, { Component } from 'react';
import cn from 'classnames';
import Card from '../Card/Card';
import Icon, { IconType } from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap/TabFocusTrap';

const styles = require('./ToggleButton.css');

export type ToggleButtonProps = {
  children: React.ReactNode;
  icon?: IconType;
  isActive?: boolean;
  onToggle?: Function;
  isDisabled?: boolean;
  testId?: string;
  className?: string;
} & typeof defaultProps;

const defaultProps = {
  testId: 'cf-ui-toggle-button',
  isActive: false,
  isDisabled: false,
};

export class ToggleButton extends Component<ToggleButtonProps> {
  static defaultProps = defaultProps;

  handleToggle = () => {
    if (!this.props.isDisabled) {
      if (this.props.onToggle) {
        this.props.onToggle();
      }
    }
  };

  render() {
    const {
      className,
      icon,
      children,
      isActive,
      isDisabled,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Toggle, className, {
      [styles['Toggle--active']]: isActive,
      [styles['Toggle--disabled']]: isDisabled,
      [styles['Toggle--square']]: !children,
    });

    return (
      <Card
        className={classNames}
        padding="none"
        selected={isActive}
        {...otherProps}
      >
        <button
          type="button"
          className={styles.Toggle__button}
          disabled={isDisabled}
          data-test-id="button"
          onClick={this.handleToggle}
          aria-pressed={isActive}
        >
          <TabFocusTrap className={styles['Toggle__button__inner-wrapper']}>
            {icon && (
              <Icon
                icon={icon}
                color="secondary"
                className={styles.Toggle__button__icon}
              />
            )}
            {children && (
              <span className={styles['Toggle__content-wrapper']}>
                {children}
              </span>
            )}
          </TabFocusTrap>
        </button>
      </Card>
    );
  }
}

export default ToggleButton;
