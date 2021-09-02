import React, {
  useCallback,
  useEffect,
  useState,
  KeyboardEvent,
  ChangeEvent,
  ReactNode,
} from 'react';
import cn from 'classnames';
import { ChevronDownIcon } from '@contentful/f36-icons';

import styles from './Select.css';
import { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';

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
  children,
  className,
  isInvalid,
  id,
  isDisabled,
  name,
  onBlur,
  onChange,
  onFocus,
  isRequired,
  testId = 'cf-ui-select',
  value,
  width = 'full',
  willBlurOnEsc = true,
  ...otherProps
}: SelectProps) => {
  const [valueState, setValueState] = useState<string | undefined>(value);

  const handleKeyDown = (e: KeyboardEvent<HTMLSelectElement>) => {
    if (e.nativeEvent.code === 'Escape' && willBlurOnEsc) {
      e.currentTarget.blur();
    }
  };

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      if (!isDisabled) {
        setValueState(e.target.value);

        if (onChange) {
          onChange(e);
        }
      }
    },
    [onChange, isDisabled],
  );

  useEffect(() => {
    setValueState(value);
  }, [value]);

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
        id={id}
        required={isRequired}
        name={name}
        aria-label={name}
        data-test-id={testId}
        className={classNames}
        value={valueState}
        disabled={isDisabled}
        onFocus={onFocus}
        onChange={handleChange}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        {...otherProps}
      >
        {children}
      </select>
      <ChevronDownIcon className={styles['Select__icon']} variant="muted" />
    </div>
  );
};
