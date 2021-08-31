import { createContext, useContext } from 'react';

export interface FormControlProps {
  /**
   * If `true` set the form control to the invalid state.
   */
  isInvalid?: boolean;
  /**
   * If `true` set the form control to be required.
   */
  isRequired?: boolean;
  /**
   * If `true` set the form control to the disabled state.
   */
  isDisabled?: boolean;

  isReadOnly?: boolean;
}

export const FormControlContext = createContext<FormControlProps | undefined>(
  undefined,
);

export const useFormControlContext = () => {
  const context = useContext(FormControlContext);
  return context;
};

export const useFormControl = (
  props: Partial<FormControlProps>,
): FormControlProps => {
  const context = useFormControlContext();
  if (!context) {
    return props;
  }
  const keys = Object.keys(context) as Array<keyof FormControlProps>;
  return keys.reduce<FormControlProps>((acc, prop) => {
    /** Giving precedence to `props` over `context` */
    acc[prop] = props[prop];

    if (context) {
      if (props[prop] == null) {
        acc[prop] = context[prop];
      }
    }

    return acc;
  }, {});
};
