import React from 'react';
import cn from 'classnames';
import Card from '../Card/Card';
import Icon, { IconType } from '../Icon/Icon';
import TabFocusTrap from '../TabFocusTrap/TabFocusTrap';

import styles from './ToggleButton.css';

export interface ToggleButtonProps {
  children: React.ReactNode;
  icon?: IconType;
  isActive?: boolean;
  onToggle?: Function;
  isDisabled?: boolean;
  testId?: string;
  className?: string;
}

const defaultProps: Partial<ToggleButtonProps> = {
  testId: 'cf-ui-toggle-button',
  isActive: false,
  isDisabled: false,
};

export const ToggleButton = (props: ToggleButtonProps) => {
  const {
    className,
    icon,
    children,
    isActive,
    isDisabled,
    onToggle,
    ...otherProps
  } = props;

  const classNames = cn(styles.Toggle, className, {
    [styles['Toggle--active']]: isActive,
    [styles['Toggle--disabled']]: isDisabled,
    [styles['Toggle--square']]: !children,
  });

  const handleToggle = () => {
    if (!isDisabled && onToggle) {
      onToggle();
    }
  };

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
        onClick={handleToggle}
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
};

ToggleButton.defaultProps = defaultProps;

export default ToggleButton;
