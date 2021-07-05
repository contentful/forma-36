import React from 'react';
import cn from 'classnames';
import { TabFocusTrap } from '@contentful/f36-utils';
import type { IconComponent } from '@contentful/f36-icon';

import styles from './ToggleButton.css';

export interface ToggleButtonProps {
  children: React.ReactNode;
  icon?: IconComponent;
  isActive?: boolean;
  onToggle?: Function;
  isDisabled?: boolean;
  testId?: string;
  className?: string;
}

export const ToggleButton = ({
  children,
  className,
  icon: Icon,
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
    <div className={classNames} data-test-id={testId} {...otherProps}>
      <button
        type="button"
        className={styles.Toggle__button}
        disabled={isDisabled}
        data-test-id="button"
        onClick={handleToggle}
        aria-pressed={isActive}
      >
        <TabFocusTrap className={styles['Toggle__button__inner-wrapper']}>
          {Icon && (
            <Icon className={styles.Toggle__button__icon} variant="secondary" />
          )}
          {children && (
            <span className={styles['Toggle__content-wrapper']}>
              {children}
            </span>
          )}
        </TabFocusTrap>
      </button>
    </div>
  );
};

ToggleButton.Group = function ToggleButtonGroup({
  className,
  testId = 'cf-ui-toggle-button-group',
  children,
}: {
  className?: string;
  testId?: string;
  children: React.ReactElement<ToggleButtonProps>[];
}) {
  return (
    <div data-test-id={testId} className={cn(styles.ToggleGroup, className)}>
      {children}
    </div>
  );
};
