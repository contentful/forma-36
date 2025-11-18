import React from 'react';
import { CheckIcon, MinusIcon, XIcon } from '@contentful/f36-icons';
import type { BaseCheckboxInternalProps } from './types';
import getStyles from './GhostCheckbox.styles';
import tokens from '@contentful/f36-tokens';

export type GhostCheckboxProps = Pick<
  BaseCheckboxInternalProps,
  'type' | 'isIndeterminate' | 'isDisabled' | 'size'
>;

export const GhostCheckbox = (props: GhostCheckboxProps) => {
  const { type, isIndeterminate, isDisabled, size = 'medium' } = props;
  const styles = getStyles({ isDisabled, size });

  if (type === 'switch') {
    return (
      <span className={styles.switch}>
        <CheckIcon size="tiny" color={tokens.colorWhite} />
        <XIcon size="tiny" color={tokens.colorWhite} />
      </span>
    );
  }

  return (
    <span className={styles[type]}>
      {type === 'checkbox' &&
        (isIndeterminate ? (
          <MinusIcon size="tiny" color={tokens.colorWhite} />
        ) : (
          <CheckIcon size="tiny" color={tokens.colorWhite} />
        ))}
    </span>
  );
};

GhostCheckbox.displayName = 'GhostCheckbox';
