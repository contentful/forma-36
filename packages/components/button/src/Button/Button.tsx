import React from 'react';
import { cx } from 'emotion';
import {
  Flex,
  Box,
  type PolymorphicProps,
  type PolymorphicComponent,
  type ExpandProps,
} from '@contentful/f36-core';
import { useDensity } from '@contentful/f36-utils';
import { Spinner } from '@contentful/f36-spinner';

import tokens, { ColorTokens } from '@contentful/f36-tokens';

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

  const iconVariant: Record<ButtonInternalProps['variant'], ColorTokens> = {
    negative: 'colorNegative',
    positive: 'colorWhite',
    primary: 'colorWhite',
    secondary: 'gray900',
    transparent: 'gray900',
  };

  const iconContent = (icon) => {
    return (
      <Flex
        as="span"
        className={styles.buttonIcon({ hasChildren: !!children, variant })}
      >
        {React.cloneElement(icon, {
          size: icon.props.size ?? `${size === 'large' ? 'medium' : 'small'}`,
          color: tokens[iconVariant[variant]],
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
      <a {...otherProps} {...commonProps} disabled={isDisabled}>
        {commonContent}
      </a>
    );
  }

  return (
    <button
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
export const Button: PolymorphicComponent<
  ExpandProps<ButtonInternalProps>,
  typeof BUTTON_DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_Button);
