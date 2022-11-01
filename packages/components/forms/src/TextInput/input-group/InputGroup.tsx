import React from 'react';
import { cx } from 'emotion';
import {
  Stack,
  type ExpandProps,
  type CommonProps,
} from '@contentful/f36-core';
import getStyles from './InputGroup.styles';
import type { InputGroupSpacing } from './types';

export interface InputGroupProps extends CommonProps {
  /**
   * Sets the spacing of the elements if variant is separate.
   * @default spacingS
   */
  spacing?: InputGroupSpacing;
  children: React.ReactNode;
}

const _InputGroup = (
  props: ExpandProps<InputGroupProps>,
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
