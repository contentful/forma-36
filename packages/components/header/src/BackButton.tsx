import React, { forwardRef, type Ref } from 'react';
import { IconButton, type IconButtonProps } from '@contentful/f36-button';
import { ArrowBackwardIcon } from '@contentful/f36-icons';

export type BackButtonProps = Omit<
  Partial<IconButtonProps>,
  'aria-label' | 'children' | 'icon' | 'variant' | 'size'
>;

function _BackButton(
  { onClick, ...otherProps }: BackButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <IconButton
      {...otherProps}
      aria-label="Go back"
      icon={<ArrowBackwardIcon variant="muted" />}
      onClick={onClick}
      size="small"
      ref={ref}
      variant="transparent"
    />
  );
}

export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  _BackButton,
);
