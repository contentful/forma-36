import React from 'react';
import { useId } from '@contentful/f36-core';
import type {
  CommonProps,
  PolymorphicProps,
  PolymorphicComponent,
} from '@contentful/f36-core';

import { FormControlContext } from './FormControlContext';
import type { FormControlContextProps } from './types';

const DEFAULT_TAG = 'div';

export interface FormControlInternalProps
  extends FormControlContextProps,
    CommonProps {
  as?: 'div' | 'fieldset';
  children: React.ReactNode;
}

export type FormControlProps<
  E extends React.ElementType = typeof DEFAULT_TAG
> = PolymorphicProps<FormControlInternalProps, E>;

function _FormControl<E extends React.ElementType = typeof DEFAULT_TAG>(
  {
    isInvalid,
    isRequired,
    isDisabled,
    isReadOnly,
    children,
    id,
    as,
    testId = 'cf-ui-form-control',
    ...otherProps
  }: FormControlProps<E>,
  ref: React.Ref<any>,
) {
  const Element: React.ElementType = as || DEFAULT_TAG;

  const generatedId = useId(id, 'field-');

  const context = {
    id: generatedId,
    isRequired,
    isDisabled,
    isInvalid,
    isReadOnly,
  };

  return (
    <FormControlContext.Provider value={context}>
      <Element ref={ref} role="group" data-test-id={testId} {...otherProps}>
        {children}
      </Element>
    </FormControlContext.Provider>
  );
}

export const FormControl: PolymorphicComponent<
  FormControlInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_FormControl);
