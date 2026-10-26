import React from 'react';
import { cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import type { CommonProps, ExpandProps } from '@contentful/f36-core';
import { Button } from '../Button';
import { getStyles as getIconButtonStyles } from '../IconButton/IconButton.styles';
import getStyles from './ToggleButton.styles';
import type { ButtonSize } from '../types';
import type { ToggleButtonVariant } from './types';
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
   * Determines style variation of the toggle button. Use `transparent` for
   * toggles that sit inside rows, toolbars or other dense surfaces.
   * @default secondary
   */
  variant?: ToggleButtonVariant;

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
    variant,
    ...otherProps
  } = props;

  const density = useDensity();
  const isIconOnly = Boolean(icon) && !children;
  const styles = getStyles({
    isActive,
    isDisabled,
    size,
    variant: variant ?? 'secondary',
  });
  // An active transparent toggle has no border, so its icon carries the
  // active state in the primary color.
  const startIcon =
    variant === 'transparent' && isActive && icon && !icon.props.color
      ? React.cloneElement(icon, { color: tokens.colorPrimary })
      : icon;
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
      // Only forwarded when set, so default icons keep `currentColor`.
      variant={variant}
      onClick={handleToggle}
      className={cx(
        styles.toggleButton,
        isIconOnly && iconButtonStyles.iconButton,
        className,
      )}
      startIcon={startIcon}
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
