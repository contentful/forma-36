import { BaseInputInternalProps } from '../base-input';

export interface TextInputProps extends Omit<BaseInputInternalProps, 'as'> {
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
   * Displays the copy button after the input
   * @default false
   */
  withCopyButton?: boolean;
  /**
   * Allows to listen to an copy button
   */
  onCopy?: (value: string) => void;
}
