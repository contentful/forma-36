import type { CommonProps } from '@contentful/f36-core';
import { IconProps } from '@contentful/f36-icon';
import {
  type FocusEventHandler,
  type ChangeEventHandler,
  type KeyboardEventHandler,
} from 'react';

export interface BaseInputInternalProps extends CommonProps {
  /**
   * Sets the id of the input
   */
  id?: string;
  /**
   * Allows to render input | textarea tag
   */
  as?: 'input' | 'textarea';
  /**
   * Set the value of the input
   */
  value?: string;
  /**
   * Set the name of the input
   */
  name?: string;
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
   * Applies invalid styles
   * @default false
   */
  isInvalid?: boolean;
  /**
   * Validate the input
   * @default false
   */
  isRequired?: boolean;
  /**
   * Boolean property that allows to blur on escape
   * @default true
   */
  willBlurOnEsc?: boolean;
  /**
   * Expects any of the icon components
   */
  icon?: React.ReactElement<IconProps>;
  /**
   * Allows to listen to an input’s change in value
   */
  onChange?: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * Allows to listen to an event when a key is pressed
   */
  onKeyDown?: KeyboardEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * Allows to listen to an event when an element loses focus
   */
  onBlur?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * Allows to listen to an event when an element get focused
   */
  onFocus?: FocusEventHandler<HTMLTextAreaElement | HTMLInputElement>;
  /**
   * Defines which size of the input should be rendered
   * @default medium
   */
  size?: 'small' | 'medium';
  /**
   * Sets whether an element is resizable, and if so, in which directions
   * @default vertical
   */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
}
