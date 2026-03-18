import React, { forwardRef } from 'react';
import { cx } from '@emotion/css';
import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';
import { getCounterStyles } from './Counter.styles';

import { useFormControl } from '../FormControl/FormControlContext';

export type CounterProps = PropsWithHTMLElement<CommonProps, 'p'>;

export const Counter = forwardRef<
  HTMLParagraphElement,
  ExpandProps<CounterProps>
>(({ testId = 'cf-ui-counter', className, ...otherProps }, ref) => {
  const { maxLength, inputValue } = useFormControl({});
  const styles = getCounterStyles();

  return (
    Boolean(maxLength) && (
      <Text
        as="p"
        fontColor="gray700"
        fontSize="fontSizeM"
        testId={testId}
        marginTop="spacingXs"
        {...otherProps}
        className={cx(styles.root, className)}
        ref={ref}
      >
        {inputValue.length} / {maxLength}
      </Text>
    )
  );
});

Counter.displayName = 'Counter';
