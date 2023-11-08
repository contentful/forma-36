import React from 'react';
import { cx } from 'emotion';
import type {
  PolymorphicProps,
  PolymorphicComponent,
  ExpandProps,
} from '@contentful/f36-core';
import { Button } from '../Button';
import type { ButtonInternalProps } from '../types';
import { getStyles } from './IconButton.styles';

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

export type IconButtonProps<
  E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG,
> = PolymorphicProps<IconButtonInternalProps, E, 'disabled'>;

function _IconButton<
  E extends React.ElementType = typeof ICON_BUTTON_DEFAULT_TAG,
>(props: IconButtonProps<E>, ref: React.Ref<any>) {
  const {
    testId = 'cf-ui-icon-button',
    variant = 'transparent',
    icon,
    className,
    size = 'medium',
    ...otherProps
  } = props;

  const styles = getStyles({ size });

  return (
    <Button
      testId={testId}
      ref={ref}
      variant={variant}
      className={cx(styles.iconButton, className)}
      size={size}
      {...otherProps}
      startIcon={icon}
    />
  );
}

_IconButton.displayName = 'IconButton';

export const IconButton: PolymorphicComponent<
  ExpandProps<IconButtonInternalProps>,
  typeof ICON_BUTTON_DEFAULT_TAG,
  'disabled'
> = React.forwardRef(_IconButton);
