import React, {
  useCallback,
  KeyboardEvent,
  ReactNode,
  ChangeEventHandler,
} from 'react';
import { cx } from 'emotion';
import { ChevronDownIcon } from '@contentful/f36-icons';

import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { useFormControl } from '../form-control/FormControlContext';
import { getSelectStyles } from './Select.styles';

export type SelectSize = 'small' | 'medium';

export type SelectInternalProps = CommonProps & {
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  children: ReactNode;
  willBlurOnEsc?: boolean;
  size?: SelectSize;
  value?: string;
  defaultValue?: string;
};

export type SelectProps = PropsWithHTMLElement<
  SelectInternalProps,
  'select',
  'disabled' | 'required'
>;

const _Select = (
  {
    id,
    children,
    className,
    isInvalid,
    isDisabled,
    isRequired,
    testId = 'cf-ui-select',
    willBlurOnEsc = true,
    onKeyDown,
    size = 'medium',
    value = undefined,
    defaultValue = undefined,
    ...otherProps
  }: SelectProps,
  ref: React.Ref<HTMLSelectElement>,
) => {
  const formProps = useFormControl({
    isDisabled,
    isInvalid,
    isRequired,
    id,
  });

  const styles = getSelectStyles({
    isDisabled: formProps.isDisabled,
    isInvalid: formProps.isInvalid,
    size,
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
        id={formProps.id}
        data-test-id={testId}
        className={styles.select}
        onKeyDown={handleKeyDown}
        required={formProps.isRequired}
        aria-required={formProps.isRequired ? 'true' : undefined}
        aria-invalid={formProps.isInvalid ? true : undefined}
        aria-describedby={`${formProps.id}-${
          formProps.isInvalid ? `validation` : `helptext`
        }`}
        disabled={formProps.isDisabled}
        defaultValue={defaultValue}
        value={value}
        ref={ref}
      >
        {children}
      </select>
      <ChevronDownIcon className={styles.icon} variant="muted" />
    </div>
  );
};

export const Select = React.forwardRef(_Select);
