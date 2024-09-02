import React from 'react';
import { cx } from 'emotion';
import type {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
  CommonProps,
} from '@contentful/f36-core';
import { Button } from '../Button';
import type { ButtonInternalProps } from '../types';
import { getStyles } from './IconButton.styles';
import { useDensity } from '@contentful/f36-utils';
import {
  Tooltip,
  type TooltipInternalProps,
  type WithEnhancedContent,
} from '@contentful/f36-tooltip';

type WithTooltipOrNot =
  | {
      /**
       * Triggers, wheter or not to render the tooltip
       */
      withTooltip?: true;

      /**
       * A tooltipProps attribute used to conditionally render the tooltip around root element
       */
      tooltipProps?: CommonProps &
        WithEnhancedContent &
        Omit<TooltipInternalProps, 'children'>;
    }
  | {
      withTooltip?: false;
      tooltipProps?: never;
    };

interface IconButtonInternalProps
  extends Omit<
    ButtonInternalProps,
    'startIcon' | 'endIcon' | 'children' | 'size'
  > {
  /**
   * Expects any of the icon components
   */
  icon: React.ReactElement;
  /**
   * Aria label is required when using icon only
   */
  'aria-label': string;
  /**
   * @deprecated Use <Button /> component instead
   */
  children?: ButtonInternalProps['children'];
  /**
   * Determines size variation of IconButton component
   * Note: 'large' is deprecated
   * */
  size?: ButtonInternalProps['size'];
}

const ICON_BUTTON_DEFAULT_TAG = 'button';

type ExtendedIconButtonProps = IconButtonInternalProps & WithTooltipOrNot;

export type IconButtonProps<
  E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG,
> = PolymorphicProps<ExtendedIconButtonProps, E, 'disabled'>;

function _IconButton<
  E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG,
>(props: IconButtonProps<E>, ref: React.Ref<any>) {
  const {
    testId = 'cf-ui-icon-button',
    variant = 'transparent',
    icon,
    className,
    size = 'medium',
    withTooltip = false,
    tooltipProps,
    'aria-label': ariaLabel,
    ...otherProps
  } = props;

  const density = useDensity();

  const styles = getStyles({ size, density });

  const iconButtton = (
    <Button
      testId={testId}
      ref={ref}
      variant={variant}
      className={cx(styles.iconButton, className)}
      size={size}
      startIcon={icon}
      aria-label={ariaLabel}
      {...otherProps}
    />
  );

  if (withTooltip) {
    const {
      showDelay = 600,
      content = ariaLabel,
      ...otherTooltipProps
    } = tooltipProps || {};

    return (
      <Tooltip content={content} showDelay={showDelay} {...otherTooltipProps}>
        {iconButtton}
      </Tooltip>
    );
  }

  return iconButtton;
}

_IconButton.displayName = 'IconButton';

export const IconButton: PolymorphicComponent<
  ExpandProps<ExtendedIconButtonProps>,
  typeof ICON_BUTTON_DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_IconButton);
