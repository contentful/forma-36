import React from 'react';
import { cx } from '@emotion/css';
import {
  Stack,
  type ExpandProps,
  type CommonProps,
} from '@contentful/f36-core';
import getStyles from './InputGroup.styles';
import type { InputGroupSpacing } from './types';
import { useDensity } from '@contentful/f36-utils';

export interface InputGroupProps extends CommonProps {
  /**
   * Sets the spacing of the elements if variant is separate.
   * @default spacingS
   */
  spacing?: InputGroupSpacing;
  children: React.ReactNode;
}

const InputGroupBase = (
  props: ExpandProps<InputGroupProps>,
  ref: React.Ref<HTMLDivElement>,
) => {
  const { children, className, spacing = 'none', ...otherProps } = props;
  const density = useDensity();
  const styles = getStyles({ spacing, density });
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

InputGroupBase.displayName = 'InputGroup';

export const InputGroup = React.forwardRef(InputGroupBase);
