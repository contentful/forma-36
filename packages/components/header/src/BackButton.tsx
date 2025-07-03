import React, { forwardRef, type Ref } from 'react';
import { IconButton, type IconButtonProps } from '@contentful/f36-button';
import { ArrowLeftIcon } from '@contentful/f36-icons';

export type BackButtonProps = Omit<
  Partial<IconButtonProps>,
  'children' | 'icon' | 'variant' | 'size'
> & {
  'aria-label'?: string;
};

function _BackButton(
  {
    onClick,
    'aria-label': ariaLabel = 'Go back',
    ...otherProps
  }: BackButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <IconButton
      {...otherProps}
      aria-label={ariaLabel}
      icon={<ArrowLeftIcon variant="muted" />}
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
