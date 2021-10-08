import React from 'react';

export interface FormControlContextProps {
  id?: string;
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
  maxLength?: number;
  inputValue?: string;
  setMaxLength?: React.Dispatch<React.SetStateAction<number>>;
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
}
