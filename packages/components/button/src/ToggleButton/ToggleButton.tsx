import React from 'react';
import { cx } from '@emotion/css';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { Button } from '../Button';
import { getStyles as getIconButtonStyles } from '../IconButton/IconButton.styles';
import getStyles from './ToggleButton.styles';
import type { ButtonSize } from '../types';
import { useDensity } from '@contentful/f36-utils';

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
   * Accessible label. Required when the button only displays an icon.
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

  const density = useDensity();
  const isIconOnly = Boolean(icon) && !children;
  const styles = getStyles({ isActive, isDisabled, size });
  const iconButtonStyles = getIconButtonStyles({ size, density });

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
      className={cx(
        styles.toggleButton,
        isIconOnly && iconButtonStyles.iconButton,
        className,
      )}
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
