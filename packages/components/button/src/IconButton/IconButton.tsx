import React from 'react';
import { PolymorphicProps, PolymorphicComponent } from '@contentful/f36-core';
import { Button } from '../Button';
import type { ButtonInternalProps } from '../types';

interface IconButtonInternalProps
  extends Omit<ButtonInternalProps, 'startIcon' | 'endIcon'> {
  /**
   * Expects any of the icon components
   */
  icon: React.ReactElement;
  /**
   * Aria label is required when using icon only
   */
  'aria-label': string;
}

const DEFAULT_TAG = 'button';

export type IconButtonProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<IconButtonInternalProps, E, 'disabled'>;

function _IconButton<E extends React.ElementType = typeof DEFAULT_TAG>(
  props: IconButtonProps<E>,
  ref: React.Ref<any>,
) {
  const {
    testId = 'cf-ui-icon-button',
    variant = 'transparent',
    icon,
    ...otherProps
  } = props;
  const defaultIconColor: {
    [Property in ButtonInternalProps['variant']]: string;
  } = {
    primary: 'white',
    secondary: 'secondary',
    positive: 'white',
    negative: 'white',
    transparent: 'secondary',
  };

  return (
    <Button testId={testId} ref={ref} variant={variant} {...otherProps}>
      {React.cloneElement(icon, {
        variant: defaultIconColor[variant],
        ...icon.props,
      })}
    </Button>
  );
}

export const IconButton: PolymorphicComponent<
  IconButtonInternalProps,
  typeof DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_IconButton);
