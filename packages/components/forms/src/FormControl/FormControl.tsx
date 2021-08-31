import React from 'react';
import { useId, Box } from '@contentful/f36-core';
import type { CommonProps } from '@contentful/f36-core';

import { FormControlContext } from './FormControlContext';
import type { FormControlContextProps } from './types';

export interface FormControlProps extends FormControlContextProps, CommonProps {
  children: React.ReactNode;
}

export function FormControl({
  isInvalid,
  isRequired,
  isDisabled,
  isReadOnly,
  children,
  id,
  testId = 'cf-ui-form-control',
  ...otherProps
}: FormControlProps) {
  const generatedId = useId(id, 'field-');

  const context = {
    id: generatedId,
    isRequired,
    isDisabled,
    isInvalid,
    isReadOnly,
  };

  // todo: make this component polymorphic allow to override div with as="fieldset" and so on

  return (
    <FormControlContext.Provider value={context}>
      <Box as="div" role="group" testId={testId} {...otherProps}>
        {children}
      </Box>
    </FormControlContext.Provider>
  );
}
