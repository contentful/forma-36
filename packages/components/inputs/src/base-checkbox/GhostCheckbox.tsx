import React from 'react';
import { DoneIcon, MinusIcon, CloseIcon } from '@contentful/f36-icons';
import { BaseCheckboxProps } from './types';
import getStyles from './GhostCheckbox.styles';

export type GhostCheckboxProps = Pick<
  BaseCheckboxProps,
  'type' | 'isIndeterminate' | 'isChecked' | 'isDisabled'
>;

export const GhostCheckbox = (props: GhostCheckboxProps) => {
  const { type, isIndeterminate, isChecked, isDisabled } = props;
  const styles = getStyles({ isChecked, isDisabled, isIndeterminate });

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
