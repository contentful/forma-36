import React, { FunctionComponent } from 'react';
import ControlledInput, {
  ControlledInputPropTypes,
} from '../ControlledInput/ControlledInput';

export const Checkbox: FunctionComponent<ControlledInputPropTypes> = props => (
  <ControlledInput type="checkbox" {...props} />
);

Checkbox.defaultProps = {
  required: false,
  disabled: false,
  type: 'checkbox',
  testId: 'ctf-ui-checkbox',
};

export default Checkbox;
