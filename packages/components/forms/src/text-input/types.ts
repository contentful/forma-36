import { BaseInputInternalProps } from '../base-input';

export interface TextInputProps extends Omit<BaseInputInternalProps, 'as'> {
  /**
   * Allows to render input without visual label
   *  @default false
   */
  isStandalone?: boolean;
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
}
