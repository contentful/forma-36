import React from 'react';
import ControlledInput, {
  ControlledInputDefaultProps,
  ControlledInputPropTypes,
} from '../ControlledInput/ControlledInput';

const Checkbox = props => <ControlledInput type="checkbox" {...props} />;

Checkbox.propTypes = ControlledInputPropTypes;
Checkbox.defaultProps = {
  ...ControlledInputDefaultProps,
  testId: 'ctf-ui-checkbox',
};

export default Checkbox;
