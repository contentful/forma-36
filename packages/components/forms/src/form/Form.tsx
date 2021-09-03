import React, {
  forwardRef,
  useCallback,
  FormEventHandler,
  ReactNodeArray,
  FormEvent,
} from 'react';
import type { ReactNode } from 'react';
import { CommonProps } from '@contentful/f36-core';

export type FormProps = PropsWithHTMLElement<
  CommonProps,
  'form'
>;

function _Form(
  { children, onSubmit, testId = 'cf-ui-form-label', ...otherProps }: FormProps,
  ref: React.Ref<HTMLFormElement>,
) {
  const handleSubmit = useCallback(
    (event: FormEvent) => {
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

export const Form = forwardRef(_Form);
