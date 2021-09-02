import React, { useCallback, KeyboardEvent, ReactNode } from 'react';
import { cx } from 'emotion';
import { ChevronDownIcon } from '@contentful/f36-icons';

import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { useFormControl } from '../form-control/FormControlContext';
import { getSelectStyles } from './Select.styles';
import type { SelectWidth } from './types';

export type SelectInternalProps = CommonProps & {
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  value?: string;
  defaultValue?: string;
  width?: SelectWidth;
  children: ReactNode;
  willBlurOnEsc?: boolean;
};

export type SelectProps = PropsWithHTMLElement<
  SelectInternalProps,
  'select',
  'disabled' | 'required'
>;

export const Select = ({
  id,
  children,
  className,
  isInvalid,
  isDisabled,
  isRequired,
  testId = 'cf-ui-select',
  width = 'full',
  willBlurOnEsc = true,
  onKeyDown,
  ...otherProps
}: SelectProps) => {
  const formProps = useFormControl({
    isDisabled,
    isInvalid,
    isRequired,
    id,
  });

  const styles = getSelectStyles({
    ...formProps,
    width,
  });

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLSelectElement>) => {
      if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) {
        e.currentTarget.blur();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [onKeyDown, willBlurOnEsc],
  );

  return (
    <div className={cx(styles.wrapper, className)}>
      <select
        {...otherProps}
        {...formProps}
        data-test-id={testId}
        className={styles.select}
        onKeyDown={handleKeyDown}
        required={isRequired}
        disabled={isDisabled}
      >
        {children}
      </select>
      <ChevronDownIcon className={styles.icon} variant="muted" />
    </div>
  );
};
