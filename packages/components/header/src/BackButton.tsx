import React, { forwardRef, type Ref } from 'react';
import tokens from '@contentful/f36-tokens';
import { IconButton, type IconButtonProps } from '@contentful/f36-button';
import { ArrowLeftIcon } from '@contentful/f36-icons';

export type BackButtonProps = Omit<
  Partial<IconButtonProps>,
  'children' | 'icon' | 'variant' | 'size'
> & {
  'aria-label'?: string;
};

function BackButtonBase(
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
      icon={<ArrowLeftIcon color={tokens.gray600} />}
      onClick={onClick}
      size="small"
      ref={ref}
      variant="transparent"
    />
  );
}

export const BackButton = forwardRef<HTMLButtonElement, BackButtonProps>(
  BackButtonBase,
);
