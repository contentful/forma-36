import React, { ElementType } from 'react';
import { cx } from 'emotion';
import {
  Flex,
  PolymorphicComponentWithRef,
  PolymorphicComponentProps,
  PolymorphicComponent,
} from '@contentful/f36-core';
import { Spinner } from '@contentful/f36-spinner';

import type { ButtonInternalProps } from './types';
import { getStyles } from './styles';

const DEFAULT_TAG: ElementType = 'button';

export type ButtonProps<
  E extends React.ElementType
> = PolymorphicComponentProps<E, ButtonInternalProps>;

const _Button: PolymorphicComponentWithRef<
  ButtonInternalProps,
  typeof DEFAULT_TAG
> = (props, ref) => {
  const styles = getStyles();
  const {
    as = DEFAULT_TAG,
    children,
    className,
    testId = 'cf-ui-button',
    variant = 'secondary',
    size = 'medium',
    href,
    type = 'button',
    icon,
    isActive,
    isDisabled,
    isLoading,
    isFullWidth,
    alignIcon = 'start',
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

  const iconContent = icon && !isLoading && (
    <Flex as="span">
      {React.cloneElement(icon, {
        className: styles.buttonIcon({ alignIcon, hasChildren: !!children }),
        size: `${size === 'large' ? 'medium' : 'small'}`,
      })}
    </Flex>
  );

  const commonContent = (
    <>
      {icon && alignIcon === 'start' && iconContent}
      <span className={styles.buttonText}>{children}</span>
      {icon && alignIcon === 'end' && iconContent}
      {isLoading && (
        <Spinner
          marginLeft={children || !isLoading ? 'spacingXs' : 'none'}
          customSize={18}
          variant={variant === 'secondary' ? 'default' : 'white'}
        />
      )}
    </>
  );

  if (as === 'a') {
    return (
      <a
        className={rootClassNames}
        href={href}
        data-test-id={testId}
        {...otherProps}
        ref={ref}
      >
        {commonContent}
      </a>
    );
  }

  return (
    <DEFAULT_TAG
      type={type}
      className={rootClassNames}
      disabled={isDisabled}
      data-test-id={testId}
      {...otherProps}
      ref={ref}
    >
      {commonContent}
    </DEFAULT_TAG>
  );
};

/**
 * @description: Buttons communicate the action that will occur when the user clicks it
 */
export const Button: PolymorphicComponent<
  ButtonInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Button);
