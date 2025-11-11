import React from 'react';

import {
  Flex,
  Box,
  type PolymorphicProps,
  type PolymorphicComponent,
  type ExpandProps,
} from '@contentful/f36-core';
import { useDensity } from '@contentful/f36-utils';
import { Spinner } from '@contentful/f36-spinner';
import { cx } from '@emotion/css';

import tokens, { ColorTokens } from '@contentful/f36-tokens';
import { getIconColorToken, iconColorByVariant } from '@contentful/f36-utils';
import type { Variant } from '@contentful/f36-utils';

import type { ButtonInternalProps } from '../types';
import { getStyles } from './Button.styles';
import type { IconProps } from '@contentful/f36-icon';
import tokens, { ColorTokens } from '@contentful/f36-tokens';
import { getIconColorToken, iconColorByVariant } from '@contentful/f36-utils';
import type { Variant } from '@contentful/f36-utils';

const BUTTON_DEFAULT_TAG = 'button';

export type ButtonProps<
  E extends React.ElementType = typeof BUTTON_DEFAULT_TAG,
> = PolymorphicProps<ButtonInternalProps, E, 'disabled'>;

function ButtonBase<E extends React.ElementType = typeof BUTTON_DEFAULT_TAG>(
  props: ButtonProps<E>,
  ref: React.Ref<HTMLButtonElement | HTMLAnchorElement>,
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
    isActive = false,
    isDisabled = false,
    isLoading,
    isFullWidth = false,
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

  // Button overrides: use 'colorWhite' for 'primary' and 'positive', fallback to utility mapping for others
  const buttonIconColorByVariant: Record<Variant, ColorTokens> = {
    ...iconColorByVariant,
    positive: 'colorWhite',
    primary: 'colorWhite',
  };

  const iconContent = (icon: React.ReactElement<IconProps>) => {
    return (
      <Flex
        as="span"
        className={styles.buttonIcon({ hasChildren: !!children, variant })}
      >
        {React.cloneElement(icon, {
          size: icon.props.size ?? `${size === 'large' ? 'medium' : 'small'}`,
          color: tokens[getIconColorToken(variant, buttonIconColorByVariant)],
        })}
      </Flex>
    );
  };

  const commonContent = (
    <>
      {startIcon && iconContent(startIcon as React.ReactElement<IconProps>)}
      {children && (
        <Box as="span" display="block" className={styles.buttonContent}>
          {children}
        </Box>
      )}
      {endIcon &&
        !isLoading &&
        iconContent(endIcon as React.ReactElement<IconProps>)}
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
    style,
  };

  if (as === 'a') {
    return (
      <a
        {...otherProps}
        {...commonProps}
        ref={ref as React.Ref<HTMLAnchorElement>}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : 0}
      >
        {commonContent}
      </a>
    );
  }

  return (
    <button
      type="button"
      {...otherProps}
      {...commonProps}
      ref={ref as React.Ref<HTMLButtonElement>}
      disabled={isDisabled}
    >
      {commonContent}
    </button>
  );
}

ButtonBase.displayName = 'Button';

/**
 * @description: Buttons communicate the action that will occur when the user clicks it
 */
export const Button = React.forwardRef(ButtonBase) as PolymorphicComponent<
  ExpandProps<ButtonInternalProps>,
  typeof BUTTON_DEFAULT_TAG,
  'disabled'
>;
