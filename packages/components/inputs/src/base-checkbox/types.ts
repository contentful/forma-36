import type { BaseInputInternalProps } from '../base-input/types';

export type checkboxTypes = 'checkbox' | 'radio' | 'switch';

type ommitedProps =
  | 'type'
  | 'as'
  | 'placeholder'
  | 'isReadOnly'
  | 'icon'
  | 'isInvalid';

export interface BaseCheckboxProps
  extends Omit<BaseInputInternalProps, ommitedProps> {
  /**
   * Defines the type of the input to be rendered
   * @default checkbox
   */
  type?: checkboxTypes;
  /**
   * Defines if the element is checked
   * @default false
   */
  isChecked?: boolean;
  /**
   * Defines if the element is required
   * @default false
   */
  isRequired?: boolean;
  /**
   * Defines if the state is indeterminate
   * @default false
   */
  isIndeterminate?: boolean;
  /**
   * Additional props that are passed to the input element
   */
  inputProps?: Partial<JSX.IntrinsicElements['input']>;
}
