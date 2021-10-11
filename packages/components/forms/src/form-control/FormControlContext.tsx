import { createContext, useContext } from 'react';
import type { FormControlContextProps } from './types';

export const FormControlContext = createContext<
  FormControlContextProps | undefined
>(undefined);

export const useFormControlContext = () => {
  const context = useContext(FormControlContext);
  return context;
};

export const useFormControl = (
  props: Partial<FormControlContextProps>,
): FormControlContextProps => {
  const context = useFormControlContext();
  if (!context) {
    return props;
  }
  return {
    isDisabled: props.isDisabled ?? context.isDisabled,
    isInvalid: props.isInvalid ?? context.isInvalid,
    isReadOnly: props.isReadOnly ?? context.isReadOnly,
    isRequired: props.isRequired ?? context.isRequired,
    id: props.id ?? context.id,
    maxLength: context.maxLength,
    inputValue: context.inputValue,
    setMaxLength: context.setMaxLength,
    setInputValue: context.setInputValue,
  };
};
