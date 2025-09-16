import React, { useCallback, useEffect, useRef } from 'react';
import type { PropsWithHTMLElement, ExpandProps } from '@contentful/f36-core';
import type { BaseCheckboxInternalProps } from './types';
import { GhostCheckbox } from './GhostCheckbox';
import getStyles from './BaseCheckbox.styles';
import { Text } from '@contentful/f36-typography';
import { Flex } from '@contentful/f36-core';
import { useDensity } from '@contentful/f36-utils';
import { HelpText } from '../HelpText/HelpText';
import { useFormControl } from '../FormControl/FormControlContext';

export type BaseCheckboxProps = PropsWithHTMLElement<
  BaseCheckboxInternalProps,
  'label',
  'htmlFor'
>;

function _BaseCheckbox(
  props: ExpandProps<BaseCheckboxProps>,
  ref: React.RefObject<HTMLInputElement>,
) {
  const {
    isChecked = undefined,
    onChange,
    onFocus,
    onBlur,
    onKeyDown,
    type = 'checkbox',
    value,
    isDisabled,
    isIndeterminate,
    isInvalid,
    isRequired = false,
    id,
    willBlurOnEsc = true,
    testId = 'cf-ui-base-checkbox',
    className = '',
    defaultChecked = undefined,
    name,
    inputProps = {},
    children,
    'aria-label': ariaLabel,
    size = 'medium',
    helpText,
    ...otherProps
  } = props;
  const density = useDensity();
  const inputRef = useRef<HTMLInputElement>(null);
  const finalRef = ref || inputRef;
  const { id: formFieldId } = useFormControl({});

  useEffect(() => {
    if (finalRef.current) {
      finalRef.current.indeterminate = isIndeterminate;
    }
  }, [isIndeterminate, finalRef]);

  const styles = getStyles({ isDisabled, type, size, density });

  const handleFocus = useCallback(
    (e) => {
      e.persist();
      if (onFocus) {
        onFocus(e);
      }
    },
    [onFocus],
  );

  const handleBlur = useCallback(
    (e) => {
      e.persist();
      if (onBlur) {
        onBlur(e);
      }
    },
    [onBlur],
  );

  const handleKeyDown = useCallback(
    (e) => {
      e.persist();
      if (willBlurOnEsc && e.key === 'Escape') {
        finalRef?.current?.blur();
      }
      if (onKeyDown) {
        onKeyDown(e);
      }
    },
    [willBlurOnEsc, onKeyDown, finalRef],
  );

  const ariaChecked =
    typeof isChecked !== undefined ? isChecked : defaultChecked;

  const helpTextId = id ? `${id}-helptext` : undefined;
  const ariaDescribedBy = isInvalid
    ? `${formFieldId}-validation`
    : helpText
      ? helpTextId
      : undefined;

  return (
    <Flex alignItems="flex-start" flexDirection="column" className={className}>
      <Text
        as="label"
        fontColor="gray900"
        fontWeight="fontWeightMedium"
        fontSize={density === 'high' ? 'fontSizeMHigh' : 'fontSizeM'}
        lineHeight={density === 'high' ? 'lineHeightMHigh' : 'lineHeightM'}
        className={styles.wrapper}
        htmlFor={id}
        testId={testId}
        {...otherProps}
      >
        <input
          {...inputProps}
          aria-label={ariaLabel}
          checked={isChecked}
          defaultChecked={defaultChecked}
          className={styles.input}
          type={type === 'switch' ? 'checkbox' : type}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          value={value}
          disabled={isDisabled}
          role={type}
          aria-checked={isIndeterminate ? 'mixed' : ariaChecked}
          ref={finalRef}
          required={isRequired}
          aria-required={isRequired ? 'true' : undefined}
          aria-invalid={isInvalid ? 'true' : undefined}
          aria-describedby={ariaDescribedBy}
          id={id}
          name={name}
        />
        <GhostCheckbox
          type={type}
          isDisabled={isDisabled}
          isIndeterminate={isIndeterminate}
          size={size}
        />
        {children}
      </Text>
      {helpText && (
        <HelpText id={helpTextId} className={styles.helpText}>
          {helpText}
        </HelpText>
      )}
    </Flex>
  );
}

_BaseCheckbox.displayName = 'BaseCheckbox';

export const BaseCheckbox = React.forwardRef(_BaseCheckbox);
