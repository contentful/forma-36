import React from 'react';
import { Flex } from '@contentful/f36-core';
import { BaseCheckbox } from '../base-checkbox';
import type { RadioProps as _RadioProps } from '../base-checkbox/types';
import { Label } from '../Label';
import { getStyles } from './Radio.styles';

export type RadioProps = _RadioProps;

const _Radio = (
  { testId = 'cf-ui-radio-button', label, id, className, ...otherProps },
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
        type="radio"
        className={styles.input}
        {...otherProps}
      />
      <Label className={styles.label} htmlFor={id}>
        {label}
      </Label>
    </Flex>
  );
};

export const Radio = React.forwardRef(_Radio);
