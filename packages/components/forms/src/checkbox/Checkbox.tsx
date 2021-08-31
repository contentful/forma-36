import React from 'react';
import { Flex } from '@contentful/f36-core';
import { BaseCheckbox } from '../base-checkbox';
import type { CheckboxProps as _CheckboxProps } from '../base-checkbox/types';
import { Label } from '../Label';
import { getStyles } from './Checkbox.styles';

export type CheckboxProps = _CheckboxProps;

const _Checkbox = (
  { testId = 'cf-ui-checkbox', label, id, className, ...otherProps },
  ref: React.Ref<HTMLDivElement>,
) => {
  const styles = getStyles();

  return (
    <Flex
      as="div"
      alignItems="center"
      ref={ref}
      testId={testId}
      className={className}
    >
      <BaseCheckbox
        id={id}
        label={label}
        type="checkbox"
        className={styles.input}
        {...otherProps}
      />
      <Label className={styles.label} htmlFor={id}>
        {label}
      </Label>
    </Flex>
  );
};

export const Checkbox = React.forwardRef(_Checkbox);
