import React from 'react';
import { Flex } from '@contentful/f36-core';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { FormLabel } from '../form-label';
import { getStyles } from './Switch.styles';

export type SwitchProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;

const _Switch = (props: SwitchProps, ref: React.Ref<HTMLInputElement>) => {
  const styles = getStyles();
  const {
    testId = 'cf-ui-switch',
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
        type="switch"
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

export const Switch = React.forwardRef(_Switch);
