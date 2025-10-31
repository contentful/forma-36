import React from 'react';
import { cx } from '@emotion/css';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { Button } from '../Button';
import getStyles from './ToggleButton.styles';
import { ButtonSize } from '../types';

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
  onToggle: () => void;

  /**
   * Determines size variation of Button component
   * @default medium
   */
  size?: ButtonSize;

  /**
   * Aria label is required when using icon only
   */
  'aria-label'?: string;

  children?: React.ReactNode;
}

function ToggleButtonBase(props: ExpandProps<ToggleButtonProps>, ref) {
  const {
    testId = 'cf-ui-toggle-button',
    children,
    className,
    isDisabled = false,
    isActive = false,
    icon,
    onToggle,
    size = 'medium',
    ...otherProps
  } = props;

  const styles = getStyles({ isActive, isDisabled });

  const handleToggle = () => {
    if (!isDisabled && onToggle) {
      onToggle();
    }
  };

  return (
    <Button
      testId={testId}
      type="button"
      ref={ref}
      size={size}
      onClick={handleToggle}
      className={cx(styles.toggleButton, className)}
      startIcon={icon}
      isDisabled={isDisabled}
      aria-pressed={isActive}
      data-state={isActive ? 'on' : 'off'}
      {...otherProps}
    >
      {children}
    </Button>
  );
}

ToggleButtonBase.displayName = 'ToggleButton';

export const ToggleButton = React.forwardRef(ToggleButtonBase);
