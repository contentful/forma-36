import React from 'react';
import { cx } from 'emotion';
import { Stack } from '@contentful/f36-core';
import getStyles from './InputGroup.styles';
import type { InputGroupProps } from './types';

const _InputGroup = (
  props: InputGroupProps,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { children, className, spacing = 'none', ...otherProps } = props;
  const styles = getStyles({ spacing });
  return (
    <Stack
      {...otherProps}
      spacing={spacing}
      ref={ref}
      fullWidth
      className={cx(styles.inputGroup, className)}
    >
      {children}
    </Stack>
  );
};

export const InputGroup = React.forwardRef(_InputGroup);
