import { BaseInputInternalProps } from '../base-input';

export interface TextInputProps extends Omit<BaseInputInternalProps, 'as'> {
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
