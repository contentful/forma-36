import React, {
  useCallback,
  KeyboardEvent,
  ReactNode,
  ChangeEventHandler,
} from 'react';
import { cx } from '@emotion/css';
import tokens from '@contentful/f36-tokens';
import { CaretDownIcon } from '@contentful/f36-icons';

import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { useFormControl } from '../FormControl/FormControlContext';
import { getSelectStyles } from './Select.styles';
import { useDensity } from '@contentful/f36-utils';

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
  }: ExpandProps<SelectProps>,
  ref: React.Ref<HTMLSelectElement>,
) => {
  const formProps = useFormControl({
    isDisabled,
    isInvalid,
    isRequired,
    id,
  });

  const density = useDensity();

  const styles = getSelectStyles({
    isDisabled: formProps.isDisabled,
    isInvalid: formProps.isInvalid,
    size,
    density,
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
        aria-describedby={
          formProps.id
            ? `${formProps.id}-${
                formProps.isInvalid ? `validation` : `helptext`
              }`
            : undefined
        }
        disabled={formProps.isDisabled}
        defaultValue={defaultValue}
        value={value}
        ref={ref}
      >
        {children}
      </select>
      <CaretDownIcon
        className={styles.icon}
        color={tokens.gray600}
        size="small"
      />
    </div>
  );
};

export const Select = React.forwardRef(_Select);
