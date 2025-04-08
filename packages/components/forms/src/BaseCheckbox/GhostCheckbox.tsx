import React from 'react';
import { DoneIcon, MinusIcon, CloseIcon } from '@contentful/f36-icons';
import type { BaseCheckboxInternalProps } from './types';
import getStyles from './GhostCheckbox.styles';

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
        <DoneIcon size="tiny" variant="white" />
        <CloseIcon size="tiny" variant="white" />
      </span>
    );
  }

  return (
    <span className={styles[type]}>
      {type === 'checkbox' &&
        (isIndeterminate ? (
          <MinusIcon size="tiny" variant="white" />
        ) : (
          <DoneIcon size="tiny" variant="white" />
        ))}
    </span>
  );
};
