import React, { forwardRef, useCallback, type SubmitEvent } from 'react';

import type {
  CommonProps,
  PropsWithHTMLElement,
  ExpandProps,
} from '@contentful/f36-core';

export type FormProps = PropsWithHTMLElement<CommonProps, 'form'>;

function FormBase(
  {
    children,
    onSubmit,
    testId = 'cf-ui-form-label',
    ...otherProps
  }: ExpandProps<FormProps>,
  ref: React.Ref<HTMLFormElement>,
) {
  const handleSubmit = useCallback(
    (event: SubmitEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (onSubmit) {
        onSubmit(event);
      }
    },
    [onSubmit],
  );
  return (
    <form
      ref={ref}
      data-test-id={testId}
      onSubmit={handleSubmit}
      {...otherProps}
    >
      {children}
    </form>
  );
}

FormBase.displayName = 'Form';

export const Form = forwardRef(FormBase);
