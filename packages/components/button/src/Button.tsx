import React from 'react';
import { cx } from 'emotion';
import {
  Flex,
  Box,
  PolymorphicProps,
  PolymorphicComponent,
} from '@contentful/f36-core';
import { Spinner } from '@contentful/f36-spinner';

import type { ButtonInternalProps } from './types';
import { getStyles } from './styles';

const DEFAULT_TAG = 'button';

export type ButtonProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<ButtonInternalProps, E, 'disabled'>;

function _Button<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: ButtonProps<E>,
  ref: React.Ref<any>,
) {
  const styles = getStyles();
  const {
    as = DEFAULT_TAG,
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

  const rootClassNames = cx(
    styles.button({
      variant,
      size,
      isActive,
      isDisabled,
      isFullWidth,
    }),
    className,
  );

  const iconContent = (icon) =>
    !isLoading && (
      <Flex
        as="span"
        className={styles.buttonIcon({ hasChildren: !!children })}
      >
        {React.cloneElement(icon, {
          size: `${size === 'large' ? 'medium' : 'small'}`,
        })}
      </Flex>
    );

  const commonContent = (
    <>
      {startIcon && iconContent(startIcon)}
      {children && <Flex as="span">{children}</Flex>}
      {endIcon && iconContent(endIcon)}
      {isLoading && (
        <Box
          as="span"
          marginLeft={children || !isLoading ? 'spacingXs' : 'none'}
        >
          <Spinner
            customSize={18}
            variant={variant === 'secondary' ? 'default' : 'white'}
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
      <a {...otherProps} {...commonProps}>
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

/**
 * @description: Buttons communicate the action that will occur when the user clicks it
 */
export const Button: PolymorphicComponent<
  ButtonInternalProps,
  typeof DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_Button);
