import { ChangeEventHandler, FocusEvent, EventHandler } from 'react';
import { CommonProps } from '@contentful/f36-core';

export interface TextInputProps extends CommonProps {
  /**
   * Allows to render input without visual label
   *  @default false
   */
  isStandalone?: boolean;
  /**
   * Validate the input
   * @default false
   */
  isRequired?: boolean;
  /**
   * Displays the validation message for the input
   */
  validationMessage?: string;
  /**
   * Displays the help text message for the input
   */
  helpText?: string;
  /**
   * Controlls the character count for the input, works together with maxLength propery
   * @default false
   */
  countCharacters?: boolean;
  /**
   * Pass max number of characters for the input, needed for countCharacters prop
   */
  maxLength?: number;
  /**
   * Expects Link component
   */
  link?: React.ReactElement;
  /**
   * Displays the label for the input
   * Label value is set as aria-label attribute in the input, is isStandalone prop is set
   */
  label: string;
  /**
   * Set the value of the input
   */
  value?: string;
  /**
   * Property that set the placeholder value for input
   */
  placeholder?: string;
  /**
   * Set the name of the input
   */
  name?: string;
  /**
   * Sets the id of the input
   */
  id?: string;
  /**
   * Applies invalid styles
   * @default false
   */
  isInvalid?: boolean;
  /**
   * Applies disabled styles
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Applies read-only styles
   * @default false
   */
  isReadOnly?: boolean;
  /**
   * Displays the copy button after the input
   * @default false
   */
  withCopyButton?: boolean;
  /**
   * Displays icon in fron of the input
   * Expects any of the icon components
   */
  icon?: React.ReactElement;
  /**
   * Allows to listen to an copy button
   */
  onCopy?: (value: string) => void;
  /**
   * Allows to listen to an input’s change in value
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Allows to listen to an event when an element get focused
   */
  onFocus?: EventHandler<FocusEvent<HTMLInputElement>>;
  /**
   * Allows to listen to an event when an element loses focus
   */
  onBlur?: EventHandler<FocusEvent<HTMLInputElement>>;
}
