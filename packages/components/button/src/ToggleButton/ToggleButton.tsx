import React, { useState } from 'react';
import { cx } from 'emotion';
import { CommonProps } from '@contentful/f36-core';
import { Button } from '../Button';
import getStyles from './ToggleButton.styles';

export interface ToggleButtonProps extends CommonProps {
  /**
   * Applies active styles
   * @default false
   */
  isActive?: boolean;
  /**
   * Disabled interaction and applies disabled styles
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Expects any of the icon components
   */
  icon?: React.ReactElement;
  /**
   * Function triggered when the toggle button is clicked.
   */
  onToggle?: () => void;
  children: React.ReactNode;
}

function _ToggleButton(props: ToggleButtonProps, ref) {
  const {
    testId = 'cf-ui-toggle-button',
    children,
    className,
    isDisabled,
    isActive,
    icon,
    onToggle,
    ...otherProps
  } = props;

  const [active, setActive] = useState(isActive);

  const styles = getStyles({ isActive: active, isDisabled });

  const handleToggle = () => {
    if (!isDisabled && onToggle) {
      setActive(!active);
      onToggle();
    }
  };

  return (
    <Button
      testId={testId}
      type="button"
      ref={ref}
      onClick={handleToggle}
      className={cx(styles.toggleButton, className)}
      icon={icon}
      isDisabled={isDisabled}
      aria-pressed={active}
      data-state={active ? 'on' : 'off'}
      {...otherProps}
    >
      {children}
    </Button>
  );
}

export const ToggleButton = React.forwardRef(_ToggleButton);
