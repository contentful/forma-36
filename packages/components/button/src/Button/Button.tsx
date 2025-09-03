import React from 'react';
import { cx } from 'emotion';
import {
  Flex,
  Box,
  type PolymorphicProps,
  type ExpandProps,
} from '@contentful/f36-core';
import { polymorphicForwardRef } from '@contentful/f36-core/src/utils/polymorphicForwardRef';
import { useDensity } from '@contentful/f36-utils';
import { Spinner } from '@contentful/f36-spinner';

import type { ButtonInternalProps } from '../types';
import { getStyles } from './Button.styles';

const BUTTON_DEFAULT_TAG = 'button';

export type ButtonProps<
  E extends React.ElementType = typeof BUTTON_DEFAULT_TAG,
> = PolymorphicProps<ButtonInternalProps, E, 'disabled'>;

function _Button<E extends React.ElementType = typeof BUTTON_DEFAULT_TAG>(
  props: ButtonProps<E>,
  ref: React.Ref<any>,
) {
  const styles = getStyles();
  const {
    as = BUTTON_DEFAULT_TAG,
    children,
    className,
    testId = 'cf-ui-button',
    variant = 'secondary',
    size = 'medium',
    startIcon,
    endIcon,
    isActive,
    isDisabled,
    isLoading,
    isFullWidth,
    style,
    ...otherProps
  } = props;
  const density = useDensity();

  const rootClassNames = cx(
    styles.button({
      variant,
      size,
      density,
      isActive,
      isDisabled,
      isFullWidth,
    }),
    className,
  );

  const iconContent = (icon) => {
    const defaultIconColor: {
      [Property in ButtonInternalProps['variant']]: string;
    } = {
      primary: 'white',
      secondary: 'secondary',
      positive: 'white',
      negative: 'negative',
      transparent: 'secondary',
    };

    return (
      <Flex
        as="span"
        className={styles.buttonIcon({ hasChildren: !!children, variant })}
      >
        {React.cloneElement(icon, {
          size: icon.props.size ?? `${size === 'large' ? 'medium' : 'small'}`,
          // We need to pass the color to the icons to enable the usaged of the V5 icons
          // it may change in the future
          color:
            (variant === 'transparent' &&
              icon.props.variant === undefined &&
              icon.props.color) ||
            'currentColor',
          // we want to allow variants for icons for transparent buttons
          variant:
            (variant === 'transparent' && icon.props.variant) ||
            defaultIconColor[variant],
        })}
      </Flex>
    );
  };

  const commonContent = (
    <>
      {startIcon && iconContent(startIcon)}
      {children && (
        <Box as="span" display="block" className={styles.buttonContent}>
          {children}
        </Box>
      )}
      {endIcon && !isLoading && iconContent(endIcon)}
      {isLoading && (
        <Box
          as="span"
          marginLeft={children || !isLoading ? 'spacingXs' : 'none'}
        >
          <Spinner
            customSize={18}
            variant={
              variant === 'secondary' ||
              variant === 'negative' ||
              variant === 'transparent'
                ? 'default'
                : 'white'
            }
          />
        </Box>
      )}
    </>
  );

  const commonProps = {
    ['data-test-id']: testId,
    className: rootClassNames,
    ref: ref,
    style,
  };

  if (as === 'a') {
    return (
      <a
        ref={ref}
        {...otherProps}
        {...commonProps}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        {commonContent}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      type="button"
      {...otherProps}
      {...commonProps}
      disabled={isDisabled}
    >
      {commonContent}
    </button>
  );
}

_Button.displayName = 'Button';

/**
 * @description: Buttons communicate the action that will occur when the user clicks it
 */
export const Button = polymorphicForwardRef<
  ExpandProps<ButtonInternalProps>,
  typeof BUTTON_DEFAULT_TAG,
  'disabled'
>(_Button);
