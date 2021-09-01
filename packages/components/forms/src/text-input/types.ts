import { BaseInputProps } from '../base-input';

export interface TextInputProps
  extends Omit<BaseInputProps, 'as' | 'onCopy' | 'type'> {
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
