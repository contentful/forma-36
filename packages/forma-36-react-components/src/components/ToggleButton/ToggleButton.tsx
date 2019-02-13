import React, { Component } from 'react';
import cn from 'classnames';
import Card from '../Card/Card';
import Icon, { IconType } from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap/TabFocusTrap';

const styles = require('./ToggleButton.css');

export interface ToggleButtonProps {
  testId?: string;
  extraClassNames?: string;
  children: React.ReactNode;
  icon?: IconType;
  isActive?: boolean;
  onToggle: () => {};
  isDisabled?: boolean;
}

export class ToggleButton extends Component<ToggleButtonProps> {
  static defaultProps = {
    testId: 'cf-ui-toggle-button',
    extraClassNames: undefined,
    onToggle: () => {},
    icon: undefined,
    isActive: false,
    isDisabled: false,
  };

  handleToggle = () => {
    if (!this.props.isDisabled) {
      this.props.onToggle();
    }
  };

  render() {
    const {
      extraClassNames,
      icon,
      children,
      isActive,
      isDisabled,
      ...otherProps
    } = this.props;

    const classNames = cn(styles.Toggle, extraClassNames, {
      [styles['Toggle--active']]: isActive,
      [styles['Toggle--disabled']]: isDisabled,
      [styles['Toggle--square']]: !children,
    });

    return (
      <Card
        extraClassNames={classNames}
        padding="none"
        selected={this.props.isActive}
        {...otherProps}
      >
        <button
          type="button"
          className={styles.Toggle__button}
          disabled={isDisabled}
          data-test-id="button"
          onClick={this.handleToggle}
        >
          <TabFocusTrap
            extraClassNames={styles['Toggle__button__inner-wrapper']}
          >
            {icon && (
              <Icon
                icon={icon}
                color="secondary"
                extraClassNames={styles.Toggle__button__icon}
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
