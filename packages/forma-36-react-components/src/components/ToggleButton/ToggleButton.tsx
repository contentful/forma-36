import React from 'react';
import cn from 'classnames';

import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import type { IconType } from '../Icon/Icon';
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

export const ToggleButton = ({
  children,
  className,
  icon,
  isActive = false,
  isDisabled = false,
  onToggle,
  testId = 'cf-ui-toggle-button',
  ...otherProps
}: ToggleButtonProps) => {
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
      testId={testId}
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

export default ToggleButton;
