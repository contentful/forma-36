import React, { useState } from 'react';
import { useId } from '@contentful/f36-core';
import type {
  CommonProps,
  MarginProps,
  PolymorphicProps,
  PolymorphicComponent,
} from '@contentful/f36-core';
import { Box } from '@contentful/f36-core';

import { FormControlContext } from './FormControlContext';
import type { FormControlContextProps } from './types';

const FORM_CONTROL_DEFAULT_TAG = 'div';

export interface FormControlInternalProps
  extends FormControlContextProps,
    CommonProps,
    MarginProps {
  as?: 'div' | 'fieldset';
  children: React.ReactNode;
}

export type FormControlProps<
  E extends React.ElementType = typeof FORM_CONTROL_DEFAULT_TAG
> = PolymorphicProps<FormControlInternalProps, E>;

function _FormControl<
  E extends React.ElementType = typeof FORM_CONTROL_DEFAULT_TAG
>(
  {
    as,
    isInvalid,
    isRequired,
    isDisabled,
    isReadOnly,
    children,
    marginBottom = 'spacingL',
    id,
    testId = 'cf-ui-form-control',
    ...otherProps
  }: FormControlProps<E>,
  ref: React.Ref<any>,
) {
  const generatedId = useId(id, 'field-');
  const [inputValue, setInputValue] = useState('');
  const [maxLength, setMaxLength] = useState(0);
  const roleAttr = as === 'fieldset' ? undefined : 'group';

  const context = {
    id: generatedId,
    isRequired,
    isDisabled,
    isInvalid,
    isReadOnly,
    inputValue,
    setInputValue,
    maxLength,
    setMaxLength,
  };

  return (
    <FormControlContext.Provider value={context}>
      <Box
        as={FORM_CONTROL_DEFAULT_TAG}
        ref={ref}
        role={roleAttr}
        testId={testId}
        marginBottom={marginBottom}
        {...otherProps}
      >
        {children}
      </Box>
    </FormControlContext.Provider>
  );
}

export const FormControl: PolymorphicComponent<
  FormControlInternalProps,
  typeof FORM_CONTROL_DEFAULT_TAG
> = React.forwardRef(_FormControl);
