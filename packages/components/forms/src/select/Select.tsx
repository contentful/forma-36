import React, { useCallback, KeyboardEvent, ReactNode } from 'react';
import cn from 'classnames';
import { ChevronDownIcon } from '@contentful/f36-icons';

import styles from './Select.css';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { useFormControl } from '../form-control/FormControlContext';

export type SelectInternalProps = CommonProps & {
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  value?: string;
  defaultValue?: string;
  width?: 'auto' | 'small' | 'medium' | 'large' | 'full';
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

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLSelectElement>) => {
      if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) {
        e.currentTarget.blur();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [onKeyDown],
  );

  const widthClass = `Select--${width}`;
  const classNames = cn(styles['Select'], {
    [styles['Select--disabled']]: isDisabled,
    [styles['Select--negative']]: isInvalid,
  });

  const wrapperClassNames = cn(
    styles['Select__wrapper'],
    styles[widthClass],
    className,
  );

  return (
    <div className={wrapperClassNames}>
      <select
        {...otherProps}
        {...formProps}
        data-test-id={testId}
        className={classNames}
        onKeyDown={handleKeyDown}
        required={isRequired}
        disabled={isDisabled}
      >
        {children}
      </select>
      <ChevronDownIcon className={styles['Select__icon']} variant="muted" />
    </div>
  );
};
