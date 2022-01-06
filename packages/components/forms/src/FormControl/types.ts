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
  /**
   * If `true` set the form control to the read only state.
   */
  isReadOnly?: boolean;
  /**
   * Max length of characters used for the text input and textarea
   */
  maxLength?: number;
  /**
   * value from text input and textarea to used for counting characters
   */
  inputValue?: string;
  /**
   * Set max length function
   */
  setMaxLength?: React.Dispatch<React.SetStateAction<number>>;
  /**
   * Set input value function
   */
  setInputValue?: React.Dispatch<React.SetStateAction<string>>;
}
