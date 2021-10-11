import React, { forwardRef } from 'react';
import type { CommonProps, PropsWithHTMLElement } from '@contentful/f36-core';
import { Text } from '@contentful/f36-typography';

import { useFormControl } from '../form-control/FormControlContext';

export type CounterProps = PropsWithHTMLElement<CommonProps, 'p'>;

export const Counter = forwardRef<HTMLParagraphElement, CounterProps>(
  ({ testId = 'cf-ui-counter', ...otherProps }, ref) => {
    const { maxLength, inputValue } = useFormControl({});
    return (
      Boolean(maxLength) && (
        <Text
          as="p"
          fontColor="gray700"
          fontSize="fontSizeM"
          testId={testId}
          marginTop="spacingXs"
          {...otherProps}
          ref={ref}
        >
          {inputValue.length} / {maxLength}
        </Text>
      )
    );
  },
);

Counter.displayName = 'Counter';
