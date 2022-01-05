import { BaseInputProps } from '../BaseInput-1';

export interface TextInputProps
  extends Omit<BaseInputProps, 'as' | 'onCopy' | 'resize'> {
  /**
   * Set's default value for text input
   */
  defaultValue?: string;
}
