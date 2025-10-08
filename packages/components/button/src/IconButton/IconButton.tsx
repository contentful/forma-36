import React from 'react';
import { cx } from '@emotion/css';
import type {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
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
       * Wrap the IconButton with a Tooltip to provide users with additional context about its purpose when they hover over it
       */
      withTooltip?: boolean;

      /**
       * The tooltip properties to be passed to the Tooltip component wrapping the IconButton
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

function IconButtonBase<
  E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
>(props: IconButtonProps<E>, ref: React.Ref<any>) {
  const {
    testId = 'cf-ui-icon-button',
    variant = 'transparent',
    icon,
    className,
    size = 'medium',
    withTooltip = false,
    tooltipProps,
    as = ICON_BUTTON_DEFAULT_TAG,
    'aria-label': ariaLabel,
    ...otherProps
  } = props;

  const density = useDensity();

  const styles = getStyles({ size, density });

  const element = (
    <Button
      testId={testId}
      ref={ref}
      variant={variant}
      className={cx(styles.iconButton, className)}
      size={size}
      // we pass the icon as endIcon prop to have it replaced with loading icon, when isLoading prop is true
      endIcon={icon}
      aria-label={ariaLabel}
      as={as}
      {...(otherProps as ButtonInternalProps)}
    />
  );
  if (withTooltip) {
    //   const {
    //     showDelay = 600,
    //     content = ariaLabel,
    //     ...otherTooltipProps
    //   } = tooltipProps || {};

    return (
      <Tooltip content={content} showDelay={showDelay} {...otherTooltipProps}>
        {iconButton}
      </Tooltip>
    );
  }

  return element;
}

IconButtonBase.displayName = 'IconButton';

export const IconButton = React.forwardRef(
  IconButtonBase,
) as PolymorphicComponent<
  ExpandProps<ExtendedIconButtonProps>,
  typeof ICON_BUTTON_DEFAULT_TAG,
  'disabled'
>;
