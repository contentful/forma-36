import React from 'react';
import { Flex } from '@contentful/f36-core';
import { BaseCheckbox, BaseCheckboxProps } from '../base-checkbox';
import { FormLabel } from '../form-label';
import { getStyles } from './Radio.styles';

export type RadioProps = Omit<BaseCheckboxProps, 'type' | 'isIndeterminate'>;

const _Radio = (props: RadioProps, ref: React.Ref<HTMLInputElement>) => {
  const styles = getStyles();
  const {
    testId = 'cf-ui-radio-button',
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
        type="radio"
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

export const Radio = React.forwardRef(_Radio);
