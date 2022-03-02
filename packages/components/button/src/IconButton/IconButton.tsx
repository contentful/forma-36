import React from 'react';
import type {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '@contentful/f36-core';
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

const ICON_BUTTON_DEFAULT_TAG = 'button';

export type IconButtonProps<
  E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG
> = PolymorphicProps<IconButtonInternalProps, E, 'disabled'>;

function _IconButton<
  E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG
>(props: IconButtonProps<E>, ref: React.Ref<any>) {
  const {
    testId = 'cf-ui-icon-button',
    variant = 'transparent',
    icon,
    ...otherProps
  } = props;

  return (
    <Button
      testId={testId}
      ref={ref}
      variant={variant}
      {...otherProps}
      startIcon={icon}
    />
  );
}

export const IconButton: PolymorphicComponent<
  ExpandProps<IconButtonInternalProps>,
  typeof ICON_BUTTON_DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_IconButton);
