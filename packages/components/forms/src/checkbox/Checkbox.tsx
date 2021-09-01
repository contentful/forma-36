import React from 'react';
import { Flex } from '@contentful/f36-core';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { FormLabel } from '../form-label';
import { getStyles } from './Checkbox.styles';

export type CheckboxProps = Omit<BaseCheckboxProps, 'type'>;

const _Checkbox = (props: CheckboxProps, ref: React.Ref<HTMLInputElement>) => {
  const styles = getStyles();
  const {
    testId = 'cf-ui-checkbox',
    label,
    id,
    className,
    ...otherProps
  } = props;

  return (
    <Flex as="div" alignItems="center" testId={testId} className={className}>
      <BaseCheckbox
        id={id}
        label={label}
        type="checkbox"
        className={styles.input}
        {...otherProps}
        ref={ref}
      />
      <FormLabel className={styles.label} htmlFor={id}>
        {label}
      </FormLabel>
    </Flex>
  );
};

export const Checkbox = React.forwardRef(_Checkbox);
